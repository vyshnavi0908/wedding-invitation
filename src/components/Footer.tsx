import { motion } from "framer-motion";
import { Particles } from "./Particles";
import { translations } from "@/lib/translations";
import suryaChandraLogo from "@/assets/surya-chandra-logo.png";

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

        {/* Invited By Section */}
        <div className="mt-12 space-y-3">
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-[#9d7931] font-bold">
            {t.invitationEndingTitle}
          </p>
          <div className="space-y-1">
            <p className="font-serif text-xl sm:text-2xl font-medium text-[#623821] leading-relaxed">
              {t.familyMembersText1}
            </p>
            <p className="font-serif text-xl sm:text-2xl font-medium text-[#623821] leading-relaxed">
              {t.familyMembersText2}
            </p>
          </div>
          <p className="font-serif text-base italic text-[#5f4b34] pt-1">
            {t.nearAndDear}
          </p>
        </div>

        {/* Separator from the Card (dashed divider or elegant ornament) */}
        <div className="my-10 flex items-center justify-center gap-3 text-[#9d7931]/60">
          <span className="font-serif text-sm">✦</span>
          <span className="w-16 h-px bg-gradient-to-r from-transparent via-[#9d7931]/40 to-transparent" />
          <span className="font-serif text-sm">✦</span>
          <span className="w-16 h-px bg-gradient-to-r from-transparent via-[#9d7931]/40 to-transparent" />
          <span className="font-serif text-sm">✦</span>
        </div>

        {/* Blessings from Surya Chandra Ghee Family */}
        <div className="space-y-3">
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-[#9d7931] font-bold">
            {t.gheeFamilyBlessingsTitle}
          </p>
          <p className="font-serif text-lg sm:text-xl italic text-[#5f4b34] leading-relaxed">
            {t.gheeFamilyBlessingsText}
          </p>

          {/* Surya Chandra Ghee Logo */}
          <div className="mx-auto mt-5 flex justify-center">
            <img
              src={suryaChandraLogo}
              alt="Surya Chandra Premium Ghee"
              className="h-24 sm:h-28 object-contain transition-all duration-500 hover:scale-105 filter drop-shadow-[0_6px_15px_rgba(157,121,49,0.12)]"
            />
          </div>
        </div>

        <div className="gold-divider mx-auto mt-10 w-24" />
        <p className="mt-6 font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-[#9d7931] font-bold">
          {lang === "en"
            ? "Priya & Ravikanth · 02 . 07 . 2026 · Mandapeta"
            : "ప్రియా & రవికాంత్ · 02 . 07 . 2026 · మండపేట"}
        </p>

        {/* Professional Designer Branding Footer */}
        <div className="mt-16 font-sans text-xs tracking-[0.2em] leading-relaxed text-[#6b4d38] sm:text-sm">
          <p>
            © {new Date().getFullYear()} {lang === "en" ? "Sree Ram's Studio" : "శ్రీ రామ్స్ స్టూడియో"} · {t.copyright}
          </p>
          <p className="mt-2 text-royal/70">
            {t.brandingLine}{" "}
            <span className="font-semibold text-royal/90">
              {lang === "en" ? "Sree Ram's Studio" : "శ్రీ రామ్స్ స్టూడియో"}
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
