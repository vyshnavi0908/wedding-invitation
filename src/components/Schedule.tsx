import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { translations } from "@/lib/translations";

// Custom premium animated SVG icon components
function HaldiIcon() {
  return (
    <div className="animate-sway-flower relative w-14 h-14 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="haldi-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffe893" />
            <stop offset="50%" stopColor="#f5af23" />
            <stop offset="100%" stopColor="#d46b08" />
          </radialGradient>
          <linearGradient id="gold-stroke-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5d27a" />
            <stop offset="50%" stopColor="#d4a02a" />
            <stop offset="100%" stopColor="#9a6a18" />
          </linearGradient>
        </defs>
        {/* Draw multiple layers of marigold petals */}
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={`p1-${i}`}
            d="M50 50 C44 26 34 16 50 6 C66 16 56 26 50 50"
            fill="url(#haldi-grad)"
            stroke="url(#gold-stroke-grad)"
            strokeWidth="0.4"
            transform={`rotate(${i * 45} 50 50)`}
            className="opacity-90"
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={`p2-${i}`}
            d="M50 50 C45 32 37 22 50 14 C63 22 55 32 50 50"
            fill="url(#haldi-grad)"
            stroke="url(#gold-stroke-grad)"
            strokeWidth="0.3"
            transform={`rotate(${i * 45 + 22.5} 50 50)`}
            className="opacity-95"
          />
        ))}
        <circle cx="50" cy="50" r="11" fill="#d46b08" className="animate-pulse" />
        <circle cx="50" cy="50" r="7" fill="#f5af23" />
      </svg>
    </div>
  );
}

