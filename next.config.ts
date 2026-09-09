import type { NextConfig } from "next";

/**
 * Statischer Export für das Hosting über Cloudflare Pages.
 *
 * - `output: "export"` erzeugt beim `next build` den Ordner `out/` mit reinem
 *   HTML/CSS/JS. Kein Node-Server, keine Vercel-Abhängigkeit.
 * - `images.unoptimized: true` ist für den statischen Export zwingend, da der
 *   Standard-Image-Loader von `next/image` einen Server zur Laufzeit braucht.
 *   Alle Bilder liegen lokal in `public/images` und werden unverändert
 *   ausgeliefert – daher vorab passend dimensionieren/komprimieren.
 *
 * HTTP-Security-Header: `headers()` wird bei `output: "export"` nicht
 * angewendet. Die Header werden stattdessen über `public/_headers` im
 * Cloudflare-Pages-Format ausgeliefert (identischer Regelsatz).
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
