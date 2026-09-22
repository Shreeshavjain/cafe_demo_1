"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChefCard } from "./ChefCard";
import { motion } from "framer-motion";

const CHEFS_DATA = [
  {
    id: "chef-1",
    name: "Alessandro Ricci",
    role: "Executive Chef",
    cuisine: "Italian Cuisine",
    experience: "18 Years Experience",
    speciality: "Wood-fired Pizza & Handmade Pasta",
    description: "Known for combining authentic Italian recipes with modern presentation and locally sourced ingredients.",
    imageUrl: "/images/chefs/chef1.png",
    social: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: "chef-2",
    name: "Mei Lin",
    role: "Executive Pastry Chef",
    cuisine: "French-Asian Fusion",
    experience: "12 Years Experience",
    speciality: "Artisanal Entremets & Sugar Work",
    description: "An artist of the sweet kitchen, blending delicate Asian flavors with classic French pastry techniques.",
    imageUrl: "/images/chefs/chef2.png",
    social: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: "chef-3",
    name: "Kenji Sato",
    role: "Master Sushi Chef",
    cuisine: "Japanese Omakase",
    experience: "25 Years Experience",
    speciality: "Edomae Sushi & Knife Skills",
    description: "A purist dedicated to the craft, honoring centuries-old traditions to create unforgettable sushi experiences.",
    imageUrl: "/images/chefs/chef3.png",
    social: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: "chef-4",
    name: "Julien Dubois",
    role: "Chef de Cuisine",
    cuisine: "Modern French",
    experience: "15 Years Experience",
    speciality: "Sauce Making & Gastronomy",
    description: "Elevating rustic French classics into Michelin-worthy masterpieces with unparalleled attention to detail.",
    imageUrl: "/images/chefs/chef4.png",
    social: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: "chef-5",
    name: "Amara Okeke",
    role: "Sous Chef",
    cuisine: "Contemporary Global",
    experience: "10 Years Experience",
    speciality: "Flavor Profiling & Fermentation",
    description: "A rising star bringing bold, complex flavor profiles and innovative preservation techniques to our menu.",
    imageUrl: "/images/chefs/chef5.png",
    social: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: "chef-6",
    name: "Mateo Vargas",
    role: "Grill Master",
    cuisine: "Argentinian & Wood-fire",
    experience: "14 Years Experience",
    speciality: "Open-fire Cooking & Dry Aging",
    description: "Mastering the primal art of fire, coaxing extraordinary flavors from the finest cuts of meat and vegetables.",
    imageUrl: "/images/chefs/chef6.png",
    social: {
      facebook: "#",
      instagram: "#",
    },
  },
];

// ─── Mobile Carousel with Pagination Dots ───────────────────────────────────

function MobileChefCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track active slide with IntersectionObserver (threshold 0.55 = majority in view)
  useEffect(() => {
    const items = itemRefs.current.filter(Boolean);
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      {
        root: scrollRef.current,
        // A card is "active" when more than 55% of it is visible
        threshold: 0.55,
      }
    );

    items.forEach((item) => observer.observe(item!));
    return () => observer.disconnect();
  }, []);

  // Dot click → programmatic scroll to that card
  const scrollToIndex = useCallback((idx: number) => {
    const el = itemRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, []);

  return (
    <div className="flex flex-col items-center w-full py-8 pb-12">
      {/*
        Carousel track
        ──────────────
        • overflow-x-auto + snap-x: native momentum swipe
        • px-[7vw]: creates the peek effect — the 7vw padding on each side
          allows the adjacent card edges to bleed into view, signalling
          that there are more cards to swipe through
        • scroll-padding-x: keeps the snap target centred within the padded track
        • hide-scrollbar: suppresses the browser scrollbar chrome
      */}
      <div
        ref={scrollRef}
        className="
          flex w-full overflow-x-auto
          snap-x snap-mandatory
          hide-scrollbar
          scroll-smooth
          px-[7vw]
          gap-4
        "
        style={{ scrollPaddingLeft: "7vw", scrollPaddingRight: "7vw" }}
      >
        {CHEFS_DATA.map((chef, idx) => (
          <div
            key={chef.id}
            ref={(el) => { itemRefs.current[idx] = el; }}
            className="
              snap-center
              shrink-0
              w-[86vw]
              flex flex-col
            "
          >
            <ChefCard chef={chef} />
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-[10px] mt-6" role="tablist" aria-label="Chef slides">
        {CHEFS_DATA.map((chef, idx) => (
          <motion.button
            key={chef.id}
            role="tab"
            aria-label={`Go to ${chef.name}`}
            aria-selected={activeIndex === idx}
            onClick={() => scrollToIndex(idx)}
            animate={{
              width: activeIndex === idx ? 24 : 8,
              opacity: activeIndex === idx ? 1 : 0.35,
              backgroundColor: activeIndex === idx ? "#B96D40" : "#1F1A17",
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-[8px] rounded-full cursor-pointer border-none p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B96D40]"
          />
        ))}
      </div>
    </div>
  );
}

// ─── Desktop Grid (unchanged) ────────────────────────────────────────────────

function DesktopChefGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full px-6 lg:px-8 py-16">
      {CHEFS_DATA.map((chef) => (
        <ChefCard key={chef.id} chef={chef} />
      ))}
    </div>
  );
}

// ─── Exported component: mobile carousel below md, desktop grid at md+ ───────

export function ChefGrid() {
  return (
    <>
      {/* Mobile only */}
      <div className="block md:hidden w-full">
        <MobileChefCarousel />
      </div>
      {/* Desktop only */}
      <div className="hidden md:block w-full">
        <DesktopChefGrid />
      </div>
    </>
  );
}

