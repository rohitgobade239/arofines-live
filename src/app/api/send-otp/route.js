import { NextResponse } from "next/server";
import twilio from "twilio";

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

export async function POST(req) {
  try {
    const { phone } = await req.json();

    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SID)
      .verifications.create({
        to: phone,
        channel: "sms", // or "whatsapp"
      });

    return NextResponse.json({
      success: true,
      to: verification.to,
      status: verification.status,
      sid: verification.sid,
    });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
