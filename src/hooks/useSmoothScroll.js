"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });





    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}

// Export Lenis instance for external use if needed
export { Lenis };
