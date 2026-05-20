import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import c2 from "@/assets/couple-2.png";
import c3 from "@/assets/couple-3.png";
import c4 from "@/assets/couple-4.png";
import c5 from "@/assets/couple-5.png";
import c6 from "@/assets/couple-6.png";
import c7 from "@/assets/couple-7.png";
import c8 from "@/assets/couple-8.png";

const items = [
  { src: c5, span: "md:col-span-2 md:row-span-2", ratio: "aspect-[4/3]" },
  { src: c3, span: "", ratio: "aspect-[3/4]" },
  { src: c7, span: "", ratio: "aspect-[3/4]" },
  { src: c8, span: "md:row-span-2", ratio: "aspect-[3/4] md:aspect-[3/5]" },
  { src: c6, span: "md:col-span-2", ratio: "aspect-[16/9]" },
  { src: c4, span: "", ratio: "aspect-square" },
];

export function Gallery() {
  return (
    <section className="relative px-6 py-16">
      <SectionTitle
        eyebrow="Memories in Bloom"
        title="Moments of Forever"
        subtitle="A glimpse into the love that brought us here."
      />

      <div className="mx-auto mt-16 grid max-w-6xl auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4 md:gap-6">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative overflow-hidden rounded-2xl ring-1 ring-gold/20 ${it.span}`}
          >
            <img
              src={it.src}
              alt=""
              className="h-full w-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
