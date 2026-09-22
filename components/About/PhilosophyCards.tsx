"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    title: "The Craft",
    description: "Every cup is a testament to the slow, deliberate art of coffee making. We honor the process as much as the result."
  },
  {
    title: "The Quality",
    description: "From ethically sourced beans to our curated ceramics, we select every element with an uncompromising standard."
  },
  {
    title: "The Experience",
    description: "Beyond taste, we design moments. A space where architecture and hospitality create a sanctuary from the noise."
  }
];

export const PhilosophyCards = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {CARDS.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
            className="group relative border border-[#F2EFE9] p-8 md:p-12 hover:border-[#B96D40] transition-colors duration-500 bg-white/50 backdrop-blur-sm"
          >
            {/* Minimalist index number */}
            <span className="text-[#B96D40] font-serif text-2xl mb-8 block opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              0{idx + 1}
            </span>
            <h3 className="font-serif text-[#1F1A17] text-2xl md:text-3xl mb-4">
              {card.title}
            </h3>
            <p className="font-sans text-[#756A63] leading-relaxed text-sm md:text-base">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
