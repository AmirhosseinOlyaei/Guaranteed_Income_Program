import { getTranslations } from "next-intl/server"
import { setRequestLocale } from "next-intl/server"
import PageLayout from "@/components/PageLayout"
import PageHero from "@/components/PageHero"
import CalloutBox from "@/components/CalloutBox"
import PageNav from "@/components/PageNav"

type Props = { params: Promise<{ locale: string }> }

export default async function EngagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("engage")
  const tNav = await getTranslations("nav")
  const tCommon = await getTranslations("common")

  return (
    <PageLayout>
      <PageHero
        step={`${tCommon("step")} 03`}
        title={t("title")}
        intro={t("intro")}
      />

      {/* Outreach */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("outreach.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{t("outreach.body")}</p>
        <p className="text-muted leading-relaxed">{t("outreach.channels")}</p>
      </section>

      {/* Language Access */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("language.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{t("language.body")}</p>
        <CalloutBox variant="trust" label={tCommon("trustNote")}>
          <p>{t("language.interpretation")}</p>
        </CalloutBox>
      </section>

      {/* Trust Building */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("trust.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{t("trust.body")}</p>

        <div className="space-y-4">
          <CalloutBox variant="trust" label={tCommon("trustNote")}>
            <p>{t("trust.peers")}</p>
          </CalloutBox>

          <CalloutBox variant="immigration" label={tCommon("immigrationNote")}>
            <p>{t("trust.privacy")}</p>
          </CalloutBox>
        </div>
      </section>

      {/* Stigma */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("stigma.title")}
        </h2>
        <CalloutBox variant="cultural" label={tCommon("culturalNote")}>
          <p>{t("stigma.body")}</p>
        </CalloutBox>
      </section>

      <PageNav
        locale={locale}
        prev={{ href: "/design", label: tNav("design") }}
        next={{ href: "/administer", label: tNav("administer") }}
      />
    </PageLayout>
  )
}
