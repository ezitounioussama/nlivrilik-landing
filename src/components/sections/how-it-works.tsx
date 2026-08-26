"use client"

import { Handshake, PackageCheck } from "lucide-react"

import { BlurFade } from "@/components/ui/blur-fade"
import { SectionHeader } from "@/components/section-header"
import { WhatsAppIcon } from "@/components/icons"
import { useI18n } from "@/i18n"

interface Step {
  title: string
  description: string
}

const ICONS = [
  (props: { className?: string }) => <WhatsAppIcon {...props} />,
  (props: { className?: string }) => <PackageCheck {...props} />,
  (props: { className?: string }) => <Handshake {...props} />,
]

export function HowItWorks() {
  const { t } = useI18n()
  const steps = t<Step[]>("how.steps")

  return (
    <section id="how" className="scroll-mt-24 bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow={t("how.eyebrow")}
          title={t("how.title")}
          subtitle={t("how.subtitle")}
          className="mb-14"
        />

        <div className="relative grid gap-10 md:grid-cols-3 md:gap-6">
          {/* connector */}
          <div className="absolute inset-x-[16%] top-8 hidden border-t-2 border-dashed border-primary/40 md:block" />

          {steps.map((step, i) => {
            const Icon = ICONS[i]
            return (
              <BlurFade key={step.title} delay={0.15 + i * 0.15} inView>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 to-card shadow-md shadow-primary/10">
                    <Icon className="size-7 text-primary" />
                    <span className="absolute -top-2 -end-2 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
