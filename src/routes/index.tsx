import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/Preloader";
import { Envelope } from "@/components/Envelope";
import { Hero } from "@/components/Hero";
import { Couple } from "@/components/Couple";
import { Schedule } from "@/components/Schedule";
import { Venue } from "@/components/Venue";
import { Countdown } from "@/components/Countdown";
import { Footer } from "@/components/Footer";
import { MusicToggle } from "@/components/MusicToggle";
import { FloatingMenu } from "@/components/FloatingMenu";
import { FloatingBackground } from "@/components/FloatingBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { WhatsAppToggle } from "@/components/WhatsAppToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priya & Ravikanth · 02.07.2026 · Wedding Invitation" },
      {
        name: "description",
        content:
          "Join Priya & Ravikanth in Mandapeta for their wedding celebrations — a celebration written in the stars, sealed with love.",
      },
      { property: "og:title", content: "Priya & Ravikanth · A Wedding Invitation" },
      {
        property: "og:description",
        content: "A celebration written in the stars, sealed with love.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Cinzel+Decorative:wght@400;700&family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Great+Vibes&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [musicActive, setMusicActive] = useState(false);
  const [lang, setLang] = useState<"en" | "te">("en");

  useEffect(() => {
    const saved = localStorage.getItem("wedding_lang");
    if (saved === "te") {
      setLang("te");
    }
  }, []);

  const handleLangToggle = () => {
    const next = lang === "en" ? "te" : "en";
    setLang(next);
    localStorage.setItem("wedding_lang", next);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title =
        lang === "en"
          ? "Priya & Ravikanth · 02.07.2026 · Wedding Invitation"
          : "ప్రియ & రవికాంత్ · 02.07.2026 · వివాహ ఆహ్వానం";
    }
  }, [lang]);

  return (
    <main className="relative bg-background min-h-screen text-foreground select-none overflow-x-hidden">
      {/* Desktop Custom Follower Cursor */}
      <CustomCursor />

      {/* 1. Global Floating Luxury Background */}
      <FloatingBackground />

      {/* Floating Language Toggle Symmetrical to Menu (Only after envelope is opened) */}
      {introComplete && (
        <button
          onClick={handleLangToggle}
          className="fixed left-5 top-5 z-[90] flex h-14 px-5 items-center justify-center rounded-full border border-royal/30 bg-[#fdfbf7]/75 backdrop-blur-xl shadow-lg transition duration-500 hover:scale-105 font-sans text-sm sm:text-base uppercase tracking-[0.12em] text-royal font-semibold cursor-pointer"
        >
          {lang === "en" ? "తెలుగు" : "English"}
        </button>
      )}

      {/* 2 & 3. Orchestrated Luxury Exit & Entry Transitions */}
      <AnimatePresence>
        {!introComplete && (
          <Envelope
            key="envelope-stage"
            open={envelopeOpened}
            onOpen={() => {
              setEnvelopeOpened(true);
              setIntroComplete(true);
            }}
            onStartOpening={() => setMusicActive(true)}
            lang="en"
          />
        )}

        {introComplete && (
          <motion.div
            key="main-details-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10"
          >
            <FloatingMenu lang={lang} />
            <Hero lang={lang} />
            <Couple lang={lang} />
            <Schedule lang={lang} />
            <Venue lang={lang} />
            <Countdown lang={lang} />
            <Footer lang={lang} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Symmetrical floating icons once the card starts opening */}
      <WhatsAppToggle active={envelopeOpened} lang={lang} />
      <MusicToggle active={musicActive} />
    </main>
  );
}
