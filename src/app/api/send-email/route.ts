import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address (your email)
      to: 'info@sapiencecapital.us', // Recipient address
      subject: 'New Loan Application Submission',
      html: `
        <h1>New Loan Application</h1>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Cellphone:</strong> ${formData.cellphone}</p>
        <p><strong>Subject Property Address:</strong> ${formData.propertyAddress}</p>
        <p><strong>Estimated FICO:</strong> ${formData.fico}</p>
        <p><strong>Legal Status:</strong> ${formData.legalStatus}</p>
        <p><strong>Type of Loan:</strong> ${formData.loanType}</p>
        <p><strong>Estimated Rehab Budget:</strong> ${formData.rehabBudget || 'N/A'}</p>
        <p><strong>Properties Experience:</strong> ${formData.experience || 'N/A'}</p>
        <p><strong>Estimated Purchase Price:</strong> ${formData.purchasePrice || 'N/A'}</p>
        <p><strong>Referral Source:</strong> ${formData.referralSource}</p>
        <p><strong>Best Time to Contact:</strong> ${formData.bestTime || 'N/A'}</p>
        <p><strong>Note:</strong> ${formData.note || 'N/A'}</p>
      `,
    };

    // --- Send Email ---
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}