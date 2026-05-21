import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import music from "../assets/music.mp3.mp3";

export function MusicToggle({ active }: { active: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    let intervalId: number | undefined;
    const fadeIn = () => {
      a.volume = 0;
      a.play()
        .then(() => {
          setPlaying(true);
          let v = 0;
          intervalId = window.setInterval(() => {
            v = Math.min(0.4, v + 0.02);
            a.volume = v;
            if (v >= 0.4 && intervalId !== undefined) {
              window.clearInterval(intervalId);
            }
          }, 120);
        })
        .catch(() => {
          setPlaying(false);
        });
    };

    const timeoutId = active ? window.setTimeout(fadeIn, 500) : undefined;
    if (!active) {
      a.pause();
      a.currentTime = 0;
      setPlaying(false);
    }

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [active]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.volume = 0.4;
      a.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  if (!active) return null;

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src={music}
      />
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-royal/30 bg-[#fdfbf7]/75 text-royal backdrop-blur-md shadow-lg transition-all hover:scale-105 duration-300 hover:bg-royal/5"
      >
        {playing ? (
          <span className="text-royal text-xl font-bold animate-pulse-music">♫</span>
        ) : (
          <span className="text-royal/50 text-xl font-bold">♫</span>
        )}
      </motion.button>
    </>
  );
}
