'use server'

const nodemailer = require('nodemailer');

async function sendMail(name: string, email: string, message: string) {

    console.log("Sending email...")
    console.log("name:", name)
    console.log("email:", email)
    console.log("message:", message)

    console.log("GMAIL_USER:", process.env.GMAIL_USER)
    console.log("GMAIL_PASSWORD:", process.env.GMAIL_PASSWORD)


    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `[sebastianbryers.com] New message from ${name}`,
        text: `Name: ${name} | Email: ${email} | Message: ${message}`,
        html: `<div>
            <h1>New message!</h1>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Message:</b> ${message}</p>
        </div>`
    };

    return await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err: any, response: any) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });

}

export { sendMail }