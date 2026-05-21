import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Envelope({ open, onOpen, onStartOpening }: { open: boolean; onOpen: () => void; onStartOpening?: () => void }) {
  const [opening, setOpening] = useState(false);
  const [cardRevealed, setCardRevealed] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    if (onStartOpening) {
      onStartOpening();
    }
    
    // Step 1: Flaps open (duration 0.9s)
    // Step 2: Inner Card slides up (after 0.8s)
    setTimeout(() => {
      setCardRevealed(true);
    }, 850);

    // Step 3: Trigger main page reveal (after 2.3s)
    setTimeout(() => {
      onOpen();
    }, 2400);
  };

  return (
    <motion.div
      key="envelope"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #5c0f18 0%, #30050a 70%, #150103 100%)",
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Floating premium golden dust sparkles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 35 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-amber-200/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 6px rgba(255,220,150,0.8)",
              animation: `float-particle ${6 + Math.random() * 6}s ease-in-out ${Math.random() * 3}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Top greeting text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: opening ? 0 : 1, y: opening ? -20 : 0 }}
        transition={{ delay: 0.3, duration: 1.2 }}
        className="mb-10 text-center px-4"
        style={{ pointerEvents: opening ? "none" : "auto", zIndex: 20 }}
      >
        <p className="font-serif text-[10px] uppercase tracking-[0.4em] text-gold/60">
          The Royal Wedding Invitation
        </p>
        <p className="font-script mt-2 text-4xl text-gold-soft drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-5xl">
          You're Invited
        </p>
      </motion.div>

      {/* 3D Envelope Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 1.15, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-[92%] min-[360px]:w-[88%] sm:w-[420px] h-[440px] min-[360px]:h-[480px] sm:h-[580px] rounded-2xl flex items-center justify-center shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-gold/15"
        style={{ 
          perspective: "1500px", 
          transformStyle: "preserve-3d",
          background: "linear-gradient(135deg, #30050a, #150103)"
        }}
      >
        {/* Envelope Back Panel Lining */}
        <div className="absolute inset-2 rounded-xl bg-[#2c0509] border border-gold/5 flex items-center justify-center overflow-hidden">
          {/* Subtle elegant pattern background in envelope inner lining */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, #d4a02a 1.5px, transparent 1.5px)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        {/* Inner Invitation Card Visual */}
        <motion.div
          initial={{ y: 0, scale: 0.95, opacity: 0 }}
          animate={
            cardRevealed
              ? { y: -100, scale: 1.05, opacity: 1, zIndex: 40 }
              : opening
              ? { opacity: 0.8, scale: 0.98 }
              : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-4 rounded-xl border border-gold/45 p-6 flex flex-col items-center justify-center text-center shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
          style={{
            background: `
              radial-gradient(circle at center, rgba(253, 251, 247, 0.4) 0%, rgba(247, 241, 227, 0.6) 100%),
              url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 C60 0, 80 20, 80 40 C80 60, 60 80, 40 80 C20 80, 0 60, 0 40 C0 20, 20 0, 40 0 Z' stroke='%23c59b27' stroke-width='0.25' fill='none' opacity='0.08'%3E%3C/path%3E%3Cpath d='M40 10 C56 10, 70 24, 70 40 C70 56, 56 70, 40 70 C24 70, 10 56, 10 40 C10 24, 24 10, 40 10 Z' stroke='%23c59b27' stroke-width='0.2' fill='none' opacity='0.05' stroke-dasharray='2 2'%3E%3C/path%3E%3Cpath d='M0 40 L80 40 M40 0 L40 80' stroke='%23c59b27' stroke-width='0.15' fill='none' opacity='0.06'%3E%3C/path%3E%3Ccircle cx='40' cy='40' r='16' stroke='%23c59b27' stroke-width='0.25' fill='none' opacity='0.08'%3E%3C/circle%3E%3C/svg%3E"),
              linear-gradient(145deg, #fdfbf7 0%, #f7f1e3 100%)
            `,
            boxShadow: "inset 0 0 20px rgba(212,160,42,0.12)"
          }}
        >
          {/* Card Corner Borders */}
          <div className="absolute inset-2.5 border border-royal/15 pointer-events-none rounded-lg" />
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-royal/50 rounded-tl" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-royal/50 rounded-tr" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-royal/50 rounded-bl" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-royal/50 rounded-br" />

          <span className="font-serif text-3xl text-royal mb-3">ॐ</span>
          <p className="font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-royal/80 font-medium">
            Save The Date
          </p>
          <div className="gold-divider w-12 my-2 sm:my-3" />
          <h2 className="font-cinzel text-2xl sm:text-3xl text-royal font-medium leading-snug">
            Vijay <br />
            <span className="font-script text-2xl text-royal/70 my-1 block">&amp;</span>
            Rashmika
          </h2>
          <div className="gold-divider w-12 my-2 sm:my-3" />
          <p className="font-serif text-xs italic text-royal/70 font-semibold">
            26 . 06 . 2026
          </p>
          <p className="font-sans text-[8px] uppercase tracking-[0.25em] text-royal/60 mt-3 font-semibold">
            Umaid Bhawan Palace
          </p>
          <p className="font-serif text-[10px] italic text-royal/70 mt-1 font-semibold">
            Jodhpur, Rajasthan
          </p>
        </motion.div>

        {/* Left Wing Flap */}
        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#6e1620] via-[#500e16] to-[#30050a] border-r border-amber-300/20 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] rounded-l-2xl"
          style={{
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            zIndex: 30
          }}
          animate={opening ? { rotateY: -125 } : { rotateY: 0 }}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        >
          {/* Outer gold border line on left flap */}
          <div className="absolute inset-2 border-r-0 border border-gold/15 rounded-l-lg pointer-events-none" />
        </motion.div>

        {/* Right Wing Flap */}
        <motion.div
          className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#6e1620] via-[#500e16] to-[#30050a] border-l border-amber-300/20 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] rounded-r-2xl"
          style={{
            transformOrigin: "right center",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            zIndex: 30
          }}
          animate={opening ? { rotateY: 125 } : { rotateY: 0 }}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        >
          {/* Outer gold border line on right flap */}
          <div className="absolute inset-2 border-l-0 border border-gold/15 rounded-r-lg pointer-events-none" />
        </motion.div>

        {/* Central Vertical Border Overlap */}
        {!opening && (
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gold/10 z-35" />
        )}

        {/* Interactive Wax Seal — Clickable */}
        <motion.button
          onClick={handleOpen}
          disabled={opening}
          aria-label="Open invitation"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none pointer-events-auto"
          style={{ zIndex: 50 }}
          animate={
            opening
              ? { scale: 0, opacity: 0, rotate: 110 }
              : { scale: 1, opacity: 1, rotate: 0 }
          }
          transition={{ duration: 0.6, ease: "easeIn" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
        >
          <motion.div
            className="relative flex h-20 w-20 items-center justify-center rounded-full sm:h-24 sm:w-24 shadow-2xl"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255,200,120,0.4), inset 0 -3px 8px rgba(0,0,0,0.5)",
                "0 0 45px rgba(255,200,120,0.8), inset 0 -3px 8px rgba(0,0,0,0.5)",
                "0 0 20px rgba(255,200,120,0.4), inset 0 -3px 8px rgba(0,0,0,0.5)",
              ],
            }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            {/* Wax seal background */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #f5d27a 0%, #d4a02a 35%, #9a6a18 80%)",
              }}
            />
            {/* Seal Inner Border */}
            <div className="absolute inset-1.5 rounded-full border border-amber-950/40" />
            <span className="relative font-serif text-2xl font-bold italic text-amber-950 sm:text-3xl tracking-tight select-none">
              V&amp;R
            </span>
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Bottom helper text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: opening ? 0 : 1, y: opening ? 20 : 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="font-script mt-10 text-2xl text-gold drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] sm:text-3xl animate-pulse"
        style={{ pointerEvents: opening ? "none" : "auto", zIndex: 20 }}
      >
        Tap the Royal Seal to open
      </motion.p>
    </motion.div>
  );
}
