"use client";

import { useState } from "react";

interface MapEmbedProps {
  src: string;
  title: string;
}

/**
 * Google Maps wird erst nach aktivem Klick geladen (Click-to-Load). Vor dem
 * Klick besteht keine Verbindung zu Google – der iframe wird erst dann in den
 * DOM eingefügt (kein vorab gerendertes/verstecktes iframe, kein Preconnect,
 * kein Script-Preload). Es wird keine Zustimmung gespeichert; nach einem
 * erneuten Seitenaufruf erscheint wieder der Platzhalter.
 */
export function MapEmbed({ src, title }: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer"
        className="block h-full min-h-[420px] w-full"
        style={{ border: 0 }}
      />
    );
  }

  return (
    <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-3 bg-white/5 px-6 py-10 text-center">
      <p className="font-serif text-lg text-white">
        Standort auf Google Maps anzeigen
      </p>
      <p className="max-w-xs text-sm leading-relaxed text-white/60">
        Beim Laden der Karte werden Daten an Google übertragen.
      </p>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="mt-2 inline-flex h-12 items-center justify-center bg-white px-7 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-rose focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Karte laden
      </button>
    </div>
  );
}
