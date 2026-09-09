import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { BookingButton } from "@/components/ui/BookingButton";

export function About() {
  return (
    <section id="ueber-anita" className="bg-rose/30 py-24 md:py-32">
      <div className="container-studio">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Reveal image className="relative mx-auto max-w-lg">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-white">
                <Image
                  src="/images/anita1.webp"
                  alt="Anita Lakatos – Inhaberin von Anita Brows & Lashes in ihrem Studio"
                  fill
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="object-cover object-[center_30%]"
                />
              </div>
            </Reveal>

            <Reveal delay={150} className="relative mx-auto mt-9 max-w-lg border-l border-orchid/50 pl-6">
              <blockquote className="font-serif text-xl italic leading-snug text-ink md:text-2xl">
                &ldquo;Deine Schönheit ist schon da.
                <br />
                Ich gebe ihr Ausdruck.&rdquo;
              </blockquote>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Für mich bedeutet natürliche Schönheit nicht, sich zu verändern –
                sondern die eigene Persönlichkeit auf elegante Weise zu unterstreichen.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow">Ein paar Worte von mir</span>
              <h2 className="mt-5 max-w-[16ch] font-serif text-[2.4rem] leading-[1.08] tracking-[0.01em] text-ink sm:text-5xl lg:text-[3.4rem]">
                Schönheit beginnt mit{" "}
                <em className="text-orchid not-italic">Vertrauen</em>.
              </h2>
            </Reveal>

            <Reveal delay={120} className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ink-soft md:text-[1.05rem]">
              <p>
                Seit über 6 Jahren begleite ich meine Kundinnen mit Leidenschaft und
                einem hohen Qualitätsanspruch durch die Welt der Beauty.
              </p>
              <p>
                Schon früh entdeckte ich meine Begeisterung für Lash Extensions und
                Brow Styling und spezialisierte mich auf natürliche, typgerechte
                Ergebnisse. Durch regelmäßige Weiterbildungen entwickle ich mein
                Fachwissen kontinuierlich weiter und arbeite stets nach den neuesten
                Techniken.
              </p>
              <p>
                Jede Behandlung beginnt mit einer persönlichen Beratung, denn kein
                Gesicht ist wie das andere. Ich nehme mir Zeit für die individuellen
                Wünsche meiner Kundinnen und arbeite ausschließlich mit hochwertigen
                Produkten, um natürliche, langlebige und qualitativ hochwertige
                Ergebnisse zu erzielen.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  { title: "6 Jahre Erfahrung", text: "Kontinuierliche Weiterbildung in aktuellen Techniken." },
                  { title: "Premium-Qualität", text: "Höchste Hygienestandards, langlebige Ergebnisse." },
                  { title: "Persönlich abgestimmt", text: "Individuell auf Wunsch und Gesichtsform." },
                ].map((v) => (
                  <li key={v.title} className="border-t border-orchid/30 pt-4">
                    <h3 className="font-serif text-base text-ink">{v.title}</h3>
                    <p className="mt-1.5 text-[0.82rem] leading-relaxed text-ink-soft">{v.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={280} className="mt-10">
              <BookingButton label="Jetzt Termin online buchen" variant="outline" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
