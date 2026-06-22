import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { translations } from "@/lib/translations";

export function FloatingMenu({ lang = "en" }: { lang?: "en" | "te" }) {
  const [open, setOpen] = useState(false);
  const t = translations[lang];

  const links = [
    { name: t.home, id: "home" },
    { name: t.couple, id: "couple" },
    { name: t.countdown, id: "countdown" },
    { name: t.events, id: "events" },
    { name: t.venue, id: "venue" },
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed right-5 top-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full border border-gold/28 bg-[#f9f7ea]/88 backdrop-blur-xl shadow-[0_14px_35px_rgba(94,65,35,0.14)] transition duration-500 hover:scale-105"
      >
        <Menu className="h-6 w-6 text-[#623821]" />
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
              className="fixed inset-0 z-40 bg-[#1a0205]/65 backdrop-blur-md"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-[70%] max-w-[260px] flex-col bg-[#fbf8ee]/96 border-l border-gold/20 backdrop-blur-xl px-8 py-20 shadow-2xl"
            >
              {/* Close */}
              <button onClick={() => setOpen(false)} className="absolute right-5 top-5">
                <X className="h-6 w-6 text-[#623821]" />
              </button>

              {/* Decorative Line */}
              <div className="mb-10 h-px w-20 bg-gradient-to-r from-transparent via-gold/45 to-transparent" />

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
                    className="font-serif text-xl tracking-[0.12em] text-[#623821]/86 font-medium transition-all duration-300 hover:text-[#4e2d1b] hover:pl-2"
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
