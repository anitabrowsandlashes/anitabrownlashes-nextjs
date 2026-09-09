"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { studioGalleryImages } from "@/lib/data/studioGallery";

/**
 * Editorial-Collage: geschlossenes CSS-Grid ohne Lücken.
 * Desktop (sm+): 6-Spalten-Grid, fünf handgesetzte 6×3-Bänder – jedes Band füllt
 * seine drei Zeilen vollständig, dadurch saubere obere/untere Kante.
 * Mobile: 2-Spalten-Grid, Row-Span je Bild anhand der Ausrichtung bestimmt
 * (siehe mobileRowSpans unten) – lückenlos und mit unterschiedlichen Bildhöhen,
 * ohne dass object-cover Quer- oder Hochformat-Fotos stark beschneidet.
 * Reihenfolge/Anzahl der Bilder muss zu studioGalleryImages passen.
 */
const layout = [
  "sm:col-span-4 sm:row-span-3",
  "sm:col-span-2 sm:row-span-3",
  "sm:col-span-2 sm:row-span-3",
  "sm:col-span-4 sm:row-span-2",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-3",
  "sm:col-span-4 sm:row-span-2",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-3",
  "sm:col-span-2 sm:row-span-3",
  "sm:col-span-2 sm:row-span-3",
  "sm:col-span-3 sm:row-span-3",
  "sm:col-span-3 sm:row-span-3",
];

/**
 * Mobile Row-Span je Bild – orientierungsbasiert statt einem starren i%3-Zyklus:
 * Querformat-Fotos (Breite > Höhe) passen in die flache row-span-1-Zelle, sonst
 * würde ihre Breite in einer hohen, schmalen Zelle massiv beschnitten (object-cover
 * hätte dann nur noch einen schmalen Mittelstreifen gezeigt). Hochformat-Fotos
 * wechseln sich zwischen row-span-3/row-span-2 ab (behält die oben beschriebene
 * Höhenvarianz der Collage bei), da eine row-span-1-Zelle ihre Höhe zu stark
 * beschneiden würde.
 */
const mobileRowSpans: string[] = (() => {
  let portraitCount = 0;
  const spans = studioGalleryImages.map((img) => {
    if (img.width > img.height) return "row-span-1";
    const span = portraitCount % 2 === 0 ? "row-span-3" : "row-span-2";
    portraitCount += 1;
    return span;
  });
  // Die letzten beiden Kacheln liegen auf Mobile nebeneinander in der
  // Schlussreihe – gleiche Row-Span, damit die Collage unten bündig endet.
  if (spans.length >= 2) {
    spans[spans.length - 1] = spans[spans.length - 2];
  }
  return spans;
})();

export function StudioGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white pb-24 pt-[17px] md:pb-32 md:pt-[22px]">
      <div className="container-studio">
        <div className="mb-10 flex flex-col items-center gap-4 text-center md:mb-14">
          <Reveal>
            <span className="eyebrow">Studioeinblicke</span>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="max-w-xl font-serif text-[1.9rem] leading-[1.15] tracking-[0.01em] text-ink sm:text-4xl">
              Wo Präzision auf <em className="text-orchid not-italic">Erfahrung</em> trifft.
            </h3>
          </Reveal>
          <Reveal delay={180}>
            <p className="max-w-md text-base leading-relaxed text-ink-soft">
              Einblicke in meine Arbeit und die besondere Atmosphäre meines Studios.
            </p>
          </Reveal>
        </div>

        <div className="grid auto-rows-[128px] grid-cols-2 gap-4 sm:auto-rows-[150px] sm:grid-cols-6 sm:gap-[18px] md:auto-rows-[168px]">
          {studioGalleryImages.map((img, i) => {
            const wide = layout[i]?.includes("col-span-4");
            const half = layout[i]?.includes("col-span-3");
            return (
              <Reveal
                key={img.src}
                image
                delay={(i % 3) * 80}
                className={`relative overflow-hidden col-span-1 ${mobileRowSpans[i]} ${layout[i] ?? ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={img.alt}
                  className="group relative block h-full w-full overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading="lazy"
                    sizes={
                      wide
                        ? "(min-width: 640px) 55vw, 50vw"
                        : half
                          ? "(min-width: 640px) 42vw, 50vw"
                          : "(min-width: 640px) 30vw, 50vw"
                    }
                    style={{ objectPosition: img.focus }}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={studioGalleryImages}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
