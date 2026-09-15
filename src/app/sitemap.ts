import type { MetadataRoute } from "next"

import { cities, citySlug, site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...cities.map((city) => ({
      url: `${site.url}/livraison-${citySlug(city)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
