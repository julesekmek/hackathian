"use client";

import { content } from "@/config/content";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  const { finalCta } = content;

  return (
    <section className="py-32 relative overflow-hidden bg-black flex items-center justify-center text-center">
       <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#FFE99A]/20 to-[#FF5F5F]/20 rounded-full blur-[100px] opacity-50" />
      </div>
      
      <div className="container px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
        >
          {finalCta.title}
        </motion.h2>
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-xl text-white/60 mb-10"
        >
          {finalCta.subtitle}
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
        >
          {finalCta.cta}
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}
