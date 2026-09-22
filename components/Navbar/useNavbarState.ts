"use client";

import { useEffect, useState, useRef, useCallback } from "react";

type NavState = "transparent" | "solid" | "hidden";

const SECTIONS = ["hero", "menu", "chefs", "gallery", "about", "contact"];
const NEAR_TOP_THRESHOLD = 120;
const SCROLL_DELTA_THRESHOLD = 5; // Minimum px moved to register as intentional scroll
const IDLE_TIMEOUT = 250; // ms before navbar reappears on idle

interface NavbarState {
  navState: NavState;
  activeSection: string;
  isAtTop: boolean;
}

export const useNavbarState = (): NavbarState => {
  const [navState, setNavState] = useState<NavState>("transparent");
  const [activeSection, setActiveSection] = useState("hero");

  const lastScrollY = useRef(0);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ticking = useRef(false);

  // ─── Scroll Direction + State Machine ───────────────────────────
  const updateNavState = useCallback(() => {
    const currentY = window.scrollY;
    const delta = currentY - lastScrollY.current;
    const isNearTop = currentY < NEAR_TOP_THRESHOLD;

    // Rule 1: Near the top → always transparent, never hide
    if (isNearTop) {
      setNavState("transparent");
      lastScrollY.current = currentY;
      ticking.current = false;
      return;
    }

    // Ignore micro-scrolls (jitter, touchpad noise)
    if (Math.abs(delta) < SCROLL_DELTA_THRESHOLD) {
      ticking.current = false;
      return;
    }

    // Rule 2: Scrolling down past threshold → hide
    if (delta > 0) {
      setNavState("hidden");
    }
    // Rule 3: Scrolling up → show solid
    else {
      setNavState("solid");
    }

    lastScrollY.current = currentY;
    ticking.current = false;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      // Clear any pending idle timer on every scroll event
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }

      // Rule 5: If user stops scrolling for 250ms → reappear
      idleTimer.current = setTimeout(() => {
        const currentY = window.scrollY;
        if (currentY < NEAR_TOP_THRESHOLD) {
          setNavState("transparent");
        } else {
          setNavState("solid");
        }
      }, IDLE_TIMEOUT);

      // Throttle via rAF to stay at 60fps
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateNavState);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [updateNavState]);

  // ─── Active Section via IntersectionObserver ────────────────────
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return {
    navState,
    activeSection,
    isAtTop: navState === "transparent",
  };
};
