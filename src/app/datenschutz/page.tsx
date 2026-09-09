import type { Metadata } from "next";
import { business } from "@/lib/data/business";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <div className="pb-24 pt-36 md:pt-44">
      <div className="container-studio max-w-3xl">
        <span className="eyebrow">Rechtliches</span>
        <h1 className="mb-12 mt-4 font-serif text-4xl text-ink md:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="space-y-10 text-[0.95rem] leading-relaxed text-ink-soft">
          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Verarbeitung personenbezogener Daten auf
              dieser Website ist:
            </p>
            <p>
              {business.name} · {business.legalName}
              <br />
              {business.address.street}
              <br />
              {business.address.zip} {business.address.city}
              <br />
              Österreich
            </p>
            <p>
              Telefon:{" "}
              <a className="hover:text-orchid" href={business.phoneHref}>
                {business.phone}
              </a>
              <br />
              E-Mail:{" "}
              <a className="hover:text-orchid" href={business.emailHref}>
                {business.email}
              </a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir
              verarbeiten personenbezogene Daten ausschließlich im Rahmen der
              geltenden gesetzlichen Bestimmungen, insbesondere der
              Datenschutz-Grundverordnung (DSGVO), des österreichischen
              Datenschutzgesetzes (DSG) und des Telekommunikationsgesetzes 2021
              (TKG 2021).
            </p>
            <p>
              Personenbezogene Daten sind Informationen, die sich auf eine
              identifizierte oder identifizierbare natürliche Person beziehen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">
              3. Hosting und Server-Logfiles
            </h2>
            <p>
              Diese Website wird über Cloudflare Pages, einen Dienst der
              Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA,
              bereitgestellt.
            </p>
            <p>
              Beim Aufruf der Website werden technisch erforderliche
              Verbindungsdaten verarbeitet. Dazu können insbesondere IP-Adresse,
              Browser- und Geräteinformationen, aufgerufene URL, Referrer, Datum
              und Uhrzeit des Zugriffs sowie technische Verbindungsdaten gehören.
              Die Verarbeitung ist erforderlich, um die Website sicher und
              zuverlässig bereitzustellen und vor Missbrauch und Angriffen zu
              schützen. Cloudflare selbst beschreibt unter anderem die
              Verarbeitung von IP-Adressen sowie Routing-, System- und
              Trafficinformationen von Endnutzern.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
              Interesse besteht in der sicheren, stabilen und technisch
              fehlerfreien Bereitstellung unserer Website.
            </p>
            <p>
              Cloudflare ist ein Unternehmen mit Sitz in den USA. Daten können
              daher auch außerhalb des Europäischen Wirtschaftsraums verarbeitet
              werden. Cloudflare ist nach eigenen Angaben unter dem EU-U.S. Data
              Privacy Framework zertifiziert und verwendet ergänzend
              Standardvertragsklauseln der Europäischen Kommission für
              entsprechende internationale Datenübermittlungen.
            </p>
            <p>
              Weitere Informationen zur Datenverarbeitung durch Cloudflare finden
              Sie in der{" "}
              <a
                className="hover:text-orchid"
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutzerklärung von Cloudflare
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">4. Kontaktaufnahme</h2>
            <p>
              Auf unserer Website steht kein Kontaktformular zur Verfügung. Eine
              Kontaktaufnahme ist über die angegebenen E-Mail-Adressen und
              Telefonnummern möglich. Die entsprechenden Links öffnen lediglich
              die auf Ihrem Gerät eingerichtete E-Mail- bzw. Telefonanwendung.
              Über die Website selbst werden dabei keine Kontaktdaten an uns
              übertragen.
            </p>
            <p>
              Wenn Sie anschließend per E-Mail oder telefonisch Kontakt mit uns
              aufnehmen, verarbeiten wir die von Ihnen übermittelten Daten zur
              Bearbeitung Ihrer Anfrage.
            </p>
            <p>
              Soweit sich Ihre Anfrage auf eine Behandlung, Terminvereinbarung
              oder ein anderes Vertragsverhältnis bezieht, erfolgt die
              Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Bei
              allgemeinen Anfragen erfolgt die Verarbeitung auf Grundlage unseres
              berechtigten Interesses an der Bearbeitung Ihrer Anfrage gemäß
              Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p>
              Die Daten werden nur so lange gespeichert, wie dies für die
              Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">
              5. Terminbuchung über Treatwell
            </h2>
            <p>
              Für Online-Terminbuchungen verlinken wir auf die externe
              Buchungsplattform Treatwell. Auf unserer Website ist kein
              Treatwell-Widget, iframe oder Tracking-Script eingebunden. Eine
              Verbindung zu Treatwell wird erst hergestellt, wenn Sie den
              entsprechenden Buchungslink aktiv anklicken.
            </p>
            <p>
              Ab diesem Zeitpunkt erfolgt die weitere Verarbeitung Ihrer Daten
              über Treatwell und nach Maßgabe der dort geltenden
              Datenschutzbestimmungen.
            </p>
            <p>
              Für Österreich nennt Treatwell derzeit die Treatwell DACH GmbH und
              erläutert in seiner Datenschutzerklärung auch die
              datenschutzrechtliche Zusammenarbeit mit den angeschlossenen
              Salons.
            </p>
            <p>
              Weitere Informationen finden Sie in den{" "}
              <a
                className="hover:text-orchid"
                href="https://www.treatwell.at/info/datenschutzrichtlinien/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutzbestimmungen von Treatwell
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">6. Google Maps</h2>
            <p>
              Auf unserer Website stellen wir eine Standortkarte von Google Maps
              zur Verfügung. Anbieter ist Google.
            </p>
            <p>
              Die Karte wird nicht automatisch geladen. Erst wenn Sie die Karte
              aktivieren, wird eine Verbindung zu Google hergestellt. Dabei können
              insbesondere Ihre IP-Adresse, Browser- und Geräteinformationen sowie
              weitere technische Nutzungsdaten an Google übertragen werden. Google
              kann dabei auch Cookies oder vergleichbare Technologien einsetzen.
            </p>
            <p>
              Die Aktivierung der Karte erfolgt freiwillig. Die damit verbundene
              Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß
              Art. 6 Abs. 1 lit. a DSGVO sowie, soweit einschlägig, § 165 Abs. 3
              TKG 2021.
            </p>
            <p>
              Alternativ kann die Studioadresse über einen externen
              Google-Maps-Link geöffnet werden. Auch hierbei wird eine Verbindung
              zu Google erst nach dem Anklicken des Links hergestellt.
            </p>
            <p>
              Weitere Informationen zur Verarbeitung personenbezogener Daten durch
              Google finden Sie in der{" "}
              <a
                className="hover:text-orchid"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutzerklärung von Google
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">
              7. Externe Links und soziale Netzwerke
            </h2>
            <p>
              Unsere Website enthält Links zu externen Diensten, insbesondere
              Instagram, Facebook und WhatsApp.
            </p>
            <p>
              Es sind keine Social-Media-Plugins, Meta Pixel, eingebetteten
              Beiträge oder vergleichbare Tracking-Technologien dieser Anbieter
              auf unserer Website eingebunden. Beim bloßen Besuch unserer Website
              wird daher über diese Links keine Verbindung zu Instagram, Facebook
              oder WhatsApp hergestellt. Erst wenn Sie einen entsprechenden Link
              anklicken, verlassen Sie unsere Website und es gelten die
              Datenschutzbestimmungen des jeweiligen Anbieters.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">
              8. Cookies und lokale Speicherung
            </h2>
            <p>
              Diese Website setzt keine eigenen Cookies und verwendet keine
              Analyse-, Marketing- oder Tracking-Cookies. Es werden insbesondere
              kein Google Analytics, Google Tag Manager, Meta Pixel, Microsoft
              Clarity oder Hotjar eingesetzt.
            </p>
            <p>
              Wenn Sie den Hinweis zur lokalen Speicherung mit „Verstanden“
              schließen, wird lediglich die Information{" "}
              <code className="rounded bg-lilac/50 px-1.5 py-0.5 font-mono text-[0.85rem] text-ink">
                cookie_notice_dismissed = true
              </code>{" "}
              im lokalen Speicher (localStorage) Ihres Browsers gespeichert.
              Dadurch merkt sich Ihr Browser, dass der Hinweis bereits geschlossen
              wurde. Diese Information bleibt ausschließlich auf Ihrem Gerät und
              wird nicht an uns oder einen Drittanbieter übertragen.
            </p>
            <p>Eine Analyse Ihres Nutzerverhaltens findet nicht statt.</p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">
              9. Schriftarten und Bilder
            </h2>
            <p>
              Die auf dieser Website verwendeten Schriftarten werden lokal über
              unsere Website bereitgestellt. Beim Besuch der Website wird keine
              Verbindung zu Google Fonts oder anderen externen Schriftanbietern
              hergestellt.
            </p>
            <p>
              Auch die auf der Website verwendeten Bilder werden lokal
              bereitgestellt und nicht von externen Bild- oder CDN-Diensten
              geladen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">10. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange verarbeitet und
              gespeichert, wie dies für den jeweiligen Zweck erforderlich ist.
              Eine darüber hinausgehende Speicherung erfolgt nur, soweit
              gesetzliche Aufbewahrungs- oder Dokumentationspflichten bestehen
              oder die Speicherung zur Geltendmachung, Ausübung oder Verteidigung
              von Rechtsansprüchen erforderlich ist.
            </p>
            <p>
              Nach Wegfall des Verarbeitungszwecks und Ablauf entsprechender
              gesetzlicher Fristen werden die Daten gelöscht.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">11. Ihre Rechte</h2>
            <p>
              Ihnen stehen nach Maßgabe der gesetzlichen Voraussetzungen
              insbesondere folgende Rechte zu:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Recht auf Auskunft</li>
              <li>Recht auf Berichtigung</li>
              <li>Recht auf Löschung</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Recht auf Widerspruch gegen bestimmte Verarbeitungen</li>
              <li>
                Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für
                die Zukunft
              </li>
            </ul>
            <p>
              Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
              personenbezogenen Daten gegen das Datenschutzrecht verstößt, haben
              Sie außerdem das Recht, Beschwerde bei der zuständigen
              Aufsichtsbehörde einzureichen:
            </p>
            <p>
              Österreichische Datenschutzbehörde
              <br />
              Barichgasse 40–42
              <br />
              1030 Wien
              <br />
              Österreich
            </p>
            <p>
              <a
                className="hover:text-orchid"
                href="https://www.dsb.gv.at"
                target="_blank"
                rel="noopener noreferrer"
              >
                Österreichische Datenschutzbehörde
              </a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="mb-2 font-serif text-xl text-ink">
              12. Kontakt zum Datenschutz
            </h2>
            <p>
              Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten oder zur
              Ausübung Ihrer Rechte erreichen Sie uns unter:
            </p>
            <p>
              <a className="hover:text-orchid" href={business.emailHref}>
                {business.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
