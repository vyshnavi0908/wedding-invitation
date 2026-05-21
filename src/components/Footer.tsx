import { motion } from "framer-motion";
import { Particles } from "./Particles";

export function Footer() {
  return (
    <footer id="rsvp" className="relative overflow-hidden px-6 py-24">
      <Particles count={20} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-royal/40 bg-royal/5">
          <span className="font-script text-3xl text-royal">V&amp;R</span>
        </div>
        <div className="gold-divider mx-auto mt-8 w-40" />
        <p className="mt-8 font-script text-3xl text-royal sm:text-4xl">
          “Two souls, one beautiful journey.”
        </p>
        <p className="mt-6 font-serif italic text-muted-foreground">
          With love and gratitude — thank you for being part of our story.
        </p>

        <div className="gold-divider mx-auto mt-10 w-24" />
        <p className="mt-8 font-sans text-[10px] uppercase tracking-[0.4em] text-royal/80 font-semibold">
          Seeking Your Blessings
        </p>
        <p className="mx-auto mt-4 max-w-xl font-serif text-base italic leading-relaxed text-foreground/85 sm:text-lg">
          As we step into this beautiful new chapter, we humbly seek your love, your prayers and
          your heartfelt blessings. Your presence — in person or in spirit — will be the greatest gift
          we could ask for as we begin our forever.
        </p>

        <p className="mt-8 font-script text-3xl text-royal sm:text-4xl">
          — with love, Vijay &amp; Rashmika
        </p>

        <div className="gold-divider mx-auto mt-10 w-24" />
        <p className="mt-6 font-sans text-[10px] uppercase tracking-[0.4em] text-royal/70 font-semibold">
          Vijay &amp; Rashmika · 26 . 06 . 2026 · Jodhpur
        </p>

        {/* Professional Designer Branding Footer */}
        <div className="mt-16 text-royal/60 font-sans text-[10px] tracking-[0.2em] leading-relaxed">
          <p>© {new Date().getFullYear()} Vijay &amp; Rashmika · All Rights Reserved</p>
          <p className="mt-2 text-royal/40">
            All Rights and All Reserved by <span className="font-semibold text-royal/50">DDD Dream Day Digitals</span>
          </p>
          <p className="mt-1.5 text-royal/40">
            Contact Information: <a href="tel:+919966554231" className="hover:text-royal/60 underline decoration-royal/20 transition-all font-semibold">+91 9966554231</a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
