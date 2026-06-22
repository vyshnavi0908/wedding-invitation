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
        <p className="mb-4 font-sans text-sm sm:text-base uppercase tracking-[0.28em] text-[#62542a] font-bold">{eyebrow}</p>
      )}
      <div className="mx-auto mb-6 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#8d9c56]/70" />
        <span className="text-[#62542a]">✦</span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#8d9c56]/70" />
      </div>
      <h2 className="font-bodoni gold-gradient text-4xl font-medium leading-normal sm:text-6xl md:text-7xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 font-serif text-lg sm:text-xl italic text-[#5f4b34] leading-8">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
