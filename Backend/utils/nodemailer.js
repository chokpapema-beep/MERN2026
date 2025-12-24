import nodemailer from "nodemailer";
import { SMTP_EMAIL, SMTP_PASS } from "../Config/env.js";

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASS, //App password banayera halni
  },
  tls: {
  rejectUnauthorized: false,
}
});

export const sendMail = async ({ email, subject, html }) => {
  console.log(SMTP_EMAIL, SMTP_PASS)
  // Parameter email receives value ram@gmail.com
  const result = await transporter.sendMail({
    from: "pema <chokpapema@gmail.com>",
    to:email,
    subject: subject,
    html: html,
  });
};
