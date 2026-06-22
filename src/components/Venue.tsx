import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { translations } from "@/lib/translations";

export function Venue({ lang = "en" }: { lang?: "en" | "te" }) {
  const t = translations[lang];

  return (
    <section id="venue" className="relative px-6 py-16">
      <SectionTitle
        eyebrow={t.venue}
        title={lang === "en" ? "Reddy Rambabu Residencies" : "రెడ్డి రాంబాబు రెసిడెన్సీస్"}
        subtitle={t.whereRomanceMeets}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl p-3 transition-all duration-500 hover:-translate-y-1"
      >
        <div className="relative overflow-hidden rounded-2xl">
          <iframe
            title="Reddy Rambabu Residencies map"
            src="https://www.google.com/maps?q=Reddy+Rambabu+Residencies,+ISN+Layout,+Beside+Ayyappa+Swamy+Temple,+Alamuru+Road,+Mandapeta&output=embed"
            className="h-[420px] w-full grayscale-[0.1]"
            style={{ filter: "sepia(0.18) contrast(1.05) saturate(0.95)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/30" />
        </div>

        <div className="flex flex-col items-center gap-4 p-6 sm:p-8 text-center">
          <p className="font-script text-4xl sm:text-5xl text-[#623821] font-medium leading-tight">
            {lang === "en" ? "Reddy Rambabu Residencies" : "రెడ్డి రాంబాబు రెసిడెన్సీస్"}
          </p>
          <p className="font-sans text-sm sm:text-base uppercase tracking-[0.2em] text-[#5f4b34] font-medium leading-6 max-w-3xl">
            {lang === "en"
              ? "ISN Layout · Alamuru Road · Beside Ayyappa Swamy Temple · Mandapeta"
              : "ఐఎస్ఎన్ లేఅవుట్ · ఆలమూరు రోడ్ · అయ్యప్ప స్వామి గుడి పక్కన · మండపేట"}
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Reddy+Rambabu+Residencies,+Alamuru+Road,+Mandapeta"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-full border border-[#9d7931]/50 bg-[#f7f4e6] px-6 py-3 font-sans text-xs sm:text-sm uppercase tracking-[0.22em] text-[#623821] transition-all duration-500 hover:bg-[#9d7931] hover:text-white hover:shadow-[0_10px_35px_rgba(110,22,32,0.15)]"
          >
            {t.openInMaps}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
