"use client";

import { FadeIn } from "@ash-therapy/ui";
import { Button, Card, CardBody, Input, Textarea } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setIsSuccess(true);
      reset();
    } catch (err) {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative overflow-hidden py-24 md:py-32 bg-stone-50 text-stone-800"
    >
        {/* Background Overlay */}
       <div className="absolute inset-0 bg-stone-50/90 pointer-events-none" />
       
       {/* Background Decor */}
       <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-sage-100/40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sage-600 font-bold uppercase tracking-widest text-sm block mb-4">Get in touch</span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-800">
                Start Your Journey
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column: Info */}
              <div className="space-y-8 lg:pr-8">
                 <div className="prose prose-stone prose-lg">
                    <p className="text-stone-600 leading-relaxed text-lg">
                        You are welcome to use this space in whatever way feels most comfortable. Whether that is asking a question, exploring what you are looking for, or simply getting a feel for what working together might be like.
                    </p>
                    <p className="text-stone-600 leading-relaxed text-lg">
                        There is no pressure or expectation. This is just a gentle first step toward support.
                    </p>
                 </div>

                 <div className="bg-white/60 p-8 rounded-3xl border border-white/50 shadow-sm">
                    <h3 className="text-xl font-serif text-stone-800 mb-4">Direct Contact</h3>
                    <a 
                      href="mailto:ashsach25@outlook.com" 
                      className="flex items-center gap-3 text-sage-700 hover:text-sage-900 transition-colors text-lg font-medium group"
                    >
                       <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 group-hover:scale-110 transition-transform">
                          <Mail className="w-5 h-5" />
                       </div>
                       ashsach25@outlook.com
                    </a>
                 </div>
              </div>

              {/* Right Column: Form */}
              <Card className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl shadow-sage-100/20 rounded-3xl overflow-hidden">
                <CardBody className="p-8 md:p-10">
                  {isSuccess ? (
                    <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                        <div className="w-16 h-16 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center mb-4">
                            <Send className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-serif text-stone-800">Message Sent</h3>
                        <p className="text-stone-600 max-w-sm">
                          Thank you for reaching out. I will get back to you as soon as I can.
                        </p>
                        <Button
                          variant="ghost"
                          className="mt-4 text-sage-700 font-medium"
                          onPress={() => setIsSuccess(false)}
                        >
                          Send another message
                        </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <Input
                        isInvalid={!!errors.name}
                        errorMessage={errors.name?.message}
                        label="Name"
                        placeholder="Your name"
                        classNames={{
                          inputWrapper: "bg-white border border-stone-200 hover:border-sage-300 focus-within:border-sage-500 shadow-none rounded-xl",
                          input: "px-4 py-2.5 w-full text-base",
                          label: "text-stone-500 text-sm font-medium mb-1.5",
                          errorMessage: "text-red-500 text-xs mt-1 ml-1"
                        }}
                        {...register("name")}
                      />
                      
                      <Input
                        isInvalid={!!errors.email}
                        errorMessage={errors.email?.message}
                        label="Email"
                        placeholder="your@email.com"
                        type="email"
                        classNames={{
                          inputWrapper: "bg-white border border-stone-200 hover:border-sage-300 focus-within:border-sage-500 shadow-none rounded-xl",
                          input: "px-4 py-2.5 w-full text-base",
                          label: "text-stone-500 text-sm font-medium mb-1.5",
                          errorMessage: "text-red-500 text-xs mt-1 ml-1"
                        }}
                        {...register("email")}
                      />

                      <Input
                        label="Phone (Optional)"
                        placeholder="Your phone number"
                        type="tel"
                        classNames={{
                          inputWrapper: "bg-white border border-stone-200 hover:border-sage-300 focus-within:border-sage-500 shadow-none rounded-xl",
                          input: "px-4 py-2.5 w-full text-base",
                          label: "text-stone-500 text-sm font-medium mb-1.5",
                        }}
                        {...register("phone")}
                      />

                      <Textarea
                        isInvalid={!!errors.message}
                        errorMessage={errors.message?.message}
                        label="Message"
                        placeholder="How can I help you?"
                        classNames={{
                          inputWrapper: "bg-white border border-stone-200 hover:border-sage-300 focus-within:border-sage-500 shadow-none rounded-xl",
                          input: "px-4 py-3 w-full text-base min-h-[120px]",
                          label: "text-stone-500 text-sm font-medium mb-1.5",
                          errorMessage: "text-red-500 text-xs mt-1 ml-1"
                        }}
                        {...register("message")}
                      />

                      {error && (
                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                          {error}
                        </div>
                      )}

                      <Button
                        type="submit"
                        isDisabled={isSubmitting}
                        className="w-full bg-sage-600 hover:bg-sage-700 text-white font-medium h-12 text-lg rounded-xl shadow-lg shadow-sage-200/50"
                      >
                         {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardBody>
              </Card>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}