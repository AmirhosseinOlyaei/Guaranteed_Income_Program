import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "../globals.css"

export const metadata: Metadata = {
  title: "Guaranteed Income for Persian Americans | DevArts Lab",
  description:
    "A practical guide for nonprofits and practitioners to build guaranteed income programs for the Persian-American community.",
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as "en" | "fa")) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()
  const isRTL = locale === "fa"

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
