import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendEmail = () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 25,
    logger: true,
    debug: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD_EMAIL,
    },
  });
  const mailOptions = {
    from: "info@mailtrap.club",
    to: option.email,
    subject: option.subject,
    text: option.message,
  };
  transporter.sendMail(mailOptions);
};
