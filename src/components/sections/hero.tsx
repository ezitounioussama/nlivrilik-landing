"use client"

import { ArrowDown, BadgeCheck, MapPin, Star } from "lucide-react"

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { AuroraText } from "@/components/ui/aurora-text"
import { BlurFade } from "@/components/ui/blur-fade"
import { BorderBeam } from "@/components/ui/border-beam"
import { DotPattern } from "@/components/ui/dot-pattern"
import { PulsatingButton } from "@/components/ui/pulsating-button"
import { WordRotate } from "@/components/ui/word-rotate"
import { WhatsAppIcon } from "@/components/icons"
import { useI18n } from "@/i18n"
import { cn } from "@/lib/utils"
import { waLink } from "@/lib/site"

const AURORA_COLORS = ["#EA9932", "#FF6B3D", "#CD231D", "#F4B563"]

function ChatMockup() {
  const { t } = useI18n()

  return (
    <div className="relative w-full max-w-md">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
        {/* header */}
        <div className="flex items-center gap-3 bg-brand-green px-4 py-3 text-white">
          <div className="flex size-9 items-center justify-center rounded-full bg-white/15 text-sm font-bold">
            NL
          </div>
          <div className="flex-1 leading-tight">
            <p className="text-sm font-semibold">{t("hero.chat.name")}</p>
            <p className="flex items-center gap-1 text-xs text-white/80">
              <span className="size-1.5 rounded-full bg-emerald-300" />
              {t("hero.chat.online")}
            </p>
          </div>
          <WhatsAppIcon className="size-5 text-white/80" />
        </div>

        {/* messages */}
        <div className="space-y-3 bg-muted/40 p-4">
          <div className="me-8 w-fit max-w-[85%] rounded-2xl rounded-ss-md border border-border bg-card px-3.5 py-2.5 text-sm shadow-sm">
            {t("hero.chat.q")}
          </div>
          <div className="ms-auto w-fit max-w-[85%] rounded-2xl rounded-se-md bg-brand-green/15 px-3.5 py-2.5 text-sm shadow-sm dark:bg-brand-green/25">
            {t("hero.chat.a1")}
          </div>
          <div className="ms-auto w-fit max-w-[85%] rounded-2xl rounded-se-md bg-brand-green/15 px-3.5 py-2.5 text-sm shadow-sm dark:bg-brand-green/25">
            {t("hero.chat.a2")}
          </div>

          {/* tracking card */}
          <div className="ms-auto w-fit max-w-[85%] rounded-2xl border border-border bg-card p-3.5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛵</span>
              <div className="flex-1">
                <div className="h-1.5 w-36 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-full animate-pulse rounded-full bg-gradient-to-r from-primary to-brand-green" />
                </div>
              </div>
              <MapPin className="size-4 text-primary" />
            </div>
            <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-brand-green">
              <BadgeCheck className="size-4" />
              {t("hero.chat.status")}
            </p>
          </div>
        </div>

        {/* input */}
        <div className="border-t border-border bg-card px-4 py-3">
          <div className="rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground">
            {t("hero.chat.reply")}
          </div>
        </div>

        <BorderBeam duration={8} size={120} colorFrom="#EA9932" colorTo="#0D6F3A" />
      </div>

      {/* floating chips */}
      <div className="absolute -start-5 top-1/2 hidden rounded-2xl border border-border bg-card/90 px-3 py-2 shadow-lg backdrop-blur sm:block">
        <p className="flex items-center gap-1 text-sm font-bold">
          4.9
          <Star className="size-4 fill-amber-400 text-amber-400" />
        </p>
      </div>
      <div className="absolute -end-5 -bottom-4 hidden rounded-2xl border border-border bg-card/90 px-3 py-2 shadow-lg backdrop-blur sm:block">
        <p className="text-sm font-bold" dir="ltr">⚡ 15 min</p>
      </div>
    </div>
  )
}

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
      <DotPattern
        className={cn(
          "text-primary/25",
          "[mask-image:radial-gradient(600px_circle_at_top,white,transparent)]"
        )}
      />
      <div className="pointer-events-none absolute -top-24 -start-24 size-[28rem] rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -end-24 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 start-1/3 h-64 w-2/3 bg-gradient-to-t from-primary/10 to-transparent blur-2xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <BlurFade delay={0.05}>
            <div className="group rounded-full border border-primary/30 bg-primary/5 transition-colors hover:bg-primary/10">
              <AnimatedShinyText className="flex items-center gap-2 px-4 py-1.5 text-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-brand-green" />
                </span>
                {t("hero.badge")}
              </AnimatedShinyText>
            </div>
          </BlurFade>

          <BlurFade delay={0.15}>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {t("hero.titleA")}{" "}
              <WordRotate
                words={t<string[]>("hero.words")}
                duration={2800}
                motionProps={{
                  initial: { opacity: 0, filter: "blur(8px)", scale: 0.96 },
                  animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
                  exit: { opacity: 0, filter: "blur(8px)", scale: 0.96 },
                  transition: { duration: 0.35, ease: "easeOut" },
                }}
                className="text-primary underline decoration-primary/30 decoration-4 underline-offset-8"
              />
              <br />
              <AuroraText colors={AURORA_COLORS}>{t("hero.titleB")}</AuroraText>
            </h1>
          </BlurFade>

          <BlurFade delay={0.25}>
            <p className="max-w-xl text-lg text-pretty text-muted-foreground">
              {t("hero.subtitle")}
            </p>
          </BlurFade>

          <BlurFade delay={0.35} className="w-full sm:w-auto">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink(t("whatsapp.prefill"))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PulsatingButton className="w-full rounded-full bg-wa px-6 py-3 font-semibold text-white sm:w-auto">
                  <span className="flex items-center gap-2">
                    <WhatsAppIcon className="size-5" />
                    {t("hero.ctaPrimary")}
                  </span>
                </PulsatingButton>
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-primary/50 bg-primary/5 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/15"
              >
                {t("hero.ctaSecondary")}
                <ArrowDown className="size-4" />
              </a>
            </div>
          </BlurFade>

          <BlurFade delay={0.45}>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 rtl:space-x-reverse">
                {["YB", "SE", "AR", "FZ"].map((initials, i) => (
                  <div
                    key={initials}
                    className={cn(
                      "flex size-8 items-center justify-center rounded-full border-2 border-background text-[10px] font-bold text-white",
                      ["bg-primary", "bg-brand-green", "bg-rose-500", "bg-sky-600"][i]
                    )}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{t("hero.trust")}</p>
              </div>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.3} className="flex justify-center lg:justify-end">
          <ChatMockup />
        </BlurFade>
      </div>
    </section>
  )
}
