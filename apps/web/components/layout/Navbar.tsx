"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand */}
        <Link 
          href="/" 
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex flex-col items-start leading-none group"
        >
          <span className="font-serif text-2xl font-bold text-stone-800 tracking-tight group-hover:text-amber-900/80 transition-colors">
            Ash Therapy<span className="text-sage-600">.</span>
          </span>
          <span className="text-sm font-medium text-stone-500 tracking-wide mt-0.5">
            & Consultation
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("about")} className="text-stone-600 hover:text-sage-700 font-medium transition-colors cursor-pointer">
            About
          </button>
          <button onClick={() => scrollToSection("services")} className="text-stone-600 hover:text-sage-700 font-medium transition-colors cursor-pointer">
            Services
          </button>
          <button onClick={() => scrollToSection("approach")} className="text-stone-600 hover:text-sage-700 font-medium transition-colors cursor-pointer">
            Approach
          </button>
          <button onClick={() => scrollToSection("logistics")} className="text-stone-600 hover:text-sage-700 font-medium transition-colors cursor-pointer">
            Fees & FAQ
          </button>
        </div>
        
        {/* CTA */}
        <div>
           <Button 
             className="bg-sage-600 text-white font-medium rounded-full px-4 py-2 h-auto shadow-lg hover:bg-sage-700 transition-all text-base cursor-pointer"
             onClick={() => scrollToSection("contact")}
           >
              Get in Touch
           </Button>
        </div>

      </div>
    </nav>
  );
};
