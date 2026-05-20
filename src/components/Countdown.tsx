import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const TARGET = new Date("2026-06-26T18:30:00+05:30").getTime();

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

export function Countdown() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items: [string, number][] = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds],
  ];

  return (
    <section className="relative px-6 py-16">
      <SectionTitle
        eyebrow="Counting Down"
        title="Until We Say Forever"
        subtitle="June 26, 2026 · Umaid Bhawan Palace, Jodhpur"
      />

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-4 gap-2 sm:gap-6">
        {items.map(([label, val], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card flex flex-col items-center justify-center rounded-[1.5rem] p-3 sm:p-8 text-center"
          >
            <div className="relative overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={val}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="gold-shimmer block font-serif text-3xl font-light leading-none text-foreground sm:text-[5rem] md:text-[6.5rem]"
                >
                  {String(val).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="mt-4 font-sans text-sm uppercase tracking-[0.35em] text-gold/80 sm:text-base">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
