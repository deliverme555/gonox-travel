"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type SearchTab = "flights" | "hotels" | "cars";

export default function HeroSearch() {
  const t = useTranslations("home.hero");
  const [activeTab, setActiveTab] = useState<SearchTab>("flights");

  const tabs: SearchTab[] = ["flights", "hotels", "cars"];

  return (
    <div className="w-full rounded-2xl bg-white p-4 shadow-lg sm:p-6">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeTab === tab
                ? "bg-sky-500 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {t(`tabs.${tab}`)}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-4">
        <input
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-sky-300 focus:ring"
          placeholder={t("from")}
        />
        <input
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-sky-300 focus:ring"
          placeholder={t("to")}
        />
        <input
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-sky-300 focus:ring"
          placeholder={t("date")}
        />
        <button className="rounded-xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-600">
          {t("search")}
        </button>
      </div>
    </div>
  );
}
