"use client";
import { useEffect, useRef } from "react";

export default function useSnapScroll() {
  const lenisRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const isSnappingRef = useRef(false);
  const lastScrollTimeRef = useRef(0);

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    const initLenis = async () => {
      const { default: Lenis } = await import("@studio-freight/lenis");
      
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      const getSections = () => {
        return Array.from(document.querySelectorAll("section[id]")).filter(
          (section) => section.offsetHeight > 100
        );
      };

      const findClosestSection = () => {
        const sections = getSections();
        if (sections.length === 0) return null;

        const currentScroll = window.scrollY;
        const viewportHeight = window.innerHeight;
        const viewportCenter = currentScroll + viewportHeight / 2;

        let closestSection = null;
        let minDistance = Infinity;

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = currentScroll + rect.top;
          const sectionBottom = sectionTop + rect.height;
          const sectionCenter = sectionTop + rect.height / 2;

          // Calculate distance from viewport center to section center
          const distanceToCenter = Math.abs(viewportCenter - sectionCenter);
          
          // Prefer sections that are partially visible
          const isPartiallyVisible = 
            sectionTop < currentScroll + viewportHeight && 
            sectionBottom > currentScroll;
          
          // Weight factor for visible sections
          const visibilityWeight = isPartiallyVisible ? 0.6 : 1;
          
          // Additional weight for sections that are more centered
          const centerWeight = distanceToCenter < viewportHeight / 3 ? 0.8 : 1;
          
          const weightedDistance = distanceToCenter * visibilityWeight * centerWeight;

          if (weightedDistance < minDistance) {
            minDistance = weightedDistance;
            closestSection = section;
          }
        });

        return closestSection;
      };

      const snapToNearest = () => {
        if (isSnappingRef.current) return;

        const closestSection = findClosestSection();
        if (!closestSection) return;

        const currentScroll = window.scrollY;
        const rect = closestSection.getBoundingClientRect();
        const sectionTop = currentScroll + rect.top;
        
        // Only snap if we're not already very close to the section
        const threshold = 80;
        if (Math.abs(currentScroll - sectionTop) < threshold) return;

        isSnappingRef.current = true;
        
        lenisRef.current.scrollTo(sectionTop, {
          duration: 0.8,
          easing: (t) => 1 - Math.pow(1 - t, 3),
          onComplete: () => {
            isSnappingRef.current = false;
          },
        });
      };

      const handleScroll = () => {
        const now = Date.now();
        lastScrollTimeRef.current = now;
        
        clearTimeout(scrollTimeoutRef.current);
        
        if (!isSnappingRef.current) {
          scrollTimeoutRef.current = setTimeout(() => {
            // Only snap if no recent scroll activity
            if (Date.now() - lastScrollTimeRef.current >= 150) {
              snapToNearest();
            }
          }, 150);
        }
      };

      lenisRef.current.on("scroll", handleScroll);

      const raf = (time) => {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      if (lenisRef.current) {
        lenisRef.current.off("scroll");
        lenisRef.current.destroy();
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Return utility functions for external use
  return {
    scrollTo: (target) => {
      if (lenisRef.current && !isSnappingRef.current) {
        lenisRef.current.scrollTo(target, { duration: 0.8 });
      }
    },
    isSnapping: () => isSnappingRef.current,
  };
}