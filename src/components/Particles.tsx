import { useMemo } from "react";
import { createSeededRandom } from "@/lib/deterministic";

export function Particles({ count = 40 }: { count?: number }) {
  const particles = useMemo(
    () => {
      const random = createSeededRandom(512 + count);

      return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: random() * 100,
        top: random() * 100,
        size: random() * 3 + 1,
        delay: random() * 8,
        duration: random() * 10 + 8,
        opacity: random() * 0.5 + 0.2,
      }));
    },
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => {
        const bgClass = p.id % 2 === 0 ? "bg-[#be2e3a]" : "bg-[#5a189a]";
        const glowColor = p.id % 2 === 0 ? "oklch(0.44 0.18 24 / 0.7)" : "oklch(0.35 0.15 310 / 0.7)";
        return (
          <span
            key={p.id}
            className={`absolute rounded-full ${bgClass}`}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              boxShadow: `0 0 ${p.size * 4}px ${glowColor}`,
              animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
