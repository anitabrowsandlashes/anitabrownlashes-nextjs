import Image from "next/image";
import { priceJumpLinks } from "@/lib/data/priceList";
import { AiLabel } from "@/components/ui/AiLabel";
import { Reveal } from "@/components/ui/Reveal";

export function PriceHero() {
  return (
    <section className="relative">
      <div className="relative flex h-[62vh] min-h-[520px] w-full items-center justify-center overflow-hidden bg-ink">
        <Image
          src="/images/hero1.webp"
          alt="Nahaufnahme eines lächelnden Gesichts mit gepflegten Wimpern und Augenbrauen"
          fill
          priority
          sizes="100vw"
          className="object-cover max-sm:[object-position:64%_center]"
        />
        <AiLabel />
        <div className="pointer-events-none absolute inset-0 bg-ink/50" />

        <div className="relative z-10 mt-10 w-full max-w-2xl px-6 text-center text-white md:mt-14">
          <span className="inline-flex items-center gap-3 text-xs">
            <span className="h-px w-8 bg-white/70" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/90">
              Preisliste
            </span>
            <span className="h-px w-8 bg-white/70" />
          </span>

          <h1 className="mt-5 font-serif text-[2.4rem] leading-[1.1] tracking-[0.01em] text-balance sm:text-5xl lg:text-[3.4rem]">
            Preise &amp; Behandlungen
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            Finde hier alle Preise für Wimpernverlängerung, Lash Lifting, Brow
            Lifting und Augenbrauenbehandlungen im Überblick.
          </p>
        </div>
      </div>

      <div className="bg-white pb-[26px] pt-0 md:pb-10 lg:pb-12">
        <div className="container-studio">
          <nav
            aria-label="Sprungnavigation Preisliste"
            className="relative z-20 -mt-7 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:-mt-7 md:-mt-12 lg:-mt-16 lg:grid-cols-4 lg:gap-5 max-sm:-mt-16 max-sm:gap-3"
          >
            {priceJumpLinks.map((link, i) => (
              <Reveal key={link.href} delay={i * 90} className="price-card-reveal h-full">
                <a
                  href={link.href}
                  className="flex h-full min-h-[112px] flex-col items-center justify-center border border-ink/15 bg-white px-6 py-5 text-center shadow-[0_10px_28px_-16px_rgba(0,0,0,0.3)] transition-colors hover:border-orchid/50 max-sm:min-h-[92px] max-sm:px-4 max-sm:py-4"
                >
                  <span className="text-sm font-semibold tracking-wide text-ink max-sm:text-[0.82rem]">{link.label}</span>
                  <span className="mt-1.5 text-xs text-orchid">Preise ansehen</span>
                </a>
              </Reveal>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
