import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = `https://www.gonoxtravel.com/${locale}`;
  return {
    title: `Gonox Travel | ${locale.toUpperCase()}`,
    description: "Compare flights, hotels and travel deals worldwide.",
    alternates: {
      canonical,
    },
    openGraph: {
      title: `Gonox Travel | ${locale.toUpperCase()}`,
      description: "Compare flights, hotels and travel deals worldwide.",
      url: canonical,
      siteName: "Gonox Travel",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Gonox Travel | ${locale.toUpperCase()}`,
      description: "Compare flights, hotels and travel deals worldwide.",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
