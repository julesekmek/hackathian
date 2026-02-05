"use client";

import { content } from "@/config/content";
import { motion } from "framer-motion";
import { Zap, Users, Trophy } from "lucide-react";

const icons = [Zap, Users, Trophy];

export function Features() {
  const { features } = content;

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            {features.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.list.map((feature, i) => {
            const Icon = icons[i] || Zap;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFE99A]/5 to-[#FF5F5F]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
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
