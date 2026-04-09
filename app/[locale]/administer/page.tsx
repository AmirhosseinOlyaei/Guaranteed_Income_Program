import { getTranslations } from "next-intl/server"
import { setRequestLocale } from "next-intl/server"
import PageLayout from "@/components/PageLayout"
import PageHero from "@/components/PageHero"
import CalloutBox from "@/components/CalloutBox"
import PageNav from "@/components/PageNav"

type Props = { params: Promise<{ locale: string }> }

export default async function AdministerPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("administer")
  const tNav = await getTranslations("nav")
  const tCommon = await getTranslations("common")

  return (
    <PageLayout>
      <PageHero
        step={`${tCommon("step")} 04`}
        title={t("title")}
        intro={t("intro")}
      />

      {/* Enrollment */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("enrollment.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          {t("enrollment.body")}
        </p>
        <CalloutBox variant="trust" label={tCommon("trustNote")}>
          <p>{t("enrollment.selection")}</p>
        </CalloutBox>
      </section>

      {/* Privacy */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("privacy.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{t("privacy.body")}</p>
        <CalloutBox variant="immigration" label={tCommon("immigrationNote")}>
          <p>{t("privacy.policy")}</p>
        </CalloutBox>
      </section>

      {/* Casework */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("casework.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{t("casework.body")}</p>
        <CalloutBox variant="cultural" label={tCommon("culturalNote")}>
          <p>{t("casework.dignity")}</p>
        </CalloutBox>
      </section>

      {/* Staff Training */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("staff.title")}
        </h2>
        <p className="text-muted leading-relaxed">{t("staff.body")}</p>
      </section>

      <PageNav
        locale={locale}
        prev={{ href: "/engage", label: tNav("engage") }}
        next={{ href: "/payments", label: tNav("payments") }}
      />
    </PageLayout>
  )
}
