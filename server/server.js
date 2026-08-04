require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post("/contact", async (req, res) => {

    const {
        name,
        email,
        projectType,
        message
    } = req.body;


    try {

        const info = await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: "happy.trustcore@gmail.com",

            subject: `New Project Request from ${name}`,

            text: `
Name:
${name}

Email:
${email}

Project Type:
${projectType}

Message:
${message}
`
});

console.log("Email sent:", info.messageId);
        


        res.json({
            success: true
        });


    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false
        });

    }

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});