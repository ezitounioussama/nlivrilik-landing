"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Languages } from "lucide-react"

import { cn } from "@/lib/utils"
import { localeNames, useLocaleStore, type Locale } from "@/i18n"

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLocaleStore()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", close)
    return () => document.removeEventListener("mousedown", close)
  }, [])

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
        className="flex h-9 items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 text-sm font-medium transition-colors hover:bg-accent"
      >
        <Languages className="size-4" />
        <span className="uppercase">{locale}</span>
      </button>
      {open && (
        <div className="absolute end-0 top-full z-50 mt-2 w-36 overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-lg">
          {(Object.keys(localeNames) as Locale[]).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => {
                setLocale(l)
                setOpen(false)
              }}
              className={cn(
                "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent",
                l === locale && "font-semibold text-primary"
              )}
            >
              {localeNames[l]}
              {l === locale && <Check className="size-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
