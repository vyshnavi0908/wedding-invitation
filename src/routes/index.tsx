import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/Preloader";
import { Envelope } from "@/components/Envelope";
import { Hero } from "@/components/Hero";
import { Couple } from "@/components/Couple";
import { Schedule } from "@/components/Schedule";
import { Venue } from "@/components/Venue";
import { Gallery } from "@/components/Gallery";
import { Story } from "@/components/Story";
import { LiveWedding } from "@/components/LiveWedding";
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
      { title: "Vijay & Rashmika · 26.06.2026 · A Royal Wedding Invitation" },
      {
        name: "description",
        content:
          "Join Vijay Deverakonda & Rashmika Mandanna at Umaid Bhawan Palace, Jodhpur — a celebration written in the stars, sealed with love.",
      },
      { property: "og:title", content: "Vijay & Rashmika · A Royal Wedding" },
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

  return (
    <main className="relative bg-background min-h-screen text-foreground select-none overflow-x-hidden">
      {/* Desktop Custom Spring Cursor Follower */}
      <CustomCursor />

      {/* 1. Global Floating Luxury Background */}
      <FloatingBackground />

      {/* 2 & 3. Orchestrated Luxury Exit & Entry Transitions */}
      <AnimatePresence mode="wait">
        {!introComplete && (
          <Envelope
            key="envelope-stage"
            open={envelopeOpened}
            onOpen={() => {
              setEnvelopeOpened(true);
              setIntroComplete(true);
            }}
            onStartOpening={() => setMusicActive(true)}
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
            <FloatingMenu />
            <Hero />
            <Couple />
            <Schedule />
            <Venue />
            <Gallery />
            <Story />
            <LiveWedding />
            <Countdown />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Symmetrical floating icons once the card starts opening */}
      <WhatsAppToggle active={envelopeOpened} />
      <MusicToggle active={musicActive} />
    </main>
  );
}
