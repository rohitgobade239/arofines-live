import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email)
      return Response.json({ success: false, error: "Email is required" });

    const otp = Math.floor(100000 + Math.random() * 900000);
    global.emailOtpStore = global.emailOtpStore || {};
    global.emailOtpStore[email] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Your OTP Code",
      html: `<p>Your OTP code is <b>${otp}</b>. It will expire in 5 minutes.</p>`,
    });

    return Response.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending email OTP:", error);
    return Response.json({ success: false, error: error.message });
  }
}
