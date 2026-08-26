import { site } from "@/lib/site"
import fr from "@/i18n/locales/fr.json"

// Static FR structured data — matches the default server-rendered locale.
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: "NlivriLik",
  alternateName: "Nlivri Lik",
  description:
    "Service de livraison express au Maroc : colis, courses, repas, médicaments et documents livrés en moins d'une heure à Rabat, Salé, Témara et Kénitra. Commande par WhatsApp.",
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/logo.png`,
  telephone: `+${site.whatsappNumber}`,
  priceRange: "$",
  currenciesAccepted: "MAD",
  paymentAccepted: "Cash, Bank transfer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rabat",
    addressRegion: "Rabat-Salé-Kénitra",
    addressCountry: "MA",
  },
  areaServed: ["Rabat", "Salé", "Témara", "Kénitra"].map((city) => ({
    "@type": "City",
    name: city,
  })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "23:00",
  },
  sameAs: [site.socials.instagram, site.socials.facebook, site.socials.tiktok],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${site.whatsappNumber}`,
    contactType: "customer service",
    availableLanguage: ["French", "Arabic", "English"],
    url: `https://wa.me/${site.whatsappNumber}`,
  },
  makesOffer: [
    "Livraison express de colis",
    "Livraison de courses à domicile",
    "Livraison de repas",
    "Livraison de documents urgents et médicaments",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name, areaServed: "Rabat-Salé-Kénitra, Maroc" },
  })),
}

const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: "NlivriLik",
  url: site.url,
  inLanguage: ["fr", "en", "ar"],
  publisher: { "@id": `${site.url}/#business` },
}

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${site.url}/#faq`,
  mainEntity: fr.faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

export function JsonLd() {
  return (
    <>
      {[localBusiness, webSite, faqPage].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
