import { motion } from "framer-motion";
import { Particles } from "./Particles";


export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-20"
      
    >
      
      <Particles count={50} />

      {/* Slow rotating geometric ornament */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-slow-spin opacity-20">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="280" stroke="oklch(0.82 0.14 85)" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="220" stroke="oklch(0.82 0.14 85)" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="160" stroke="oklch(0.82 0.14 85)" strokeWidth="0.5" strokeDasharray="2 6" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="300"
              y1="20"
              x2="300"
              y2="80"
              stroke="oklch(0.82 0.14 85)"
              strokeWidth="0.6"
              transform={`rotate(${i * 30} 300 300)`}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="h-full w-full text-gold">
            <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M50 14 L58 50 L50 86 L42 50 Z" fill="none" stroke="currentColor" strokeWidth="0.6" />
            <path d="M14 50 L50 42 L86 50 L50 58 Z" fill="none" stroke="currentColor" strokeWidth="0.6" />
            <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.6" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-sans text-[10px] uppercase tracking-[0.5em] text-gold/80"
        >
          A Week of Wedding Celebrations
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-sans text-xs uppercase tracking-[0.5em] text-gold/80"
        >
          Save the Date · 26 . 06 . 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.9 }}
          className="mt-8 font-serif text-5xl font-light leading-[1.05] sm:text-7xl md:text-8xl"
        >
          <span className="gold-shimmer block">Vijay</span>
          <span className="my-2 block font-script text-4xl text-gold-soft sm:text-5xl">&</span>
          <span className="gold-shimmer block">Rashmika</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.4 }}
          className="gold-divider mx-auto my-8 w-48"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="mx-auto max-w-md font-serif text-base italic leading-relaxed text-muted-foreground sm:text-lg"
        >
          Together with their families, joyfully invite you to celebrate their union and the
          beginning of their forever.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2 }}
          className="mt-6 font-script text-2xl text-gold sm:text-3xl"
        >
          “A celebration written in the stars, sealed with love.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.4 }}
          className="mt-16 flex flex-col items-center gap-3"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold/70">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-12 w-px bg-gradient-to-b from-gold to-transparent"
          />
        </motion.div>
      </div>

      
    </section>
  );
}
