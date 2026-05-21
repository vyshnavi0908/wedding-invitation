import { motion } from "framer-motion";
import { Particles } from "./Particles";


export function Hero() {
  return (
    <section id="home"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 py-20"
      
    >

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.4, delay: 0.3 }}
  className="mb-8 flex flex-col items-center"
>
  <span className="font-serif text-5xl text-gold sm:text-6xl">
    ॐ
  </span>

  <p className="mt-2 font-serif text-xs italic tracking-[0.2em] text-gold/70 sm:text-base">
    ॥ Om Gam Ganapataye Namah ॥
  </p>

  <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
</motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-sans text-[10px] uppercase tracking-[0.5em] text-gold/80"
        >
          A Week of Wedding Celebrations
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-sans text-xs uppercase tracking-[0.5em] text-gold/80"
        >
          Save the Date · 26 . 06 . 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.9 }}
          className="mt-8 font-serif text-4xl font-light leading-[1.1] sm:text-6xl md:text-8xl"
        >
          <span className="gold-shimmer block">Vijay</span>
          <span className="my-2 block font-script text-4xl text-gold-soft sm:text-5xl">&</span>
          <span className="gold-shimmer block">Rashmika</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.4 }}
          className="gold-divider mx-auto my-8 w-48"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="mx-auto max-w-md font-serif text-base italic leading-relaxed text-muted-foreground sm:text-lg"
        >
          Together with their families, joyfully invite you to celebrate their union and the
          beginning of their forever.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2 }}
          className="mt-6 font-script text-2xl text-gold sm:text-3xl"
        >
          “A celebration written in the stars, sealed with love.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.4 }}
          className="mt-16 flex flex-col items-center gap-3"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold/70">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-12 w-px bg-gradient-to-b from-gold to-transparent"
          />
        </motion.div>
      </div>

      
    </section>
  );
}
