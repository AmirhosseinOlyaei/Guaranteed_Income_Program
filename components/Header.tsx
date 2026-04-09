"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Menu, X } from "lucide-react"
import LanguageToggle from "./LanguageToggle"
import NavLinks from "./NavLinks"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = useTranslations("nav")

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">GI</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-semibold text-sm leading-tight">
                  Guaranteed Income
                </p>
                <p className="text-white/60 text-xs leading-tight">
                  Persian American Guide
                </p>
              </div>
            </Link>

            <NavLinks variant="header" />

            <div className="flex items-center gap-2">
              <LanguageToggle />
              <Link
                href="/understand"
                className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full bg-accent hover:bg-accent-light text-white text-sm font-medium transition-colors"
              >
                {t("cta")}
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label={t("menu")}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 end-0 h-full w-72 max-w-full bg-surface shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-border bg-primary">
              <span className="text-white font-semibold text-sm">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label={t("close")}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <NavLinks
              variant="mobile"
              onNavigate={() => setMobileOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  )
}
