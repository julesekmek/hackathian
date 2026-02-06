"use client";

import { content } from "@/config/content";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";

export function Requirements() {
  const { requirements } = content;

  return (
    <section className="py-24 relative overflow-hidden bg-[#080808]">
       {/* Ambient Background */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto bg-gradient-to-r from-[#FFE99A]/5 to-[#FF5F5F]/5 blur-3xl opacity-30 pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FFE99A] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-white/70">Bonus Tracks</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              {requirements.title}
            </h2>
             <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
              {requirements.subtitle}
            </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {requirements.list.map((item: { title: string; description: string; mentor: string; role: string; image: string; date: string; time: string; tag: string }, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col"
            >
              {/* Event Card */}
              <div className="relative glass-card rounded-3xl overflow-hidden hover:border-[#FFE99A]/30 transition-all duration-300 h-full flex flex-col">
                {/* Header: Date & Tag */}
                <div className="p-6 pb-2 flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white font-display mb-1">{item.date}</span>
                        <div className="flex items-center gap-2 text-[#FFE99A] font-mono text-sm">
                            <Clock className="w-3 h-3" />
                            <span>{item.time}</span>
                        </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/60">
                        {item.tag}
                    </span>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

                {/* Body */}
                <div className="p-6 pt-2 flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-glow transition-all">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">{item.description}</p>
                    
                    {/* Mentor Mini-Profile */}
                    <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden relative">
                             <img src={item.image} alt={item.mentor} className="w-full h-full object-cover" />
                         </div>
                         <div>
                             <p className="text-sm font-bold text-white">{item.mentor}</p>
                             <p className="text-xs text-white/40">{item.role}</p>
                         </div>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 bg-white/5 border-t border-white/5 flex items-center justify-between group-hover:bg-[#FFE99A] group-hover:text-black transition-colors duration-300 cursor-pointer">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-70 group-hover:opacity-100">M&apos;inscrire au live</span>
                    <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
