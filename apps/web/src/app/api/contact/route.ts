
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
          to: [process.env.CONTACT_RECIPIENT_EMAIL || "ashsach25@outlook.com"], // Destination email from env
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
            <div style="font-family: 'Playfair Display', serif; background-color: #fbfaf8; padding: 40px; color: #18291d;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                <div style="background-color: #5f8a6b; padding: 32px 40px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">Ash Therapy & Counselling</h1>
                </div>
                
                <div style="padding: 40px;">
                  <h2 style="margin-top: 0; color: #18291d; font-family: 'Inter', sans-serif; font-size: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 12px; margin-bottom: 24px;">New Contact Request</h2>
                  
                  <table style="width: 100%; border-collapse: separate; border-spacing: 0 12px;">
                    <tr>
                      <td style="width: 100px; font-family: 'Inter', sans-serif; font-weight: 600; color: #5f8a6b; vertical-align: top;">Name</td>
                      <td style="font-family: 'Inter', sans-serif; color: #18291d;">${validatedData.name}</td>
                    </tr>
                    <tr>
                      <td style="width: 100px; font-family: 'Inter', sans-serif; font-weight: 600; color: #5f8a6b; vertical-align: top;">Email</td>
                      <td style="font-family: 'Inter', sans-serif; color: #18291d;"><a href="mailto:${validatedData.email}" style="color: #18291d; text-decoration: underline;">${validatedData.email}</a></td>
                    </tr>
                    <tr>
                      <td style="width: 100px; font-family: 'Inter', sans-serif; font-weight: 600; color: #5f8a6b; vertical-align: top;">Phone</td>
                      <td style="font-family: 'Inter', sans-serif; color: #18291d;">${validatedData.phone || "Not provided"}</td>
                    </tr>
                  </table>

                  <div style="margin-top: 32px;">
                    <p style="font-family: 'Inter', sans-serif; font-weight: 600; color: #5f8a6b; margin-bottom: 8px;">Message</p>
                    <div style="background-color: #fbfaf8; padding: 20px; border-radius: 8px; font-family: 'Inter', sans-serif; line-height: 1.6; color: #44403c; white-space: pre-wrap;">${validatedData.message}</div>
                  </div>
                </div>

                <div style="background-color: #f0f0f0; padding: 20px; text-align: center; font-family: 'Inter', sans-serif; font-size: 12px; color: #666666;">
                  <p style="margin: 0;">Sent from Ash Therapy Website</p>
                </div>
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
        console.log("To:", process.env.CONTACT_RECIPIENT_EMAIL || "ashsach25@outlook.com");
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
