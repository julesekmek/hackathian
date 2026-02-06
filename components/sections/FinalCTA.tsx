"use client";

import { content } from "@/config/content";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  const { finalCta } = content;

  return (
    <section className="py-40 relative overflow-hidden bg-black flex items-center justify-center text-center">
       {/* Warp Speed Background */}
       <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          
          {/* Stars */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
             {[...Array(20)].map((_, i) => (
                <div 
                   key={i}
                   className="absolute bg-white rounded-full opacity-0 animate-[float_3s_infinite]"
                   style={{
                      width: ((i % 3) + 1) + 'px',
                      height: ((i % 3) + 1) + 'px',
                      top: ((i * 17) % 100) + '%',
                      left: ((i * 23) % 100) + '%',
                      animationDelay: (i % 5) + 's',
                      animationDuration: ((i % 3) + 2) + 's'
                   }}
                />
             ))}
          </div>
       </div>
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
             <h2 className="font-display text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter mix-blend-difference">
            {finalCta.title}
            </h2>
        </motion.div>
        
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="text-2xl text-white/60 mb-12 font-light max-w-2xl mx-auto"
        >
          {finalCta.subtitle}
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:bg-[#FFE99A] transition-colors inline-flex items-center gap-3 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-500" />
          {finalCta.cta}
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
