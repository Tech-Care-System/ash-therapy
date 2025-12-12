"use client";

import { FadeIn } from "@ash-therapy/ui";
import { Button } from "@heroui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-stone-50">
      
      {/* Background Gradients - Organic & Soft */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sage-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-80" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sage-200/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-8 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          <FadeIn delay={0.2} direction="up">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-stone-800 leading-[1.1] tracking-tight">
              A Safe Space <br/>
              <span className="italic text-stone-600">for Your Journey</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <p className="font-sans text-xl text-stone-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Integrative therapy and counselling to help you find balance, heal from within, and reconnect with your true self.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                 Book Consultation
               </Button>
            </div>
          </FadeIn>
        </div>

        {/* Hero Image / Visual */}
        <div className="relative h-[500px] lg:h-[700px] w-full hidden lg:block">
           <FadeIn delay={0.5} className="h-full w-full">
             <div className="relative h-full w-full">
                {/* Main rounded image */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-[3rem] overflow-hidden shadow-2xl shadow-stone-200/50 z-10">
                   <div className="absolute inset-0 bg-stone-200 animate-pulse" /> {/* Placeholder color while loading */}
                   <Image
                     src="/images/hero/hero-sage-v2.png"
                     alt="Calm, sunlit therapy calming office space"
                     fill
                     className="object-cover"
                     priority
                   />
                </div>
                
                {/* Decorative floating element */}
                {/* Decorative floating element removed based on user feedback */}
             </div>
           </FadeIn>
        </div>

      </div>
    </section>
  );
};
