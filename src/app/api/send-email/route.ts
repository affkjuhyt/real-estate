import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@sapiencecapital.us',
      subject: 'New Loan Application Submission',
      html: `
        <h1>New Loan Application</h1>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Loan Amount:</strong> ${formData.loanAmount}</p>
        <p><strong>Current Working:</strong> ${formData.currentWorking}</p>
        <p><strong>Type of Loan:</strong> ${formData.loanType}</p>
        <p><strong>Property Address:</strong> ${formData.propertyAddress}</p>
        <p><strong>Note:</strong> ${formData.note || 'N/A'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully', redirect: '/' }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error sending email', error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}