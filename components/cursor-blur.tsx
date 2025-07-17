"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";

export const CursorBlur = () => {
  const { theme } = useTheme();

  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for the single blur layer
  const x = useSpring(mouseX, { damping: 10, stiffness: 400, mass: 0.08 });
  const y = useSpring(mouseY, { damping: 10, stiffness: 400, mass: 0.08 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  // Define color based on theme
  const isLight = theme === "light";
  const blurColor = isLight
    ? "#000" // white blur in dark mode
    : "#fff";     // black blur in light mode

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${blurColor} 0%, transparent 80%)`,
          filter: "blur(50px)",
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: 0.7,
        }}
      />
    </div>
  );
};
