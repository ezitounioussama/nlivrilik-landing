"use client"

import { useCallback } from "react"
import { create } from "zustand"
import { persist } from "zustand/middleware"

import ar from "./locales/ar.json"
import en from "./locales/en.json"
import fr from "./locales/fr.json"

export const dictionaries = { fr, en, ar } as const

export type Locale = keyof typeof dictionaries

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
}

interface LocaleState {
  locale: Locale
  setLocale: (locale: Locale) => void
}

// skipHydration: SSR always renders the default locale ("fr"); the stored
// locale is rehydrated from localStorage after mount (see I18nProvider),
// which keeps server and first client render identical.
export const useLocaleStore = create<LocaleState>()(
  persist((set) => ({ locale: "fr", setLocale: (locale) => set({ locale }) }), {
    name: "nlivrilik-locale",
    skipHydration: true,
  })
)

export function useI18n() {
  const locale = useLocaleStore((s) => s.locale)
  const dict = dictionaries[locale]

  const t = useCallback(
    <T = string>(path: string): T =>
      (path
        .split(".")
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .reduce<any>((node, key) => node?.[key], dict) ?? path) as T,
    [dict]
  )

  return { t, locale, dir: locale === "ar" ? "rtl" : ("ltr" as const) }
}
