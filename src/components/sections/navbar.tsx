"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { LanguageSwitcher } from "@/components/language-switcher"
import { WhatsAppIcon } from "@/components/icons"
import { useI18n } from "@/i18n"
import { waLink } from "@/lib/site"

const LINKS = [
  { key: "services", href: "#services" },
  { key: "how", href: "#how" },
  { key: "testimonials", href: "#testimonials" },
  { key: "faq", href: "#faq" },
] as const

export function Navbar() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <div className="mx-auto max-w-6xl rounded-2xl border border-border/60 bg-background/75 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.12)] backdrop-blur-xl">
        <div className="flex h-14 items-center justify-between gap-3 px-4">
          <a href="#" className="flex shrink-0 items-center" aria-label="NlivriLik">
            <Image
              src="/nlivrilik.svg"
              alt="NlivriLik"
              width={144}
              height={24}
              priority
              className="h-6 w-auto dark:brightness-0 dark:invert"
            />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.key}
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {t(`nav.${l.key}`)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <AnimatedThemeToggler className="flex size-9 items-center justify-center rounded-full border border-border bg-card/60 transition-colors hover:bg-accent [&_svg]:size-4" />
            <a
              href={waLink(t("whatsapp.prefill"))}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-wa px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105 sm:flex"
            >
              <WhatsAppIcon className="size-4" />
              {t("nav.cta")}
            </a>
            <button
              type="button"
              className="flex size-9 items-center justify-center rounded-full border border-border md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-border/60 p-3 md:hidden">
            {LINKS.map((l) => (
              <a
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
              >
                {t(`nav.${l.key}`)}
              </a>
            ))}
            <a
              href={waLink(t("whatsapp.prefill"))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-wa px-4 py-2.5 text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="size-4" />
              {t("nav.cta")}
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
