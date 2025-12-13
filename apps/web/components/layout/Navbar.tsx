"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "approach", label: "Approach" },
  { id: "logistics", label: "Fees & FAQ" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section using Intersection Observer
  useEffect(() => {
    const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px", // Trigger when section is in upper portion of viewport
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
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
              setActiveSection("");
            }
          }}
          className="flex flex-col items-start leading-none group"
        >
          <span className="font-serif text-2xl font-bold text-stone-800 tracking-tight group-hover:text-sage-800/80 transition-colors">
            Ash Therapy & Counselling
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium transition-colors cursor-pointer relative ${
                activeSection === item.id
                  ? "text-sage-700"
                  : "text-stone-600 hover:text-sage-700"
              }`}
            >
              {item.label}
              {/* Active indicator */}
              <span
                className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-sage-600 rounded-full transition-all duration-300 ${
                  activeSection === item.id ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              />
            </button>
          ))}
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
