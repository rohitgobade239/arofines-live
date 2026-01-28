export async function POST(req) {
  try {
    const { captchaValue } = await req.json();

    const secret = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

    const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${captchaValue}`;

    const res = await fetch(verifyURL, { method: "POST" });
    const data = await res.json();

    if (data.success) {
      return Response.json({ success: true });
    } else {
      return Response.json({ success: false }, { status: 400 });
    }
  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
