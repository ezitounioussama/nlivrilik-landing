"use client"

import { useEffect } from "react"

import { useLocaleStore } from "@/i18n"

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocaleStore((s) => s.locale)

  useEffect(() => {
    useLocaleStore.persist.rehydrate()
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"
  }, [locale])

  return <>{children}</>
}
