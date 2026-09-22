"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { Category, MENU_DATA } from "./menuData";
import { MenuCard } from "./MenuCard";

interface MenuGridProps {
  activeCategory: Category;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const MenuGrid = ({ activeCategory }: MenuGridProps) => {
  const items = MENU_DATA[activeCategory];

  return (
    <div className="relative w-full">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 lg:gap-x-12 lg:gap-y-8"
        >
          {items.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <MenuCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
