"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export const AnimatedElement = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  className = "",
  as = "div",
}: AnimatedElementProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [hasHydrated, setHasHydrated] = useState(false);
  const MotionComponent = motion[as as keyof typeof motion] as any;

  useEffect(() => {
    // Signal that JS has hydrated — safe to animate
    setHasHydrated(true);
  }, []);

  // Before hydration: render fully visible (no FOIC)
  // After hydration: animate from invisible to visible
  return (
    <MotionComponent
      initial={hasHydrated ? { opacity: 0, y: shouldReduceMotion ? 0 : yOffset } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.4 : duration, 
        delay: shouldReduceMotion ? 0 : delay, 
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};
