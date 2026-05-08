import { useTranslations } from "next-intl";
import HeroSearch from "@/components/HeroSearch";
import DestinationCard from "@/components/DestinationCard";
import DealCard from "@/components/DealCard";

export default function HomePage() {
  const t = useTranslations("home");

  const destinations = [
    "tokyo",
    "paris",
    "london",
    "bali",
    "newYork",
    "dubai",
  ] as const;
  const flightDeals = ["deal1", "deal2", "deal3"] as const;
  const hotelDeals = ["hotel1", "hotel2", "hotel3"] as const;
  const features = ["feature1", "feature2", "feature3", "feature4"] as const;
  const posts = ["post1", "post2", "post3"] as const;

  return (
    <div>
      <section className="bg-slate-900 py-16 text-white md:py-20">
        <div className="container-shell">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-400">
            Gonox Travel
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-200">{t("hero.subtitle")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold transition hover:bg-sky-600">
              {t("hero.searchFlights")}
            </button>
            <button className="rounded-full border border-slate-500 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400">
              {t("hero.exploreDeals")}
            </button>
          </div>
          <div className="mt-8">
            <HeroSearch />
          </div>
        </div>
      </section>

      <section className="container-shell py-14">
        <h2 className="text-2xl font-bold text-slate-900">
          {t("destinations.title")}
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((key) => (
            <DestinationCard
              key={key}
              city={t(`destinations.items.${key}.city`)}
              country={t(`destinations.items.${key}.country`)}
              summary={t(`destinations.items.${key}.summary`)}
            />
          ))}
        </div>
      </section>

      <section className="container-shell py-8">
        <h2 className="text-2xl font-bold text-slate-900">{t("flights.title")}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {flightDeals.map((key) => (
            <DealCard
              key={key}
              title={t(`flights.items.${key}.title`)}
              subtitle={t(`flights.items.${key}.subtitle`)}
              price={t(`flights.items.${key}.price`)}
              cta={t("flights.cta")}
            />
          ))}
        </div>
      </section>

      <section className="container-shell py-8">
        <h2 className="text-2xl font-bold text-slate-900">{t("hotels.title")}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {hotelDeals.map((key) => (
            <DealCard
              key={key}
              title={t(`hotels.items.${key}.title`)}
              subtitle={t(`hotels.items.${key}.subtitle`)}
              price={t(`hotels.items.${key}.price`)}
              cta={t("hotels.cta")}
            />
          ))}
        </div>
      </section>

      <section className="container-shell py-14">
        <h2 className="text-2xl font-bold text-slate-900">{t("why.title")}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((key) => (
            <article key={key} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                {t(`why.items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {t(`why.items.${key}.summary`)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-8">
        <h2 className="text-2xl font-bold text-slate-900">{t("blog.title")}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {posts.map((key) => (
            <article key={key} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                {t(`blog.items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {t(`blog.items.${key}.summary`)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
