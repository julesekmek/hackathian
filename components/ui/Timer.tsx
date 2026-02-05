"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Timer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) return null;

  return (
    <div className="flex gap-4 md:gap-8 justify-center my-8 font-mono text-white/90">
      <TimeUnit value={timeLeft.days} label="Jours" />
      <TimeUnit value={timeLeft.hours} label="Heures" />
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <TimeUnit value={timeLeft.seconds} label="Sec" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative overflow-hidden w-16 h-16 md:w-24 md:h-24 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center">
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="text-2xl md:text-4xl font-bold bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </div>
      <span className="text-xs md:text-sm mt-2 text-white/40 uppercase tracking-widest">{label}</span>
    </div>
  );
}
