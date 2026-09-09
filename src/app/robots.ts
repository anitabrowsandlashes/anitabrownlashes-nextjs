import type { MetadataRoute } from "next";

// Erzwingt die statische Generierung von /robots.txt beim Export (output: "export").
export const dynamic = "force-static";

const siteUrl = "https://www.anitabrowsandlashes.at";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
