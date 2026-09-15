import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  BadgeCheck,
  Clock,
  FileText,
  MapPin,
  Package,
  Phone,
  ShoppingBasket,
  UtensilsCrossed,
} from "lucide-react"

import { WhatsAppIcon } from "@/components/icons"
import { Footer } from "@/components/sections/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import { cities, citySlug, site, waLink } from "@/lib/site"

const PREFIX = "livraison-"

const findCity = (param: string) =>
  cities.find((c) => `${PREFIX}${citySlug(c)}` === param)

export const dynamicParams = false

export function generateStaticParams() {
  return cities.map((city) => ({ city: `${PREFIX}${citySlug(city)}` }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city: param } = await params
  const city = findCity(param)
  if (!city) return {}

  const title = `Livraison Express à ${city} — Colis, Courses, Repas`
  const description = `Coursier NlivriLik à ${city} : colis, courses, repas, médicaments et documents livrés en moins d'une heure. Commandez en un message WhatsApp — suivi en temps réel, paiement à la livraison, 7j/7 de 8h à 23h.`

  return {
    title,
    description,
    alternates: { canonical: `/${param}` },
    openGraph: {
      title: `${title} · NlivriLik`,
      description,
      url: `${site.url}/${param}`,
      siteName: "NlivriLik",
      locale: "fr_MA",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
    other: { "geo.region": "MA", "geo.placename": city },
  }
}

const SERVICES = (city: string) => [
  {
    Icon: Package,
    title: "Livraison de colis",
    text: `Envoyez ou recevez un colis à ${city} : récupération en ~15 minutes et livraison en main propre en moins d'une heure selon la distance.`,
  },
  {
    Icon: ShoppingBasket,
    title: "Courses à domicile",
    text: `Vos courses et votre épicerie livrées chez vous à ${city}, au créneau qui vous arrange.`,
  },
  {
    Icon: UtensilsCrossed,
    title: "Livraison de repas",
    text: `Vos plats préférés des restaurants de ${city} livrés chauds, directement à votre porte.`,
  },
  {
    Icon: FileText,
    title: "Documents & médicaments",
    text: `Documents urgents et médicaments transportés en toute confidentialité partout à ${city}, remise en main propre.`,
  },
]

const STEPS = (city: string) => [
  {
    title: "Envoyez un message",
    text: `Dites-nous quoi livrer à ${city}, d'où et vers où — directement sur WhatsApp.`,
  },
  {
    title: "Un livreur récupère",
    text: "Un coursier proche prend en charge votre commande en quelques minutes.",
  },
  {
    title: "Livré en un éclair",
    text: "Livraison en main propre avec suivi en temps réel jusqu'à destination.",
  },
]

const FAQ = (city: string) => [
  {
    q: `En combien de temps livrez-vous à ${city} ?`,
    a: `En moyenne, un livreur récupère votre commande en 15 minutes et la livre en moins d'une heure à ${city}, selon la distance.`,
  },
  {
    q: `Combien coûte une livraison à ${city} ?`,
    a: `Le tarif dépend de la distance et du type de course à ${city}. Envoyez-nous les détails sur WhatsApp et recevez un devis immédiat, sans engagement.`,
  },
  {
    q: `Livrez-vous depuis ${city} vers d'autres villes ?`,
    a: `Oui, nous livrons partout au Maroc. Indiquez simplement votre destination sur WhatsApp et on s'occupe du reste.`,
  },
]

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city: param } = await params
  const city = findCity(param)
  if (!city) notFound()

  const prefill = `Salam NlivriLik ! Je veux une livraison à ${city} 📦`
  const otherCities = cities.filter((c) => c !== city)
  const faq = FAQ(city)

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${site.url}/${param}#service`,
      name: `Livraison express à ${city}`,
      serviceType: "Livraison express",
      description: `Colis, courses, repas, médicaments et documents livrés en moins d'une heure à ${city} par NlivriLik. Commande par WhatsApp.`,
      areaServed: { "@type": "City", name: city },
      provider: { "@id": `${site.url}/#business` },
      url: `${site.url}/${param}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
        {
          "@type": "ListItem",
          position: 2,
          name: `Livraison ${city}`,
          item: `${site.url}/${param}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ]

  return (
    <main className="flex-1">
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* header */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" aria-label="NlivriLik — Accueil">
            <Image
              src="/nlivrilik.svg"
              alt="NlivriLik"
              width={168}
              height={28}
              className="h-7 w-auto dark:brightness-0 dark:invert"
            />
          </Link>
          <a
            href={waLink(prefill)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-wa px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="size-4" />
            Commander
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute -top-24 -start-24 size-[28rem] rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Retour à l&apos;accueil
          </Link>
          <p className="flex items-center gap-2 text-sm font-semibold text-primary">
            <MapPin className="size-4" />
            NlivriLik à {city}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Livraison express à <span className="text-primary">{city}</span> en
            un éclair.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-pretty text-muted-foreground">
            Colis, courses, repas, médicaments et documents livrés à {city} en
            moins d&apos;une heure. Un simple message WhatsApp et on
            s&apos;occupe de tout — récupération, livraison, suivi en temps
            réel.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waLink(prefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-wa px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="size-5" />
              Commander sur WhatsApp
            </a>
            <a
              href={`tel:+${site.whatsappNumber}`}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-primary/50 bg-primary/5 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/15"
            >
              <Phone className="size-4" />
              <span dir="ltr">{site.phoneDisplay}</span>
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <Clock className="size-4 text-primary" />
              Récupération en ~15 min
            </li>
            <li className="flex items-center gap-1.5">
              <BadgeCheck className="size-4 text-brand-green" />
              Paiement à la livraison
            </li>
            <li className="flex items-center gap-1.5">
              <Clock className="size-4 text-primary" />
              7j/7 · 8h–23h
            </li>
          </ul>
        </div>
      </section>

      {/* services */}
      <section className="border-t border-border/60 bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Nos services de livraison à {city}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {SERVICES(city).map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Comment commander à {city} ?
          </h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-3">
            {STEPS(city).map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* faq */}
      <section className="border-t border-border/60 bg-muted/40 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Questions fréquentes — {city}
          </h2>
          <dl className="mt-8 space-y-6">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <dt className="font-semibold">{item.q}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* cta */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl bg-gradient-to-r from-primary to-brand-green p-10 text-center text-white">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Besoin d&apos;une livraison à {city} maintenant ?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              Envoyez-nous un message WhatsApp et un livreur prend en charge
              votre commande en quelques minutes.
            </p>
            <a
              href={waLink(prefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-foreground transition-opacity hover:opacity-90 dark:text-background"
            >
              <WhatsAppIcon className="size-5 text-wa" />
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* other cities */}
      <section className="border-t border-border/60 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-lg font-semibold">
            NlivriLik livre aussi dans ces villes
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {otherCities.map((c) => (
              <li key={c}>
                <Link
                  href={`/${PREFIX}${citySlug(c)}`}
                  className="inline-block rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Livraison {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  )
}
