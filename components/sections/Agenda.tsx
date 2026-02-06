"use client";

import { content } from "@/config/content";
import { motion } from "framer-motion";

export function Agenda() {
  const { agenda } = content;

  return (

    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-[10%] top-[20%] w-[500px] h-[500px] bg-[#FFE99A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            {agenda.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FF5F5F] to-transparent mx-auto opacity-50" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-0 relative">
          {/* Continuous Vertical Line */}
          <div className="absolute left-[9px] md:left-[149px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-white/0 via-white/10 to-white/0" />

          {agenda.schedule.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex group relative py-8"
            >
              {/* Time Column */}
              <div className="hidden md:block w-32 font-mono text-xl text-white/50 text-right pr-12 pt-1 group-hover:text-[#FFE99A] transition-colors relative">
                {item.time}
                {/* Connector Dot */}
                 <div className="absolute right-[-7px] top-3 w-4 h-4 rounded-full border-2 border-[#0a0a0a] bg-white/20 group-hover:bg-[#FF5F5F] group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] z-10" />
              </div>

              {/* Mobile Time & Content Container */}
              <div className="flex-1 pl-8 md:pl-16 relative">
                 {/* Mobile Connector Dot & Line */}
                 <div className="md:hidden absolute left-[2px] top-2 w-4 h-4 rounded-full border-2 border-[#0a0a0a] bg-white/20 group-hover:bg-[#FF5F5F] z-10" />
                 <div className="md:hidden block mb-2 font-mono text-[#FFE99A] text-sm">
                    {item.time}
                 </div>

                <div className="glass-card p-6 rounded-2xl group-hover:border-white/20 transition-all">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-glow transition-all">
                    {item.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    {item.description}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
