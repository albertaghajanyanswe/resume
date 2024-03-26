
const NEXT_PUBLIC_SENDGRID_API_URL = process.env.NEXT_PUBLIC_SENDGRID_API_URL as string;
const NEXT_PUBLIC_SENDGRID_API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string;

type EmailPayload = {
  senderEmail: string
  subject: string
  html: string
}

const sendEmailFetch = async (data: EmailPayload) => {
    await fetch(NEXT_PUBLIC_SENDGRID_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${NEXT_PUBLIC_SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email: process.env.NEXT_PUBLIC_SMTP_USER
                }
              ],
              from: [
                {
                  email: data.senderEmail
                }
              ],
              subject: data.subject
            }
          ],
          from: {
            email: data.senderEmail,
            name: 'Test SendGrid'
          },
          content: [
            {
              type: 'text/html',
              value: data.html
            }
          ]
        })
    });
}

export { sendEmailFetch };