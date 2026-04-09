import { Link } from "@/i18n/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PageNavProps {
  prev?: { href: string; label: string }
  next?: { href: string; label: string }
  locale?: string
}

export default function PageNav({ prev, next, locale }: PageNavProps) {
  const isRTL = locale === "fa"

  return (
    <div className="mt-12 pt-8 border-t border-border flex items-center justify-between gap-4">
      {prev ? (
        <Link
          href={prev.href}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border hover:border-primary hover:text-primary text-muted text-sm font-medium transition-colors group"
        >
          {isRTL ? (
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          ) : (
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          )}
          <span>{prev.label}</span>
        </Link>
      ) : (
        <div />
      )}
      {next && (
        <Link
          href={next.href}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors group"
        >
          <span>{next.label}</span>
          {isRTL ? (
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          ) : (
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          )}
        </Link>
      )}
    </div>
  )
}
