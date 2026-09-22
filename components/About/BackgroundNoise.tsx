"use client";

import { memo } from "react";

export const BackgroundNoise = memo(function BackgroundNoise() {
  return (
    <div 
      // pointer-events-none prevents this overlay from blocking clicks on the content below
      // mix-blend-multiply allows the noise to interact naturally with the background color
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.03] mix-blend-multiply"
      style={{
        // Using an inline SVG data URI avoids an external network request for a tiny texture
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
      aria-hidden="true"
    />
  );
});
