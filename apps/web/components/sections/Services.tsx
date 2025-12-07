"use client";

import { FadeIn } from "@ash-therapy/ui";
import { Card, CardBody } from "@heroui/react";
import {
  Brain,
  CloudRain,
  Feather,
  Heart,
  Leaf,
  LifeBuoy,
  MessageCircle,
  Mountain,
  Shield,
  Smile,
  Sun,
  Users,
} from "lucide-react";
import { SERVICES } from "../../data/services";

const ICONS = [
  Brain,
  CloudRain,
  Shield,
  Feather,
  LifeBuoy,
  Leaf,
  Heart,
  Users,
  Smile,
  Mountain,
  Sun,
  MessageCircle,
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-stone-50 section-padding relative overflow-hidden py-24 md:py-32"
      style={{
        backgroundImage: 'url("/images/pattern.png")',
        backgroundRepeat: 'repeat',
        backgroundSize: '400px',
      }}
    >
      {/* Background Overlay to soften the pattern */}
      <div className="absolute inset-0 bg-stone-50/90 pointer-events-none" />

      {/* Decorative Light Leaks */}
      <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-sage-100/30 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-stone-100/60 rounded-full blur-[80px] translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-sage-600 font-bold uppercase tracking-widest text-sm block mb-4">Areas of Focus</span>
            <h2 className="font-serif text-stone-800 mb-6 text-4xl md:text-5xl leading-tight">
              Support for Your <span className="italic text-sage-600">Unique Journey</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              I offer a safe, non-judgmental space to explore a wide range of difficulties, helping you find clarity and healing at your own pace.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <FadeIn key={index} delay={index * 0.05}>
                <Card
                  className="group relative overflow-hidden h-full bg-white/40 border border-white/60 backdrop-blur-md hover:bg-white/60 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-sage-100/50 rounded-3xl"
                >
                   {/* Inner Glow Effect */}
                   <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                   
                   <CardBody className="p-8 flex flex-col items-center text-center justify-center h-full relative overflow-hidden">
                     <div className="relative z-10 flex flex-col items-center">
                       <div className="bg-white text-sage-600 mb-6 rounded-2xl p-4 shadow-sm border border-sage-50 group-hover:scale-110 transition-transform duration-500">
                         <Icon className="h-8 w-8 stroke-[1.25px]" />
                       </div>
                       <h3 className="text-stone-800 text-xl font-serif mb-2 group-hover:text-sage-900 transition-colors">
                         {service.title}
                       </h3>
                     </div>
                   </CardBody>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
