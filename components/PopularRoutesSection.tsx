"use client";

import { useEffect, useMemo, useState } from "react";
import { withMarker } from "@/lib/affiliate";
import { getPresetByCountry, type RouteItem } from "@/lib/locationRoutes";

type GeoResponse = {
  city?: string;
  preset?: {
    routes?: RouteItem[];
  };
};

export default function PopularRoutesSection() {
  const marker = process.env.NEXT_PUBLIC_TP_MARKER;
  const [routes, setRoutes] = useState<RouteItem[]>(getPresetByCountry().routes);
  const [detectedCity, setDetectedCity] = useState("Vancouver");
  const [isLoading, setIsLoading] = useState(true);

  const dateToken = useMemo(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    return `${day}${month}`;
  }, []);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const response = await fetch("/api/geolocation", { cache: "no-store" });
        const data = (await response.json()) as GeoResponse;
        if (!isMounted) return;
        if (data.preset?.routes?.length) setRoutes(data.preset.routes);
        if (data.city) setDetectedCity(data.city);
      } catch {
        if (!isMounted) return;
        const fallback = getPresetByCountry();
        setRoutes(fallback.routes);
        setDetectedCity(fallback.departureCity);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="container-shell py-14">
      <h2 className="section-title text-slate-900">Popular Routes</h2>
      <p className="section-subtitle mt-2 opacity-70">
        {isLoading ? "Detecting local departure city..." : `Showing routes from ${detectedCity}`}
      </p>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {routes.map((route) => (
          <article
            key={`${route.fromCode}-${route.toCode}`}
            className="rounded-2xl border-l-4 border-sky-400 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-lg font-bold text-slate-900">
                  {route.fromCity}
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 opacity-60">
                  {route.fromCode}
                </p>
              </div>
              <div className="flex-1 px-2 text-center">
                <p className="text-sm text-slate-400">──────── ✈️ ────────</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-slate-900">{route.toCity}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 opacity-60">
                  {route.toCode}
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="flex flex-wrap items-baseline gap-x-1.5">
                <span className="body-sm font-medium text-slate-600">From CAD</span>
                <span className="price-display">${route.priceFromCad}</span>
              </p>
              <a
                href={withMarker(
                  `https://www.aviasales.com/search/${route.fromCode}${dateToken}${route.toCode}1`,
                  marker,
                )}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-card-cta inline-flex min-h-[44px] items-center rounded-lg border border-sky-500 px-4 py-2 text-sm font-semibold text-sky-600 hover:bg-sky-500 hover:text-white"
              >
                Search Flights
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
