import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { translations } from "@/lib/translations";
import { createSeededRandom } from "@/lib/deterministic";

export function Envelope({
  open,
  onOpen,
  onStartOpening,
  lang = "en",
}: {
  open: boolean;
  onOpen: () => void;
  onStartOpening?: () => void;
  lang?: "en" | "te";
}) {
  const [opening, setOpening] = useState(false);
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [cardRevealed, setCardRevealed] = useState(false);
  const [cardZoomOut, setCardZoomOut] = useState(false);
  const t = translations[lang];
  const random = createSeededRandom(126);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    if (onStartOpening) {
      onStartOpening();
    }

    // Step 1: Curtains start splitting at 0.4s
    setTimeout(() => {
      setCurtainsOpen(true);
    }, 400);

    // Step 2: Inner Card starts scaling and fading in at 0.6s
    setTimeout(() => {
      setCardRevealed(true);
    }, 600);

    // Step 3: Card starts zoom-out/dissolve at 3.8s
    setTimeout(() => {
      setCardZoomOut(true);
    }, 3800);

    // Step 4: Complete transition and call onOpen at 4.8s
    setTimeout(() => {
      onOpen();
    }, 4800);
  };

  return (
    <motion.div
      key="envelope-view"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#11000b",
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Floating premium gold particles in the background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#f5d27a]/35"
            style={{
              left: `${random() * 100}%`,
              top: `${random() * 100}%`,
              boxShadow: "0 0 8px rgba(245, 210, 122, 0.4)",
              animation: `float-particle ${8 + random() * 5}s ease-in-out ${random() * 3}s infinite`,
            }}
          />
        ))}
      </div>

      {/* 1. Center Revealed Invitation Card */}
      <AnimatePresence>
        {cardRevealed && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={
              cardZoomOut
                ? { scale: 1.25, opacity: 0, y: -40 }
                : { scale: 1.02, opacity: 1, y: 0 }
            }
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute z-10 w-[88%] min-[360px]:w-[84%] sm:w-[460px] h-[340px] min-[360px]:h-[380px] sm:h-[500px] rounded-2xl border border-gold/45 p-6 flex flex-col items-center justify-center text-center shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
            style={{
              background: "linear-gradient(135deg, #3d002e 0%, #58034a 50%, #22001a 100%)",
              boxShadow: "inset 0 0 50px rgba(0,0,0,0.7), 0 0 30px rgba(197, 155, 39, 0.25)",
            }}
          >
            {/* Card Corner Borders */}
            <div className="absolute inset-3 border border-[#f5d27a]/20 pointer-events-none rounded-lg" />
            <div className="absolute top-4.5 left-4.5 w-8 h-8 border-t-2 border-l-2 border-[#f5d27a]/50 rounded-tl" />
            <div className="absolute top-4.5 right-4.5 w-8 h-8 border-t-2 border-r-2 border-[#f5d27a]/50 rounded-tr" />
            <div className="absolute bottom-4.5 left-4.5 w-8 h-8 border-b-2 border-l-2 border-[#f5d27a]/50 rounded-bl" />
            <div className="absolute bottom-4.5 right-4.5 w-8 h-8 border-b-2 border-r-2 border-[#f5d27a]/50 rounded-br" />

            {/* Shimmering Gold Cursive Text "Kallakuri's" */}
            <h1
              className="font-script text-5xl sm:text-7xl font-normal leading-none tracking-wide select-none mb-4 animate-pulse-gold"
              style={{
                background: "linear-gradient(to right, #ffe893 0%, #f5d27a 30%, #d4a02a 70%, #ffe893 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))",
              }}
            >
              Kallakuri's
            </h1>

            {/* Elegant gold "Wedding Invitation" */}
            <p
              className="font-cinzel text-sm sm:text-xl uppercase tracking-[0.3em] font-semibold select-none"
              style={{
                color: "#f5d27a",
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
              }}
            >
              Wedding Invitation
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Left Curtain Panel */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1/2 z-20 flex items-center justify-end overflow-hidden border-r border-[#ffe893]/25 shadow-[10px_0_30px_rgba(0,0,0,0.4)]"
        style={{
          background: "linear-gradient(135deg, #1f0113 0%, #2f021e 50%, #15000c 100%)",
        }}
        animate={curtainsOpen ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
      >
        {/* Left Curtain Corner Gold Filigrees */}
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#ffe893]/20 rounded-tl-xl pointer-events-none" />
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#ffe893]/20 rounded-bl-xl pointer-events-none" />
        
        {/* Left Half Decorative Motif */}
        <div className="mr-4 flex flex-col items-center opacity-30 select-none">
          <span className="font-serif text-6xl text-[#ffe893]">✦</span>
        </div>
      </motion.div>

      {/* 3. Right Curtain Panel */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-1/2 z-20 flex items-center justify-start overflow-hidden border-l border-[#ffe893]/25 shadow-[-10px_0_30px_rgba(0,0,0,0.4)]"
        style={{
          background: "linear-gradient(135deg, #1f0113 0%, #2f021e 50%, #15000c 100%)",
        }}
        animate={curtainsOpen ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
      >
        {/* Right Curtain Corner Gold Filigrees */}
        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#ffe893]/20 rounded-tr-xl pointer-events-none" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#ffe893]/20 rounded-br-xl pointer-events-none" />

        {/* Right Half Decorative Motif */}
        <div className="ml-4 flex flex-col items-center opacity-30 select-none">
          <span className="font-serif text-6xl text-[#ffe893]">✦</span>
        </div>
      </motion.div>

      {/* Center Golden Wax Seal Overlay */}
      <AnimatePresence>
        {!opening && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.3, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
          >
            {/* Clickable wax seal button */}
            <motion.button
              onClick={handleOpen}
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/30 rounded-full"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              aria-label={lang === "en" ? "Open invitation" : "ఆహ్వానాన్ని తెరవండి"}
            >
              <div
                className="relative flex h-24 w-24 items-center justify-center rounded-full sm:h-28 sm:w-28 shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
                style={{
                  background: "radial-gradient(circle at 35% 30%, #ec5a62 0%, #b41822 45%, #6e0c12 85%)",
                  border: "2px solid #ffe893",
                }}
              >
                {/* Seal Inner Border */}
                <div className="absolute inset-2 rounded-full border border-[#500b0e]/30" />
                
                {/* Heart Symbol inside wax seal */}
                <svg viewBox="0 0 100 100" className="relative w-12 h-12 text-[#4a0709] opacity-80">
                  <path
                    d="M50,38 C44,26 28,24 22,34 C12,47 24,63 50,81 C76,63 88,47 78,34 C72,24 56,26 50,38 Z M50,43 C46,33 34,31 29,38 C21,48 30,60 50,74 C70,60 79,48 71,38 C66,31 54,33 50,43 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </motion.button>
            
            {/* Pulsating Seal Label */}
            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.0, repeat: Infinity }}
              className="mt-6 font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-[#ffe893] font-semibold"
            >
              {lang === "en" ? "Tap to open" : "తెరవడానికి క్లిక్ చేయండి"}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
