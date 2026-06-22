import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

export function Story({ lang = "en" }: { lang?: "en" | "te" }) {
  return (
    <section id="story" className="relative px-6 py-16">
      <SectionTitle
        eyebrow={lang === "en" ? "Our Story" : "మా కథ"}
        title={lang === "en" ? "A Special Glimpse" : "మధుర జ్ఞాపకాలు"}
        subtitle={
          lang === "en"
            ? "A cinematic moment from their journey together."
            : "వారి జీవిత ప్రయాణంలోని ఒక మధురమైన క్షణం."
        }
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card mx-auto mt-16 max-w-4xl overflow-hidden rounded-3xl p-3 hover:gold-glow"
      >
        <div className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-gold/30">
          <iframe
            src="https://www.youtube.com/embed/_x7OjG1M344?rel=0&modestbranding=1"
            title="A Special Glimpse"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
