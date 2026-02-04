import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, school, phone, message } = body;

    // Validate required fields
    if (!name || !email || !school || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Haven <onboarding@resend.dev>', // This is the verified sender from Resend
      to: [process.env.CONTACT_EMAIL || 'hello@safehaven.dev'], // Replace with your actual email
      replyTo: email,
      subject: `New inquiry from ${name} at ${school}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>School:</strong> ${school}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ''}
        <hr />
        <p style="color: #666; font-size: 12px;">Sent from safehaven.dev contact form</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
