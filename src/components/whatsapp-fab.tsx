"use client"

import { WhatsAppIcon } from "@/components/icons"
import { useI18n } from "@/i18n"
import { waLink } from "@/lib/site"

export function WhatsAppFab() {
  const { t } = useI18n()

  return (
    <a
      href={waLink(t("whatsapp.prefill"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp.fab")}
      className="group fixed bottom-5 end-5 z-50 flex items-center gap-0 rounded-full bg-wa text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] transition-all hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-wa opacity-30" />
      <span className="flex size-14 items-center justify-center">
        <WhatsAppIcon className="size-7" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap pe-0 text-sm font-semibold transition-all duration-300 group-hover:max-w-40 group-hover:pe-5">
        {t("whatsapp.fab")}
      </span>
    </a>
  )
}
