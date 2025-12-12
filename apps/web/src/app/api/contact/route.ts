
import { NextResponse } from "next/server";
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

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);

        const { data, error } = await resend.emails.send({
          from: "Ash Therapy <onboarding@resend.dev>", // Start with the testing domain
          to: ["ashsach25@outlook.com"], // Your destination email
          replyTo: validatedData.email,
          subject: `New Contact Request: ${validatedData.name}`,
          text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Phone: ${validatedData.phone || "Not provided"}

Message:
${validatedData.message}
          `,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4a5c54;">New Contact Request</h2>
              <div style="background-color: #f7f7f5; padding: 20px; border-radius: 8px;">
                <p><strong>Name:</strong> ${validatedData.name}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Phone:</strong> ${validatedData.phone || "Not provided"}</p>
              </div>
              <div style="margin-top: 20px;">
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap; color: #44403c;">${validatedData.message}</p>
              </div>
            </div>
          `,
        });

        if (error) {
          console.error("Resend Error:", error);
          throw new Error("Failed to send email via Resend");
        }
        
        console.log("Email sent successfully via Resend:", data?.id);
    } else {
        // Log to console for dev/demo purposes if no API Key
        console.log("----------------------------------------");
        console.log("MOCK EMAIL SEND (No RESEND_API_KEY Configured)");
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
