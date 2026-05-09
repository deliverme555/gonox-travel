"use client";

import { useState } from "react";

const marker = "526748";

export default function HotelSearch() {
  const [destination, setDestination] = useState("Tokyo");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const searchHotels = () => {
    const query = new URLSearchParams({
      ss: destination,
      checkin: checkIn,
      checkout: checkOut,
      group_adults: guests,
      marker,
    });

    window.open(
      `https://www.booking.com/search.html?${query.toString()}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-3 md:grid-cols-4">
        <input
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          placeholder="Destination city"
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-sky-300 focus:ring"
        />
        <input
          value={checkIn}
          onChange={(event) => setCheckIn(event.target.value)}
          type="date"
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-sky-300 focus:ring"
        />
        <input
          value={checkOut}
          onChange={(event) => setCheckOut(event.target.value)}
          type="date"
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-sky-300 focus:ring"
        />
        <select
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-sky-300 focus:ring"
        >
          {Array.from({ length: 8 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} Guest{i === 0 ? "" : "s"}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={searchHotels}
        className="mt-4 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
      >
        Search Hotels
      </button>
    </div>
  );
}
