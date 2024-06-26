import nodemailer from "nodemailer";

type EmailPayload = {
  senderEmail: string
  subject: string
  html: string
}

export async function sendMail(data: EmailPayload) {
  const smtpOptions = {
    host: process.env.NEXT_PUBLIC_SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT || "465"),
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    },
  }

  const transporter = nodemailer.createTransport(smtpOptions);

  const mailOptions = {
    from: data.senderEmail,
    to: process.env.NEXT_PUBLIC_SMTP_USER,
    cc: data.senderEmail,
    subject: data.subject,
    html: data.html,
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error as any);
    } else {
      console.log("Email Sent.");
      return true;
    }
  });
}