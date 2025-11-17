// app/api/send/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Define the expected shape of the incoming JSON data
interface FormData {
  name: string;
  email: string;
  message: string;
}

// 1. Initialize Resend using the environment variable
// Next.js automatically looks for RESEND_API_KEY in .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the recipient details (change these to your actual addresses)
const RECIPIENT_EMAIL = "omhlezuma29@gmail.com";
const SENDER_EMAIL = "onboarding@resend.dev"; // Must be a verified email

export async function POST(request: Request) {
  try {
    // 2. Safely parse the JSON body and assert its type
    const { name, email, message }: FormData = await request.json();

    // 3. Send the email via Resend
    const { data, error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject: `Portfolio Inquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { message: "Failed to send email.", error },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      { message: "Email sent successfully!", data },
      { status: 200 }
    );
  } catch (error) {
    // Catch errors during parsing or network issues
    console.error("Server Error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred on the server." },
      { status: 500 }
    );
  }
}
