import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Resend } from "resend";

const app = express();

// Allowed origins for CORS (supporting local development, environment URLs, and deployed Vercel frontends)
const configuredOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  process.env.FRONTEND_URL,
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);

      let isAllowed = false;
      try {
        const parsedUrl = new URL(origin);
        isAllowed =
          configuredOrigins.includes(origin) ||
          /(^|\.)vercel\.app$/.test(parsedUrl.hostname) ||
          parsedUrl.hostname === "ecell-abes.ac.in" ||
          parsedUrl.hostname === "www.ecell-abes.ac.in";
      } catch {
        isAllowed = configuredOrigins.includes(origin);
      }

      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(bodyParser.json());

// Initialize Resend SDK using environment variable
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// Contact Us form submission endpoint
app.post("/contactus", async (req, res) => {
  const { name, email, message } = req.body;

  // Server-side validation
  if (!name || typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ message: "Name is required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
    return res.status(400).json({ message: "A valid email address is required." });
  }

  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ message: "Message cannot be empty." });
  }

  // Verify Resend configuration presence
  if (!process.env.RESEND_API_KEY || !resend) {
    console.error("Email service error: RESEND_API_KEY is not configured.");
    return res.status(503).json({
      message: "Email service is temporarily unconfigured on this server. Please contact ecell@abes.ac.in directly.",
    });
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const toEmail = process.env.CONTACT_RECEIVER_EMAIL || "ecell@abes.ac.in";

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email.trim(),
      subject: `New Contact Us Message from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
    });

    if (error) {
      console.error("Resend error response:", error.message || error);
      return res.status(500).json({
        message: "Failed to dispatch email. Please reach out to ecell@abes.ac.in directly.",
      });
    }

    return res.status(200).json({
      message: "Your message has been received! Our team will reach out soon.",
    });
  } catch (err) {
    console.error("Unexpected error dispatching email via Resend:", err.message || err);
    return res.status(500).json({
      message: "Failed to dispatch email. Please reach out to ecell@abes.ac.in directly.",
    });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on 0.0.0.0:${PORT}`);
});