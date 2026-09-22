"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

export const HeroAmbientGlow = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // On mobile: render a static CSS radial gradient (no animation, no blur filter)
  // This eliminates the expensive GPU texture allocation during hero image decode
  if (isMobile) {
    return (
      <div className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className="pointer-events-none rounded-full opacity-[0.18]"
          style={{
            width: "min(120vw, 600px)",
            height: "min(120vw, 600px)",
            background:
              "radial-gradient(circle, rgba(230, 190, 90, 0.6) 0%, rgba(214, 170, 72, 0.25) 40%, transparent 70%)",
            filter: "blur(80px)",
            willChange: "auto",
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none overflow-hidden">
      <motion.div
        className="pointer-events-none rounded-full"
        style={{
          width: "min(120vw, 1000px)",
          height: "min(120vw, 1000px)",
          background:
            "radial-gradient(circle, rgb(230, 190, 90) 0%, rgba(214, 170, 72, 0.55) 40%, transparent 70%)",
          filter: "blur(140px)",
          willChange: "transform, opacity",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.03, 1],
                opacity: [0.18, 0.24, 0.18],
              }
        }
        transition={{
          duration: 14,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
};
