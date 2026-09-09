import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { AiLabel } from "@/components/ui/AiLabel";
import { AnimatedQuote } from "@/components/ui/AnimatedQuote";

export function PortraitQuote() {
  return (
    <section className="w-full overflow-hidden">
      <Reveal className="reveal-passthrough">
        <div className="section-slide-right flex flex-col md:h-[640px] md:flex-row lg:h-[680px]">
          <div className="relative w-full bg-rose/50 md:flex md:h-full md:w-[58%] md:items-center md:justify-center lg:w-[60%]">
            <div className="relative aspect-[3/2] w-full max-h-full">
              <Image
                src="/images/hero2.webp"
                alt="Nahaufnahme eines natürlich geschminkten Gesichts mit gepflegten Augenbrauen und Wimpern"
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
              <AiLabel className="bottom-2 left-2" />
            </div>
          </div>

          <div className="flex w-full items-center justify-center bg-rose px-8 py-12 sm:py-16 md:h-full md:w-[42%] md:px-12 md:py-0 lg:w-[40%] lg:px-16">
            <blockquote className="mx-auto max-w-[420px] text-center">
              <span aria-hidden className="mx-auto mb-5 block h-px w-10 bg-orchid/50" />
              <AnimatedQuote
                className="font-serif text-[clamp(2.2rem,2.8vw,3.5rem)] leading-[1.5] tracking-[0.01em] text-ink"
                parts={[
                  { text: "„Schönheit soll dich nicht verändern – sondern deinen" },
                  { text: "Ausdruck", emphasis: true },
                  { text: "unterstreichen.“" },
                ]}
                emphasisClassName="text-orchid not-italic"
                startDelayMs={280}
              />
            </blockquote>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
