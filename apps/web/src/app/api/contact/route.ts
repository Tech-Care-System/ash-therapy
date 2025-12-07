
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate
    const validatedData = formSchema.parse(body);

    // Check for environment variables
    const hasSmtp = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

    if (hasSmtp) {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, 
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.SMTP_FROM || '"Ash Therapy Website" <no-reply@ashtherapy.com>',
            replyTo: validatedData.email,
            to: process.env.CONTACT_EMAIL || "ashsach25@outlook.com",
            subject: `New Contact Request: ${validatedData.name}`,
            text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Phone: ${validatedData.phone || "Not provided"}

Message:
${validatedData.message}
            `,
            html: `
              <h3>New Contact Request</h3>
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Phone:</strong> ${validatedData.phone || "Not provided"}</p>
              <br/>
              <p><strong>Message:</strong></p>
              <p>${validatedData.message.replace(/\n/g, '<br/>')}</p>
            `,
        });
        console.log("Email sent successfully via SMTP.");
    } else {
        // Log to console for dev/demo purposes if no SMTP
        console.log("----------------------------------------");
        console.log("MOCK EMAIL SEND (No SMTP Configured)");
        console.log("To:", "ashsach25@outlook.com");
        console.log("From:", validatedData.email);
        console.log("Message:", validatedData);
        console.log("----------------------------------------");
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact API Error:", error);
    if (error instanceof z.ZodError) {
        return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
