"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { NumberTicker } from "@/components/ui/number-ticker"
import { useI18n } from "@/i18n"

const STATS = [
  { key: "deliveries", value: 5000, suffix: "+" },
  { key: "clients", value: 1200, suffix: "+" },
  { key: "satisfaction", value: 98, suffix: "%" },
  { key: "support", value: null, display: "24/7" },
] as const

export function Stats() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden border-y border-primary/15 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <BlurFade key={stat.key} delay={0.1 + i * 0.1} inView>
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-primary md:text-5xl">
                {stat.value !== null ? (
                  <>
                    <NumberTicker value={stat.value} className="text-primary" />
                    {stat.suffix}
                  </>
                ) : (
                  stat.display
                )}
              </p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {t(`stats.${stat.key}`)}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
