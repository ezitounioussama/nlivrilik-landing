"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <BlurFade inView>
      <div className={cn("mx-auto mb-12 max-w-2xl text-center", className)}>
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>
      </div>
    </BlurFade>
  )
}
