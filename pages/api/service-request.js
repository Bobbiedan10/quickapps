/* eslint-disable import/no-anonymous-default-export */
import nodemailer from "nodemailer";

export default async (req, res) => {
  res.status(200).json(req.body);
  const { name, email, service, other_services, budget, own_amount, details } =
    req.body;

  const currentDate = new Date().toLocaleString();
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
      subject: `${name} - Service Request`,
      html: `<div>
                <p>You have been contacted by <b>${name}</b>.</p>
                <p>Their email address is <b>${email}</b></p>
                <p>The service request details are as follows: </p>
                <h4>Service(s) Requested:</h4>
                <p>${service ? service : ""}</p>
                ${
                  other_services != ""
                    ? `<h4>Other service(s) requested: </h4><p>${other_services}</p>`
                    : ""
                }
                <h4>Budget</h4>
                <p>${own_amount == "" ? budget : own_amount}</p>
                <h4>Project Details</h4>
                <p>${details}</p>
                <br/>
                <p>Sent: ${currentDate}</p>
            </div>`,
    });

    const emailSender = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_NOREPLY_EMAIL,
      to: email,
      subject: `Re:Service Request Submission`,
      html: `<div style="">
                  <p>Your Service Request submission was received. We will get in touch as soon as possible.</p>
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
