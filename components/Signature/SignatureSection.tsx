import Link from "next/link";
import { FoodComposition } from "./FoodComposition";

export const SignatureSection = () => {
  return (
    <section id="signature" className="relative w-full min-h-screen bg-[#FAF8F4] flex items-center overflow-hidden py-24 lg:py-32">
      
      {/* LAYER 2: Huge Typography Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h2 className="text-[18vw] md:text-[22vw] lg:text-[25vw] font-serif font-bold text-[#1F1B18] opacity-[0.03] uppercase tracking-widest leading-none select-none whitespace-nowrap">
          ARTISAN
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LAYER 6: Content (Left Column) */}
          <div className="relative z-40 flex flex-col items-start justify-center">
            
            {/* Small accent line & Since 2026 */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#B8893C]" />
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-[#1F1B18]/70">
                Since 2026
              </span>
            </div>
            
            {/* Large heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F1B18] leading-[1.1] tracking-wide mb-8">
              The Mastery of <br />
              <span className="italic font-light text-[#B8893C]">Flavour</span>
            </h2>
            
            {/* Paragraph */}
            <p className="text-base md:text-lg text-[#1F1B18]/70 font-light leading-relaxed max-w-lg mb-12">
              Our culinary philosophy is rooted in authenticity and innovation. 
              Every ingredient is carefully sourced, and every dish is a masterpiece 
              designed to delight the senses and evoke timeless memories.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <Link
                href="#menu"
                className="inline-flex w-full sm:w-auto items-center justify-center bg-[#B8893C] px-8 py-3.5 text-sm font-medium text-white hover:bg-[#a07632] transition-colors uppercase tracking-[0.2em]"
              >
                Our Menu
              </Link>
              <Link
                href="#story"
                className="inline-flex w-full sm:w-auto items-center justify-center border border-[#1F1B18]/20 bg-transparent px-8 py-3.5 text-sm font-medium text-[#1F1B18] hover:bg-[#1F1B18]/5 transition-colors uppercase tracking-[0.2em]"
              >
                Our Story
              </Link>
            </div>
          </div>
          
          {/* RIGHT: Food Composition */}
          <FoodComposition />
        </div>
      </div>
    </section>
  );
};
