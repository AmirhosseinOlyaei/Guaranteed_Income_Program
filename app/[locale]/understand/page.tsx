import { getTranslations } from "next-intl/server"
import { setRequestLocale } from "next-intl/server"
import PageLayout from "@/components/PageLayout"
import PageHero from "@/components/PageHero"
import CalloutBox from "@/components/CalloutBox"
import PageNav from "@/components/PageNav"

type Props = { params: Promise<{ locale: string }> }

export default async function UnderstandPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("understand")
  const tNav = await getTranslations("nav")
  const tCommon = await getTranslations("common")

  return (
    <PageLayout>
      <PageHero
        step={`${tCommon("step")} 01`}
        title={t("title")}
        intro={t("intro")}
      />

      {/* Demographics */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("demographics.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          {t("demographics.body")}
        </p>
        <p className="text-muted leading-relaxed">{t("demographics.waves")}</p>
      </section>

      {/* Economics */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("economics.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-4">{t("economics.body")}</p>
        <CalloutBox variant="info" label={tCommon("keyConsiderations")}>
          <p>{t("economics.seniors")}</p>
        </CalloutBox>
      </section>

      {/* Immigration Status */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-4">
          {t("immigration.title")}
        </h2>
        <p className="text-muted leading-relaxed mb-6">
          {t("immigration.intro")}
        </p>

        <div className="space-y-4">
          <CalloutBox
            variant="immigration"
            label={t("immigration.asylum.label")}
          >
            <p>{t("immigration.asylum.body")}</p>
          </CalloutBox>

          <CalloutBox
            variant="immigration"
            label={t("immigration.greenCard.label")}
          >
            <p>{t("immigration.greenCard.body")}</p>
          </CalloutBox>

          <CalloutBox
            variant="immigration"
            label={t("immigration.citizen.label")}
          >
            <p>{t("immigration.citizen.body")}</p>
          </CalloutBox>
        </div>
      </section>

      {/* Cultural Context */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-text mb-6">
          {t("cultural.title")}
        </h2>
        <div className="space-y-4">
          <CalloutBox variant="cultural" label={t("cultural.abroo.label")}>
            <p>{t("cultural.abroo.body")}</p>
          </CalloutBox>

          <CalloutBox variant="cultural" label={t("cultural.family.label")}>
            <p>{t("cultural.family.body")}</p>
          </CalloutBox>

          <CalloutBox variant="trust" label={t("cultural.privacy.label")}>
            <p>{t("cultural.privacy.body")}</p>
          </CalloutBox>
        </div>
      </section>

      <PageNav
        locale={locale}
        prev={{ href: "/", label: tNav("home") }}
        next={{ href: "/design", label: tNav("design") }}
      />
    </PageLayout>
  )
}
