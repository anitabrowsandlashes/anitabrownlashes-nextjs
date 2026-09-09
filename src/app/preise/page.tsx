import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { BookingButton } from "@/components/ui/BookingButton";
import { PriceHero } from "@/components/sections/PriceHero";
import { PriceAccordion } from "@/components/pricing/PriceAccordion";
import { PriceGroup } from "@/components/pricing/PriceGroup";
import { PriceRows } from "@/components/pricing/PriceRows";
import { PriceGallery } from "@/components/pricing/PriceGallery";
import {
  lashExtensionTechniques,
  lashLiftingGroups,
  browGroups,
  comboPackageRows,
} from "@/lib/data/priceList";

const wimpernGalleryImages = [
  { src: "/images/wimperverl1.webp", alt: "Ergebnis einer Wimpernverlängerung, Nahaufnahme" },
  { src: "/images/wimperverl2.webp", alt: "Ergebnis einer Wimpernverlängerung, Nahaufnahme" },
  { src: "/images/wimperverl3.webp", alt: "Ergebnis einer Wimpernverlängerung, Nahaufnahme" },
  { src: "/images/wimperverl4.webp", alt: "Ergebnis einer Wimpernverlängerung, Nahaufnahme" },
];

const lashliftGalleryImages = [
  { src: "/images/lashlift1.webp", alt: "Ergebnis eines Lash Liftings, Nahaufnahme" },
  { src: "/images/lashlift2.webp", alt: "Ergebnis eines Lash Liftings, Nahaufnahme" },
  { src: "/images/lashlift3.webp", alt: "Ergebnis eines Lash Liftings, Nahaufnahme" },
  { src: "/images/lashlift4.webp", alt: "Ergebnis eines Lash Liftings, Nahaufnahme" },
];

const browliftGalleryImages = [
  { src: "/images/browlift1.webp", alt: "Ergebnis eines Brow Liftings, Nahaufnahme" },
  { src: "/images/browlift2.webp", alt: "Ergebnis eines Brow Liftings, Nahaufnahme" },
  { src: "/images/browlift3.webp", alt: "Ergebnis eines Brow Liftings, Nahaufnahme" },
  { src: "/images/browlift4.webp", alt: "Ergebnis eines Brow Liftings, Nahaufnahme", focus: "center 18%" },
];

export const metadata: Metadata = {
  title: "Preise | Anita Brows & Lashes Wien",
  description:
    "Preise für Wimpernverlängerung, Lash Lifting, Brow Lifting und Augenbrauenbehandlungen bei Anita Brows & Lashes in Wien.",
};

export default function PreisePage() {
  return (
    <div>
      <PriceHero />

      {/* 1. Wimpernverlängerung */}
      <section id="wimpernverlaengerung" className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1240px] px-[calc(1.5rem+1cm)] sm:px-[3cm]">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Wimpernverlängerung</span>
              <h2 className="mt-4 font-serif text-3xl leading-[1.15] tracking-[0.01em] text-ink sm:text-4xl">
                Von natürlich bis ausdrucksstark.
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                <span className="font-medium text-orchid">Bitte beachten:</span> Die
                Bezahlung ist ausschließlich in bar möglich.
              </p>
            </Reveal>
          </div>

          <div className="mt-10">
            <PriceAccordion groups={lashExtensionTechniques} />
          </div>
        </div>

        <PriceGallery images={wimpernGalleryImages} />

        <div className="mx-auto w-full max-w-[1240px] px-[calc(1.5rem+1cm)] sm:px-[3cm]">
          <div className="mt-10 max-w-xl">
            <BookingButton label="Termin buchen" />
          </div>
        </div>
      </section>

      {/* 2. Lash Lifting */}
      <section id="lash-lifting" className="bg-lilac/30 py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1240px] px-[calc(1.5rem+1cm)] sm:px-[3cm]">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Lash Lifting</span>
              <h2 className="mt-4 font-serif text-3xl leading-[1.15] tracking-[0.01em] text-ink sm:text-4xl">
                Natürlicher Schwung für deine Wimpern.
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 space-y-10">
            {lashLiftingGroups.map((group) => (
              <PriceGroup key={group.title} {...group} />
            ))}
          </div>
        </div>

        <PriceGallery images={lashliftGalleryImages} />

        <div className="mx-auto w-full max-w-[1240px] px-[calc(1.5rem+1cm)] sm:px-[3cm]">
          <div className="mt-10 max-w-xl">
            <BookingButton label="Termin buchen" />
          </div>
        </div>
      </section>

      {/* 3. Brow Lifting & Augenbrauen */}
      <section id="brow-lifting" className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1240px] px-[calc(1.5rem+1cm)] sm:px-[3cm]">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Brow Lifting</span>
              <h2 className="mt-4 font-serif text-3xl leading-[1.15] tracking-[0.01em] text-ink sm:text-4xl">
                Perfekt geformte Augenbrauen.
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 space-y-10">
            {browGroups.map((group) => (
              <PriceGroup key={group.title} {...group} />
            ))}
          </div>
        </div>

        <PriceGallery images={browliftGalleryImages} />

        <div className="mx-auto w-full max-w-[1240px] px-[calc(1.5rem+1cm)] sm:px-[3cm]">
          <div className="mt-10 max-w-xl">
            <BookingButton label="Termin buchen" />
          </div>
        </div>
      </section>

      {/* 4. Kombi-Paket */}
      <section id="kombi-paket" className="bg-rose/25 py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1240px] px-[calc(1.5rem+1cm)] sm:px-[3cm]">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Kombi-Paket</span>
              <h2 className="mt-4 font-serif text-3xl leading-[1.15] tracking-[0.01em] text-ink sm:text-4xl">
                Lashes &amp; Brows perfekt kombiniert.
              </h2>
            </Reveal>
          </div>

          <div className="mt-10">
            <PriceRows rows={comboPackageRows} />
          </div>

          <div className="mt-10 max-w-xl">
            <BookingButton label="Termin buchen" />
          </div>
        </div>
      </section>
    </div>
  );
}
