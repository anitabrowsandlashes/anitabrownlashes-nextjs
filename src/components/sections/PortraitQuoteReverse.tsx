import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { AiLabel } from "@/components/ui/AiLabel";
import { AnimatedQuote } from "@/components/ui/AnimatedQuote";

export function PortraitQuoteReverse() {
  return (
    <section className="w-full overflow-hidden">
      <Reveal className="reveal-passthrough">
        <div className="section-slide-left flex flex-col md:h-[640px] md:flex-row lg:h-[680px]">
          <div className="order-2 flex w-full items-center justify-center bg-orchid px-8 py-12 sm:py-16 md:order-none md:h-full md:w-[42%] md:px-12 md:py-0 lg:w-[40%] lg:px-16">
            <blockquote className="mx-auto max-w-[420px] text-center">
              <span aria-hidden className="mx-auto mb-5 block h-px w-10 bg-white/40" />
              <AnimatedQuote
                className="font-serif text-[1.85rem] leading-[1.5] tracking-[0.01em] text-white sm:text-[2.1rem] md:text-[2.3rem] lg:text-[2.65rem]"
                parts={[
                  { text: "„Präzision", emphasis: true },
                  { text: "sieht man." },
                  { text: "Erfahrung", emphasis: true },
                  { text: "spürt man.“" },
                ]}
                emphasisClassName="not-italic"
                startDelayMs={280}
              />
            </blockquote>
          </div>

          <div className="relative order-1 w-full bg-lilac/50 md:order-none md:flex md:h-full md:w-[58%] md:items-center md:justify-center lg:w-[60%]">
            <div className="relative aspect-[2/1] w-full max-h-full">
              <Image
                src="/images/hero3.webp"
                alt="Nahaufnahme einer Frau mit zusammengebundenen Haaren und natürlichem Make-up"
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
              <AiLabel className="bottom-2 left-2" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