function MehendiIcon() {
  return (
    <div className="animate-slow-spin relative w-14 h-14 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gold-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5d27a" />
            <stop offset="50%" stopColor="#d4a02a" />
            <stop offset="100%" stopColor="#9a6a18" />
          </linearGradient>
        </defs>
        {/* Intricate detailed mandala design representing Henna art */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#gold-icon-grad)"
          strokeWidth="0.75"
          strokeDasharray="3 3"
        />
        <circle cx="50" cy="50" r="38" stroke="url(#gold-icon-grad)" strokeWidth="1.2" />
        {Array.from({ length: 16 }).map((_, i) => (
          <path
            key={`m1-${i}`}
            d="M50 14 C46 22 46 28 50 38 C54 28 54 22 50 14"
            fill="url(#gold-icon-grad)"
            transform={`rotate(${i * 22.5} 50 50)`}
            className="opacity-90"
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <circle
            key={`dot-${i}`}
            cx="50"
            cy="24"
            r="1.8"
            fill="url(#gold-icon-grad)"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="12" fill="url(#gold-icon-grad)" />
        <circle cx="50" cy="50" r="8" fill="#30050a" />
        <circle cx="50" cy="50" r="4" fill="url(#gold-icon-grad)" />
      </svg>
    </div>
  );
}

function SangeetIcon() {
  return (
    <div className="animate-pulse-music relative w-14 h-14 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 72 V22 C32 17, 52 12, 78 17 V67"
          stroke="url(#gold-icon-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 38 C42 32, 62 32, 78 38"
          stroke="url(#gold-icon-grad)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M32 28 C42 22, 62 22, 78 28"
          stroke="url(#gold-icon-grad)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Double music notes heads */}
        <ellipse
          cx="23"
          cy="72"
          rx="9"
          ry="7"
          fill="url(#gold-icon-grad)"
          transform="rotate(-15 23 72)"
        />
        <ellipse
          cx="69"
          cy="67"
          rx="9"
          ry="7"
          fill="url(#gold-icon-grad)"
          transform="rotate(-15 69 67)"
        />
        {/* Traditional instrument elements (Dhol outline) or sparkles */}
        <path d="M12 25 L16 19 L22 25 L16 31 Z" fill="url(#gold-icon-grad)" />
        <path d="M84 28 L86 24 L90 28 L86 32 Z" fill="url(#gold-icon-grad)" />
      </svg>
    </div>
  );
}

function WeddingIcon() {
  return (
    <div className="animate-golden-glint relative w-14 h-14 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Groom's and Bride's Interlocked Royal Wedding Rings */}
        <circle cx="38" cy="56" r="23" stroke="url(#gold-icon-grad)" strokeWidth="3" />
        <circle cx="62" cy="56" r="23" stroke="url(#gold-icon-grad)" strokeWidth="3" />
        {/* Royal Brilliant cut Diamond on bride's ring */}
        <g transform="translate(62, 33)">
          <path
            d="M0 -15 L10 -5 L5 5 L-5 5 L-10 -5 Z"
            fill="url(#gold-icon-grad)"
            stroke="url(#gold-icon-grad)"
            strokeWidth="0.5"
          />
          {/* Diamond shine facets */}
          <line
            x1="0"
            y1="-15"
            x2="0"
            y2="5"
            stroke="#fff"
            strokeWidth="0.5"
            className="opacity-60"
          />
          <line
            x1="-10"
            y1="-5"
            x2="5"
            y2="5"
            stroke="#fff"
            strokeWidth="0.4"
            className="opacity-40"
          />
          <line
            x1="10"
            y1="-5"
            x2="-5"
            y2="5"
            stroke="#fff"
            strokeWidth="0.4"
            className="opacity-40"
          />
        </g>
        {/* Crown crownlet details on Groom's ring */}
        <g transform="translate(38, 33)">
          <path d="M-8 0 L-6 -8 L-2 -3 L2 -8 L6 0 Z" fill="url(#gold-icon-grad)" />
        </g>
      </svg>
    </div>
  );
}

function ReceptionIcon() {
  return (
    <div className="relative w-16 h-14 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left clinking champagne flute */}
        <g className="animate-clink-left">
          <path
            d="M34 22 H48 L44 50 C43 54, 36 54, 35 50 Z"
            stroke="url(#gold-icon-grad)"
            strokeWidth="2.5"
            fill="url(#gold-icon-grad)"
            fillOpacity="0.12"
          />
          {/* Liquid level */}
          <path
            d="M36 36 H46 L44 50 C43 53, 37 53, 36 50 Z"
            fill="url(#gold-icon-grad)"
            fillOpacity="0.6"
          />
          <line x1="41" y1="52" x2="41" y2="76" stroke="url(#gold-icon-grad)" strokeWidth="2.5" />
          <path
            d="M30 76 H52"
            stroke="url(#gold-icon-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
        {/* Right clinking champagne flute */}
        <g className="animate-clink-right">
          <path
            d="M66 22 H52 L56 50 C57 54, 64 54, 65 50 Z"
            stroke="url(#gold-icon-grad)"
            strokeWidth="2.5"
            fill="url(#gold-icon-grad)"
            fillOpacity="0.12"
          />
          {/* Liquid level */}
          <path
            d="M64 36 H54 L56 50 C57 53, 63 53, 64 50 Z"
            fill="url(#gold-icon-grad)"
            fillOpacity="0.6"
          />
          <line x1="59" y1="52" x2="59" y2="76" stroke="url(#gold-icon-grad)" strokeWidth="2.5" />
          <path
            d="M48 76 H70"
            stroke="url(#gold-icon-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
        {/* Clinking sparkles and tiny rising bubbles */}
        <path
          d="M50 14 L52 19 L57 20 L52 21 L50 26 L48 21 L43 20 L48 19 Z"
          fill="url(#gold-icon-grad)"
          className="animate-pulse"
        />
        <circle
          cx="48"
          cy="30"
          r="1.5"
          fill="url(#gold-icon-grad)"
          className="animate-ping"
          style={{ animationDuration: "2s" }}
        />
        <circle
          cx="53"
          cy="27"
          r="1"
          fill="url(#gold-icon-grad)"
          className="animate-ping"
          style={{ animationDuration: "1.5s" }}
        />
      </svg>
    </div>
  );
}

const eventDates = [
  new Date("2026-06-28T08:00:00+05:30").getTime(), // Haldi
  new Date("2026-06-28T18:00:00+05:30").getTime(), // Sangeet
  new Date("2026-07-01T12:15:00+05:30").getTime(), // Welcome
  new Date("2026-07-01T13:00:00+05:30").getTime(), // Lunch
  new Date("2026-07-01T16:00:00+05:30").getTime(), // Engagement
  new Date("2026-07-03T01:51:00+05:30").getTime(), // Wedding
  new Date("2026-07-02T18:00:00+05:30").getTime(), // Reception
];

function EventTimer({ targetTime, lang }: { targetTime: number; lang: "en" | "te" }) {
  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());
  const t = translations[lang];

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(targetTime - Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, [targetTime]);

  const threeHours = 3 * 3600000;
  const units = lang === "en"
    ? ["Days", "Hrs", "Mins", "Secs"]
    : ["రోజులు", "గంటలు", "నిమిషాలు", "సెకన్లు"];

  if (timeLeft < -threeHours) {
    return (
      <div className="mt-5 rounded-3xl border border-emerald-500/20 bg-emerald-500/8 p-4 shadow-[0_12px_30px_rgba(16,185,129,0.08)]">
        <div className="flex items-center justify-between gap-4">
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.22em] text-emerald-800 font-bold">
            {t.startsIn}
          </span>
          <span className="rounded-full border border-emerald-500/20 bg-white/70 px-3 py-1 font-sans text-xs uppercase tracking-[0.22em] text-emerald-700 font-bold">
            ✓ {t.completed}
          </span>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-1.5 text-center">
          {[
            ["00", units[0]],
            ["00", units[1]],
            ["00", units[2]],
            ["00", units[3]],
          ].map(([value, unit]) => (
            <div key={unit} className="rounded-2xl border border-emerald-500/15 bg-white/75 px-0.5 py-2.5 min-[360px]:px-1 sm:px-2 sm:py-3">
              <div className="font-serif text-xl sm:text-2xl font-semibold leading-none text-emerald-800">{value}</div>
              <div className="mt-1 font-sans text-[9px] min-[360px]:text-[10px] sm:text-xs uppercase tracking-[0.06em] min-[360px]:tracking-[0.12em] text-emerald-700 font-semibold">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (timeLeft <= 0 && timeLeft >= -threeHours) {
    return (
      <div className="mt-5 rounded-3xl border border-amber-500/20 bg-amber-500/10 p-4 shadow-[0_12px_30px_rgba(245,158,11,0.08)]">
        <div className="flex items-center justify-between gap-4">
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.22em] text-amber-800 font-bold">
            {t.startsIn}
          </span>
          <span className="rounded-full border border-amber-500/20 bg-white/70 px-3 py-1 font-sans text-xs uppercase tracking-[0.22em] text-amber-800 font-bold animate-pulse">
            {t.happeningNow}
          </span>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-1.5 text-center">
          {[
            ["00", units[0]],
            ["00", units[1]],
            ["00", units[2]],
            ["00", units[3]],
          ].map(([value, unit]) => (
            <div key={unit} className="rounded-2xl border border-amber-500/15 bg-white/75 px-0.5 py-2.5 min-[360px]:px-1 sm:px-2 sm:py-3">
              <div className="font-serif text-xl sm:text-2xl font-semibold leading-none text-amber-900">{value}</div>
              <div className="mt-1 font-sans text-[9px] min-[360px]:text-[10px] sm:text-xs uppercase tracking-[0.06em] min-[360px]:tracking-[0.12em] text-amber-800 font-semibold">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const days = Math.floor(timeLeft / 86400000);
  const hours = Math.floor((timeLeft / 3600000) % 24);
  const minutes = Math.floor((timeLeft / 60000) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const countdownText =
    lang === "en"
      ? `${days}${t.days} ${hours}${t.hours} ${minutes}${t.minutes} ${seconds}${t.seconds}`
      : `${days} ${t.daysLabel} ${hours} ${t.hoursLabel} ${minutes} ${t.minutesLabel} ${seconds} ${t.secondsLabel}`;

  return (
    <div className="mt-5 rounded-3xl border border-royal/12 bg-[#fffaf0]/90 p-4 shadow-[0_12px_30px_rgba(110,22,32,0.06)]">
      <div className="flex items-center justify-between gap-4">
        <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.22em] text-royal/90 font-bold">
          {t.startsIn}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-1.5 text-center">
        {[
          [String(days).padStart(2, "0"), units[0]],
          [String(hours).padStart(2, "0"), units[1]],
          [String(minutes).padStart(2, "0"), units[2]],
          [String(seconds).padStart(2, "0"), units[3]],
        ].map(([value, unit]) => (
          <div key={unit} className="rounded-2xl border border-gold/20 bg-white/70 px-0.5 py-2.5 min-[360px]:px-1 sm:px-2 sm:py-3">
            <div className="font-serif text-2xl sm:text-3xl font-semibold leading-none text-foreground">
              {value}
            </div>
            <div className="mt-1.5 font-sans text-[9px] min-[360px]:text-[10px] sm:text-xs uppercase tracking-[0.06em] min-[360px]:tracking-[0.12em] text-[#9d7931] font-bold">
              {unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapsHref = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export function Schedule({ lang = "en" }: { lang?: "en" | "te" }) {
  const t = translations[lang];

  const englishVenues = [
    "BABU & BABU, Mandapeta",
    "BABU & BABU, Mandapeta",
    "SRI KANYA GRAND Function Hall, Mandapeta",
    "SRI KANYA GRAND Function Hall, Mandapeta",
    "SRI KANYA GRAND Function Hall, Mandapeta",
    "Reddy Rambabu Residencies, Alamuru Road, Mandapeta",
    "Reddy Rambabu Residencies, Alamuru Road, Mandapeta",
  ];

  const events = t.eventsData.map((e, idx) => ({
    ...e,
    icon:
      idx === 0 ? (
        <HaldiIcon />
      ) : idx === 1 ? (
        <SangeetIcon />
      ) : idx === 2 ? (
        <MehendiIcon />
      ) : idx === 3 ? (
        <ReceptionIcon />
      ) : idx === 4 ? (
        <MehendiIcon />
      ) : idx === 5 ? (
        <WeddingIcon />
      ) : (
        <ReceptionIcon />
      ),
    targetTime: eventDates[idx],
  }));

  return (
    <section id="events" className="relative px-6 py-20 z-10">
      <SectionTitle eyebrow={t.home} title={t.festivitiesTitle} subtitle={t.festivitiesSubtitle} />

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e, i) => (
          <motion.article
            key={e.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="glass-card card-shimmer-sweep group relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-shadow duration-500 hover:gold-glow luxury-border luxury-border-tl"
          >
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="drop-shadow-[0_4px_12px_rgba(255,200,100,0.25)] transition-transform duration-500 group-hover:scale-110">
                  {e.icon}
                </span>
                <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-royal font-bold select-none">
                  Day {i + 1}
                </span>
              </div>

              <h3 className="gold-gradient font-serif text-3xl sm:text-[2.35rem] font-medium tracking-wide leading-normal">
                {e.title}
              </h3>
              <div className="gold-divider my-4 w-16" />
              <p className="font-serif text-base sm:text-lg italic text-[#5f4b34] leading-relaxed">
                {e.desc}
              </p>

              <dl className="mt-6 space-y-2.5 font-sans text-sm sm:text-base tracking-wide leading-7">
                <div className="flex gap-2">
                  <dt className="text-royal font-bold">{t.date}</dt>
                  <dd className="text-foreground/95 font-medium">{e.date}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-royal font-bold">{t.time}</dt>
                  <dd className="text-foreground/95 font-medium">{e.time}</dd>
                </div>
                <div className="flex gap-2.5">
                  <dt className="shrink-0 text-royal font-bold">{t.venueLabel}</dt>
                  <dd className="text-foreground/95 font-medium leading-snug">{e.venue}</dd>
                </div>
              </dl>

              {/* Event specific Live Countdown Timer */}
              <EventTimer targetTime={e.targetTime} lang={lang} />
            </div>

            <a
              href={mapsHref(englishVenues[i])}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-royal/50 bg-royal/5 px-5 py-3 font-sans text-xs sm:text-sm uppercase tracking-[0.22em] text-royal transition-all duration-500 hover:bg-royal hover:text-white hover:shadow-[0_10px_25px_rgba(110,22,32,0.15)] cursor-pointer relative overflow-hidden group/btn"
            >
              <div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/btn:animate-shimmer"
                style={{ animationDuration: "1.2s" }}
              />
              {t.getDirections}
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
