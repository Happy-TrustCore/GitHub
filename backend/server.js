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

app.post("/api/test", async (req, res) => {
  try {
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "happytrustcore@gmail.com",
      subject: "Test email from Happy TrustCore",
      html: "<h1>Resend works!</h1>",
    });

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});