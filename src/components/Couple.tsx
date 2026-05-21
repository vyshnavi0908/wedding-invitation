import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { Particles } from "./Particles";
import groom from "@/assets/groom.png";
import bride from "@/assets/bride.png";

const people = [
  {
    src: groom,
    name: "Vijay Deverakonda",
    role: "The Groom",
    parents: ["S/o Govardhan Rao Deverakonda", "& Madhavi Deverakonda"],
  },
  {
    src: bride,
    name: "Rashmika Mandanna",
    role: "The Bride",
    parents: ["D/o Madan Mandanna", "& Suman Mandanna"],
  },
];

export function Couple() {
  return (
    <section id="couple" className="relative overflow-hidden px-6 py-16">
      <Particles count={25} />
      <SectionTitle
        eyebrow="The Couple"
        title="Virosh"
        subtitle="From shared smiles to endless memories, their journey blossomed into a love story meant to last forever."
      />

      <div className="relative z-10 mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {people.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
          >
            <div className="glass-card overflow-hidden rounded-3xl p-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src={p.src}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-0 right-0 px-4 text-center">
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold/90">
                    {p.role}
                  </p>
                  <h3 className="gold-gradient mt-2 font-serif text-3xl font-light">
                    {p.name}
                  </h3>
                  <div className="gold-divider mx-auto my-3 w-16" />
                  {p.parents.map((line) => (
                    <p
                      key={line}
                      className="font-serif text-sm italic text-foreground/85"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
