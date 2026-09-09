import { business, bookingUrl } from "@/lib/data/business";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="kontakt" className="bg-ink py-24 text-white md:py-32">
      <div className="container-studio">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-rose">Dein Besuch</span>
          <h2 className="mt-5 font-serif text-[2.3rem] leading-[1.1] tracking-[0.01em] text-white sm:text-5xl">
            Zeit, deinen Blick{" "}
            <em className="text-accent-on-dark not-italic">in Szene zu setzen.</em>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Ob Wimpern oder Brows – ich nehme mir Zeit für deine Wünsche und freue
            mich darauf, dich bald in meinem Studio willkommen zu heißen.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-5 md:gap-14">
          <Reveal delay={100} className="flex flex-col gap-9 md:col-span-2">
            <div>
              <span className="eyebrow text-rose">Studio</span>
              <p className="mt-2 font-serif text-xl text-white">{business.name}</p>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block leading-relaxed text-white/70 transition-colors hover:text-white"
              >
                {business.address.street}
                <br />
                {business.address.zip} {business.address.city}
              </a>
            </div>

            <div>
              <span className="eyebrow text-rose">Öffnungszeiten</span>
              <ul className="mt-2 max-w-xs space-y-1 text-[0.95rem] text-white/80">
                {business.openingHours.map((row) => (
                  <li key={row.days} className="flex justify-between gap-6">
                    <span>{row.days}</span>
                    <span className="tabular-nums">{row.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm italic text-white/50">
                Termine ausschließlich nach Vereinbarung.
              </p>
              <p className="mt-1 text-sm italic text-white/50">{business.paymentNote}</p>
            </div>

            <div>
              <span className="eyebrow text-rose">Anfahrt</span>
              <ul className="mt-2 space-y-1 text-sm text-white/80">
                {business.transit.map((t) => (
                  <li key={t.line}>
                    <span className="font-medium text-white">{t.line}</span> – {t.stop}
                  </li>
                ))}
              </ul>
              <p className="mt-1.5 text-sm text-white/70">Parken: {business.parking}</p>
            </div>

            <div className="space-y-5">
              <div>
                <span className="eyebrow text-rose">Telefon</span>
                <a href={business.phoneHref} className="mt-1 block text-white/85 transition-colors hover:text-white">
                  {business.phone}
                </a>
              </div>
              <div>
                <span className="eyebrow text-rose">E-Mail</span>
                <a
                  href={business.emailHref}
                  className="mt-1 block break-all text-white/85 transition-colors hover:text-white"
                >
                  {business.email}
                </a>
              </div>
            </div>

            <div className="flex max-w-[360px] flex-col gap-3">
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2.5 bg-orchid text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-orchid-hover"
              >
                WhatsApp schreiben
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 border border-white/30 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10"
                >
                  Instagram
                </a>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 border border-white/30 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10"
                >
                  Facebook
                </a>
              </div>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex h-12 w-full items-center justify-center bg-white text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-rose"
              >
                Termin online buchen
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={200}
            className="min-h-[420px] overflow-hidden border border-white/15 md:col-span-3"
          >
            <iframe
              title="Anita Brows & Lashes – Standort"
              src={business.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-full min-h-[420px] w-full"
              style={{ border: 0 }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
