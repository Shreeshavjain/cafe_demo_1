"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const FacebookIcon = ({ size = 24, strokeWidth = 1.5 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24, strokeWidth = 1.5 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

interface ChefCardProps {
  chef: {
    id: string;
    name: string;
    role: string;
    cuisine: string;
    experience: string;
    speciality: string;
    description: string;
    imageUrl: string;
    social: {
      facebook: string;
      instagram: string;
    };
  };
}

const imageVariants: Variants = {
  rest: { opacity: 1, scale: 1 },
  hover: { 
    opacity: 0.92,
    scale: 1.02, 
    transition: { duration: 0.3, ease: "easeOut" } 
  }
};

const panelVariants: Variants = {
  rest: { y: 15, opacity: 0 },
  hover: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export function ChefCard({ chef }: ChefCardProps) {
  return (
    <motion.div
      className="relative flex flex-col h-[550px] lg:h-[600px] w-full overflow-hidden group"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Background Image Container */}
      <motion.div 
        className="flex-1 w-full flex items-end justify-center overflow-hidden z-0" 
        variants={imageVariants}
      >
        <Image
          src={chef.imageUrl}
          alt={chef.name}
          width={500}
          height={750}
          className="w-auto h-full object-contain object-bottom"
          priority={false}
        />
      </motion.div>

      {/* Floating Glass Panel (Over the waist/folded arms) */}
      <motion.div
        className="absolute inset-x-0 mx-auto top-[39%] w-[65%] flex flex-col items-center text-center py-5 px-4 z-20 pointer-events-none group-hover:pointer-events-auto bg-[rgba(253,251,247,0.72)] backdrop-blur-3xl rounded-[18px] shadow-[0_0_40px_rgba(185,109,64,0.12)] border border-white/20"
        variants={panelVariants}
      >
        <p className="text-espresso font-bold text-sm italic line-clamp-2 leading-relaxed tracking-wide">
          "{chef.description}"
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4 pt-3 border-t border-[#B96D40]/15 w-[70%] justify-center">
          <Link 
            href={chef.social.instagram}
            className="text-espresso hover:text-crema-orange hover:-translate-y-1 hover:scale-110 hover:opacity-90 transition-all duration-300"
          >
            <InstagramIcon size={24} strokeWidth={1.5} />
          </Link>
          <Link 
            href={chef.social.facebook}
            className="text-espresso hover:text-crema-orange hover:-translate-y-1 hover:scale-110 hover:opacity-90 transition-all duration-300"
          >
            <FacebookIcon size={24} strokeWidth={1.5} />
          </Link>
        </div>
      </motion.div>

      {/* Permanent Footer */}
      <div className="w-full flex flex-col items-center text-center pt-6 pb-2 z-10">
        <h3 className="font-heading text-2xl lg:text-3xl text-espresso font-bold tracking-wide">
          {chef.name}
        </h3>
        <p className="text-crema-orange font-bold text-xs lg:text-sm tracking-[0.2em] uppercase mt-2">
          {chef.role}
        </p>
      </div>
    </motion.div>
  );
}
