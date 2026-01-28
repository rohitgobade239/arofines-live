import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      fullName,
      contact,
      email,
      company,
      subject,
      category,
      message,
      token
    } = body;

    const captchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      console.log("Captcha Failed:", captchaData);
      return NextResponse.json(
        { success: false, message: "Captcha verification failed", error: captchaData },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "sales@arofines.in,info@arofines.in,websupport@arofines.in",
      subject: `New Lead`,
      html: `
        <h4>Talk to an Expert</h4>
        <table border="1" cellpadding="6" cellspacing="0">
          <tr><td><b>Name</b></td><td>${fullName}</td></tr>
          <tr><td><b>Contact</b></td><td>${contact}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Company</b></td><td>${company}</td></tr>
          <tr><td><b>Subject</b></td><td>${subject}</td></tr>
          <tr><td><b>Category</b></td><td>${category}</td></tr>
          <tr><td><b>Message</b></td><td>${message}</td></tr>
          <tr><td><b>URL</b></td><td>https://www.arofines.in/contact</td></tr>
        </table>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email", error },
      { status: 500 }
    );
  }
}
