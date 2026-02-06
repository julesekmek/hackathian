"use client";

import { content } from "@/config/content";
import { motion } from "framer-motion";
import { Sparkles, Trophy, Rocket, Building2, CreditCard } from "lucide-react";

export function Prizes() {
  const { prizes } = content;
  const { mainPrize } = prizes;

  return (
    <section className="py-32 relative overflow-hidden bg-black">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFE99A]/10 rounded-full blur-[150px] animate-pulse" />
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative max-w-5xl mx-auto"
        >
            {/* The "Golden" Card */}
            <div className="relative group">
                {/* Glowing Border Gradient */}
                <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-[#FFE99A] via-[#FF5F5F] to-[#FFE99A] opacity-50 group-hover:opacity-100 blur-lg transition duration-500 animate-gradient-xy" />
                
                <div className="relative rounded-[38px] bg-[#0A0A0A] overflow-hidden border border-white/10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12">
                     {/* Visual Side */}
                    <div className="w-full md:w-1/2 relative min-h-[300px] flex items-center justify-center">
                         {/* Floating Trophy/Object */}
                         <div className="absolute inset-0 bg-gradient-to-tr from-[#FFE99A]/20 to-transparent rounded-full blur-3xl" />
                         <motion.div 
                            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 w-full h-full flex items-center justify-center"
                         >
                            {/* Abstract 'Trophy' Representation using Glassmorphism */}
                            <div className="relative w-64 h-80 glass-card rounded-2xl border-white/20 flex flex-col items-center justify-center shadow-[0_0_100px_-20px_rgba(255,233,154,0.3)]">
                                <Trophy className="w-32 h-32 text-[#FFE99A] drop-shadow-[0_0_15px_rgba(255,233,154,0.5)] mb-4" strokeWidth={1} />
                                <div className="text-4xl font-bold text-white font-display tracking-widest">{mainPrize.value}</div>
                                <div className="text-xs text-[#FFE99A] uppercase tracking-[0.2em] mt-2">Financement</div>
                            </div>
                         </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 text-left">
                         <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFE99A]/30 bg-[#FFE99A]/10">
                            <Sparkles className="w-4 h-4 text-[#FFE99A]" />
                            <span className="text-xs font-bold text-[#FFE99A] uppercase tracking-wider">Grand Prix</span>
                         </div>
                         
                         <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            {mainPrize.title}
                         </h2>
                         
                         <p className="text-xl text-white/70 mb-8 font-light leading-relaxed">
                            {mainPrize.description}
                         </p>

                         {/* Perks Grid */}
                         <div className="grid grid-cols-2 gap-4">
                             {mainPrize.perks.map((perk: string, i: number) => (
                                 <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                     <div className="p-2 rounded-lg bg-[#FFE99A]/10 text-[#FFE99A]">
                                        {i === 0 && <Building2 className="w-4 h-4" />}
                                        {i === 1 && <Rocket className="w-4 h-4" />}
                                        {i === 2 && <CreditCard className="w-4 h-4" />}
                                        {i > 2 && <Sparkles className="w-4 h-4" />}
                                     </div>
                                     <span className="text-sm font-medium text-white/90">{perk}</span>
                                 </div>
                             ))}
                         </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
