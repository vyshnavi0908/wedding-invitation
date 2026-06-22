import { motion } from "framer-motion";
import { translations } from "@/lib/translations";

const characterVariants = {
  hidden: { opacity: 0, y: 25, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, damping: 14, stiffness: 80 },
  },
};

function RevealText({ text, delay = 0 }: { text: string; delay?: number }) {
  const isTelugu = /[\u0c00-\u0c7f]/.test(text);
  const letters = isTelugu ? [text] : Array.from(text);

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
      className="inline-flex flex-wrap justify-center"
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={characterVariants}
          className={`inline-block gold-shimmer transition-all duration-500 hover:scale-108 hover:text-[#be2e3a] cursor-default ${isTelugu ? "font-sans font-semibold" : "font-cinzel"}`}
          style={{ textShadow: "0 4px 20px oklch(0.82 0.14 85 / 0.15)" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Hero({ lang = "en" }: { lang?: "en" | "te" }) {
  const t = translations[lang];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20"
    >
      {/* Decorative Gold Filigree Corner Frames for the landing section */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-royal/25 rounded-tl-3xl pointer-events-none" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-royal/25 rounded-tr-3xl pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-royal/25 rounded-bl-3xl pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-royal/25 rounded-br-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Holy symbol & blessing with drawing line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="mb-8 flex flex-col items-center"
        >
          <span className="font-serif text-5xl text-royal sm:text-6xl animate-golden-glint">ॐ</span>

          <p className="mt-3 font-serif text-sm italic tracking-[0.2em] text-[#623821] sm:text-base">
            ॥ Om Gam Ganapataye Namah ॥
          </p>

          <div className="mt-4 h-px w-28 bg-gradient-to-r from-transparent via-royal/40 to-transparent" />
        </motion.div>

        {/* Eyebrow texts with letters revealing */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-sans text-sm sm:text-base uppercase tracking-[0.35em] text-[#9d7931] font-bold"
        >
          {t.weekOfCelebrations}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-2 font-sans text-sm sm:text-base uppercase tracking-[0.3em] text-[#623821] font-bold"
        >
          {t.saveTheDate} · 02 . 07 . 2026
        </motion.p>

        {/* Cinematic Typing & Reveal Couple Names */}
        <h1 className="mt-8 font-cinzel text-5xl font-light leading-[1.1] sm:text-7xl md:text-8xl flex flex-col items-center gap-2 sm:gap-4 select-none">
          <span className="block">
            <RevealText text={lang === "en" ? "Priya" : "ప్రియ"} delay={1.1} />
          </span>
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.7 }}
            className="block font-script text-4xl text-[#be2e3a] sm:text-5xl select-none"
          >
            &amp;
          </motion.span>
          <span className="block">
            <RevealText text={lang === "en" ? "Ravikanth" : "రవికాంత్"} delay={2.0} />
          </span>
        </h1>

        {/* Elegant gold divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.6, delay: 3.1 }}
          className="gold-divider mx-auto my-10 w-56"
        />

        {/* Invitation Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 3.3 }}
          className="mx-auto max-w-xl font-serif text-lg sm:text-2xl italic leading-8 text-[#5f4b34]"
        >
          {t.invitationGreeting}
        </motion.p>

        {/* Star quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 3.7 }}
          className="mt-8 font-script text-4xl text-[#623821] sm:text-5xl"
        >
          {t.starsQuote}
        </motion.p>

        {/* Elegant Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 1.5, delay: 4.2 }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <span className="font-sans text-xs uppercase tracking-[0.35em] text-[#9d7931] font-bold">
            {t.scrollExplore}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-px bg-gradient-to-b from-royal/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
