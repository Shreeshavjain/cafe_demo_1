"use client";

import Link from "next/link";
import { handleScrollToSection } from "@/lib/utils";

interface ReserveButtonProps {
  isLight?: boolean;
  isActive?: boolean;
  className?: string;
  text?: string;
}

export const ReserveButton = ({ 
  isLight = true, 
  isActive = false, 
  className = "", 
  text = "Reservation" 
}: ReserveButtonProps) => {
  const btnBorder = isLight ? "border-espresso/30" : "border-white/30";
  const btnBg = isLight ? "bg-espresso/5" : "bg-white/10";
  const btnText = isLight ? "text-espresso" : "text-white/90";

  return (
    <Link 
      href="#contact" 
      onClick={(e) => handleScrollToSection(e, "contact")}
      className={`inline-flex items-center justify-center border ${
        isActive ? "border-crema-orange bg-crema-orange text-white" : `${btnBorder} ${btnBg} ${btnText}`
      } px-7 py-3 text-xs font-semibold hover:bg-crema-orange hover:border-crema-orange hover:text-white transition-all duration-500 uppercase tracking-[0.15em] outline-none shadow-sm hover:shadow-md ${className}`}
    >
      {text}
    </Link>
  );
};
