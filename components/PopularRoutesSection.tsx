"use client";

import { useEffect, useMemo, useState } from "react";
import DealCard from "@/components/DealCard";
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
      <h2 className="text-2xl font-bold text-slate-900">Popular Routes</h2>
      <p className="mt-2 text-sm text-slate-600">
        {isLoading ? "Detecting local departure city..." : `Showing routes from ${detectedCity}`}
      </p>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {routes.map((route) => (
          <DealCard
            key={`${route.fromCode}-${route.toCode}`}
            title={`${route.flag} ${route.fromCode} → ${route.toCode} ${route.toCity}`}
            subtitle={`${route.fromCity} to ${route.toCity}`}
            price={`From CAD $${route.priceFromCad}`}
            ctaLabel="Search Flights"
            href={withMarker(
              `https://www.aviasales.com/search/${route.fromCode}${dateToken}${route.toCode}1`,
              marker,
            )}
          />
        ))}
      </div>
    </section>
  );
}
