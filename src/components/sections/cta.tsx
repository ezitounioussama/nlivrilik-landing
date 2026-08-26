"use client"

import { Phone } from "lucide-react"

import { BlurFade } from "@/components/ui/blur-fade"
import { Ripple } from "@/components/ui/ripple"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { WhatsAppIcon } from "@/components/icons"
import { useI18n } from "@/i18n"
import { site, waLink } from "@/lib/site"

export function Cta() {
  const { t } = useI18n()

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <BlurFade inView>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#EA9932] via-[#E0761C] to-[#A5480E] px-6 py-16 text-center text-white md:py-24">
            <Ripple mainCircleSize={280} mainCircleOpacity={0.15} numCircles={7} className="[&>div]:!bg-white/10 [&>div]:!border-white/20" />
            <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6">
              <h2 className="text-3xl font-bold tracking-tight text-balance md:text-5xl">
                {t("cta.title")}
              </h2>
              <p className="text-lg text-pretty text-white/80">
                {t("cta.subtitle")}
              </p>
              <a
                href={waLink(t("whatsapp.prefill"))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShimmerButton
                  background="oklch(0.72 0.19 149)"
                  shimmerSize="0.12em"
                  className="px-8 py-4 text-base font-semibold shadow-2xl"
                >
                  <span className="flex items-center gap-2.5 text-white">
                    <WhatsAppIcon className="size-5" />
                    {t("cta.button")}
                  </span>
                </ShimmerButton>
              </a>
              <a
                href={`tel:+${site.whatsappNumber}`}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                {t("cta.or")}
                <span className="flex items-center gap-1.5 font-semibold" dir="ltr">
                  <Phone className="size-4" />
                  {site.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
