"use client";

import { useState } from "react";
const marker = "526748";

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
  const [from, setFrom] = useState("YVR");
  const [to, setTo] = useState("NRT");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  const toDateToken = (dateValue: string) => {
    if (!dateValue) return "0109";
    const [year, month, day] = dateValue.split("-");
    if (!year || !month || !day) return "0109";
    return `${day}${month}`;
  };

  const buildSearchUrl = () => {
    const dateToken = toDateToken(departureDate);
    const normalizedFrom = from.trim().toUpperCase() || "YVR";
    const normalizedTo = to.trim().toUpperCase() || "NRT";
    return `https://www.aviasales.com/search/${normalizedFrom}${dateToken}${normalizedTo}1?marker=${marker}`;
  };

  const submitSearch = () => {
    window.open(buildSearchUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full rounded-2xl bg-white p-4 shadow-xl sm:p-6">
      <div className="grid gap-3 md:grid-cols-5">
        <input
          value={from}
          onChange={(event) => setFrom(event.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-sky-300 focus:ring"
          placeholder="From (YVR)"
        />
        <input
          value={to}
          onChange={(event) => setTo(event.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-sky-300 focus:ring"
          placeholder="To (NRT)"
        />
        <input
          value={departureDate}
          onChange={(event) => setDepartureDate(event.target.value)}
          type="date"
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-sky-300 focus:ring"
        />
        <input
          value={returnDate}
          onChange={(event) => setReturnDate(event.target.value)}
          type="date"
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-sky-300 focus:ring"
        />
        <select
          value={passengers}
          onChange={(event) => setPassengers(event.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-sky-300 focus:ring"
        >
          {Array.from({ length: 9 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1} Passenger{index === 0 ? "" : "s"}
            </option>
          ))}
        </select>
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

      <div className="mt-3 text-xs text-slate-500">
        Search URL format:{" "}
        <code>https://www.aviasales.com/search/FROMDDMMTO1?marker=526748</code>
      </div>
    </div>
  );
}
