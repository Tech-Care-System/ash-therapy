"use client";

import { FadeIn } from "@ash-therapy/ui";
import { Button } from "@heroui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-50">
      
      {/* Background Gradients - Organic & Soft */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sage-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-80" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sage-200/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">
        
        {/* Text Content - Centered */}
        <div className="space-y-8 max-w-3xl">
          <FadeIn delay={0.2} direction="up">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-stone-800 leading-[1.1] tracking-tight">
              A Safe Space <br/>
              <span className="italic text-stone-600">for Your Journey</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <p className="font-sans text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
              Integrative therapy and counselling to help you find balance, heal from within, and reconnect with your true self.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <div className="flex justify-center">
               <Button
                 size="lg"
                 className="bg-sage-600 text-white font-medium px-8 py-4 h-auto text-lg rounded-full hover:bg-sage-700 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-sage-200/50"
                 onPress={() => {
                   const contactSection = document.getElementById("contact");
                   if (contactSection) {
                     contactSection.scrollIntoView({ behavior: "smooth" });
                   }
                 }}
               >
                 Arrange a Consultation
               </Button>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
