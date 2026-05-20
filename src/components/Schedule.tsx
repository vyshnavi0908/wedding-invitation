import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const events = [
  {
    icon: "🌼",
    title: "Haldi Ceremony",
    desc: "A radiant morning of golden blessings and laughter.",
    date: "February 24, 2026",
    time: "10:00 AM onwards",
    venue: "Royal Courtyard, Umaid Bhawan Palace",
  },
  {
    icon: "🌿",
    title: "Mehendi Ceremony",
    desc: "Intricate art, soft music, and timeless tradition.",
    date: "February 24, 2026",
    time: "5:00 PM onwards",
    venue: "Zenana Garden, Umaid Bhawan Palace",
  },
  {
    icon: "🎶",
    title: "Sangeet Night",
    desc: "An evening of music, dance, and joyful celebration.",
    date: "February 25, 2026",
    time: "7:00 PM onwards",
    venue: "Moonlight Terrace, Umaid Bhawan Palace",
  },
  {
    icon: "💍",
    title: "The Wedding",
    desc: "Two souls united under a sky of starlit promises.",
    date: "February 26, 2026",
    time: "6:30 PM onwards",
    venue: "Grand Palace Lawn, Umaid Bhawan Palace",
  },
  {
    icon: "🥂",
    title: "Wedding Reception",
    desc: "A grand evening to toast new beginnings.",
    date: "February 27, 2026",
    time: "8:00 PM onwards",
    venue: "Imperial Ballroom, Umaid Bhawan Palace",
  },
];

const mapsHref = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export function Schedule() {
  return (
    <section className="relative px-6 py-16">
      <SectionTitle
        eyebrow="A Week of Wedding"
        title="The Festivities"
        subtitle="A beautiful week of wedding celebrations, blessings, and timeless traditions at Umaid Bhawan Palace."
      />

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e, i) => (
          <motion.article
            key={e.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="glass-card group relative flex flex-col rounded-3xl p-8 transition-shadow duration-500 hover:gold-glow"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-4xl drop-shadow-[0_2px_8px_rgba(255,200,100,0.3)]">
                {e.icon}
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold/70">
                Day {i + 1}
              </span>
            </div>

            <h3 className="gold-gradient font-serif text-3xl font-light">{e.title}</h3>
            <div className="gold-divider my-4 w-16" />
            <p className="font-serif text-sm italic text-muted-foreground">{e.desc}</p>

            <dl className="mt-6 space-y-2 font-sans text-sm">
              <div className="flex gap-2">
                <dt className="text-gold/80">Date</dt>
                <dd className="text-foreground/90">{e.date}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-gold/80">Time</dt>
                <dd className="text-foreground/90">{e.time}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 text-gold/80">Venue</dt>
                <dd className="text-foreground/90">{e.venue}</dd>
              </div>
            </dl>

            <a
              href={mapsHref(e.venue)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-gold/40 bg-gold/5 px-5 py-2.5 font-sans text-xs uppercase tracking-[0.3em] text-gold transition-all duration-500 hover:bg-gold hover:text-primary-foreground hover:gold-glow"
            >
              Get Directions →
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
