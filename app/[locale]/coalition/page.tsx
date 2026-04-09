import { getTranslations } from "next-intl/server"
import { setRequestLocale } from "next-intl/server"
import PageLayout from "@/components/PageLayout"
import PageHero from "@/components/PageHero"
import CalloutBox from "@/components/CalloutBox"
import PageNav from "@/components/PageNav"

type Props = { params: Promise<{ locale: string }> }

export default async function CoalitionPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("coalition")
  const tNav = await getTranslations("nav")
  const tCommon = await getTranslations("common")

  return (
    <PageLayout>
      <PageHero
        step={`${tCommon("step")} 06`}
        title={t("title")}
        intro={t("intro")}
      />

      {/* Why */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">{t("why.title")}</h2>
        <p className="text-muted leading-relaxed">{t("why.body")}</p>
      </section>

      {/* Forming */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("forming.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{t("forming.body")}</p>
        <CalloutBox variant="trust" label={tCommon("trustNote")}>
          <p>{t("forming.leadership")}</p>
        </CalloutBox>
      </section>

      {/* Structure */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("structure.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{t("structure.body")}</p>
        <CalloutBox variant="info" label={tCommon("keyConsiderations")}>
          <p>{t("structure.agreements")}</p>
        </CalloutBox>
      </section>

      {/* Impact */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("impact.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{t("impact.body")}</p>
        <CalloutBox variant="cultural" label={tCommon("culturalNote")}>
          <p>{t("impact.advocacy")}</p>
        </CalloutBox>
      </section>

      {/* National */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("national.title")}
        </h2>
        <p className="text-muted leading-relaxed">{t("national.body")}</p>
      </section>

      <PageNav
        locale={locale}
        prev={{ href: "/payments", label: tNav("payments") }}
        next={{ href: "/resources", label: tNav("resources") }}
      />
    </PageLayout>
  )
}
