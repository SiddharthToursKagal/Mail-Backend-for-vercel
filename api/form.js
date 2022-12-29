const express = require("express")
const router = express.Router();
const nodemailer = require("nodemailer");

require('dotenv').config()


router.post("/", (req, res) => {

    "use strict";
    async function main() {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: process.env.nodemailer_email,
                pass: process.env.nodemailer_password,
            },
        });


        let info = await transporter.sendMail({
            to: "siddharthtours09@gmail.com,contact@siddharthtours.in",
            html: `<div style="height: 300px; border: 2px solid black">
             <h3 style="text-align: center; background-color: pink; padding: 4px">
             * New Trip Enquiry Received *
             </h3>
             <div style="margin: 2px; font-weight: 600">
             <p>Contact: <span style="font-weight:500">${req.body.name}</span></p>
             <p>Contact: <span style="font-weight:500">${req.body.contact}</span></p>
             <p>Email: <span style="font-weight:500">${req.body.email}</span></p>
             <p>Requirement Details: <span style="font-weight:500">${req.body.message}</span></p>
             </div>
             </div>`,
            subject: `Received New Enquiry From ${req.body.name}`,

        });
        res.status(200).send("Mail Sent..!")
    }

    main().catch((err) => {
        res.json({ status: 400, message: "some error occured please try again letter.." })
    });
})

module.exports = router;