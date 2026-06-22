import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
  const [topFlapBack, setTopFlapBack] = useState(false);
  const [cardRevealed, setCardRevealed] = useState(false);
  const t = translations[lang];
  const random = createSeededRandom(126);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    if (onStartOpening) {
      onStartOpening();
    }

    // Step 1: Wax seal fades out instantly (takes 0.3s)
    
    // Step 2: Top flap rotates up (starts at 0.2s, takes 0.9s)
    setTimeout(() => {
      setTopFlapBack(true);
    }, 650); // halfway through the rotation, switch zIndex behind the card

    // Step 3: Inner Card slides up (starts at 0.95s, takes 1.3s)
    setTimeout(() => {
      setCardRevealed(true);
    }, 950);

    // Step 4: Trigger main page reveal (after 2.2s, right as card reaches its peak)
    setTimeout(() => {
      onOpen();
    }, 2200);
  };

  return (
    <motion.div
      key="envelope-view"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#e8e7e1",
        backgroundImage: `
          radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, rgba(240, 238, 228, 0.2) 100%),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")
        `,
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Floating premium red and violet sparkles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => {
          const bgClass = i % 2 === 0 ? "bg-[#be2e3a]/45" : "bg-[#5a189a]/45";
          const glowColor = i % 2 === 0 ? "rgba(190,46,58,0.6)" : "rgba(90,24,154,0.6)";
          return (
            <span
              key={i}
              className={`absolute h-1.5 w-1.5 rounded-full ${bgClass}`}
              style={{
                left: `${random() * 100}%`,
                top: `${random() * 100}%`,
                boxShadow: `0 0 6px ${glowColor}`,
                animation: `float-particle ${7 + random() * 5}s ease-in-out ${random() * 3}s infinite`,
              }}
            />
          );
        })}
      </div>

      {/* 3D Envelope Container */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 1.08, opacity: 0, y: -20 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-[92%] min-[360px]:w-[86%] sm:w-[440px] h-[340px] min-[360px]:h-[380px] sm:h-[480px] rounded-2xl flex items-center justify-center shadow-[0_30px_90px_rgba(0,0,0,0.22)]"
        style={{
          perspective: "1500px",
          transformStyle: "preserve-3d",
          background: "#fafaf7",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")`,
          border: "1px solid rgba(197, 155, 39, 0.22)",
        }}
      >
        {/* Envelope Back Panel Lining */}
        <div className="absolute inset-1 rounded-xl bg-[#f6f5ee] border border-gold/10 flex items-center justify-center overflow-hidden z-5">
          <div
            className="absolute inset-0 opacity-12"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, #9d7931 1.25px, transparent 1.25px)`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Inner Invitation Card Visual */}
        <motion.div
          initial={{ y: 0, scale: 0.95, opacity: 0 }}
          animate={
            cardRevealed
              ? { y: -160, scale: 1.05, opacity: 1, zIndex: 15 }
              : opening
                ? { opacity: 0.8, scale: 0.98, y: 0 }
                : { opacity: 0, scale: 0.95, y: 0 }
          }
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-4 rounded-xl border border-gold/45 p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-[0_12px_28px_rgba(0,0,0,0.08)] bg-[#fdfdfb]"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(250, 245, 225, 0.92) 100%),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")
            `,
            boxShadow: "inset 0 0 24px rgba(157, 121, 49, 0.08)",
          }}
        >
          {/* Card Corner Borders */}
          <div className="absolute inset-2.5 border border-[#9d7931]/25 pointer-events-none rounded-lg" />
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#9d7931]/60 rounded-tl" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#9d7931]/60 rounded-tr" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#9d7931]/60 rounded-bl" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#9d7931]/60 rounded-br" />

          <span className="font-serif text-2xl sm:text-4xl text-royal mb-1 sm:mb-2 animate-golden-glint">ॐ</span>
          <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#9d7931] font-bold">
            {t.saveTheDate}
          </p>
          <div className="w-12 my-1.5 sm:my-2.5" style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(157,121,49,.5), transparent)" }} />
          <h2 className="font-cinzel text-xl sm:text-3xl text-royal font-bold leading-normal">
            {lang === "en" ? "Priya" : "ప్రియ"} <br />
            <span className="font-script text-xl sm:text-2xl text-[#9d7931] my-0 sm:my-0.5 block">&amp;</span>
            {lang === "en" ? "Ravikanth" : "రవికాంత్"}
          </h2>
          <div className="w-12 my-1.5 sm:my-2.5" style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(157,121,49,.5), transparent)" }} />
          <p className="font-serif text-xs sm:text-base italic text-[#6b4021] font-semibold">02 . 07 . 2026</p>
          <p className="font-sans text-[9px] sm:text-xs uppercase tracking-[0.22em] text-[#9d7931] mt-1.5 sm:mt-2 font-bold">
            {lang === "en" ? "Reddy Rambabu Residencies" : "రెడ్డి రాంబాబు రెసిడెన్సీస్"}
          </p>
          <p className="font-serif text-[10px] sm:text-sm italic text-[#5b402b] mt-0.5 font-bold">
            {lang === "en" ? "Alamuru Road, Mandapeta" : "ఆలమూరు రోడ్, మండపేట"}
          </p>
        </motion.div>

        {/* 3D Folding Top Flap (Double-Sided) */}
        <motion.div
          className="absolute inset-x-0 top-0 h-1/2"
          style={{
            transformOrigin: "top center",
            transformStyle: "preserve-3d",
            zIndex: topFlapBack ? 10 : 25,
          }}
          animate={opening ? { rotateX: -180 } : { rotateX: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
        >
          {/* Outer Top Flap (visible when closed) */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              zIndex: 2,
            }}
          >
            <svg
              className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
              viewBox="0 0 100 50"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="topOuterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fafaf7" />
                  <stop offset="100%" stopColor="#dfdcd0" />
                </linearGradient>
              </defs>
              <polygon points="0,0 50,50 100,0" fill="url(#topOuterGrad)" />
              <path d="M0,0 L50,50 L100,0" stroke="rgba(197,155,39,0.35)" strokeWidth="0.75" fill="none" />
            </svg>
          </div>

          {/* Inner Top Flap (visible when opened, shows inner lining) */}
          <div
            className="absolute inset-0"
            style={{
              transform: "rotateX(180deg)",
              backfaceVisibility: "hidden",
              zIndex: 1,
            }}
          >
            <svg
              className="w-full h-full drop-shadow-[0_-8px_16px_rgba(0,0,0,0.12)]"
              viewBox="0 0 100 50"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="topInnerGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#dad7c4" />
                  <stop offset="100%" stopColor="#fafaf7" />
                </linearGradient>
              </defs>
              <polygon points="0,50 50,0 100,50" fill="url(#topInnerGrad)" />
              <path d="M0,50 L50,0 L100,50" stroke="rgba(197,155,39,0.35)" strokeWidth="0.75" fill="none" />
            </svg>
            {/* Dots lining inside the flap */}
            <div
              className="absolute inset-0 opacity-12"
              style={{
                clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)",
                backgroundImage: `radial-gradient(circle at 50% 50%, #9d7931 1.25px, transparent 1.25px)`,
                backgroundSize: "20px 20px",
              }}
            />
          </div>
        </motion.div>

        {/* Left Side Flap */}
        <div className="absolute inset-y-0 left-0 w-1/2 z-11 pointer-events-none">
          <svg className="w-full h-full drop-shadow-[6px_2px_12px_rgba(0,0,0,0.06)]" viewBox="0 0 50 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="leftFlapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fafaf7" />
                <stop offset="100%" stopColor="#e8e5d8" />
              </linearGradient>
            </defs>
            <polygon points="0,0 50,50 0,100" fill="url(#leftFlapGrad)" />
            <path d="M0,0 L50,50 L0,100" stroke="rgba(197,155,39,0.35)" strokeWidth="0.75" fill="none" />
          </svg>
        </div>

        {/* Right Side Flap */}
        <div className="absolute inset-y-0 right-0 w-1/2 z-11 pointer-events-none">
          <svg className="w-full h-full drop-shadow-[-6px_2px_12px_rgba(0,0,0,0.06)]" viewBox="0 0 50 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="rightFlapGrad" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#fafaf7" />
                <stop offset="100%" stopColor="#e8e5d8" />
              </linearGradient>
            </defs>
            <polygon points="50,0 0,50 50,100" fill="url(#rightFlapGrad)" />
            <path d="M50,0 L0,50 L50,100" stroke="rgba(197,155,39,0.35)" strokeWidth="0.75" fill="none" />
          </svg>
        </div>

        {/* Bottom Flap */}
        <div className="absolute inset-x-0 bottom-0 h-[52%] z-21 pointer-events-none">
          <svg className="w-full h-full drop-shadow-[0_-8px_20px_rgba(0,0,0,0.1)]" viewBox="0 0 100 52" preserveAspectRatio="none">
            <defs>
              <linearGradient id="bottomFlapGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#fafaf7" />
                <stop offset="100%" stopColor="#e2dfd2" />
              </linearGradient>
            </defs>
            <polygon points="0,52 50,0 100,52" fill="url(#bottomFlapGrad)" />
            <path d="M0,52 L50,0 L100,52" stroke="rgba(197,155,39,0.35)" strokeWidth="0.75" fill="none" />
          </svg>
        </div>

        {/* Wax Seal Overlay (Centered on intersection, clicked to open) */}
        <AnimatePresence>
          {!opening && (
            <motion.button
              onClick={handleOpen}
              initial={{ scale: 0.8, opacity: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
              exit={{ scale: 0, opacity: 0, x: "-50%", y: "-50%", rotate: 120 }}
              transition={{ duration: 0.5 }}
              className="absolute left-1/2 top-1/2 cursor-pointer z-40 focus:outline-none pointer-events-auto"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              aria-label={lang === "en" ? "Open invitation" : "ఆహ్వానాన్ని తెరవండి"}
            >
              <motion.div
                className="relative flex h-20 w-20 items-center justify-center rounded-full sm:h-24 sm:w-24 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                animate={{
                  boxShadow: [
                    "0 6px 20px rgba(180,140,50,0.22), inset 0 -3px 8px rgba(0,0,0,0.18)",
                    "0 6px 36px rgba(180,140,50,0.42), inset 0 -3px 8px rgba(0,0,0,0.18)",
                    "0 6px 20px rgba(180,140,50,0.22), inset 0 -3px 8px rgba(0,0,0,0.18)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                {/* Wax seal background */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 30%, #ec5a62 0%, #b41822 45%, #6e0c12 85%)",
                  }}
                />
                {/* Seal Inner Border */}
                <div className="absolute inset-1.5 rounded-full border border-[#500b0e]/30" />
                
                {/* Heart Symbol inside wax seal */}
                <svg viewBox="0 0 100 100" className="relative w-11 h-11 text-[#4a0709] opacity-80">
                  <path
                    d="M50,38 C44,26 28,24 22,34 C12,47 24,63 50,81 C76,63 88,47 78,34 C72,24 56,26 50,38 Z M50,43 C46,33 34,31 29,38 C21,48 30,60 50,74 C70,60 79,48 71,38 C66,31 54,33 50,43 Z"
                    fill="currentColor"
                  />
                </svg>
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Helper text below the envelope */}
      <AnimatePresence>
        {!opening && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 font-serif text-lg tracking-wide text-[#6b553c] sm:text-xl font-medium animate-pulse"
            style={{ zIndex: 30 }}
          >
            {lang === "en" ? "Click to open" : "తెరవడానికి క్లిక్ చేయండి"}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
