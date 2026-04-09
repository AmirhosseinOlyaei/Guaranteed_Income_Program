import { getTranslations } from "next-intl/server"
import { setRequestLocale } from "next-intl/server"
import PageLayout from "@/components/PageLayout"
import PageHero from "@/components/PageHero"
import CalloutBox from "@/components/CalloutBox"
import PageNav from "@/components/PageNav"
import { CheckCircle } from "lucide-react"

type Props = { params: Promise<{ locale: string }> }

export default async function DesignPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("design")
  const tNav = await getTranslations("nav")
  const tCommon = await getTranslations("common")

  const groups = t.raw("target.groups") as string[]

  return (
    <PageLayout>
      <PageHero
        step={`${tCommon("step")} 02`}
        title={t("title")}
        intro={t("intro")}
      />

      {/* Step 1: Eligibility */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("eligibility.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          {t("eligibility.body")}
        </p>
        <CalloutBox variant="immigration" label={tCommon("immigrationNote")}>
          <p>{t("eligibility.immigration")}</p>
        </CalloutBox>
      </section>

      {/* Step 2: Amount */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("amount.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{t("amount.body")}</p>
        <div className="bg-accent-muted border border-accent rounded-xl p-5">
          <p className="text-accent font-semibold text-sm mb-1">
            Recommended Range
          </p>
          <p className="text-text text-sm leading-relaxed">
            {t("amount.recommendation")}
          </p>
        </div>
      </section>

      {/* Step 3: Duration */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("duration.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{t("duration.body")}</p>
        <CalloutBox variant="trust" label={tCommon("trustNote")}>
          <p>{t("duration.exit")}</p>
        </CalloutBox>
      </section>

      {/* Step 4: Target Groups */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("target.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-6">{t("target.body")}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {groups.map((group, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-surface border border-border rounded-xl p-4"
            >
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <span className="text-sm text-text">{group}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Cultural Design */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("cultural.title")}
        </h2>
        <CalloutBox variant="cultural" label={tCommon("culturalNote")}>
          <p>{t("cultural.body")}</p>
        </CalloutBox>
      </section>

      <PageNav
        locale={locale}
        prev={{ href: "/understand", label: tNav("understand") }}
        next={{ href: "/engage", label: tNav("engage") }}
      />
    </PageLayout>
  )
}
