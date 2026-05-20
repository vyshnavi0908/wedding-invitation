import { motion } from "framer-motion";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-2xl text-center"
    >
      {eyebrow && (
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.4em] text-gold/80">
          {eyebrow}
        </p>
      )}
      <div className="mx-auto mb-6 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/60" />
        <span className="text-gold">✦</span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/60" />
      </div>
      <h2 className="gold-gradient font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 font-serif text-base italic text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
