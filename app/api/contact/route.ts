import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    const msg = {
      to: 'kodomo893@gmail.com', // 受信用メールアドレス
      from: 'info@clownpit.com', // SendGridで認証済みのメールアドレス
      subject: `Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company}
Message: ${message}
      `,
      html: `
<strong>Name:</strong> ${name}<br>
<strong>Email:</strong> ${email}<br>
<strong>Company:</strong> ${company}<br>
<strong>Message:</strong><br>
${message.replace(/\n/g, '<br>')}
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 