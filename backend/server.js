const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, projectType, message } = req.body;

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "happytrustcore.github@gmail.com",
      subject: `New Project Request from ${name}`,
      html: `
        <h2>New Project Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (result.error) {
      return res.status(400).json({
        success: false,
        error: result.error.message,
      });
    }

    res.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});