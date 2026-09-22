"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { AnimatedIngredient } from "./AnimatedIngredient";

export const FoodComposition = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Luxury motion: smooth spring, high damping
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 15,
    mass: 1,
  });

  // Pesto Bowl scroll animations
  const rawBowlRotate = useTransform(smoothProgress, [0, 1], [-15, 15]);
  const rawBowlY = useTransform(smoothProgress, [0, 1], [35, -35]);

  // Handle reduced motion
  const bowlRotate = shouldReduceMotion ? 0 : rawBowlRotate;
  const bowlY = shouldReduceMotion ? 0 : rawBowlY;

  return (
    <div ref={containerRef} className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
      
      {/* LAYER 3: Main Pizza (Static) */}
      <div className="absolute inset-0 m-auto w-[100%] h-[100%] z-10">
        <Image
          src="/images/signature/pizza-main.png"
          alt="Signature Pizza"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
          unoptimized
          priority
        />
      </div>

      {/* LAYER 4: Pesto Bowl (Scroll Animated + Floating) */}
      <motion.div
        className="absolute top-[calc(2%-15px)] left-[calc(2%-20px)] w-[33%] h-[33%] z-20"
        style={{
          rotate: bowlRotate,
          y: bowlY,
        }}
      >
        <motion.div
          className="w-full h-full relative"
          animate={{ y: shouldReduceMotion ? 0 : [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/signature/pesto-bowl.png"
            alt="Pesto Bowl"
            fill
            sizes="(max-width: 768px) 35vw, 15vw"
            className="object-contain"
            unoptimized
          />
        </motion.div>
      </motion.div>

      {/* LAYER 5: Floating Decorations */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* Basil Leaves (Movement increased 20%, strict organic stagger) */}
        <AnimatedIngredient src="/images/signature/basil-leaf.png" alt="Basil Leaf" className="top-[15%] left-[30%] w-[12%] h-[12%]" rotation={15} scale={1.1} opacity={0.95} floatY={4.8} floatDuration={7.2} floatDelay={0.3} fill />
        <AnimatedIngredient src="/images/signature/basil-leaf.png" alt="Basil Leaf" className="top-[40%] right-[8%] w-[10%] h-[10%]" rotation={-45} scale={0.9} opacity={0.85} floatY={3.6} floatDuration={6.4} floatDelay={0.6} fill />
        <AnimatedIngredient src="/images/signature/basil-leaf.png" alt="Basil Leaf" className="bottom-[25%] left-[8%] w-[14%] h-[14%]" rotation={70} scale={1} opacity={1} floatY={6} floatDuration={8.5} floatDelay={0.9} fill />
        <AnimatedIngredient src="/images/signature/basil-leaf.png" alt="Basil Leaf" className="top-[5%] right-[25%] w-[11%] h-[11%]" rotation={-15} scale={1.05} opacity={0.9} floatY={4.8} floatDuration={7.8} floatDelay={1.2} fill />

        {/* Coffee Beans (8-12 duplicates scattered) */}
        <AnimatedIngredient src="/images/signature/coffee-bean.png" alt="Coffee Bean" className="top-[5%] left-[45%] w-[4%] h-[4%]" rotation={20} scale={1} opacity={0.8} floatY={2} floatDuration={4} floatDelay={0} fill />
        <AnimatedIngredient src="/images/signature/coffee-bean.png" alt="Coffee Bean" className="top-[25%] left-[5%] w-[5%] h-[5%]" rotation={-30} scale={1.1} opacity={0.9} floatY={3} floatDuration={5} floatDelay={1} fill />
        <AnimatedIngredient src="/images/signature/coffee-bean.png" alt="Coffee Bean" className="top-[12%] right-[5%] w-[4%] h-[4%]" rotation={80} scale={0.9} opacity={0.75} floatY={2} floatDuration={4.5} floatDelay={0.5} fill />
        <AnimatedIngredient src="/images/signature/coffee-bean.png" alt="Coffee Bean" className="top-[35%] right-[2%] w-[4.5%] h-[4.5%]" rotation={110} scale={1.2} opacity={0.95} floatY={2.5} floatDuration={5.5} floatDelay={1.5} fill />
        <AnimatedIngredient src="/images/signature/coffee-bean.png" alt="Coffee Bean" className="bottom-[45%] left-[2%] w-[3.5%] h-[3.5%]" rotation={-70} scale={0.8} opacity={0.7} floatY={2} floatDuration={4} floatDelay={2} fill />
        <AnimatedIngredient src="/images/signature/coffee-bean.png" alt="Coffee Bean" className="bottom-[15%] left-[4%] w-[5%] h-[5%]" rotation={45} scale={1} opacity={1} floatY={3} floatDuration={6} floatDelay={0.2} fill />
        <AnimatedIngredient src="/images/signature/coffee-bean.png" alt="Coffee Bean" className="bottom-[5%] left-[25%] w-[4%] h-[4%]" rotation={15} scale={0.9} opacity={0.85} floatY={2.5} floatDuration={4.8} floatDelay={1.2} fill />
        <AnimatedIngredient src="/images/signature/coffee-bean.png" alt="Coffee Bean" className="bottom-[8%] right-[15%] w-[5.5%] h-[5.5%]" rotation={-50} scale={1.1} opacity={0.9} floatY={3} floatDuration={5.2} floatDelay={0.8} fill />
        <AnimatedIngredient src="/images/signature/coffee-bean.png" alt="Coffee Bean" className="bottom-[30%] right-[5%] w-[4%] h-[4%]" rotation={135} scale={0.85} opacity={0.75} floatY={2} floatDuration={4.5} floatDelay={2.5} fill />

        {/* Rosemary (Moved closer to pizza: ~40px left, 20px up) */}
        <AnimatedIngredient src="/images/signature/rosemary.png" alt="Rosemary" className="bottom-[calc(-5%+20px)] right-[calc(-5%+40px)] w-[40%] h-[40%]" rotation={-15} scale={1} opacity={0.95} floatY={2.5} floatDuration={12} floatDelay={1.5} fill />
      </div>

    </div>
  );
};
