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

      {/* 1. Center Revealed Invitation Card (Keeping original deep premium purple/magenta gradient) */}
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
              background: "linear-gradient(135deg, #3D002E 0%, #630353 50%, #300028 100%)",
              boxShadow: "inset 0 0 40px rgba(0,0,0,0.6), 0 0 20px rgba(197, 155, 39, 0.3)",
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

      {/* 2. Left Curtain Panel (Styled to match Home ivory/cream background theme) */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1/2 z-20 flex items-center justify-end overflow-hidden border-r-2 border-[#d4a02a]/60 shadow-[10px_0_30px_rgba(0,0,0,0.15)]"
        style={{
          backgroundColor: "#faf8f2",
          backgroundImage: `
            radial-gradient(circle at right center, rgba(255, 255, 255, 0.6) 0%, rgba(246, 243, 232, 0.3) 100%),
            url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 C60 0, 80 20, 80 40 C80 60, 60 80, 40 80 C20 80, 0 60, 0 40 C0 20, 20 0, 40 0 Z' stroke='%23c59b27' stroke-width='0.25' fill='none' opacity='0.08'%3E%3C/path%3E%3C/svg%3E")
          `,
        }}
        animate={curtainsOpen ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
      >
        {/* Left Curtain Corner Gold Filigrees */}
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#c59b27]/40 rounded-tl-xl pointer-events-none" />
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#c59b27]/40 rounded-bl-xl pointer-events-none" />
        
        {/* Left Half Decorative Motif */}
        <div className="mr-6 flex flex-col items-center opacity-40 select-none">
          <span className="font-serif text-6xl text-[#c59b27]">✦</span>
        </div>
      </motion.div>

      {/* 3. Right Curtain Panel (Styled to match Home ivory/cream background theme) */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-1/2 z-20 flex items-center justify-start overflow-hidden border-l-2 border-[#d4a02a]/60 shadow-[-10px_0_30px_rgba(0,0,0,0.15)]"
        style={{
          backgroundColor: "#faf8f2",
          backgroundImage: `
            radial-gradient(circle at left center, rgba(255, 255, 255, 0.6) 0%, rgba(246, 243, 232, 0.3) 100%),
            url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 C60 0, 80 20, 80 40 C80 60, 60 80, 40 80 C20 80, 0 60, 0 40 C0 20, 20 0, 40 0 Z' stroke='%23c59b27' stroke-width='0.25' fill='none' opacity='0.08'%3E%3C/path%3E%3C/svg%3E")
          `,
        }}
        animate={curtainsOpen ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
      >
        {/* Right Curtain Corner Gold Filigrees */}
        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#c59b27]/40 rounded-tr-xl pointer-events-none" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#c59b27]/40 rounded-br-xl pointer-events-none" />

        {/* Right Half Decorative Motif */}
        <div className="ml-6 flex flex-col items-center opacity-40 select-none">
          <span className="font-serif text-6xl text-[#c59b27]">✦</span>
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
              aria-label="Open invitation"
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
              Tap to open
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
