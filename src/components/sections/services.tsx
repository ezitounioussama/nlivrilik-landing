"use client"

import Image from "next/image"
import {
  FileLock2,
  MapPin,
  Radar,
  ShoppingBasket,
  UtensilsCrossed,
  Zap,
} from "lucide-react"

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { BlurFade } from "@/components/ui/blur-fade"
import { BorderBeam } from "@/components/ui/border-beam"
import { SectionHeader } from "@/components/section-header"
import { useI18n } from "@/i18n"
import { cn } from "@/lib/utils"
import { waLink } from "@/lib/site"

function PhotoBackground({
  src,
  alt,
  position = "object-center",
}: {
  src: string
  alt: string
  position?: string
}) {
  return (
    <div className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={cn(
          "object-cover transition-transform duration-500 group-hover:scale-105",
          position
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background from-25% via-background/70 to-transparent" />
    </div>
  )
}

function TrackingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-transparent to-primary/10" />
      <svg
        viewBox="0 0 300 160"
        className="absolute -top-2 end-0 h-40 w-full text-brand-green"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 130 C 90 130, 90 40, 160 40 S 250 100, 285 60"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="7 7"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="20" cy="130" r="6" fill="currentColor" />
      </svg>
      <div className="absolute end-8 top-8 rounded-full bg-primary p-2 shadow-lg shadow-primary/40">
        <MapPin className="size-4 text-primary-foreground" />
      </div>
      <span className="absolute end-6 top-20 flex size-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
        <span className="relative inline-flex size-3 rounded-full bg-primary" />
      </span>
    </div>
  )
}

function MealsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-rose-500/10" />
      <div className="absolute -end-8 -top-8 flex size-44 items-center justify-center rounded-full border border-primary/20">
        <div className="flex size-32 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
          <UtensilsCrossed className="size-12 text-primary" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}

export function Services() {
  const { t } = useI18n()

  const services = [
    {
      key: "express",
      Icon: Zap,
      className: "lg:col-span-2",
      background: (
        <div className="absolute inset-0">
          <PhotoBackground
            src="/services/fleet.webp"
            alt="Équipe de livreurs NlivriLik au Maroc — scooter, vélo et camionnette"
            position="object-top"
          />
          <BorderBeam duration={10} size={100} colorFrom="#EA9932" colorTo="#0D6F3A" />
        </div>
      ),
    },
    {
      key: "tracking",
      Icon: Radar,
      className: "lg:col-span-1",
      background: <TrackingBackground />,
    },
    {
      key: "groceries",
      Icon: ShoppingBasket,
      className: "lg:col-span-1",
      background: (
        <PhotoBackground
          src="/services/groceries.webp"
          alt="Livreur NlivriLik livrant un panier de fruits et légumes frais"
        />
      ),
    },
    {
      key: "meals",
      Icon: UtensilsCrossed,
      className: "lg:col-span-1",
      background: <MealsBackground />,
    },
    {
      key: "documents",
      Icon: FileLock2,
      className: "lg:col-span-1",
      background: (
        <PhotoBackground
          src="/services/urgent.webp"
          alt="Livraison urgente de pharmacie et documents par coursier NlivriLik"
        />
      ),
    },
  ]

  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        <BlurFade inView delay={0.15}>
          <BentoGrid className="auto-rows-[20rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <BentoCard
                key={s.key}
                name={t(`services.${s.key}.name`)}
                description={t(`services.${s.key}.description`)}
                href={waLink(t("whatsapp.prefill"))}
                cta={t("services.cta")}
                Icon={s.Icon}
                background={s.background}
                className={cn("col-span-1", s.className)}
              />
            ))}
          </BentoGrid>
        </BlurFade>
      </div>
    </section>
  )
}
