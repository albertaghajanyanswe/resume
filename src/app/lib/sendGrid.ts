import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);
const NEXT_PUBLIC_SENDGRID_API_URL = process.env.NEXT_PUBLIC_SENDGRID_API_URL;

type EmailPayload = {
  senderEmail: string
  subject: string
  html: string
}

async function sendGridEmail(data: EmailPayload) {
  try {
    await sendgrid.send({
      to: process.env.NEXT_PUBLIC_SMTP_USER as string, // Your email where you'll receive emails
      from: process.env.NEXT_PUBLIC_SMTP_USER as string, // Single Sender Verified Email Address (find here https://app.sendgrid.com/settings/sender_auth)
      subject: data.subject,
      html: data.html,
    });
  } catch(err) {
    console.log('\n\n err = ', JSON.stringify(err, null, 2))
  }

}

export default sendGridEmail;