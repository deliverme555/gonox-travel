import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

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
    description:
      "Plan international travel with confidence on Gonox Travel. Compare fares, discover hotel deals, and book smarter worldwide.",
    alternates: {
      canonical,
    },
    openGraph: {
      title: `Gonox Travel | ${locale.toUpperCase()}`,
      description:
        "Plan international travel with confidence on Gonox Travel. Compare fares, discover hotel deals, and book smarter worldwide.",
      url: canonical,
      siteName: "Gonox Travel",
      type: "website",
      images: [
        {
          url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90",
          width: 1920,
          height: 1080,
          alt: "Gonox Travel aircraft view",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Gonox Travel | ${locale.toUpperCase()}`,
      description:
        "Plan international travel with confidence on Gonox Travel. Compare fares, discover hotel deals, and book smarter worldwide.",
      images: [
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90",
      ],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Gonox Travel",
    url: `https://www.gonoxtravel.com/${locale}`,
    logo: "https://www.gonoxtravel.com/favicon.ico",
    sameAs: ["https://x.com", "https://instagram.com", "https://youtube.com"],
    description:
      "International travel comparison platform for flights, hotels and curated deals.",
  };

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <Script
          id="travel-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
