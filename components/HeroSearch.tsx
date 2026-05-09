"use client";

import { useEffect, useState } from "react";
import { withMarker } from "@/lib/affiliate";
import { getPresetByCountry, type RouteItem } from "@/lib/locationRoutes";

export default function HeroSearch() {
  const marker = process.env.NEXT_PUBLIC_TP_MARKER;
  const [tripType, setTripType] = useState<"return" | "oneway">("return");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [nonStopOnly, setNonStopOnly] = useState(false);
  const [isLocating, setIsLocating] = useState(true);
  const [detectedCity, setDetectedCity] = useState("Vancouver");
  const [dynamicRoutes, setDynamicRoutes] = useState<RouteItem[]>(
    getPresetByCountry().routes,
  );

  const getIataCode = (value: string) => {
    const match = value.toUpperCase().match(/[A-Z]{3}/g);
    if (match && match.length > 0) return match[match.length - 1];

    const compact = value.trim().toUpperCase();
    if (/^[A-Z]{3}$/.test(compact)) return compact;
    return "";
  };

  const toDateToken = (dateValue: string) => {
    if (!dateValue) {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      return `${day}${month}`;
    }
    const [year, month, day] = dateValue.split("-");
    if (!year || !month || !day) {
      const now = new Date();
      const nowDay = String(now.getDate()).padStart(2, "0");
      const nowMonth = String(now.getMonth() + 1).padStart(2, "0");
      return `${nowDay}${nowMonth}`;
    }
    return `${day}${month}`;
  };

  const buildSearchUrl = () => {
    const dateToken = toDateToken(departureDate);
    const normalizedFrom = getIataCode(from);
    const normalizedTo = getIataCode(to);
    if (!normalizedFrom || !normalizedTo) return null;

    const baseUrl = `https://www.aviasales.com/search/${normalizedFrom}${dateToken}${normalizedTo}1`;
    const withAffiliate = withMarker(baseUrl, marker);
    const url = new URL(withAffiliate);
    url.searchParams.set("passengers", passengers);
    if (tripType === "oneway") {
      url.searchParams.set("tripClass", "E");
      url.searchParams.set("oneway", "true");
    } else if (returnDate) {
      url.searchParams.set("returnDate", returnDate);
    }
    if (nonStopOnly) {
      url.searchParams.set("direct", "true");
    }
    return url.toString();
  };

  const submitSearch = () => {
    const url = buildSearchUrl();
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const response = await fetch("/api/geolocation", { cache: "no-store" });
        const data = (await response.json()) as {
          city?: string;
          departureCode?: string;
          preset?: { routes?: RouteItem[]; departureCity?: string };
        };

        if (!isMounted) return;

        const departureCode = data.departureCode ?? "YVR";
        const departureCity = data.city ?? data.preset?.departureCity ?? "Vancouver";
        setFrom(`${departureCity} ${departureCode}`);
        setDetectedCity(departureCity);
        if (data.preset?.routes && data.preset.routes.length > 0) {
          setDynamicRoutes(data.preset.routes);
          setTo(data.preset.routes[0].toCode);
        }
      } catch {
        if (!isMounted) return;
        const fallback = getPresetByCountry();
        setFrom(`${fallback.departureCity} ${fallback.departureCode}`);
        setDetectedCity(fallback.departureCity);
        setDynamicRoutes(fallback.routes);
        setTo(fallback.routes[0]?.toCode ?? "NRT");
      } finally {
        if (isMounted) setIsLocating(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full rounded-2xl border border-white/20 bg-white/10 p-6 text-white shadow-xl backdrop-blur-md">
      <div className="mb-4 flex items-center justify-start">
        <div className="inline-flex rounded-full bg-white/15 p-1">
          <button
            type="button"
            onClick={() => setTripType("return")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              tripType === "return"
                ? "bg-sky-500 text-white"
                : "text-white/80 hover:text-white"
            }`}
          >
            Return
          </button>
          <button
            type="button"
            onClick={() => setTripType("oneway")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              tripType === "oneway"
                ? "bg-sky-500 text-white"
                : "text-white/80 hover:text-white"
            }`}
          >
            One-way
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white opacity-70">
            From
          </label>
          <input
            value={from}
            onChange={(event) => setFrom(event.target.value)}
            type="text"
            className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-base font-medium text-white outline-none placeholder:text-sm placeholder:opacity-50 placeholder:text-white focus:ring focus:ring-sky-300"
            placeholder="City or airport"
          />
        </div>
        <div className="lg:col-span-2">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white opacity-70">
            To
          </label>
          <input
            value={to}
            onChange={(event) => setTo(event.target.value)}
            type="text"
            className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-base font-medium text-white outline-none placeholder:text-sm placeholder:opacity-50 placeholder:text-white focus:ring focus:ring-sky-300"
            placeholder="City or airport"
          />
        </div>
        <div className="lg:col-span-2">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white opacity-70">
            Departure date
          </label>
          <input
            value={departureDate}
            onChange={(event) => setDepartureDate(event.target.value)}
            placeholder="DD/MM/YYYY"
            onFocus={(event) => (event.currentTarget.type = "date")}
            onBlur={(event) => {
              if (!event.currentTarget.value) event.currentTarget.type = "text";
            }}
            type="text"
            className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-base font-medium text-white outline-none placeholder:text-sm placeholder:opacity-50 placeholder:text-white focus:ring focus:ring-sky-300"
          />
        </div>
        {tripType === "return" ? (
          <div className="lg:col-span-2">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white opacity-70">
              Return date
            </label>
            <input
              value={returnDate}
              onChange={(event) => setReturnDate(event.target.value)}
              placeholder="DD/MM/YYYY"
              onFocus={(event) => (event.currentTarget.type = "date")}
              onBlur={(event) => {
                if (!event.currentTarget.value) event.currentTarget.type = "text";
              }}
              type="text"
              className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-base font-medium text-white outline-none placeholder:text-sm placeholder:opacity-50 placeholder:text-white focus:ring focus:ring-sky-300"
            />
          </div>
        ) : (
          <div className="hidden lg:block lg:col-span-2" />
        )}
        <div className="lg:col-span-2">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white opacity-70">
            Passengers
          </label>
          <select
            value={passengers}
            onChange={(event) => setPassengers(event.target.value)}
            className="min-h-[44px] w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-base font-medium text-white outline-none ring-sky-300 focus:ring"
          >
            {Array.from({ length: 9 }, (_, index) => (
              <option key={index + 1} value={String(index + 1)}>
                {index + 1} Passenger{index === 0 ? "" : "s"}
              </option>
            ))}
          </select>
        </div>
        <div className="lg:col-span-2">
          <label className="mb-1 block text-xs font-semibold text-transparent">Search</label>
          <button
            type="button"
            onClick={submitSearch}
            className="min-h-[44px] w-full rounded-full bg-sky-400 px-4 py-3 text-base font-semibold tracking-wide text-slate-950 shadow-[0_0_28px_rgba(56,189,248,0.45)] transition-all duration-200 hover:bg-sky-300"
          >
            Search Flights
          </button>
        </div>
      </div>

      <label className="mt-4 inline-flex items-center gap-2 text-xs text-white/85">
        <input
          type="checkbox"
          checked={nonStopOnly}
          onChange={(event) => setNonStopOnly(event.target.checked)}
          className="h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-300"
        />
        Non-stop flights only
      </label>

      <div className="mt-5">
        {isLocating ? (
          <p className="text-xs text-white/70">Detecting your location...</p>
        ) : (
          <p className="text-xs text-white/75">
            Showing flights from {detectedCity}.{" "}
            <button
              type="button"
              onClick={() => setFrom("")}
              className="font-semibold text-sky-300 hover:text-sky-200"
            >
              Change
            </button>
          </p>
        )}
        <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
          Popular routes
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {dynamicRoutes.map((route) => (
            <button
              key={`${route.fromCode}-${route.toCode}`}
              onClick={() => {
                setFrom(`${route.fromCity} ${route.fromCode}`);
                setTo(`${route.toCity} ${route.toCode}`);
              }}
              className="rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs font-medium text-white/90 transition-all duration-200 hover:border-sky-300 hover:text-sky-200"
            >
              {route.fromCity} → {route.toCity}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
