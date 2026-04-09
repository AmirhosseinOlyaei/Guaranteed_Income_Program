import { getTranslations } from "next-intl/server"
import { setRequestLocale } from "next-intl/server"
import PageLayout from "@/components/PageLayout"
import PageHero from "@/components/PageHero"
import CalloutBox from "@/components/CalloutBox"
import PageNav from "@/components/PageNav"

type Props = { params: Promise<{ locale: string }> }

export default async function PaymentsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("payments")
  const tNav = await getTranslations("nav")
  const tCommon = await getTranslations("common")

  return (
    <PageLayout>
      <PageHero
        step={`${tCommon("step")} 05`}
        title={t("title")}
        intro={t("intro")}
      />

      {/* Banking Barriers */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("banking.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{t("banking.body")}</p>
        <CalloutBox variant="trust" label={tCommon("trustNote")}>
          <p>{t("banking.solutions")}</p>
        </CalloutBox>
      </section>

      {/* Dignity */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("dignity.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{t("dignity.body")}</p>
        <CalloutBox variant="cultural" label={tCommon("culturalNote")}>
          <p>{t("dignity.communication")}</p>
        </CalloutBox>
      </section>

      {/* Financial Inclusion */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("financial.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{t("financial.body")}</p>
        <CalloutBox variant="immigration" label={tCommon("immigrationNote")}>
          <p>{t("financial.benefits")}</p>
        </CalloutBox>
      </section>

      {/* Tax Reporting */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("reporting.title")}
        </h2>
        <p className="text-muted leading-relaxed">{t("reporting.body")}</p>
      </section>

      <PageNav
        locale={locale}
        prev={{ href: "/administer", label: tNav("administer") }}
        next={{ href: "/coalition", label: tNav("coalition") }}
      />
    </PageLayout>
  )
}
