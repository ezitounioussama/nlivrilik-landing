"use client"

import { Star } from "lucide-react"

import { BlurFade } from "@/components/ui/blur-fade"
import { Marquee } from "@/components/ui/marquee"
import { SectionHeader } from "@/components/section-header"
import { useI18n } from "@/i18n"
import { cn } from "@/lib/utils"

interface Testimonial {
  text: string
  author: string
  role: string
}

const AVATAR_COLORS = [
  "bg-primary",
  "bg-brand-green",
  "bg-rose-500",
  "bg-sky-600",
  "bg-violet-500",
  "bg-amber-600",
  "bg-teal-600",
  "bg-fuchsia-600",
]

function ReviewCard({ item, index }: { item: Testimonial; index: number }) {
  return (
    <figure className="w-80 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40 hover:bg-accent/40">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <blockquote className="mt-3 text-sm text-pretty">{item.text}</blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <div
          className={cn(
            "flex size-9 items-center justify-center rounded-full text-xs font-bold text-white",
            AVATAR_COLORS[index % AVATAR_COLORS.length]
          )}
        >
          {item.author.slice(0, 2)}
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold">{item.author}</p>
          <p className="text-xs text-muted-foreground">{item.role}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  const { t } = useI18n()
  const items = t<Testimonial[]>("testimonials.items")
  const firstRow = items.slice(0, items.length / 2)
  const secondRow = items.slice(items.length / 2)

  return (
    <section id="testimonials" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow={t("testimonials.eyebrow")}
          title={t("testimonials.title")}
          subtitle={t("testimonials.subtitle")}
        />
      </div>

      <BlurFade inView delay={0.15}>
        <div className="relative flex flex-col gap-4 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:35s]">
            {firstRow.map((item, i) => (
              <ReviewCard key={item.author} item={item} index={i} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:35s]">
            {secondRow.map((item, i) => (
              <ReviewCard
                key={item.author}
                item={item}
                index={i + firstRow.length}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 start-0 w-1/6 bg-gradient-to-r from-background rtl:bg-gradient-to-l" />
          <div className="pointer-events-none absolute inset-y-0 end-0 w-1/6 bg-gradient-to-l from-background rtl:bg-gradient-to-r" />
        </div>
      </BlurFade>
    </section>
  )
}
