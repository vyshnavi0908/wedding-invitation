import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", id: "home" },
  { name: "Couple", id: "couple" },
  { name: "Story", id: "story" },
  { name: "Countdown", id: "countdown" },
  { name: "Events", id: "events" },
  { name: "Gallery", id: "gallery" },
  { name: "Venue", id: "venue" },
];

export function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed right-5 top-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-black/30 backdrop-blur-xl transition hover:scale-105"
      >
        <Menu className="h-6 w-6 text-gold" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Background Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-[70%] max-w-[260px] flex-col bg-[#050816]/95 px-8 py-20 shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5"
              >
                <X className="h-6 w-6 text-gold" />
              </button>

              {/* Decorative Line */}
              <div className="mb-10 h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />

              {/* Navigation Links */}
              <div className="flex flex-col gap-6">
                {links.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setOpen(false)}
                    className="font-serif text-xl tracking-[0.12em] text-white/90 transition duration-300 hover:text-gold"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}