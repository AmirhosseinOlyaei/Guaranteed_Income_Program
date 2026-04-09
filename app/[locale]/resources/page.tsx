import { getTranslations } from "next-intl/server"
import { setRequestLocale } from "next-intl/server"
import PageLayout from "@/components/PageLayout"
import PageHero from "@/components/PageHero"
import PageNav from "@/components/PageNav"
import { ExternalLink, Clock } from "lucide-react"

type Props = { params: Promise<{ locale: string }> }

interface ResourceItem {
  name: string
  description: string
  url: string
}

export default async function ResourcesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("resources")
  const tNav = await getTranslations("nav")

  const programs = t.raw("programs.items") as ResourceItem[]
  const legal = t.raw("legal.items") as ResourceItem[]
  const research = t.raw("research.items") as ResourceItem[]
  const placeholders = t.raw("partners.placeholders") as string[]

  return (
    <PageLayout>
      <PageHero title={t("title")} intro={t("intro")} />

      {/* National GI Programs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-6">
          {t("programs.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {programs.map((item) => (
            <ResourceCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      {/* Legal & Immigration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-6">
          {t("legal.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {legal.map((item) => (
            <ResourceCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      {/* Research */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-text mb-6">
          {t("research.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {research.map((item) => (
            <ResourceCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      {/* Partner Organizations — Coming Soon */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-text">
            {t("partners.title")}
          </h2>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-muted text-accent rounded-full text-xs font-bold uppercase tracking-wide">
            <Clock className="w-3 h-3" />
            {t("partners.comingSoonLabel")}
          </span>
        </div>
        <div className="bg-surface border-2 border-dashed border-border rounded-2xl p-8">
          <p className="text-muted text-sm leading-relaxed mb-6 max-w-2xl">
            {t("partners.comingSoonBody")}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {placeholders.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 px-4 py-3 bg-background rounded-xl border border-border"
              >
                <div className="w-2 h-2 rounded-full bg-muted/40 flex-shrink-0" />
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About DevArts Lab */}
      <section className="mb-10">
        <div className="bg-primary rounded-2xl p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center font-bold text-white">
              DA
            </div>
            <h2 className="text-xl font-bold">{t("devarts.title")}</h2>
          </div>
          <p className="text-white/70 leading-relaxed mb-3">
            {t("devarts.body")}
          </p>
          <p className="text-white/50 text-sm">{t("devarts.contact")}</p>
        </div>
      </section>

      <PageNav
        locale={locale}
        prev={{ href: "/coalition", label: tNav("coalition") }}
      />
    </PageLayout>
  )
}

function ResourceCard({ item }: { item: ResourceItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 bg-surface border border-border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-text text-sm group-hover:text-primary transition-colors leading-snug">
          {item.name}
        </h3>
        <ExternalLink className="w-4 h-4 text-muted group-hover:text-primary flex-shrink-0 mt-0.5 transition-colors" />
      </div>
      <p className="text-muted text-sm leading-relaxed">{item.description}</p>
    </a>
  )
}
