"use client";

import { FadeIn } from "@ash-therapy/ui";
import { Card, CardBody } from "@heroui/react";
import { logistics } from "../../data/logistics";

export function Logistics() {
  return (
    <section 
      id="logistics" 
      className="relative overflow-hidden py-24 md:py-32 bg-sage-50 text-stone-800"
      style={{
        backgroundImage: 'url("/images/pattern.png")',
        backgroundRepeat: 'repeat',
        backgroundSize: '400px',
      }}
    >
       {/* Background Overlay */}
      <div className="absolute inset-0 bg-sage-50/95 pointer-events-none" />
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sage-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
               <span className="text-sage-600 font-bold uppercase tracking-widest text-sm block mb-4">Practical details</span>
               <h2 className="text-4xl md:text-5xl font-serif text-stone-800">
                 Fees & Availability
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Fees Card */}
              <Card className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-lg shadow-sage-100/20 hover:shadow-xl hover:bg-white/80 transition-all duration-500 hover:-translate-y-1 group rounded-3xl">
                <CardBody className="p-10">
                  <h3 className="text-2xl font-serif text-stone-800 mb-6 group-hover:text-sage-700 transition-colors">Fees</h3>
                  <div className="mb-6">
                     <span className="text-xl text-stone-700 font-medium bg-stone-100 px-4 py-2 rounded-full">
                        {logistics.fees.price} / {logistics.fees.duration}
                     </span>
                  </div>
                  <p className="text-stone-600 leading-relaxed mb-6 text-lg">
                    {logistics.fees.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-sage-600 font-medium bg-sage-50 py-3 px-4 rounded-2xl w-fit">
                     <span className="w-2 h-2 rounded-full bg-sage-500" />
                     Payment via bank transfer
                  </div>
                </CardBody>
              </Card>

              {/* Availability Card */}
              <Card className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-lg shadow-sage-100/20 hover:shadow-xl hover:bg-white/80 transition-all duration-500 hover:-translate-y-1 group rounded-3xl">
                 <CardBody className="p-10">
                  <h3 className="text-2xl font-serif text-stone-800 mb-6 group-hover:text-sage-700 transition-colors">Availability</h3>
                  <p className="text-stone-600 leading-relaxed mb-8 text-lg">
                    {logistics.availability.description}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-stone-700">
                      <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-sage-600">
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
                      </div>
                      <span className="font-medium">{logistics.availability.frequency}</span>
                    </div>
                    <div className="flex items-center gap-3 text-stone-700">
                      <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-sage-600">
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>
                      </div>
                      <span className="font-medium">{logistics.availability.commitment}</span>
                    </div>
                  </div>
                 </CardBody>
              </Card>
            </div>

            {/* Additional Info Grid - Cancellation & Online */}
            <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-sage-200/60">
               <div className="space-y-4">
                  <h4 className="font-serif text-xl text-stone-800">Online Therapy</h4>
                  <p className="text-stone-600 leading-relaxed">{logistics.onlineTherapy.description}</p>
               </div>
               <div className="space-y-4">
                  <h4 className="font-serif text-xl text-stone-800">Cancellation Policy</h4>
                  <p className="text-stone-600 leading-relaxed">{logistics.cancellation.policy}</p>
                  <p className="text-sm font-medium text-amber-700 bg-amber-50 px-3 py-1 rounded-lg w-fit border border-amber-100">{logistics.cancellation.notice} notice required</p>
               </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
