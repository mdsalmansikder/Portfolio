import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createContactMessage } from "@/lib/data-service";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().trim().min(1, "Message is required"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: parsed.error.issues[0]?.message || "Invalid input data",
          errors: parsed.error.format(),
        },
        { status: 400 }
      );
    }

    const saved = await createContactMessage(parsed.data);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out! Your message has been sent successfully. Md. Riyad will get back to you soon.",
        data: { id: saved.id },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again or reach out directly via email.",
      },
      { status: 500 }
    );
  }
}
