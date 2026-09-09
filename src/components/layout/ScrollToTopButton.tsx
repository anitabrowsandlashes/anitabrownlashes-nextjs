"use client";

import { useEffect, useState } from "react";

/**
 * Kleiner „Nach oben"-Button. Erscheint erst, wenn weiter nach unten
 * gescrollt wurde, und sitzt oberhalb des WhatsApp-Buttons in der rechten
 * unteren Ecke. Nutzt nur CSS-Transitions und respektiert
 * `prefers-reduced-motion` (kein weiches Scrollen, keine Hover-Skalierung).
 */
export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Nach oben scrollen"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed right-5 bottom-[5.25rem] z-40 flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/95 text-orchid shadow-[0_8px_20px_-10px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-orchid-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orchid motion-reduce:transition-none md:right-7 md:bottom-[6.75rem] md:h-12 md:w-12 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 md:h-[22px] md:w-[22px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
