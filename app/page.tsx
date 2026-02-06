import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Requirements } from "@/components/sections/Requirements";
import { Agenda } from "@/components/sections/Agenda";
import { Prizes } from "@/components/sections/Prizes";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Features />
      <Requirements />
      <Agenda />
      <Prizes />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
