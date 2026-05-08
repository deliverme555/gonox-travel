import { useTranslations } from "next-intl";
import DealCard from "@/components/DealCard";

export default function DealsPage() {
  const t = useTranslations("pages.deals");
  const items = ["item1", "item2", "item3", "item4"] as const;

  return (
    <section className="container-shell py-14">
      <h1 className="text-3xl font-bold text-slate-900">{t("title")}</h1>
      <p className="mt-3 max-w-3xl text-slate-600">{t("description")}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <DealCard
            key={item}
            title={t(`items.${item}.title`)}
            subtitle={t(`items.${item}.subtitle`)}
            price={t(`items.${item}.price`)}
            cta={t("cta")}
          />
        ))}
      </div>
    </section>
  );
}
