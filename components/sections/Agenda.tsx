"use client";

import { content } from "@/config/content";
import { motion } from "framer-motion";

export function Agenda() {
  const { agenda } = content;

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            {agenda.title}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {agenda.schedule.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex group"
            >
              {/* Time Column */}
              <div className="w-24 font-mono text-white/40 pt-1 text-right pr-6 group-hover:text-[#FFE99A] transition-colors">
                {item.time}
              </div>

              {/* Connector */}
              <div className="relative flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-gradient-to-r from-[#FFE99A] to-[#FF5F5F] transition-colors" />
                {i !== agenda.schedule.length - 1 && (
                  <div className="w-px h-full bg-white/10 my-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pl-8 pb-8">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
