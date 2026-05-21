import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [role='button'], input, select, textarea, .cursor-pointer"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    // Initial hook
    addHoverListeners();

    // Hook dynamically added elements
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    // Only show custom cursor on screens supporting hover interactions
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      {/* Outer soft royal spring ring */}
      <motion.div
        className="fixed top-0 left-0 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-royal/60"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          boxShadow: isHovered ? "0 0 15px oklch(0.35 0.13 25 / 0.3)" : "none",
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? "oklch(0.35 0.13 25 / 0.08)" : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
      {/* Inner royal pinpoint dot */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 0.4 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
