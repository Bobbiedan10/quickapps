/* eslint-disable import/no-anonymous-default-export */
import nodemailer from "nodemailer";

export default async (req, res) => {
  res.status(200).json(req.body);
  const { name, business, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_NOREPLY_EMAIL,
      pass: process.env.NEXT_PUBLIC_NOREPLY_PASSWORD,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_NOREPLY_EMAIL,
      to: process.env.NEXT_PUBLIC_SUPPORT_EMAIL,
      subject: subject,
      html: `<div>
                <p>You have been contacted by ${name}.</p>
                <p>Their email address is ${email}</p>
                <p>${business ? `Business name:' ${business}'` : null}</p>
                <p>${message}</p>
            </div>`,
    });

    const emailSender = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_NOREPLY_EMAIL,
      to: email,
      subject: `Re: Contact form submission`,
      html: `<div style="">
                <p>Your contact form submission was received. We will get in touch as soon as possible.</p>
                <br/>
                <br/>
                <p>Regards,</p>
                <p>The QuickApps team.</p>
            </div>`,
    });
  } catch (err) {
    console.log(err);
  }
};
