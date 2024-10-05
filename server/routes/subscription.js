const express = require('express');
const router = express.Router();
const Subscription = require('../models/subscription');
// const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
    const { email } = req.body;

    try {
        const sub = await Subscription.findOne({email:email});
        if(sub) {
            return res.status(200).json({ message: 'Email already subscribed' });
        }
        const newSubscription = new Subscription({ email });
        await newSubscription.save();

        // Send confirmation email
        // const transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: process.env.EMAIL_USER,
        //         pass: process.env.EMAIL_PASS,
        //     },
        // });

        // const mailOptions = {
        //     from: process.env.EMAIL_USER,
        //     to: email,
        //     subject: "Welcome to Assets Roster",
        //     html: `
        //         <!DOCTYPE html>
        //         <html lang="en">
        //         <head>
        //             <meta charset="UTF-8">
        //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //             <title>Welcome to Assets Roster</title>
        //             <style>
        //                 body {
        //                     font-family: Arial, sans-serif;
        //                     margin: 0;
        //                     padding: 0;
        //                     background-color: #f4f4f4;
        //                 }
        //                 .container {
        //                     width: 100%;
        //                     border-spacing: 0;
        //                     padding: 20px;
        //                 }
        //                 .email-content {
        //                     max-width: 600px;
        //                     margin: auto;
        //                     background: #ffffff;
        //                     border-radius: 8px;
        //                     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        //                 }
        //                 .header {
        //                     padding: 20px;
        //                     text-align: center;
        //                     background: #ffd720;
        //                     border-radius: 8px 8px 0 0;
        //                 }
        //                 .header img {
        //                     max-width: 200px;
        //                 }
        //                 .body {
        //                     padding: 20px;
        //                     text-align: center;
        //                 }
        //                 .body h1 {
        //                     color: #333333;
        //                 }
        //                 .body p {
        //                     color: #666666;
        //                     line-height: 1.5;
        //                 }
        //                 .footer {
        //                     padding: 20px;
        //                     text-align: center;
        //                     background: #f4f4f4;
        //                     border-radius: 0 0 8px 8px;
        //                     font-size: 12px;
        //                     color: #999999;
        //                 }
        //                 .btn {
        //                     display: inline-block;
        //                     padding: 10px 20px;
        //                     background: #ffd720;
        //                     color: #fff;
        //                     text-decoration: none;
        //                     border-radius: 5px;
        //                     margin-top: 20px;
        //                 }
        //             </style>
        //         </head>
        //         <body>
        //             <div class="container">
        //                 <div class="email-content">
        //                     <div class="header">
        //                         <img src="https://res.cloudinary.com/dib0peewu/image/upload/v1721653645/Frame_19_w10jqu.png" width="100px" alt="Roster Logo">
        //                     </div>
        //                     <div class="body">
        //                         <h1>Welcome to Assets Roster!</h1>
        //                         <p>Thank you for subscribing to our newsletter! We are excited to have you on board.</p>
        //                         <p>At Assets Roster, we strive to provide you with the latest news, updates, and exclusive offers. Stay tuned for exciting content coming your way!</p>
        //                         <a href="http://www.assetsroster.com" class="btn">Visit Our Website</a>
        //                     </div>
        //                     <div class="footer">
        //                         <p>&copy; 2024 Assets Roster. All rights reserved.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </body>
        //         </html>
        //     `
        // };

        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         return console.log(error);
        //     }
        //     // console.log('Email sent: ' + info.response);
        // });

        res.status(201).json({ message: 'Subscription successful!' });
    } catch (error) {
        res.status(500).json({ message: 'Error subscribing', error });
    }
});


module.exports = router;