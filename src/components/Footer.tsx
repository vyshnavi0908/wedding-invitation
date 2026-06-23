import { motion } from "framer-motion";
import { Particles } from "./Particles";
import { translations } from "@/lib/translations";

export function Footer({ lang = "en" }: { lang?: "en" | "te" }) {
  const t = translations[lang];

  return (
    <footer id="rsvp" className="relative overflow-hidden px-6 py-20 sm:py-24">
      <Particles count={20} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        className="relative z-10 mx-auto max-w-2xl text-center transition-all duration-500"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#8d9c56]/28 bg-[#f8f4e4]">
          <span className="font-script text-3xl text-[#623821]">P&amp;R</span>
        </div>
        <div className="gold-divider mx-auto mt-8 w-40" />
        <p className="mt-8 font-script text-3xl text-[#623821] leading-tight sm:text-4xl">
          {t.twoSoulsQuote}
        </p>
        <p className="mt-6 font-serif text-base italic leading-7 text-[#5f4b34] sm:text-lg">
          {t.loveAndGratitude}
        </p>

        <div className="gold-divider mx-auto mt-10 w-24" />
        <p className="mt-8 font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-[#9d7931] font-bold">
          {t.seekingBlessings}
        </p>
        <p className="mx-auto mt-4 max-w-xl font-serif text-base italic leading-relaxed text-[#5f4b34] sm:text-lg">
          {t.seekingBlessingsText}
        </p>

        <p className="mt-8 font-script text-3xl text-[#623821] sm:text-4xl">
          {t.withLoveSignature}
        </p>

        <div className="gold-divider mx-auto mt-10 w-24" />
        <p className="mt-6 font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-[#9d7931] font-bold">
          {lang === "en"
            ? "Priya & Ravikanth · 02 . 07 . 2026 · Mandapeta"
            : "ప్రియా & రవికాంత్ · 02 . 07 . 2026 · మండపేట"}
        </p>

        {/* Professional Designer Branding Footer */}
        <div className="mt-16 font-sans text-xs tracking-[0.2em] leading-relaxed text-[#6b4d38] sm:text-sm">
          <p>
            © {new Date().getFullYear()} {lang === "en" ? "Sri Ram Studios" : "శ్రీ రామ్ స్టూడియోస్"} · {t.copyright}
          </p>
          <p className="mt-2 text-royal/70">
            {t.brandingLine}{" "}
            <span className="font-semibold text-royal/90">
              {lang === "en" ? "Sri Ram Studios" : "శ్రీ రామ్ స్టూడియోస్"}
            </span>
          </p>
          <p className="mt-1.5 text-royal/70">
            {t.contactInfo}{" "}
            <a
              href="tel:+919849658999"
              className="hover:text-royal/90 underline decoration-[#9d7931] transition-all font-semibold text-royal/90"
            >
              +91 9849658999
            </a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
