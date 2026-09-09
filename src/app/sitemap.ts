import type { MetadataRoute } from "next";

// Erzwingt die statische Generierung von /sitemap.xml beim Export (output: "export").
export const dynamic = "force-static";

const siteUrl = "https://www.anitabrowslashes.at";

/**
 * Festes Datum der letzten inhaltlichen Aktualisierung. Bewusst kein
 * `new Date()`: Bei statischem Export würde das bei jedem Build – auch bei
 * reinen Code-/Style-Änderungen – ein neues `lastmod` erzeugen und
 * Suchmaschinen eine Inhaltsänderung vortäuschen. Bei echten Inhaltsänderungen
 * dieses Datum manuell anpassen.
 */
const lastContentUpdate = new Date("2026-09-05");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/preise`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/impressum`,
      lastModified: lastContentUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/datenschutz`,
      lastModified: lastContentUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
