import { NextResponse } from "next/server";
import twilio from "twilio";

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

export async function POST(req) {
  try {
    const { phone, code } = await req.json();

    const verification_check = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SID)
      .verificationChecks.create({
        to: phone,
        code,
      });

    return NextResponse.json({
      success: true,
      status: verification_check.status,
      valid: verification_check.status === "approved",
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
