import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, description } = await req.json();

    if (!name || !email || !company || !description) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // Handle missing key gracefully
    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: "RESEND_API_KEY is not configured in the application environment.",
          requiresConfig: true,
        },
        { status: 200 } // Return 200 with flag to show a helpful message in the UI helper
      );
    }

    const resend = new Resend(apiKey);

    const emailContent = `
      <h2>New Consultation Booking</h2>
      <p><strong>Full Name:</strong> ${name}</p>
      <p><strong>Work Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Project Description:</strong></p>
      <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 8px;">${description}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: "LA Builds Consultation <onboarding@resend.dev>",
      to: "labuilds@proton.me",
      subject: `New Consultation Form Submission from ${name}`,
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send the email via Resend API." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Error in contact API route:", err);
    return NextResponse.json(
      { error: err.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
