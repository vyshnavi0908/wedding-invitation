import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [enter, setEnter] = useState(false);
  const [mounted, setMounted] = useState(true);

  const handleEnter = () => {
    setEnter(true);
    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  return (
    <motion.div
      key="preloader"
      className="fixed inset-0 z-[150] flex flex-col items-center justify-center px-6 text-center select-none"
      style={{
        background: `
          radial-gradient(circle at center, rgba(253, 251, 247, 0.22) 0%, rgba(247, 223, 176, 0.45) 100%),
          url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 C60 0, 80 20, 80 40 C80 60, 60 80, 40 80 C20 80, 0 60, 0 40 C0 20, 20 0, 40 0 Z' stroke='%23c59b27' stroke-width='0.25' fill='none' opacity='0.08'%3E%3C/path%3E%3Cpath d='M40 10 C56 10, 70 24, 70 40 C70 56, 56 70, 40 70 C24 70, 10 56, 10 40 C10 24, 24 10, 40 10 Z' stroke='%23c59b27' stroke-width='0.2' fill='none' opacity='0.05' stroke-dasharray='2 2'%3E%3C/path%3E%3Cpath d='M0 40 L80 40 M40 0 L40 80' stroke='%23c59b27' stroke-width='0.15' fill='none' opacity='0.06'%3E%3C/path%3E%3Ccircle cx='40' cy='40' r='16' stroke='%23c59b27' stroke-width='0.25' fill='none' opacity='0.08'%3E%3C/circle%3E%3C/svg%3E"),
          radial-gradient(ellipse at center, #fdfbf7 0%, #faecd0 70%, #f7dfb0 100%)
        `,
        backgroundAttachment: 'fixed',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
    >
      {/* Subtle slow drifting sparkles in preloader background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-amber-500/25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 8px rgba(245,158,11,0.25)",
              animation: `float-particle ${6 + Math.random() * 6}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center max-w-lg z-10">
        {/* Elegant self-drawing Mandala SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative w-36 h-36 sm:w-44 sm:h-44 mb-8 flex items-center justify-center"
        >
          {/* Outer drawing mandala path */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-royal/80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="283"
              strokeDashoffset="283"
              className="animate-draw-path"
            />
            <circle
              cx="50"
              cy="50"
              r="38"
              stroke="currentColor"
              strokeWidth="0.25"
              strokeDasharray="239"
              strokeDashoffset="239"
              className="animate-draw-path"
              style={{ animationDelay: "0.5s" }}
            />
            {/* Decorative golden rays / petals inside mandala */}
            {Array.from({ length: 12 }).map((_, idx) => {
              const angle = (idx * 30 * Math.PI) / 180;
              const x1 = 50 + 10 * Math.cos(angle);
              const y1 = 50 + 10 * Math.sin(angle);
              const x2 = 50 + 35 * Math.cos(angle);
              const y2 = 50 + 35 * Math.sin(angle);
              return (
                <line
                  key={idx}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="30"
                  strokeDashoffset="30"
                  className="animate-draw-path"
                  style={{ animationDelay: `${0.8 + idx * 0.1}s` }}
                />
              );
            })}
          </svg>
          {/* Central holy sound / initial icon */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute font-serif text-4xl sm:text-5xl text-royal gold-shimmer font-light"
          >
            ॐ
          </motion.span>
        </motion.div>

        {/* Shloka Text with gorgeous reveal */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={enter ? { opacity: 0, y: -15 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="font-serif text-sm tracking-[0.25em] text-royal/80 font-medium italic uppercase"
        >
          ॥ Om Sri Ganeshaya Namah ॥
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={enter ? { opacity: 0, y: -15 } : { opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="mt-2 font-serif text-xs tracking-[0.3em] text-royal/60 font-semibold uppercase"
        >
          Shubh Vivah
        </motion.p>

        {/* Royal couple titles with letters spacing out slowly */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={
            enter
              ? { opacity: 0, letterSpacing: "0.45em", y: -10 }
              : { opacity: 1, letterSpacing: "0.2em" }
          }
          transition={{ delay: 1.8, duration: 1.5 }}
          className="mt-8 font-cinzel text-2xl tracking-[0.2em] text-royal gold-shimmer font-semibold uppercase sm:text-4xl"
        >
          Vijay &amp; Rashmika
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={enter ? { opacity: 0, y: -10 } : { opacity: 0.85 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-3 font-serif text-xs italic text-royal/70 sm:text-sm tracking-[0.1em] font-medium"
        >
          Under the sky of starlit promises...
        </motion.p>

        {/* Premium Button to unlock the invitation experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={enter ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="mt-12"
        >
          <button
            onClick={handleEnter}
            disabled={enter}
            className="group relative cursor-pointer overflow-hidden rounded-full border border-royal/70 bg-transparent px-10 py-4 font-sans text-xs uppercase tracking-[0.4em] text-royal transition-all duration-700 hover:bg-royal hover:text-white hover:shadow-[0_10px_30px_rgba(110,22,32,0.20)]"
          >
            {/* Button inner shine shimmer overlay */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" style={{ animationDuration: '1.5s' }} />
            Enter the Celebration
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
