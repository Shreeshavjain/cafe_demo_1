"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// New Components for the Redesigned About Section
import { BackgroundNoise } from "./BackgroundNoise";
import { AboutHero } from "./AboutHero";
import { PhilosophyCards } from "./PhilosophyCards";
import { ImmersiveImage } from "./ImmersiveImage";

export const AboutSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress across the entire About section
  // "start start" -> Top of section hits top of viewport
  // "end end" -> Bottom of section hits bottom of viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <motion.section 
      ref={containerRef}
      id="about" 
      className="relative w-full text-[#1F1A17]"
    >
      <BackgroundNoise />
      
      {/* Top Spacer for breathing room after the previous section */}
      <div className="h-[15vh] w-full" />
      
      {/* Core Content */}
      <div className="relative z-10 w-full">
        <AboutHero />
        <PhilosophyCards />
      </div>

      {/* Immersive Image that acts as a bridge to the Contact section */}
      <div className="relative z-0 w-full">
        <ImmersiveImage />
      </div>

    </motion.section>
  );
};
