import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Resend } from "resend";

const app = express();

// Allowed origins for CORS (supporting local development, environment URLs, and deployed Vercel frontends)
const cleanOrigin = (url) => (url ? url.trim().replace(/\/+$/, "") : null);

const configuredOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  cleanOrigin(process.env.FRONTEND_URL),
  cleanOrigin(process.env.CLIENT_URL),
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);

      let isAllowed = false;
      try {
        const parsedUrl = new URL(origin);
        const originClean = cleanOrigin(origin);
        isAllowed =
          configuredOrigins.includes(originClean) ||
          /(^|\.)vercel\.app$/.test(parsedUrl.hostname) ||
          parsedUrl.hostname === "ecell-abes.ac.in" ||
          parsedUrl.hostname === "www.ecell-abes.ac.in" ||
          parsedUrl.hostname === "localhost" ||
          parsedUrl.hostname === "127.0.0.1";
      } catch {
        isAllowed = configuredOrigins.includes(cleanOrigin(origin));
      }

      if (isAllowed) {
        callback(null, true);
      } else {
        console.warn(`[CORS] Blocked request from unauthorized origin: ${origin}`);
        callback(null, false);
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(bodyParser.json());

// Safe startup diagnostics
console.log("Starting E-Cell Backend Service...");
console.log("Startup Environment Check:", {
  RESEND_API_KEY_configured: Boolean(process.env.RESEND_API_KEY),
  RESEND_FROM_EMAIL_configured: Boolean(process.env.RESEND_FROM_EMAIL),
  CONTACT_RECEIVER_EMAIL_configured: Boolean(process.env.CONTACT_RECEIVER_EMAIL),
  FRONTEND_URL_configured: Boolean(process.env.FRONTEND_URL),
});

// Helper to get initialized Resend client
const getResendClient = () => {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }
  return new Resend(process.env.RESEND_API_KEY);
};

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// Contact Us form submission endpoint
app.post("/contactus", async (req, res) => {
  console.log("Contact form submission received");
  console.log("Contact email configuration:", {
    hasApiKey: Boolean(process.env.RESEND_API_KEY),
    hasFrom: Boolean(process.env.RESEND_FROM_EMAIL),
    hasReceiver: Boolean(process.env.CONTACT_RECEIVER_EMAIL),
  });

  const { name, email, message } = req.body || {};

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
  const resend = getResendClient();
  if (!resend) {
    console.error("Email service error: RESEND_API_KEY is not configured.");
    return res.status(503).json({
      message: "Email service is temporarily unconfigured on this server. Please try again later.",
    });
  }

  const toEmail = process.env.CONTACT_RECEIVER_EMAIL
    ? process.env.CONTACT_RECEIVER_EMAIL.trim()
    : null;

  if (!toEmail) {
    console.error("Email service error: CONTACT_RECEIVER_EMAIL is not configured.");
    return res.status(503).json({
      message: "Email receiver is not configured on this server. Please try again later.",
    });
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email.trim(),
      subject: `New Contact Us Message from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
    });

    if (error) {
      console.error("Resend delivery failed:", {
        name: error.name || "Error",
        message: error.message || "Unknown error",
        statusCode: error.statusCode || 500,
      });
      return res.status(500).json({
        message: "Failed to dispatch email. Please try again later.",
      });
    }

    console.log("Resend email accepted successfully:", {
      id: data?.id,
    });

    return res.status(200).json({
      message: "Your message has been received! Our team will reach out soon.",
    });
  } catch (err) {
    console.error("Unexpected error during email dispatch:", {
      name: err.name || "Error",
      message: err.message,
      statusCode: err.statusCode || 500,
    });
    return res.status(500).json({
      message: "Failed to dispatch email. Please try again later.",
    });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on 0.0.0.0:${PORT}`);
});