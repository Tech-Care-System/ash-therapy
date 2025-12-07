"use client";

import { FadeIn } from "@ash-therapy/ui";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sage-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-stone-100 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side - Order 1 on mobile to establish connection */}
          <div className="relative order-1 lg:order-1">
             <FadeIn delay={0.2} direction="right">
                <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0">
                   {/* Organic Frame - visual trick using border radius */}
                   <div className="absolute inset-0 bg-sage-200/50 rounded-[3rem] rotate-3 scale-105 z-0" />
                   <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-xl z-10">
                      <Image
                        src="/images/about/about-ash-v2.png"
                        alt="Portrait of Ash, Therapist"
                        fill
                        className="object-cover"
                      />
                   </div>
                   
                   {/* Floating quote/badge */}
                   <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-8 rounded-[2rem] shadow-xl z-20 max-w-[220px]">
                      <p className="font-serif italic text-stone-700 text-lg leading-snug">"Healing begins when we feel heard."</p>
                   </div>
                </div>
             </FadeIn>
          </div>

          {/* Text Side - Order 2 */}
          <div className="order-2 lg:order-2 space-y-8">
             <FadeIn delay={0.3} direction="up">
                <span className="text-sage-600 font-bold uppercase tracking-widest text-sm">About Me</span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl text-stone-800 leading-[1.15]">
                   Walking Beside You <br/>
                   <span className="text-sage-600 italic">on Your Path</span>
                </h2>
             </FadeIn>

             <FadeIn delay={0.4} direction="up">
                <div className="prose prose-lg text-stone-600 space-y-6">
                   <p>
                      Life has its challenges, and there were times in my own journey when I longed for someone who could really hear me. That experience shapes the gentle, grounded way I hold space for others now.
                   </p>
                   <p>
                      I am a registered member of the BACP and hold an MSc in Integrative Counselling. My approach is warm, gentle, and trauma-informed—blending person-centered care with practical tools to help you find your footing.
                   </p>
                </div>
             </FadeIn>

             <FadeIn delay={0.5} direction="up">
                <div className="pt-6">
                   {/* Signature-like element */}
                   <p className="font-serif text-3xl text-stone-800 italic opacity-80 select-none">Ash Sach</p>
                   <p className="text-sm text-stone-500 mt-2 uppercase tracking-wide">MSc, MBACP</p>
                </div>
             </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
