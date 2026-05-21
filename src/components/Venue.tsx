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
            className="h-[420px] w-full grayscale-[0.3] contrast-110"
            style={{ filter: "invert(0.88) hue-rotate(180deg) saturate(0.6)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/30" />
        </div>

        <div className="flex flex-col items-center gap-3 p-8 text-center">
          <p className="font-script text-3xl text-gold">Umaid Bhawan Palace</p>
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Circuit House Road · Jodhpur · Rajasthan · 342006
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Umaid+Bhawan+Palace,+Jodhpur"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-full border border-gold/50 bg-gold/10 px-6 py-3 font-sans text-xs uppercase tracking-[0.3em] text-gold transition-all duration-500 hover:bg-gold hover:text-primary-foreground hover:gold-glow"
          >
            Open in Maps →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
