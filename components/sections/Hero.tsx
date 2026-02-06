"use client";

import { motion } from "framer-motion";
import { Timer } from "@/components/ui/Timer";
import { content } from "@/config/content";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const { hero, timer } = content;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050505] text-white perspective-[2000px]">
      {/* 3D Perspective Grid - KEPT AS REQUESTED */}
      <div className="absolute inset-0 z-0 transform-style-3d rotate-x-[60deg] scale-150 opacity-30 origin-top">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[pulse-glow_4s_infinite]" />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#FFE99A]/10 rounded-full blur-[120px] mix-blend-screen animate-blob opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#FF5F5F]/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000 opacity-40" />
        
        {/* Cinematic Noise */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">


        {/* Badge - Reverted placement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-[#FFE99A]" />
          <span className="font-display tracking-wide">Édition 2026</span>
        </motion.div>

        {/* Main Title - Clean & Standard Layout */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] relative"
        >
          {hero.title.start}<br className="hidden md:block" />{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFE99A] to-[#FF5F5F] text-glow">
            {hero.title.gradient}
          </span>
          {hero.title.end && (
            <>
              <br />
              {hero.title.end}
            </>
          )}
        </motion.h1>

        {/* Subtitle - Reverted placement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/60 max-w-xl mb-8 font-light leading-relaxed"
        >
          {hero.subtitle}
        </motion.p>
        
        {/* Collaboration Badge - Moved & Border Removed */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.3 }}
           className="mb-12 flex flex-wrap justify-center items-center gap-6"
        >
            <span className="text-xs text-white/50 uppercase tracking-widest font-semibold mr-2">En collaboration avec</span>
            
            <div className="flex items-center gap-4 bg-white/5 px-6 py-2 rounded-full border border-white/5 hover:bg-white/10 transition-colors">
                {/* Cardiweb */}
                <img src="/cardiweb-logo.png" alt="Cardiweb" className="h-6 w-auto object-contain brightness-0 invert opacity-90" />
                
                <span className="text-white/20 font-light text-xl">/</span>

                {/* Google Antigravity */}
                <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.52 12.2727C23.52 11.4242 23.4436 10.6061 23.3 9.81818H12V14.4545H18.4527C18.1764 15.9394 17.3345 17.1879 16.0691 18.0364V21.0121H19.9418C22.2055 18.9273 23.52 15.8606 23.52 12.2727Z" fill="#4285F4"/>
                        <path d="M12 24C15.24 24 17.9564 22.9273 19.9473 21.0182L16.0745 18.0424C15 18.7697 13.6255 19.1939 12 19.1939C8.87455 19.1939 6.22909 17.0848 5.28545 14.2485H1.28182V17.3515C3.25091 21.2667 7.30909 24 12 24Z" fill="#34A853"/>
                        <path d="M5.28545 14.2485C5.04545 13.5212 4.90909 12.7455 4.90909 11.9515C4.90909 11.1576 5.04545 10.3818 5.28545 9.65455V6.55152H1.28182C0.463636 8.1697 0 10.0121 0 11.9515C0 13.8909 0.463636 15.7333 1.28182 17.3515L5.28545 14.2485Z" fill="#FBBC05"/>
                        <path d="M12 4.75758C13.7618 4.75758 15.3436 5.36364 16.5873 6.55152L20.0236 3.11515C17.9509 1.18182 15.2345 0 12 0C7.30909 0 3.25091 2.73333 1.28182 6.60606L5.28545 9.70909C6.22909 6.87273 8.87455 4.75758 12 4.75758Z" fill="#EA4335"/>
                    </svg>
                    <span className="font-bold text-white tracking-tight text-sm">Google <span className="text-white/80 font-normal">Antigravity</span></span>
                </div>
            </div>
        </motion.div>

        {/* CTA Buttons - Standard Flex Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <button className="group px-8 py-4 bg-white text-black rounded-full font-bold text-base hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
            {hero.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-base hover:bg-white/10 transition-colors backdrop-blur-sm">
            {hero.secondaryCta}
          </button>
        </motion.div>

        {/* Timer Section - Reverted to bottom placement */}
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


    </section>
  );
}
