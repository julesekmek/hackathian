"use client";

import { motion } from "framer-motion";
import { Timer } from "@/components/ui/Timer";
import { content } from "@/config/content";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const { hero, timer } = content;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050505] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FFE99A]/10 rounded-full blur-[120px] mix-blend-screen animate-blob opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#FF5F5F]/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000 opacity-50" />
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* New Waouh Effect: Floating Particles or Subtle Noise */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center scale-[0.80] origin-center transform-gpu">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-[#FFE99A]" />
          <span className="font-display tracking-wide">Édition 2026</span>
        </motion.div>

        {/* Main Title - Even Smaller & Better Font */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] relative"
        >
          {/* Glowing Aura behind text */}
          <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-[#FFE99A]/20 to-[#FF5F5F]/20 blur-3xl opacity-20 rounded-full pointer-events-none" />
          
          {hero.title.start}<br className="hidden md:block" />{" "}
          <span className="bg-gradient-to-r from-[#FFE99A] to-[#FF5F5F] bg-clip-text text-transparent pb-2 inline-block animate-gradient-x">
            {hero.title.gradient}
          </span>
          {hero.title.end && (
            <>
              <br />
              {hero.title.end}
            </>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/60 max-w-xl mb-10 font-light leading-relaxed"
        >
          {hero.subtitle}
        </motion.p>

        {/* CTA Buttons - Moved Up & Smaller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <button className="group px-7 py-3.5 bg-white text-black rounded-full font-bold text-base hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
            {hero.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-7 py-3.5 bg-white/5 text-white border border-white/10 rounded-full font-bold text-base hover:bg-white/10 transition-colors backdrop-blur-sm">
            {hero.secondaryCta}
          </button>
        </motion.div>

        {/* Timer Section - Moved Down */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 scale-90"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/30 mb-6">{timer.label}</p>
          <Timer targetDate={timer.targetDate} />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
      </motion.div>
    </section>
  );
}
