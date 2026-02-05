"use client";

import { content } from "@/config/content";
import { motion } from "framer-motion";

export function Mentors() {
  const { mentors } = content;

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-white mb-16 text-center"
        >
          {mentors.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {mentors.list.map((mentor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FFE99A]/20 to-[#FF5F5F]/20 flex items-center justify-center mb-4">
                 <span className="text-2xl">👩‍💻</span>
              </div>
              <h3 className="font-bold text-lg text-white mb-1">{mentor.name}</h3>
              <p className="text-sm text-[#FF5F5F]">{mentor.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
