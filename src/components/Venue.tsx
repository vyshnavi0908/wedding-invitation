import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

export function Venue() {
  return (
    <section id="venue" className="relative px-6 py-16">
      <SectionTitle
        eyebrow="The Venue"
        title="Umaid Bhawan Palace"
        subtitle="Jodhpur, Rajasthan — where royal heritage meets eternal romance."
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl p-3"
      >
        <div className="relative overflow-hidden rounded-2xl">
          <iframe
            title="Umaid Bhawan Palace map"
            src="https://www.google.com/maps?q=Umaid+Bhawan+Palace,+Jodhpur&output=embed"
            className="h-[420px] w-full grayscale-[0.1]"
            style={{ filter: "sepia(0.18) contrast(1.05) saturate(0.95)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/30" />
        </div>

        <div className="flex flex-col items-center gap-3 p-8 text-center">
          <p className="font-script text-3xl text-royal font-medium">Umaid Bhawan Palace</p>
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Circuit House Road · Jodhpur · Rajasthan · 342006
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Umaid+Bhawan+Palace,+Jodhpur"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-full border border-royal/50 bg-royal/5 px-6 py-3 font-sans text-xs uppercase tracking-[0.3em] text-royal transition-all duration-500 hover:bg-royal hover:text-white hover:shadow-[0_10px_35px_rgba(110,22,32,0.15)]"
          >
            Open in Maps →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
