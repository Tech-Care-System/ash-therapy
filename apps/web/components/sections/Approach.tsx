"use client";

import { FadeIn } from "@ash-therapy/ui";
import { HeartHandshake, Lightbulb, Sprout } from "lucide-react";
import { APPROACH_CONTENT } from "../../data/approach";

const iconMap = {
  Sprout: Sprout,
  Lightbulb: Lightbulb,
  HeartHandshake: HeartHandshake,
};

export function Approach() {
  return (
    <section id="approach" className="bg-sage-50/50 py-24 md:py-32 relative overflow-hidden">
      
      {/* Background Watermark/Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto pointer-events-none select-none opacity-20">
         <svg className="w-full h-full text-sage-200" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M0,200 C300,100 700,300 1000,200" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
         </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <FadeIn>
            <span className="text-sage-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
            <h2 className="font-serif text-stone-800 mb-6 text-4xl md:text-5xl leading-tight">
              {APPROACH_CONTENT.title}
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
          {APPROACH_CONTENT.steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="relative group text-center">
                  
                  {/* Icon Circle */}
                  <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-lg shadow-sage-100/50 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-10 h-10 text-sage-600" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-2xl text-stone-800 mb-4">{step.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Footer text */}
        <FadeIn delay={0.6}>
          <p className="text-center text-stone-600 text-lg mt-16 max-w-3xl mx-auto">
            {APPROACH_CONTENT.footer}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
