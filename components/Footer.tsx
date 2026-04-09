import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { MapPin, ExternalLink } from "lucide-react"

export default function Footer() {
  const t = useTranslations("common")
  const tNav = useTranslations("nav")

  const links = [
    { key: "understand", href: "/understand" },
    { key: "design", href: "/design" },
    { key: "engage", href: "/engage" },
    { key: "administer", href: "/administer" },
    { key: "payments", href: "/payments" },
    { key: "coalition", href: "/coalition" },
    { key: "resources", href: "/resources" },
  ] as const

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">GI</span>
              </div>
              <span className="font-bold text-lg">DevArts Lab</span>
            </div>
            <div className="flex items-start gap-1.5 text-white/60 text-sm mb-4">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{t("location")}</span>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">
              Guide Sections
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">
              External Resources
            </h3>
            <ul className="space-y-2">
              {[
                {
                  label: "Urban Institute GI Guide",
                  url: "https://www.urban.org/apps/how-build-guaranteed-income-program-and-coalition",
                },
                {
                  label: "Mayors for a Guaranteed Income",
                  url: "https://www.mayorsforagi.org",
                },
                {
                  label: "Economic Security Project",
                  url: "https://www.economicsecurityproject.org",
                },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm transition-colors"
                  >
                    <span>{item.label}</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">{t("copyright")}</p>
          <p className="text-white/40 text-xs">{t("adaptedFrom")}</p>
        </div>
      </div>
    </footer>
  )
}
