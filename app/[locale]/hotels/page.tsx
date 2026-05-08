import { useTranslations } from "next-intl";
import TravelpayoutsWidget from "@/components/TravelpayoutsWidget";

export default function HotelsPage() {
  const t = useTranslations("pages.hotels");

  return (
    <section className="container-shell py-14">
      <h1 className="text-3xl font-bold text-slate-900">{t("title")}</h1>
      <p className="mt-3 max-w-3xl text-slate-600">{t("description")}</p>
      <div className="mt-8">
        <TravelpayoutsWidget type="hotels" campaignId="GONOX-HOTELS-001" />
      </div>
    </section>
  );
}
