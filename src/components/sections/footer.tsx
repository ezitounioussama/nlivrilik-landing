"use client"

import Image from "next/image"
import { MapPin, Phone } from "lucide-react"

import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/icons"
import { useI18n } from "@/i18n"
import { site, waLink } from "@/lib/site"

const LINKS = [
  { key: "services", href: "#services" },
  { key: "how", href: "#how" },
  { key: "testimonials", href: "#testimonials" },
  { key: "faq", href: "#faq" },
] as const

const SOCIALS = [
  { name: "Instagram", href: site.socials.instagram, Icon: InstagramIcon },
  { name: "Facebook", href: site.socials.facebook, Icon: FacebookIcon },
  { name: "TikTok", href: site.socials.tiktok, Icon: TikTokIcon },
] as const

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src="/nlivrilik.svg"
            alt="NlivriLik"
            width={168}
            height={28}
            className="h-7 w-auto dark:brightness-0 dark:invert"
          />
          <p className="mt-4 max-w-sm text-muted-foreground">
            {t("footer.tagline")}
          </p>
          <div className="mt-5 flex items-center gap-3">
            {SOCIALS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t("footer.linksTitle")}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {LINKS.map((l) => (
              <li key={l.key}>
                <a
                  href={l.href}
                  className="text-sm transition-colors hover:text-primary"
                >
                  {t(`nav.${l.key}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t("footer.contactTitle")}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={waLink(t("whatsapp.prefill"))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <WhatsAppIcon className="size-4 text-wa" />
                {t("footer.whatsapp")}
              </a>
            </li>
            <li>
              <a
                href={`tel:+${site.whatsappNumber}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="size-4 text-primary" />
                <span dir="ltr">{site.phoneDisplay}</span>
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 shrink-0 text-primary" />
              {t("footer.location")}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {site.name}. {t("footer.rights")}
          </p>
          <p>{t("footer.madeIn")}</p>
        </div>
      </div>
    </footer>
  )
}
