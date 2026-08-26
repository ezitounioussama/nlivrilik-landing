import type { Metadata } from "next";
import { Bricolage_Grotesque, Cairo, Manrope } from "next/font/google";
import "./globals.css";

import { I18nProvider } from "@/components/i18n-provider";
import { site } from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "NlivriLik — Livraison Express Rabat, Salé & Maroc | Colis, Courses, Repas",
    template: "%s · NlivriLik",
  },
  description:
    "Service de livraison express n°1 à Rabat, Salé, Témara et Kénitra. Colis, courses, repas, médicaments et documents livrés en moins d'une heure. Commandez en un message WhatsApp — suivi en temps réel, paiement à la livraison, disponible 7j/7.",
  keywords: [
    "livraison express Maroc",
    "livraison Rabat",
    "livraison Salé",
    "livraison Témara",
    "livraison Kénitra",
    "coursier Rabat",
    "coursier Maroc",
    "livraison colis Maroc",
    "livraison courses à domicile",
    "livraison repas Rabat",
    "livraison médicaments",
    "livraison documents urgents",
    "livraison WhatsApp",
    "e-commerce livraison Maroc",
    "توصيل سريع المغرب",
    "توصيل الرباط",
    "NlivriLik",
    "Nlivrilik",
  ],
  applicationName: "NlivriLik",
  category: "delivery service",
  authors: [{ name: "NlivriLik", url: site.url }],
  creator: "NlivriLik",
  publisher: "NlivriLik",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "NlivriLik — Livraison Express au Maroc",
    description:
      "Colis, courses, repas et documents livrés en moins d'une heure à Rabat, Salé, Témara et Kénitra. Commandez en un message WhatsApp.",
    url: site.url,
    siteName: "NlivriLik",
    locale: "fr_MA",
    alternateLocale: ["en_US", "ar_MA"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NlivriLik — Livraison Express au Maroc",
    description:
      "Colis, courses, repas et documents livrés en moins d'une heure. Commandez sur WhatsApp.",
  },
  other: {
    "geo.region": "MA-RSK",
    "geo.placename": "Rabat, Salé, Témara, Kénitra",
  },
};

const themeInit = `try{const t=localStorage.getItem("theme");const d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${bricolage.variable} ${manrope.variable} ${cairo.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="flex min-h-full flex-col">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
