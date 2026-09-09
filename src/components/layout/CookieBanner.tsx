"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/**
 * Dezenter Hinweis statt vollflächigem Banner: Die Seite setzt keine eigenen
 * Cookies und kein Tracking (kein GA4/Pixel). Lokal gespeichert wird nur, dass
 * der Hinweis geschlossen wurde (localStorage-Flag unten). Daher reicht ein
 * reiner Hinweis mit Bestätigung statt Accept/Reject. Sobald Tracking
 * dazukommt, muss dies um ein echtes Consent-Gate erweitert werden (siehe
 * CookieBanner in javera-studio als Referenzmuster).
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("cookie_notice_dismissed");
    // localStorage ist erst nach dem Mount verfügbar (SSR kennt den Wert
    // nicht) – das Setzen hier verhindert einen Hydration-Mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!dismissed) setVisible(true);
  }, []);

  function dismiss() {
    localStorage.setItem("cookie_notice_dismissed", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      className="fixed bottom-5 left-5 z-40 max-w-[290px] rounded-2xl border border-ink/10 bg-white/95 p-4 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-sm md:bottom-7 md:left-7"
    >
      <p className="text-[0.82rem] leading-relaxed text-ink-soft">
        Diese Website verwendet keine Analyse- oder Tracking-Cookies. Lokal
        gespeichert wird nur, dass du diesen Hinweis geschlossen hast.{" "}
        <Link
          href="/datenschutz"
          className="text-orchid underline underline-offset-2 hover:text-orchid-hover"
        >
          Mehr erfahren
        </Link>
      </p>
      <button
        type="button"
        onClick={dismiss}
        className="mt-3 inline-flex h-9 items-center justify-center rounded-full bg-orchid px-5 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-orchid-hover"
      >
        Verstanden
      </button>
    </div>
  );
}
