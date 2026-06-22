import { useMemo, useState, useEffect } from "react";
import { createSeededRandom } from "@/lib/deterministic";

export function FloatingBackground() {
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // If scroll position is more than 350px, we are past the home/hero section
      if (window.scrollY > 350) {
        setIsHome(false);
      } else {
        setIsHome(true);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bokeh = useMemo(() => {
    const random = createSeededRandom(42);

    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: random() * 100,
      delay: random() * 12,
      duration: 18 + random() * 10,
      size: 40 + random() * 70,
    }));
  }, []);

  const goldDust = useMemo(() => {
    const random = createSeededRandom(84);

    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: random() * 100,
      top: random() * 100,
      delay: random() * 6,
      duration: 8 + random() * 6,
      size: 1.2 + random() * 2.2,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Layer 1: Traditional Concentric Rotating Mandalas */}
      <div
        className={`absolute -top-20 -right-20 w-80 h-80 sm:w-[500px] sm:h-[500px] pointer-events-none select-none text-[oklch(0.76_0.13_76)] animate-slow-spin transition-all duration-1000 ${
          isHome ? "opacity-55" : "opacity-[0.06]"
        }`}
        style={{
          transformOrigin: "center",
          animationDuration: "95s",
          filter: isHome ? "drop-shadow(0 0 12px oklch(0.76 0.13 76 / 0.35))" : "none",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="currentColor"
            strokeWidth="0.22"
            strokeDasharray="1.2 1.2"
          />
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.4" />
          <circle
            cx="50"
            cy="50"
            r="41"
            stroke="currentColor"
            strokeWidth="0.2"
            strokeDasharray="2 1"
          />
          <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.4" />
          <circle
            cx="50"
            cy="50"
            r="31"
            stroke="currentColor"
            strokeWidth="0.22"
            fill="currentColor"
            fillOpacity="0.01"
          />
          <circle
            cx="50"
            cy="50"
            r="23"
            stroke="currentColor"
            strokeWidth="0.3"
            strokeDasharray="1.5 0.75"
          />
          <circle
            cx="50"
            cy="50"
            r="16"
            stroke="currentColor"
            strokeWidth="0.28"
            fill="currentColor"
            fillOpacity="0.02"
          />
          <circle
            cx="50"
            cy="50"
            r="8"
            stroke="currentColor"
            strokeWidth="0.4"
            fill="currentColor"
            fillOpacity="0.03"
          />
          {/* Detailed rays/segments */}
          {Array.from({ length: 24 }).map((_, idx) => {
            const angle = (idx * 15 * Math.PI) / 180;
            const x1 = 50 + 16 * Math.cos(angle);
            const y1 = 50 + 16 * Math.sin(angle);
            const x2 = 50 + 46 * Math.cos(angle);
            const y2 = 50 + 46 * Math.sin(angle);
            return (
              <line
                key={idx}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="0.15"
              />
            );
          })}
          {/* Inner ring petaled nodes */}
          {Array.from({ length: 16 }).map((_, idx) => {
            const angle = (idx * 22.5 * Math.PI) / 180;
            const px = 50 + 34.5 * Math.cos(angle);
            const py = 50 + 34.5 * Math.sin(angle);
            return (
              <circle
                key={idx}
                cx={px}
                cy={py}
                r="1.8"
                stroke="currentColor"
                strokeWidth="0.22"
                fill="currentColor"
                fillOpacity="0.05"
              />
            );
          })}
        </svg>
      </div>

      <div
        className={`absolute -bottom-24 -left-24 w-80 h-80 sm:w-[460px] sm:h-[460px] pointer-events-none select-none text-[oklch(0.76_0.13_76)] animate-slow-spin transition-all duration-1000 ${
          isHome ? "opacity-55" : "opacity-[0.06]"
        }`}
        style={{
          transformOrigin: "center",
          animationDirection: "reverse",
          animationDuration: "80s",
          filter: isHome ? "drop-shadow(0 0 12px oklch(0.76 0.13 76 / 0.35))" : "none",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="currentColor"
            strokeWidth="0.22"
            strokeDasharray="1.2 1.2"
          />
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.4" />
          <circle
            cx="50"
            cy="50"
            r="41"
            stroke="currentColor"
            strokeWidth="0.2"
            strokeDasharray="2 1"
          />
          <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.4" />
          <circle
            cx="50"
            cy="50"
            r="31"
            stroke="currentColor"
            strokeWidth="0.22"
            fill="currentColor"
            fillOpacity="0.01"
          />
          <circle
            cx="50"
            cy="50"
            r="23"
            stroke="currentColor"
            strokeWidth="0.3"
            strokeDasharray="1.5 0.75"
          />
          <circle
            cx="50"
            cy="50"
            r="16"
            stroke="currentColor"
            strokeWidth="0.28"
            fill="currentColor"
            fillOpacity="0.02"
          />
          <circle
            cx="50"
            cy="50"
            r="8"
            stroke="currentColor"
            strokeWidth="0.4"
            fill="currentColor"
            fillOpacity="0.03"
          />
          {/* Detailed rays/segments */}
          {Array.from({ length: 24 }).map((_, idx) => {
            const angle = (idx * 15 * Math.PI) / 180;
            const x1 = 50 + 16 * Math.cos(angle);
            const y1 = 50 + 16 * Math.sin(angle);
            const x2 = 50 + 46 * Math.cos(angle);
            const y2 = 50 + 46 * Math.sin(angle);
            return (
              <line
                key={idx}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="0.15"
              />
            );
          })}
          {/* Inner ring petaled nodes */}
          {Array.from({ length: 16 }).map((_, idx) => {
            const angle = (idx * 22.5 * Math.PI) / 180;
            const px = 50 + 34.5 * Math.cos(angle);
            const py = 50 + 34.5 * Math.sin(angle);
            return (
              <circle
                key={idx}
                cx={px}
                cy={py}
                r="1.8"
                stroke="currentColor"
                strokeWidth="0.22"
                fill="currentColor"
                fillOpacity="0.05"
              />
            );
          })}
        </svg>
      </div>

      {/* Layer 2: Luxury Soft Bokeh Orbs */}
      {bokeh.map((b) => {
        const bgClass = b.id % 2 === 0 ? "bg-[#be2e3a]/4" : "bg-[#5a189a]/4";
        return (
          <div
            key={`bokeh-${b.id}`}
            className={`animate-float-bokeh absolute rounded-full ${bgClass} blur-[30px]`}
            style={{
              left: `${b.left}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDelay: `${-b.delay}s`,
              animationDuration: `${b.duration}s`,
            }}
          />
        );
      })}

      {/* Layer 3: Twinkling Golden Dust */}
      {goldDust.map((g) => {
        const bgClass = g.id % 2 === 0 ? "bg-[#be2e3a]" : "bg-[#5a189a]";
        const glowColor = g.id % 2 === 0 ? "oklch(0.44 0.18 24 / 0.8)" : "oklch(0.35 0.15 310 / 0.8)";
        return (
          <span
            key={`dust-${g.id}`}
            className={`absolute rounded-full ${bgClass}`}
            style={{
              left: `${g.left}%`,
              top: `${g.top}%`,
              width: `${g.size}px`,
              height: `${g.size}px`,
              opacity: 0.4,
              boxShadow: `0 0 ${g.size * 3}px ${glowColor}`,
              animation: `float-particle ${g.duration}s ease-in-out ${-g.delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
