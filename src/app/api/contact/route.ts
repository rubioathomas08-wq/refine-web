import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, business, phone, email, service, message } = body;

    // Log the submission (hook up to Resend / Nodemailer later)
    console.log("--- New Contact Form Submission ---");
    console.log({ name, business, phone, email, service, message });
    console.log("----------------------------------");

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
