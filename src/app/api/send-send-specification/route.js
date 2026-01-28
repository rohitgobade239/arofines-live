import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      productName,
      developmentType,
      productDescription,
      endApplication,
      viscosity,
      viscosityB4,
      ph,
      solids,
      regulatory,
      certifications,
      Performance,
      applicationMethod,
      endUser,
      substrate,
      applicationClimate,
      serviceClimate,
      positioning,
      competitors,
      volume,
      benchmark,
      date,
      token, // ✅ FROM FRONTEND
    } = body;

    // ✅ VERIFY CAPTCHA FIRST
    const captchaVerify = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const captchaData = await captchaVerify.json();

    if (!captchaData.success) {
      return Response.json(
        { success: false, message: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // ✅ SEND EMAIL ONLY IF CAPTCHA PASSES
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlTemplate = `
     <h4>Product Development</h4>
      <table border="1" cellpadding="6" cellspacing="0">
      <tr><td>Product Name</td><td>${productName}</td></tr>
      <tr><td>Development Type</td><td>${developmentType}</td></tr>
      <tr><td>Description</td><td>${productDescription}</td></tr>
      <tr><td>End Application</td><td>${endApplication}</td></tr>
      <tr><td>Viscosity</td><td>${viscosity}</td></tr>
      <tr><td>Viscosity B4</td><td>${viscosityB4}</td></tr>
      <tr><td>pH</td><td>${ph}</td></tr>
      <tr><td>Solids</td><td>${solids}</td></tr>
      <tr><td>Regulatory</td><td>${regulatory}</td></tr>
      <tr><td>Certifications</td><td>${certifications}</td></tr>
      <tr><td>Performance</td><td>${Performance}</td></tr>
      <tr><td>Method</td><td>${applicationMethod}</td></tr>
      <tr><td>End User</td><td>${endUser}</td></tr>
      <tr><td>Substrate</td><td>${substrate}</td></tr>
      <tr><td>Application Climate</td><td>${applicationClimate}</td></tr>
      <tr><td>Service Climate</td><td>${serviceClimate}</td></tr>
      <tr><td>Positioning</td><td>${positioning}</td></tr>
      <tr><td>Competitors</td><td>${competitors}</td></tr>
      <tr><td>Volume</td><td>${volume}</td></tr>
      <tr><td>Benchmark Price</td><td>${benchmark}</td></tr>
      <tr><td>Date</td><td>${date}</td></tr>
      <tr><td>URL</td><td>https://www.arofines.in/forms/productdevelopmentform</td></tr>
      </table>`;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "sales@arofines.in,info@arofines.in,websupport@arofines.in",
      subject: "New Product Specification Submission",
      html: htmlTemplate,
    });

    return Response.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email Error:", error);
    return Response.json(
      { success: false, error: "Email sending failed" },
      { status: 500 }
    );
  }
}
