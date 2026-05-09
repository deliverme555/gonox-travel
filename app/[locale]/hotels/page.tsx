import { getTranslations } from "next-intl/server";
import TravelpayoutsWidget from "@/components/TravelpayoutsWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotels | Gonox Travel",
  description:
    "Find hotels, resorts and apartments with flexible rates and trusted reviews.",
  openGraph: {
    title: "Hotels | Gonox Travel",
    description:
      "Find hotels, resorts and apartments with flexible rates and trusted reviews.",
    url: "https://www.gonoxtravel.com/en/hotels",
    siteName: "Gonox Travel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotels | Gonox Travel",
    description:
      "Find hotels, resorts and apartments with flexible rates and trusted reviews.",
  },
};

type HotelsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HotelsPage({ params }: HotelsPageProps) {
  const { locale } = await params;
  const t = await getTranslations("pages.hotels");

  return (
    <section className="container-shell py-14">
      <h1 className="heading-xl text-slate-900">{t("title")}</h1>
      <p className="section-subtitle mt-3 max-w-3xl">{t("description")}</p>
      <div className="mt-8">
        <TravelpayoutsWidget type="hotels" locale={locale} currency="CAD" />
      </div>
    </section>
  );
}
