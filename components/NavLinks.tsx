"use client"

import { useTranslations } from "next-intl"
import { usePathname } from "@/i18n/navigation"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { key: "understand", href: "/understand" },
  { key: "design", href: "/design" },
  { key: "engage", href: "/engage" },
  { key: "administer", href: "/administer" },
  { key: "payments", href: "/payments" },
  { key: "coalition", href: "/coalition" },
  { key: "resources", href: "/resources" },
] as const

interface NavLinksProps {
  variant?: "header" | "sidebar" | "mobile"
  onNavigate?: () => void
}

export default function NavLinks({
  variant = "header",
  onNavigate,
}: NavLinksProps) {
  const t = useTranslations("nav")
  const pathname = usePathname()

  if (variant === "sidebar") {
    return (
      <nav aria-label="Section navigation">
        <ul className="space-y-1">
          <li>
            <Link
              href="/"
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === "/"
                  ? "bg-primary text-white"
                  : "text-muted hover:text-text hover:bg-border",
              )}
            >
              {t("home")}
            </Link>
          </li>
          {navItems.map((item, i) => {
            const isActive = pathname === item.href
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                    isActive
                      ? "bg-primary text-white font-medium"
                      : "text-muted hover:text-text hover:bg-border",
                  )}
                >
                  <span
                    className={cn(
                      "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-border text-muted",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{t(item.key)}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  if (variant === "mobile") {
    return (
      <nav aria-label="Mobile navigation">
        <ul className="space-y-1 p-4">
          <li>
            <Link
              href="/"
              onClick={onNavigate}
              className="block px-4 py-3 rounded-xl text-text font-medium hover:bg-background transition-colors"
            >
              {t("home")}
            </Link>
          </li>
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "block px-4 py-3 rounded-xl text-sm transition-colors",
                  pathname === item.href
                    ? "bg-primary text-white font-medium"
                    : "text-text hover:bg-background",
                )}
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/understand"
              onClick={onNavigate}
              className="block px-4 py-3 rounded-xl bg-accent text-white font-medium text-center text-sm"
            >
              {t("cta")}
            </Link>
          </li>
        </ul>
      </nav>
    )
  }

  return (
    <nav aria-label="Main navigation">
      <ul className="hidden lg:flex items-center gap-1">
        {navItems.slice(0, 4).map((item) => (
          <li key={item.key}>
            <Link
              href={item.href}
              className="px-3 py-1.5 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              {t(item.key)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
