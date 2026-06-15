import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://klartextliebe.monika-oechtering.workers.dev";

// Alle öffentlichen Routen mit grober Priorisierung.
const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/coaching", priority: 0.9, changeFrequency: "monthly" },
  { path: "/analyse", priority: 0.8, changeFrequency: "monthly" },
  { path: "/community", priority: 0.8, changeFrequency: "weekly" },
  { path: "/ueber-mich", priority: 0.7, changeFrequency: "monthly" },
  { path: "/events", priority: 0.7, changeFrequency: "weekly" },
  { path: "/marktplatz", priority: 0.6, changeFrequency: "monthly" },
  { path: "/youtube", priority: 0.6, changeFrequency: "weekly" },
  { path: "/kontakt", priority: 0.6, changeFrequency: "yearly" },
  { path: "/impressum", priority: 0.2, changeFrequency: "yearly" },
  { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
