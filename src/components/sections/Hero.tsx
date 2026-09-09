import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { AiLabel } from "@/components/ui/AiLabel";

const trustItems = [
  { title: "6 Jahre Erfahrung", text: "Langjährige Expertise in Lash- & Brow-Styling." },
  { title: "Premium-Produkte", text: "Ausschließlich hochwertige, ausgewählte Produkte." },
  { title: "Persönliche Beratung", text: "Individuell abgestimmt auf deine Wünsche." },
  { title: "Studio im 1. Bezirk", text: "Zentrale Lage im Herzen Wiens." },
];

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative flex h-[100svh] min-h-[680px] w-full flex-col overflow-hidden bg-ink max-sm:h-auto max-sm:min-h-0">
        {/*
          Bild-Wrapper: Desktop/Tablet unverändert (absolute inset-0 = full-bleed
          Hintergrund wie bisher). Mobile bekommt eine eigene, deutlich kürzere
          Bildhöhe (max-sm:h-[320px], normaler Flow statt absolute) – dadurch
          zeigt object-cover die volle Bildhöhe und deutlich mehr Bildbreite, statt
          fast nur die mittlere Frau. Kein neuer Bild-Crop nötig, da bei dieser
          Boxhöhe bereits die komplette Bildhöhe sichtbar bleibt (nur die Ränder
          links/rechts werden noch leicht beschnitten).
        */}
        <div className="absolute inset-0 max-sm:relative max-sm:inset-auto max-sm:h-[320px] max-sm:w-full max-sm:shrink-0 max-sm:overflow-hidden">
          <Image
            src="/images/heromain.webp"
            alt="Drei lächelnde Frauen mit gepflegten Wimpern und Augenbrauen"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <AiLabel />

          {/* Mobile-only: weicher dunkler Verlauf am unteren Bildrand, geht nahtlos
              in den bg-ink Hintergrund darunter über (kein harter Bild/Text-Schnitt mehr). */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[210px] max-sm:block"
            style={{
              background:
                "linear-gradient(to bottom, rgba(22,18,26,0) 0%, rgba(22,18,26,0.5) 52%, rgba(22,18,26,0.88) 78%, #16121a 100%)",
            }}
            aria-hidden
          />

          {/* Mobile-only: Eyebrow + Headline liegen jetzt im unteren, dunkel
              verlaufenden Bildbereich, statt in der separaten Ink-Section darunter. */}
          <div className="absolute inset-x-0 bottom-0 z-10 hidden px-6 pb-5 text-center text-white max-sm:block">
            <Reveal duration={1400}>
              <span className="inline-flex items-center gap-3 text-xs">
                <span className="h-px w-8 bg-white/70" />
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/90">
                  Lash &amp; Brow Studio · Wien 1010
                </span>
                <span className="h-px w-8 bg-white/70" />
              </span>
            </Reveal>

            <Reveal delay={240} duration={1400}>
              <h1
                className="mt-4 font-serif text-[2.47rem] leading-[1.1] tracking-[0.01em] text-balance"
                style={{ textShadow: "0 2px 18px rgba(0,0,0,0.22)" }}
              >
                Ein Blick, der <em className="text-accent-on-dark not-italic">bleibt</em>.
              </h1>
            </Reveal>
          </div>
        </div>

        {/* Vertical overlay: transparent/light on top and middle, warm dark only in the lower third.
            Nur Desktop/Tablet – Mobile hat einen eigenen Verlauf im Bild-Wrapper oben. */}
        <div
          className="pointer-events-none absolute inset-0 max-sm:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,12,8,0) 0%, rgba(20,12,8,0) 46%, rgba(36,20,14,0.32) 64%, rgba(26,15,11,0.72) 82%, rgba(22,13,10,0.85) 100%)",
          }}
        />

        {/* Spacer keeps the top ~60% of the hero (faces, hair) completely clear.
            Nur Desktop/Tablet – auf Mobile übernimmt die eigene Bildhöhe oben diese Funktion. */}
        <div className="basis-[54%] shrink-0 sm:basis-[57%] lg:basis-[60%] max-sm:hidden" aria-hidden />

        {/* Textblock: Desktop/Tablet unverändert (transparent, liegt auf dem Bild).
            Mobile: Eyebrow + Headline sind ausgeblendet (liegen bereits im Bild-Wrapper oben),
            hier bleiben nur Beschreibung + Bewertung im Ink-Block. */}
        <div className="relative z-10 flex flex-1 justify-center px-6 max-sm:bg-ink max-sm:pt-7 max-sm:pb-14">
          <div className="-mt-[1cm] w-full max-w-[820px] text-center text-white max-sm:mt-0">
            <Reveal duration={1400} className="max-sm:hidden">
              <span className="inline-flex items-center gap-3 text-xs">
                <span className="h-px w-8 bg-white/70" />
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/90">
                  Lash &amp; Brow Studio · Wien 1010
                </span>
                <span className="h-px w-8 bg-white/70" />
              </span>
            </Reveal>

            <Reveal delay={240} duration={1400} className="max-sm:hidden">
              <h1 className="mt-5 font-serif text-[2.47rem] leading-[1.1] tracking-[0.01em] text-balance sm:text-[2.9rem] md:text-[3.4rem] lg:whitespace-nowrap lg:text-[3.9rem] xl:text-[4.25rem]"
                  style={{ textShadow: "0 2px 18px rgba(0,0,0,0.22)" }}>
                Ein Blick, der <em className="text-accent-on-dark not-italic">bleibt</em>.
              </h1>
            </Reveal>

            <Reveal delay={480} duration={1400}>
              <p className="mx-auto mt-5 max-w-[620px] text-[1.15rem] leading-[1.5] text-white/90 max-sm:mt-0 md:text-[1.35rem]">
                Wimpernverlängerung, Lash &amp; Brow Lifting in Wien – individuell
                abgestimmt und mit über 6 Jahren Erfahrung.
              </p>
            </Reveal>

            <Reveal delay={920} duration={1400}>
              <div className="mt-6 flex items-center justify-center gap-2.5 max-sm:mt-9">
                <div className="flex gap-0.5 text-rose">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
                      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15.2 4.6 18l1.2-6L1.3 7.8l6.1-.7L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/90">
                  <strong className="text-white">5,0</strong> auf Treatwell &middot; 330+ Bewertungen
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="h-8 shrink-0 sm:h-10 lg:h-14 max-sm:h-6" aria-hidden />
      </div>

      <div className="bg-white pb-6 pt-0 md:pb-8 lg:pb-12">
        <div className="container-studio">
          <ul className="relative z-20 -mt-[1.575rem] grid grid-cols-2 gap-4 sm:grid-cols-2 md:-mt-[2.7rem] lg:-mt-[3.6rem] lg:grid-cols-4 lg:gap-5 max-sm:-mt-8 max-sm:grid-cols-1 max-sm:gap-4">
            {trustItems.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 100}
                className="usp-card-reveal max-sm:mx-auto max-sm:w-[85vw] max-sm:max-w-[360px]"
              >
                <li className="flex h-full flex-col border border-border bg-white px-6 pt-6 pb-3">
                  <span className="font-serif text-[0.7rem] tracking-[0.2em] text-orchid">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="mt-2 block h-px w-8 bg-orchid/40" />
                  <p className="mt-4 font-serif text-[1.05rem] leading-snug text-ink">{item.title}</p>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-ink-soft">{item.text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
