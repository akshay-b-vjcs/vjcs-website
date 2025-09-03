import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const {
    name,
    email,
    message,
    token,
    companyName,
    companyNumber,
    city,
    natureOfService,
  } = await req.json();

  console.log("API hit:");
  console.log("SMTP_USER:", process.env.SMTP_USER);
  console.log("SMTP_PASS exists:", !!process.env.SMTP_PASS);

  if (
    !name ||
    !email ||
    !message ||
    !companyName ||
    !companyNumber ||
    !city ||
    !natureOfService
  ) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  // 2. Verify reCAPTCHA
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const captchaVerifyUrl = "https://www.google.com/recaptcha/api/siteverify";

  try {
    const captchaRes = await fetch(captchaVerifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    });

    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return NextResponse.json(
        { message: "CAPTCHA verification failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("CAPTCHA verification error:", error);
    return NextResponse.json(
      { message: "Failed to verify CAPTCHA" },
      { status: 500 }
    );
  }

  // 3. Send email
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // use TLS with port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // send to your inbox

      html: `
 <table border="1" cellspacing="0" cellpadding="8" >
  <tr>
    <td>Name</td>
    <td>${name}(${email})</td>
  </tr>
  <tr>
    <td><strong>Company Name:</strong></td>
    <td>${companyName}</td>
  </tr>
  <tr>
    <td><strong>Company Number:</strong></td>
    <td>${companyNumber}</td>
  </tr>
  <tr>
    <td><strong>City:</strong></td>
    <td>${city}</td>
  </tr>
  <tr>
    <td><strong>Nature of Service:</strong></td>
    <td>
      ${
        Array.isArray(natureOfService)
          ? natureOfService.join(", ")
          : natureOfService
      }
    </td>
  </tr>
  <tr>
    <td><strong>Message:</strong></td>
    <td>${message}</td>
  </tr>
</table>

`,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Email error:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Failed to send email", error: error.message },
        { status: 500 }
      );
    }
  }
}
