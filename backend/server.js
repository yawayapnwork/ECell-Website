import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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

  // Verify SMTP credentials presence
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(503).json({
      message: "Email service is temporarily unconfigured on this server. Please contact ecell@abes.ac.in directly.",
    });
  }

  try {
    await transporter.sendMail({
      from: `"${name.trim()}" <${email.trim()}>`,
      replyTo: email.trim(),
      to: process.env.EMAIL_USER,
      subject: `New E-Cell Website Inquiry from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
    });

    return res.status(200).json({ message: "Message received and email sent successfully!" });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to dispatch email. Please reach out to ecell@abes.ac.in directly.",
    });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  // Server is running
});