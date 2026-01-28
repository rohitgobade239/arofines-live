import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const {
      fullName,
      email,
      mobile,
      orgType,
      location,
      message,
      productSelected,
      company,
      url,
      stateName,
      city,
    } = await req.json();
    const product = productSelected.map((i) => i.title).toString();

    const htmlContent = `
    <h4>New Enquiry Received</h4>
       <table border="1" cellpadding="6" cellspacing="0" width="100%">
              <tr>
                <td><b>Full Name</b></td>
                <td>${fullName}</td>
              </tr>
              <tr>
                <td><b>Email</b></td>
                <td>${email}</td>
              </tr>
              <tr>
                <td><b>Mobile</b></td>
                <td>${mobile}</td>
              </tr>
              <tr>
                <td><b>Company</b></td>
                <td>${company}</td>
              </tr>
              <tr>
                <td><b>State</b></td>
                <td>${stateName}</td>
              </tr>
              <tr>
                <td><b>City</b></td>
                <td>${city}</td>
              </tr>
              <tr>
                <td><b>Product</b></td>
                <td>${product}</td>
              </tr>
              <tr>
                <td><b>Message</b></td>
                <td>${message}</td>
              </tr>
              <tr>
                <td><b>URL</b></td>
                <td>${url}</td>
              </tr>
              </table>
  `;
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
      subject: "New Arofine Enquiry Submitted",
      html: htmlContent,
    });
    return Response.json({ success: true, message: "sent successfully" });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
