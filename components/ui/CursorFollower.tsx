"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CursorFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverState, setHoverState] = useState<"default" | "button" | "card">("default");

  // Mouse position values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring configuration (~100ms response)
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12); // Center the 24px cursor
      cursorY.set(e.clientY - 12);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isCard = target.closest('[data-cursor="card"]');
      const isButtonOrLink = target.closest('button, a');

      if (isCard) {
        setHoverState("card");
      } else if (isButtonOrLink) {
        setHoverState("button");
      } else {
        setHoverState("default");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  // State-based styles
  const states = {
    default: {
      scale: 1,
      borderWidth: "1px",
      boxShadow: "0 0 0px 0px rgba(184, 137, 60, 0)",
    },
    button: {
      scale: 1.3,
      borderWidth: "1px",
      boxShadow: "0 0 10px 2px rgba(184, 137, 60, 0.4)",
    },
    card: {
      scale: 1.4,
      borderWidth: "2px",
      boxShadow: "0 0 0px 0px rgba(184, 137, 60, 0)",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[100] border-[#B8893C] bg-[#B8893C]/10 backdrop-blur-[1px] mix-blend-normal"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      animate={states[hoverState]}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    />
  );
};
