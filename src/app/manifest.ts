import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NlivriLik — Livraison express au Maroc",
    short_name: "NlivriLik",
    description:
      "Colis, courses, repas et documents livrés en moins d'une heure à Rabat, Salé, Témara et Kénitra. Commandez en un message WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdfbf6",
    theme_color: "#EA9932",
    lang: "fr",
    categories: ["shopping", "business", "food"],
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  }
}
