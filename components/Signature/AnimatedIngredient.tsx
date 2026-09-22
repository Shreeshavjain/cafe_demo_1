"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedIngredientProps {
  src: string;
  alt: string;
  className: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  rotation?: number;
  scale?: number;
  opacity?: number;
  floatY?: number;
  floatDuration?: number;
  floatDelay?: number;
}

export const AnimatedIngredient = ({
  src,
  alt,
  className,
  fill,
  width,
  height,
  sizes,
  rotation = 0,
  scale = 1,
  opacity = 1,
  floatY = 5,
  floatDuration = 4,
  floatDelay = 0,
}: AnimatedIngredientProps) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ rotate: rotation, scale, opacity }}
      animate={{
        y: [0, -floatY, 0],
      }}
      transition={{
        y: {
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        },
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        className={fill ? "object-contain" : ""}
        unoptimized
      />
    </motion.div>
  );
};
