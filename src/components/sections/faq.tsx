"use client"

import { ChevronDown } from "lucide-react"

import { BlurFade } from "@/components/ui/blur-fade"
import { SectionHeader } from "@/components/section-header"
import { useI18n } from "@/i18n"

interface FaqItem {
  q: string
  a: string
}

export function Faq() {
  const { t } = useI18n()
  const items = t<FaqItem[]>("faq.items")

  return (
    <section id="faq" className="scroll-mt-24 bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
          subtitle={t("faq.subtitle")}
        />

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <BlurFade key={item.q} delay={0.1 + i * 0.06} inView>
              <details className="group rounded-2xl border border-border bg-card px-5 transition-colors open:border-primary/40 open:shadow-md hover:border-primary/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold transition-colors group-open:text-primary [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="pb-5 text-muted-foreground">{item.a}</p>
              </details>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
