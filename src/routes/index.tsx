import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vijay & Rashmika · 26.02.2026 · A Royal Wedding Invitation" },
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
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Great+Vibes&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative">
      <Envelope open={opened} onOpen={() => setOpened(true)} />
      {opened && (
        <>
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
          <MusicToggle active={opened} />
        </>
      )}
    </main>
  );
}
