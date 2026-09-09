import type { Metadata } from "next";
import { business } from "@/lib/data/business";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Offenlegung gemäß § 5 ECG / § 25 MedienG.",
};

export default function ImpressumPage() {
  return (
    <div className="pb-24 pt-36 md:pt-44">
      <div className="container-studio max-w-3xl">
        <span className="eyebrow">Rechtliches</span>
        <h1 className="mb-12 mt-4 font-serif text-4xl text-ink md:text-5xl">Impressum</h1>

        <div className="space-y-10 text-[0.95rem] leading-relaxed text-ink-soft">
          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">Medieninhaber &amp; Diensteanbieter</h2>
            <p>
              {business.name}
              <br />
              {business.legalName}
              <br />
              {business.address.full}
              <br />
              Österreich
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">Kontakt</h2>
            <p>
              Telefon: <a href={business.phoneHref} className="hover:text-orchid">{business.phone}</a>
              <br />
              E-Mail: <a href={business.emailHref} className="hover:text-orchid">{business.email}</a>
              <br />
              Web:{" "}
              <a href={business.website} className="hover:text-orchid" target="_blank" rel="noopener noreferrer">
                www.anitabrowsandlashes.at
              </a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">Unternehmensgegenstand</h2>
            <p>Kosmetisches Studio – Wimpernverlängerung, Brow Styling und verwandte Dienstleistungen.</p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">Anwendbare Vorschriften</h2>
            <p>
              Gewerbeordnung:{" "}
              <a className="hover:text-orchid" href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer">
                www.ris.bka.gv.at
              </a>
            </p>
            <p>Aufsichtsbehörde: Magistratisches Bezirksamt des jeweiligen Wiener Gemeindebezirks</p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">Online-Streitbeilegung</h2>
            <p>
              Verbraucher haben die Möglichkeit, Beschwerden an die
              Online-Streitbeilegungsplattform der EU zu richten:{" "}
              <a className="hover:text-orchid" href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">
                ec.europa.eu/odr
              </a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">Haftungsausschluss</h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
              externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
