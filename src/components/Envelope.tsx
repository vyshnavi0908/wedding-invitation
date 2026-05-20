import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Envelope({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    // open page faster so the card text disappears quickly
    setTimeout(() => onOpen(), 900);
  };

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          key="envelope"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at center, #2a0a14 0%, #0a0307 70%, #000 100%)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {/* Floating sparkles */}
          <div className="pointer-events-none absolute inset-0">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="absolute h-1 w-1 rounded-full bg-amber-200"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  boxShadow: "0 0 6px rgba(255,220,150,0.9)",
                  animation: `float-particle ${5 + Math.random() * 6}s ease-in-out ${Math.random() * 3}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Top text */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: opening ? 0 : 1, y: opening ? -20 : 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="font-script mb-16 text-4xl text-amber-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] sm:text-5xl"
            style={{ pointerEvents: opening ? "none" : "auto", position: "relative", zIndex: 20 }}
          >
            You're Invited
          </motion.p>

          {/* Envelope */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.6, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ perspective: "1200px" }}
          >
            <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute inset-0 bg-transparent" style={{ perspective: 1200 }}>
                <motion.div
                  className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-b from-[#2c1a14] via-[#21140f] to-[#160d0b] border-r border-amber-300/20 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]"
                  style={{
                    transformOrigin: "left center",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  animate={opening ? { rotateY: -90 } : { rotateY: 0 }}
                  transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
                />
                <motion.div
                  className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-b from-[#2c1a14] via-[#21140f] to-[#160d0b] border-l border-amber-300/20 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]"
                  style={{
                    transformOrigin: "right center",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  animate={opening ? { rotateY: 90 } : { rotateY: 0 }}
                  transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
                />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-full w-px bg-amber-300/10" />
                </div>
              </div>

              {/* Wax seal — clickable, hides when opening */}
              <motion.button
                onClick={handleOpen}
                disabled={opening}
                aria-label="Open invitation"
                className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none pointer-events-auto"
                style={{ zIndex: 50 }}
                animate={
                  opening
                    ? { scale: 0, opacity: 0, rotate: 90 }
                    : { scale: 1, opacity: 1, rotate: 0 }
                }
                transition={{ duration: 0.5, ease: "easeIn" }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="relative flex h-20 w-20 items-center justify-center rounded-full sm:h-24 sm:w-24"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(255,200,120,0.5), 0 0 40px rgba(255,200,120,0.25), inset 0 -3px 8px rgba(0,0,0,0.4)",
                      "0 0 40px rgba(255,200,120,0.85), 0 0 80px rgba(255,200,120,0.5), inset 0 -3px 8px rgba(0,0,0,0.4)",
                      "0 0 20px rgba(255,200,120,0.5), 0 0 40px rgba(255,200,120,0.25), inset 0 -3px 8px rgba(0,0,0,0.4)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 35% 30%, #f5d27a 0%, #d4a02a 35%, #9a6a18 80%)",
                    }}
                  />
                  <div className="absolute inset-1 rounded-full border border-amber-900/40" />
                  <span className="relative font-serif text-2xl font-bold italic text-amber-950 sm:text-3xl">
                    V&amp;R
                  </span>
                </motion.div>
              </motion.button>
            </div>
          </motion.div>

          {/* Bottom text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: opening ? 0 : 1, y: opening ? 20 : 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-script mt-16 text-3xl text-amber-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] sm:text-4xl"
            style={{ pointerEvents: opening ? "none" : "auto", position: "relative", zIndex: 20 }}
          >
            Tap the seal to open
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
