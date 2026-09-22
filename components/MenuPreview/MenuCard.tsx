"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MenuItem } from "./menuData";

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard = ({ item }: MenuCardProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      data-cursor="card"
      className="group flex items-center gap-4 sm:gap-6 p-2 sm:p-4 rounded-2xl hover:bg-[#1F1B18]/[0.02] transition-colors duration-300 cursor-pointer w-full"
      whileHover={shouldReduceMotion ? undefined : { x: 6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Circular Image Container - Larger on mobile */}
      <div className="relative w-[5.5rem] h-[5.5rem] sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden border border-[#1F1B18]/10 bg-white shadow-sm">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 88px, 80px"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06]"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center min-w-0 py-1">
        <div className="flex items-baseline justify-between gap-3 mb-1">
          <h3 className="font-serif text-[1.35rem] sm:text-xl text-[#1F1B18] truncate leading-tight">
            {item.name}
          </h3>
          <span className="font-medium text-[#B8893C] text-[1.1rem] sm:text-lg opacity-90 transition-opacity duration-300 group-hover:opacity-100 shrink-0">
            ₹{item.price}
          </span>
        </div>
        <p className="text-[0.95rem] sm:text-sm font-light text-[#1F1B18]/65 line-clamp-2 leading-[1.4] sm:leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};
