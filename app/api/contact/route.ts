import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // 自分のGmailアドレスに送信
      subject: `${name} からお問い合わせがありました`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company}
Message: ${message}
      `,
      html: `
<strong>お名前:</strong> ${name}<br>
<strong>メールアドレス:</strong> ${email}<br>
<strong>会社名:</strong> ${company}<br>
<strong>メッセージ:</strong><br>
${message.replace(/\n/g, '<br>')}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 