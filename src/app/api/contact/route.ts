import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(5, "Message must be at least 5 characters long"),
});

const TARGET_EMAIL = process.env.CONTACT_EMAIL || "mdsalmansikder0@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: parsed.error.issues[0]?.message || "Invalid input data",
        },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    let emailSent = false;

    // 1. If GMAIL_APP_PASSWORD or SMTP is configured in .env, send directly via Nodemailer
    const gmailUser = process.env.GMAIL_USER || TARGET_EMAIL;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (gmailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact - ${name}" <${gmailUser}>`,
          to: TARGET_EMAIL,
          replyTo: email,
          subject: `🔔 [Portfolio Message] ${subject} - from ${name}`,
          text: `You received a new direct message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nSent via RIYAD.DEV Portfolio`,
          html: `
            <div style="font-family: Arial, sans-serif; background-color: #0c1427; padding: 24px; color: #f1f5f9; border-radius: 12px; max-width: 600px; margin: auto;">
              <h2 style="color: #38bdf8; border-bottom: 2px solid #1e293b; padding-bottom: 12px; margin-top: 0;">
                📩 New Direct Portfolio Message
              </h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8; width: 120px;"><strong>Sender Name:</strong></td>
                  <td style="padding: 8px 0; color: #ffffff;"><strong>${name}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8;"><strong>Email Address:</strong></td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: underline;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8;"><strong>Phone:</strong></td>
                  <td style="padding: 8px 0; color: #ffffff;">${phone || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8;"><strong>Subject:</strong></td>
                  <td style="padding: 8px 0; color: #ffffff;">${subject}</td>
                </tr>
              </table>
              <div style="background-color: #101c36; border-left: 4px solid #0066ff; padding: 16px; border-radius: 8px; margin-top: 10px;">
                <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; font-family: monospace;">Message Body:</p>
                <p style="margin: 0; color: #ffffff; white-space: pre-wrap; font-size: 15px; line-height: 1.6;">${message}</p>
              </div>
              <p style="margin-top: 24px; font-size: 12px; color: #64748b; text-align: center;">
                Click "Reply" to respond directly to ${email}. Delivered by RIYAD.DEV
              </p>
            </div>
          `,
        });

        emailSent = true;
        console.log("Email dispatched directly via Nodemailer.");
      } catch (nodemailerError) {
        console.error("Nodemailer dispatch failed, falling back to FormSubmit:", nodemailerError);
      }
    }

    // 2. If Nodemailer wasn't used or failed, forward via FormSubmit with explicit message fields
    if (!emailSent) {
      try {
        const payload = {
          "Sender Name": name,
          "Sender Email": email,
          "Phone Number": phone || "Not provided",
          "Subject": subject,
          "Message": message,
          "Message Content": message,
          _subject: `New Portfolio Message from ${name}: ${subject}`,
          _replyto: email,
          _template: "box",
          _captcha: "false",
        };

        const forwardRes = await fetch(
          `https://formsubmit.co/ajax/${TARGET_EMAIL}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Referer: req.headers.get("referer") || "https://riyad.dev/",
              Origin: req.headers.get("origin") || "https://riyad.dev",
            },
            body: JSON.stringify(payload),
          }
        );

        const forwardData = await forwardRes.json().catch(() => null);
        console.log("FormSubmit dispatch response:", forwardData);
      } catch (forwardError) {
        console.error("Error forwarding email to recipient:", forwardError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your message and details have been sent successfully to Md. Riyad. I will reply soon.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to send message. Please try again or email directly to mdsalmansikder0@gmail.com",
      },
      { status: 500 }
    );
  }
}
