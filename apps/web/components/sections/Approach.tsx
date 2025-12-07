"use client";

import { FadeIn } from "@ash-therapy/ui";
import { APPROACH_CONTENT } from "../../data/approach";

export function Approach() {
  return (
    <section id="approach" className="bg-sage-50/50 section-padding py-24 md:py-32 relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none select-none">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current text-sage-900">
            <path d="M43.6,-74.6C56.3,-68.8,66.4,-57.6,74.7,-45.3C82.9,-33.1,89.3,-19.7,88.7,-6.6C88.1,6.5,80.5,19.3,71.7,31.1C62.9,42.8,52.8,53.5,41.4,61.9C30,70.3,17.3,76.4,3.7,70C-9.9,63.6,-24.4,44.7,-37.8,29.9C-51.2,15.1,-63.5,4.4,-65.7,-7.8C-67.9,-20,-60,-33.7,-49.6,-43.3C-39.2,-52.9,-26.3,-58.4,-13.4,-60.7C-0.5,-63,25,-62.1,30.9,-80.4L43.6,-74.6Z" transform="translate(100 100)" />
         </svg>
      </div>

      <div className="container-width relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <span className="text-sage-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
            <h2 className="font-serif text-stone-800 mb-8 text-4xl md:text-5xl leading-tight">
              {APPROACH_CONTENT.title}
            </h2>
            
            {/* Decorative Separator */}
            <div className="flex justify-center mb-12">
               <svg width="100" height="20" viewBox="0 0 100 20" className="text-sage-400 stroke-current fill-none" strokeWidth="1.5">
                  <path d="M0 10 Q 25 20 50 10 T 100 10" />
               </svg>
            </div>
          </FadeIn>

          <div className="prose prose-lg prose-stone mx-auto text-stone-600 leading-relaxed columns-1 md:columns-2 gap-12 text-left md:text-justify max-w-none">
            {APPROACH_CONTENT.paragraphs.map((paragraph, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <p className="mb-6 break-inside-avoid-column">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
