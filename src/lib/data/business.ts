export const business = {
  name: "Anita Brows & Lashes",
  legalName: "Anita Lakatos e. U.",
  phone: "+43 699 1716 0022",
  phoneHref: "tel:+4369917160022",
  email: "hallo@anitabrowsandlashes.at",
  emailHref: "mailto:hallo@anitabrowsandlashes.at",
  whatsapp: "https://wa.me/4369917160022",
  website: "https://wimpernverlangerungwien.at/",
  address: {
    street: "Ledererhof 7/4",
    zip: "1010",
    city: "Wien",
    country: "AT",
    full: "Ledererhof 7/4, 1010 Wien",
  },
  geo: {
    latitude: 48.2107,
    longitude: 16.3661,
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Anita Brows & Lashes 1010 Wien Ledererhof 7/4"),
  mapsEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Anita Brows & Lashes, Ledererhof 7/4, 1010 Wien") +
    "&output=embed",
  instagram: "https://www.instagram.com/anita.browslashes/",
  instagramHandle: "@anita.browslashes",
  facebook: "https://www.facebook.com/100080103438845/",
  paymentNote: "Zahlung vor Ort ausschließlich in bar.",
  transit: [
    { line: "U1", stop: "Stephansplatz" },
    { line: "U3", stop: "Herrengasse" },
  ],
  parking: "Parkgarage Am Hof / beim Park Hyatt Vienna",
  openingHours: [
    { days: "Montag – Freitag", hours: "10:00 – 19:00" },
    { days: "Samstag", hours: "10:00 – 18:00" },
    { days: "Sonntag", hours: "Geschlossen" },
  ],
  openingHoursSchema: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    { dayOfWeek: ["Saturday"], opens: "10:00", closes: "18:00" },
  ],
  copyright: "© 2026 Anita Brows & Lashes",
} as const;

/**
 * Zentrale Booking-Konfiguration. Aktuell Treatwell – kann später ohne
 * Codeänderung an anderen Stellen gegen eine andere Lösung (z. B.
 * SimplyBook.me) ausgetauscht werden, da alle CTAs hierher verweisen.
 */
export const bookingUrl = "https://buchung.treatwell.at/ort/anita-brows-lashes/";

export const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über Anita", href: "#ueber-anita" },
  { label: "Ergebnisse", href: "#ergebnisse" },
  { label: "Preise", href: "/preise" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
] as const;
