"use client"

import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"

export default function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations("common")

  const toggleLocale = () => {
    const next = locale === "en" ? "fa" : "en"
    router.replace(pathname, { locale: next })
  }

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium",
        "border border-white/30 text-white hover:bg-white/10",
        "transition-colors duration-200 cursor-pointer",
        className,
      )}
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 opacity-80" />
      <span>{t("languageToggle")}</span>
    </button>
  )
}
