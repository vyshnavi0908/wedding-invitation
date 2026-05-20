import { motion } from "framer-motion";
import { Particles } from "./Particles";

export function LiveWedding() {
  return (
    <section className="relative overflow-hidden px-6 py-16">
      <Particles count={30} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <p className="font-sans text-xs uppercase tracking-[0.5em] text-gold/80">
          Live Stream
        </p>
        <h2 className="gold-gradient mt-4 font-serif text-4xl font-light sm:text-5xl">
          Watch the Wedding Live
        </h2>
        <p className="mx-auto mt-5 max-w-md font-serif italic text-muted-foreground">
          Join us virtually as Vijay & Rashmika begin their forever — streamed live from
          Umaid Bhawan Palace.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 px-10 py-5 font-sans text-sm uppercase tracking-[0.4em] text-amber-950 animate-pulse-gold"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
            </span>
            Watch Live
          </a>
        </div>
      </motion.div>
    </section>
  );
}
