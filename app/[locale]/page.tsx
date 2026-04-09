import { getTranslations } from "next-intl/server"
import { setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { ArrowRight, ChevronRight } from "lucide-react"

type Props = { params: Promise<{ locale: string }> }

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("home")
  const tCommon = await getTranslations("common")

  const sections = t.raw("sections") as Array<{
    number: string
    title: string
    description: string
    href: string
  }>

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="persian-pattern absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
              <span className="text-white/80 text-sm font-medium">
                {tCommon("organizedBy")}{" "}
                <span className="text-white font-semibold">
                  {tCommon("devArtsLab")}
                </span>{" "}
                — {tCommon("location")}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
              {t("heroTitle")}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 animate-fade-in-up animate-delay-100">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-200">
              <Link
                href="/understand"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-colors shadow-lg shadow-accent/30"
              >
                {t("heroCta")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/coalition"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium rounded-xl transition-colors"
              >
                {t("heroSecondaryLabel")}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 start-0 end-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* What is GI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-text mb-4">
              {t("whatIsTitle")}
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              {t("whatIsBody")}
            </p>
          </div>
          <div className="bg-surface rounded-2xl border border-border p-8 shadow-sm animate-fade-in-up animate-delay-200">
            <h3 className="text-xl font-bold text-text mb-4">
              {t("whyPersianTitle")}
            </h3>
            <p className="text-muted leading-relaxed">{t("whyPersianBody")}</p>
          </div>
        </div>
      </section>

      {/* Section Cards */}
      <section className="bg-surface border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-3">
              {t("sectionsTitle")}
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {t("sectionsSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, i) => (
              <Link
                key={section.href}
                href={section.href}
                className={`group relative bg-background hover:bg-primary rounded-2xl border border-border hover:border-primary p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl font-black text-border group-hover:text-white/20 transition-colors">
                    {section.number}
                  </span>
                  <ChevronRight className="w-5 h-5 text-muted group-hover:text-white/70 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-text group-hover:text-white mb-2 transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-muted group-hover:text-white/70 leading-relaxed transition-colors">
                  {section.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coalition CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="rounded-3xl p-10 md:p-14 text-center persian-pattern relative overflow-hidden"
          style={{
            background: "linear-gradient(to right, #1E3A6E, #2D5BA3)",
          }}
        >
          <div className="relative">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("coalitionTitle")}
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              {t("coalitionBody")}
            </p>
            <Link
              href="/coalition"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-colors shadow-lg"
            >
              {t("coalitionCta")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
