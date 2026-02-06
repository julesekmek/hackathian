"use client";

import { content } from "@/config/content";
import { motion } from "framer-motion";
import { Video, Cuboid, Users, Briefcase, Gift } from "lucide-react";

const icons = [Video, Cuboid, Users, Briefcase, Gift];

export function Features() {
  const { features } = content;

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FFE99A]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {features.title}
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {features.list.map((feature, i) => {
            const Icon = icons[i] || Video;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 rounded-[2rem] glass-card w-full md:w-[calc(33.333%-1rem)] overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFE99A]/10 to-[#FF5F5F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 border border-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <Icon className="w-8 h-8 text-white group-hover:text-[#FFE99A] transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-glow transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
