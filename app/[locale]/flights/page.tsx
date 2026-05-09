import { getTranslations } from "next-intl/server";
import TravelpayoutsWidget from "@/components/TravelpayoutsWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flights | Gonox Travel",
  description:
    "Search domestic and international flight deals with trusted partners.",
  openGraph: {
    title: "Flights | Gonox Travel",
    description:
      "Search domestic and international flight deals with trusted partners.",
    url: "https://www.gonoxtravel.com/en/flights",
    siteName: "Gonox Travel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flights | Gonox Travel",
    description:
      "Search domestic and international flight deals with trusted partners.",
  },
};

type FlightsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function FlightsPage({ params }: FlightsPageProps) {
  const { locale } = await params;
  const t = await getTranslations("pages.flights");

  return (
    <section className="container-shell py-14">
      <h1 className="heading-xl text-slate-900">{t("title")}</h1>
      <p className="section-subtitle mt-3 max-w-3xl">{t("description")}</p>
      <div className="mt-8">
        <TravelpayoutsWidget type="flights" locale={locale} currency="CAD" />
      </div>
    </section>
  );
}
