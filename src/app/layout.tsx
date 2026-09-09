import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { JsonLd } from "@/components/seo/JsonLd";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://www.anitabrowslashes.at";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anita Brows & Lashes | Wimpernverlängerung & Brow Lifting in Wien 1010",
    template: "%s | Anita Brows & Lashes",
  },
  description:
    "Wimpernverlängerung, Lash Lifting und Brow Lifting im Herzen Wiens. 6 Jahre Erfahrung, hochwertige Produkte und persönliche Beratung im Studio in 1010 Wien.",
  keywords: [
    "Wimpernverlängerung Wien",
    "Lash Lifting Wien",
    "Brow Lifting Wien",
    "Wimpernstudio 1010 Wien",
    "Anita Brows Lashes",
  ],
  authors: [{ name: "Anita Lakatos" }],
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: siteUrl,
    siteName: "Anita Brows & Lashes",
    title: "Anita Brows & Lashes | Wimpernverlängerung & Brow Lifting in Wien",
    description:
      "Wimpernverlängerung, Lash Lifting und Brow Lifting im Herzen Wiens – individuell, hochwertig und persönlich.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anita Brows & Lashes – Wimpernstudio in Wien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anita Brows & Lashes | Wien 1010",
    description:
      "Wimpernverlängerung, Lash Lifting und Brow Lifting – individuell, hochwertig und persönlich.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${bodoni.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper text-ink">
        <JsonLd />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
        <CookieBanner />
      </body>
    </html>
  );
}
