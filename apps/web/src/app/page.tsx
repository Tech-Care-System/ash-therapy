import { About } from "../../components/sections/About";
import { Approach } from "../../components/sections/Approach";
import { Contact } from "../../components/sections/Contact";
import { FAQ } from "../../components/sections/FAQ";
import { Hero } from "../../components/sections/Hero";
import { Logistics } from "../../components/sections/Logistics";
import { Services } from "../../components/sections/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-primary-900 selection:bg-secondary-200">
      <Hero />
      <About />
      <Services />
      <Approach />
      <Logistics />
      <FAQ />
      <Contact />
    </main>
  );
}
