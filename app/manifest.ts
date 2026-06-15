import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Klartext Liebe",
    short_name: "Klartext Liebe",
    description:
      "Singlecoaching, Persönlichkeitsanalyse, Community und kuratierte Begegnungen für reflektierte Singles mit Tiefe.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFCFA",
    theme_color: "#7C6BC4",
    lang: "de",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
