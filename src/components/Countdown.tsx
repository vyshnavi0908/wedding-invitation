import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { translations } from "@/lib/translations";

const TARGET = new Date("2026-07-03T01:51:00+05:30").getTime();

function diff() {
  const d = TARGET - Date.now();
  const clamp = Math.max(0, d);
  return {
    days: Math.floor(clamp / 86400000),
    hours: Math.floor((clamp / 3600000) % 24),
    minutes: Math.floor((clamp / 60000) % 60),
    seconds: Math.floor((clamp / 1000) % 60),
  };
}

export function Countdown({ lang = "en" }: { lang?: "en" | "te" }) {
  const [timeLeft, setTimeLeft] = useState(diff());
  const t = translations[lang];

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items: [string, number][] = [
    [t.daysLabel, timeLeft.days],
    [t.hoursLabel, timeLeft.hours],
    [t.minutesLabel, timeLeft.minutes],
    [t.secondsLabel, timeLeft.seconds],
  ];

  return (
    <section id="countdown" className="relative px-6 py-16">
      <SectionTitle
        eyebrow={t.countdown}
        title={t.untilWeSayForever}
        subtitle={t.countdownSubtitle}
      />

      <div className="mx-auto mt-16 grid max-w-md grid-cols-2 gap-3 sm:max-w-5xl sm:grid-cols-4 sm:gap-6">
        {items.map(([label, val], i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass-card group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-gold/15 px-4 py-6 text-center transition-all duration-500 sm:px-6 sm:py-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#fdf9ee]/70 via-transparent to-[#efe7cc]/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative h-12 min-[360px]:h-16 min-[400px]:h-20 sm:h-28 md:h-32 flex items-center justify-center overflow-hidden w-full">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={val}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="royal-gradient block font-serif text-4xl min-[360px]:text-5xl min-[400px]:text-6xl sm:text-[5rem] md:text-[6.5rem] font-bold leading-none text-foreground drop-shadow-[0_2px_4px_rgba(74,14,20,0.12)]"
                >
                  {String(val).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="mt-3 font-sans text-sm uppercase tracking-[0.22em] text-[#9d7931] sm:mt-4 sm:text-base sm:tracking-[0.28em] font-bold">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
