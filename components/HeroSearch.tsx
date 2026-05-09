"use client";

import { useState } from "react";
import { withMarker } from "@/lib/affiliate";

type QuickRoute = {
  label: string;
  from: string;
  to: string;
};

const quickRoutes: QuickRoute[] = [
  { label: "Vancouver → Tokyo", from: "YVR", to: "NRT" },
  { label: "Vancouver → Hong Kong", from: "YVR", to: "HKG" },
  { label: "Vancouver → Bangkok", from: "YVR", to: "BKK" },
  { label: "Vancouver → Seoul", from: "YVR", to: "ICN" },
  { label: "Vancouver → Taipei", from: "YVR", to: "TPE" },
  { label: "Vancouver → Manila", from: "YVR", to: "MNL" },
];

export default function HeroSearch() {
  const marker = process.env.NEXT_PUBLIC_TP_MARKER;
  const [from, setFrom] = useState("YVR");
  const [to, setTo] = useState("NRT");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  const getIataCode = (value: string, fallback: string) => {
    const match = value.toUpperCase().match(/[A-Z]{3}/g);
    if (match && match.length > 0) return match[match.length - 1];

    const compact = value.trim().toUpperCase();
    if (/^[A-Z]{3}$/.test(compact)) return compact;
    return fallback;
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
    const normalizedFrom = getIataCode(from, "YVR");
    const normalizedTo = getIataCode(to, "NRT");
    const baseUrl = `https://www.aviasales.com/search/${normalizedFrom}${dateToken}${normalizedTo}1`;
    return withMarker(baseUrl, marker);
  };

  const submitSearch = () => {
    window.open(buildSearchUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full rounded-2xl bg-white p-4 shadow-xl sm:p-6">
      <div className="grid gap-3 md:grid-cols-5">
        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-600">From</label>
          <input
            value={from}
            onChange={(event) => setFrom(event.target.value)}
            type="text"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-300 focus:ring"
            placeholder="From (e.g. Vancouver YVR)"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-600">To</label>
          <input
            value={to}
            onChange={(event) => setTo(event.target.value)}
            type="text"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-300 focus:ring"
            placeholder="To (e.g. Tokyo NRT)"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-600">
            Departure date
          </label>
          <input
            value={departureDate}
            onChange={(event) => setDepartureDate(event.target.value)}
            type="date"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-300 focus:ring"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-600">
            Return date
          </label>
          <input
            value={returnDate}
            onChange={(event) => setReturnDate(event.target.value)}
            type="date"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-300 focus:ring"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-600">
            Passengers
          </label>
          <select
            value={passengers}
            onChange={(event) => setPassengers(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-300 focus:ring"
          >
            {Array.from({ length: 9 }, (_, index) => (
              <option key={index + 1} value={String(index + 1)}>
                {index + 1} Passenger{index === 0 ? "" : "s"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={submitSearch}
        className="mt-4 w-full rounded-xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 md:w-auto"
      >
        Search Flights
      </button>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Popular routes
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {quickRoutes.map((route) => (
            <button
              key={route.label}
              onClick={() => {
                setFrom(route.from);
                setTo(route.to);
              }}
              className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-sky-500 hover:text-sky-600"
            >
              {route.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
