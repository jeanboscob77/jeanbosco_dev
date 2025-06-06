import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  const resend = new Resend(process.env.API_KEY);

  // resend.emails.send({
  //   from: "onboarding@resend.dev",
  //   to: "bjeanbosco48@gmail.com",
  //   subject: "Hello World",
  //   html: `<p>Congrats on sending your <strong>${}</strong>!</p>`,
  // });

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "bjeanbosco48@gmail.com", // or test with Gmail
    replyTo: email,
    subject: "📩 New Contact Form Submission",
    html: `
  <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
    <h2 style="color: #007bff;">📩 New Contact Form Submission</h2>

    <p><strong>Submitted At:</strong> ${new Date().toLocaleString("en-GB", {
      timeZone: "Africa/Kigali",
      dateStyle: "full",
      timeStyle: "short",
    })}</p>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>

    <p><strong>Message:</strong></p>
    <div style="padding: 12px; background-color: #f4f4f4; border-left: 4px solid #007bff;">
      ${message.replace(/\n/g, "<br>")}
    </div>

    <p style="margin-top: 20px;">
      <a href="mailto:${email}" style="display: inline-block; background-color: #007bff; color: white; padding: 10px 15px; text-decoration: none; border-radius: 4px;">
        Reply to ${name}
      </a>
    </p>

    <hr style="margin: 30px 0;">
    <p style="font-size: 0.85em; color: #888;">This message was sent from your website's contact form.</p>
  </div>
`,
  });

  try {
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
