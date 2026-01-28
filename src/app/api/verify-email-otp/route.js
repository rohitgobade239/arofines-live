export async function POST(req) {
  const { email, code } = await req.json();
  if (!email || !code)
    return Response.json({ success: false, error: "Email & OTP required" });

  const record = global.emailOtpStore?.[email];
  if (!record)
    return Response.json({ success: false, valid: false, message: "No OTP found" });

  if (Date.now() > record.expiresAt) {
    delete global.emailOtpStore[email];
    return Response.json({ success: false, valid: false, message: "OTP expired" });
  }

  if (record.otp == code) {
    delete global.emailOtpStore[email];
    return Response.json({ success: true, valid: true, message: "Email verified ✅" });
  }

  return Response.json({ success: false, valid: false, message: "Invalid OTP" });
}
