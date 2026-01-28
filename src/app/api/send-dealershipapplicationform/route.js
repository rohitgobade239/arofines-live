import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // ✅ Parse body
    const {
      fullName,
      email,
      designation,
      companyName,
      mobileNumber,
      orgType,
      businessFullName,
      businessMobileNumber,
      businessCompanyName,
      companyEstablishedYear,
      warehouseAddress,
      officePremises,
      hasWarehouse,
      companyTurnover,
      existingDealerCompanies,
      fieldSalesStaff,
      promotionRegions,
      topAdhesiveCompany,
      productCategory,
      referenceName,
      referenceMobile,
      referenceEmail,
      hearAbout,
      token, // ✅ reCAPTCHA token from frontend
    } = await req.json();

    // ✅ VERIFY reCAPTCHA
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
      return NextResponse.json(
        { success: false, message: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // ✅ Email template
    const htmlContent = `
      <h4>Collaborate</h4>
      <table border="1" cellpadding="6" cellspacing="0">
        <tr><td>Full Name</td><td>${fullName}</td></tr>
        <tr><td>Email</td><td>${email}</td></tr>
        <tr><td>Designation</td><td>${designation}</td></tr>
        <tr><td>Company</td><td>${companyName}</td></tr>
        <tr><td>Mobile</td><td>${mobileNumber}</td></tr>
        <tr><td>Organization Type</td><td>${orgType}</td></tr>
        <tr><td>Business Company</td><td>${businessCompanyName}</td></tr>
        <tr><td>Established Year</td><td>${companyEstablishedYear}</td></tr>
        <tr><td>Warehouse Address</td><td>${warehouseAddress}</td></tr>
        <tr><td>Office Premises</td><td>${officePremises}</td></tr>
        <tr><td>Has Warehouse</td><td>${hasWarehouse}</td></tr>
        <tr><td>Turnover</td><td>${companyTurnover}</td></tr>
        <tr><td>Existing Dealers</td><td>${existingDealerCompanies}</td></tr>
        <tr><td>Sales Staff</td><td>${fieldSalesStaff}</td></tr>
        <tr><td>Promotion Regions</td><td>${promotionRegions}</td></tr>
        <tr><td>Top Brand</td><td>${topAdhesiveCompany}</td></tr>
        <tr><td>Products</td><td>${productCategory}</td></tr>
        <tr><td>Reference</td><td>${referenceName}</td></tr>
        <tr><td>Reference Mobile</td><td>${referenceMobile}</td></tr>
        <tr><td>Reference Email</td><td>${referenceEmail}</td></tr>
        <tr><td>How did you hear about us</td><td>${hearAbout}</td></tr>
        <tr><td>URL</td><td>https://www.arofines.in/collaborate</td></tr>
      </table>`;

    // ✅ Mail config
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "sales@arofines.in,info@arofines.in,websupport@arofines.in",
      subject: "New Dealership Application",
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
