import { useTranslations } from "next-intl";
import DealCard from "@/components/DealCard";
import { withMarker } from "@/lib/affiliate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deals | Gonox Travel",
  description: "Fresh promotions for flights, hotels and package holidays.",
  openGraph: {
    title: "Deals | Gonox Travel",
    description: "Fresh promotions for flights, hotels and package holidays.",
    url: "https://www.gonoxtravel.com/en/deals",
    siteName: "Gonox Travel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deals | Gonox Travel",
    description: "Fresh promotions for flights, hotels and package holidays.",
  },
};

export default function DealsPage() {
  const t = useTranslations("pages.deals");
  const items = ["item1", "item2", "item3", "item4"] as const;
  const marker = process.env.NEXT_PUBLIC_TP_MARKER;

  return (
    <section className="container-shell py-14">
      <h1 className="heading-xl text-slate-900">{t("title")}</h1>
      <p className="section-subtitle mt-3 max-w-3xl">{t("description")}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <DealCard
            key={item}
            title={t(`items.${item}.title`)}
            subtitle={t(`items.${item}.subtitle`)}
            price={t(`items.${item}.price`)}
            ctaLabel={t("cta")}
            href={withMarker("https://www.travelpayouts.com/", marker)}
          />
        ))}
      </div>
    </section>
  );
}
