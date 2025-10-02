"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useSmoothScroll(refs = []) {
  useEffect(() => {
    // Setup Lenis with snap scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Add snap scrolling behavior
    let isScrolling = false;
    let scrollTimeout;

    const sections = document.querySelectorAll('section');
    
    const snapToSection = () => {
      if (isScrolling) return;
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      let closestSection = null;
      let closestDistance = Infinity;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = scrollY + rect.top;
        const distance = Math.abs(scrollY - sectionTop);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });
      
      if (closestSection && closestDistance > 50) {
        isScrolling = true;
        lenis.scrollTo(closestSection, {
          duration: 1.2,
          onComplete: () => {
            isScrolling = false;
          }
        });
      }
    };

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(snapToSection, 150);
    };

    window.addEventListener('scroll', handleScroll);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // IntersectionObserver for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.style.opacity = 1;
          target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    refs.forEach((ref) => ref.current && observer.observe(ref.current));

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [refs]);
}
