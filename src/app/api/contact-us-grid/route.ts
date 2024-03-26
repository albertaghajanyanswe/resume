import { NextRequest, NextResponse } from "next/server";
import emailValidator from 'email-validator';
import sendGridEmail from "@/app/lib/sendGrid";

async function main(body: BodyType) {
  try {
    const template = `
      <div>
        <h3>Received an email from ${body.name}</h3>
        <div>
          <br />
          <h3>Sender contacts</h3>
          <h4 style="margin: 8px 0 0 16px;">Full name: ${body.name}</h4>
          <h4 style="margin: 8px 0 0 16px;">Email address: ${body.senderEmail}</h4>
          <h4 style="margin: 8px 0 0 16px;">Phone number : ${body.phone}</h4>
        </div>
        <br />
        <div>
          <h3 style="margin:0">Message</h3>
          <h3 style="margin: 8px 0 0 16px;font-style: italic; font-weight: 400;">${body.text}</h3>
        <div>
      </div>
      `;

    await sendGridEmail({
      senderEmail: body.senderEmail || '',
      subject: body.subject || `New message from: ${body.senderEmail}`,
      html: template
    });
    return NextResponse.json({ success: true, error: '' }, { status: 200 })

  } catch (err: any) {
    return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 400 })
  }
};

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    if (!emailValidator.validate(body.senderEmail)) {
      return NextResponse.json({ success: false, error: 'Wrong email, please write correct email' }, { status: 400 })
    }
    return await main(body);
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Something went wrong.' }, { status: 400 })
  }
};


type BodyType = {
  name: string;
  phone: string;
  subject: string;
  senderEmail: string,
  text: string,
  description: string,
}
