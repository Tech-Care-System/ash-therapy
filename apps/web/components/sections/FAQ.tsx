"use client";

import { FadeIn } from "@ash-therapy/ui";
import { Accordion, AccordionItem } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { faq } from "../../data/faq";

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-24 md:py-32 bg-white text-stone-800">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-sage-50 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
           <div className="max-w-3xl mx-auto">
             <div className="text-center mb-16">
               <span className="text-sage-600 font-bold uppercase tracking-widest text-sm block mb-4">Common Questions</span>
               <h2 className="text-4xl md:text-5xl font-serif text-stone-800">
                 Frequently Asked Questions
               </h2>
             </div>
             
             <Accordion className="space-y-4">
               {faq.map((item, index) => (
                 <AccordionItem 
                   key={index} 
                   title={item.question}
                   indicator={<ChevronDown />}
                   classNames={{
                     base: "group border border-stone-100 rounded-3xl px-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 data-[open=true]:shadow-md data-[open=true]:border-sage-200",
                     title: "flex-1 mr-4 font-serif text-xl group-data-[open=true]:text-sage-700 transition-colors",
                     trigger: "flex w-full items-center justify-between py-6 text-lg text-stone-800 font-medium text-left outline-none cursor-pointer group-data-[focus-visible=true]:ring-2 ring-sage-300 rounded-lg",
                     indicator: "bg-sage-50 p-2 rounded-full group-hover:bg-sage-100 transition-colors text-sage-500",
                     content: "text-stone-600 pb-8 pt-2 leading-relaxed font-sans text-lg"
                   }}
                 >
                   {item.answer}
                 </AccordionItem>
               ))}
             </Accordion>
           </div>
        </FadeIn>
      </div>
    </section>
  );
}