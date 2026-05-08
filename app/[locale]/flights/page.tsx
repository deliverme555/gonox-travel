import { useTranslations } from "next-intl";
import TravelpayoutsWidget from "@/components/TravelpayoutsWidget";

export default function FlightsPage() {
  const t = useTranslations("pages.flights");

  return (
    <section className="container-shell py-14">
      <h1 className="text-3xl font-bold text-slate-900">{t("title")}</h1>
      <p className="mt-3 max-w-3xl text-slate-600">{t("description")}</p>
      <div className="mt-8">
        <TravelpayoutsWidget type="flights" campaignId="GONOX-FLIGHTS-001" />
      </div>
    </section>
  );
}
