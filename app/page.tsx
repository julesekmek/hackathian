import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Agenda } from "@/components/sections/Agenda";
import { Mentors } from "@/components/sections/Mentors";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Features />
      <Agenda />
      <Mentors />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
