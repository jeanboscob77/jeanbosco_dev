import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  let accessToken;
  try {
    const tokenResponse = await oAuth2Client.getAccessToken();
    accessToken = tokenResponse?.token;
  } catch (err) {
    console.error("Failed to get access token:", err);
    return NextResponse.json({ error: "OAuth failed" }, { status: 401 });
  }
  // Setup the email transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "bjeanbosco48@gmail.com",
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  } as nodemailer.TransportOptions);

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: "📩 New Contact Form Submission",
    html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
      <h2 style="color: #007bff;">You've received a new message!</h2>
      <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #007bff; margin-top: 10px;">
        ${message.replace(/\n/g, "<br>")}
        <p>
        <a href="mailto:${email}" style="display:inline-block;background:#007bff;color:#fff;padding:10px 15px;text-decoration:none;border-radius:5px;margin-top:15px;">
  Reply to ${name}
</a>

        </p>
      </div>
      <hr style="margin-top: 20px;">
      <p style="font-size: 0.9em; color: #999;">This message was sent from your website contact form.</p>
    </div>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
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
