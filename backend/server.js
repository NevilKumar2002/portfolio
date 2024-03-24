const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Configure nodemailer
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "gurramnevilkumar@gmail.com",
        pass: "rxzq uqxy aunx gdym"
    }
});

// Handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, number, message } = req.body;
    console.log(name, email, number, message);

    const mailOptions = {
        from: email,
        to: 'gurramnevilkumar@gmail.com', 
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email. Please try again later.');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully.');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

