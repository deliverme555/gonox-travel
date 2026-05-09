import type { Metadata } from "next";
import HeroSearch from "@/components/HeroSearch";
import { withMarker } from "@/lib/affiliate";
const marker = process.env.NEXT_PUBLIC_TP_MARKER;

export const metadata: Metadata = {
  title: "Vancouver to Bangkok Flights | Gonox Travel",
  description:
    "Find low fares from Vancouver to Bangkok and compare multiple airlines quickly.",
  openGraph: {
    title: "Vancouver to Bangkok Flights | Gonox Travel",
    description:
      "Find low fares from Vancouver to Bangkok and compare multiple airlines quickly.",
    url: "https://www.gonoxtravel.com/en/flights/vancouver-to-bangkok",
    siteName: "Gonox Travel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vancouver to Bangkok Flights | Gonox Travel",
    description:
      "Find low fares from Vancouver to Bangkok and compare multiple airlines quickly.",
  },
};

export default function VancouverToBangkokPage() {
  return (
    <section className="container-shell py-14">
      <h1 className="text-4xl font-bold text-slate-900">Cheap Flights from Vancouver to Bangkok</h1>
      <p className="mt-4 max-w-3xl text-slate-600">Compare YVR to BKK prices and choose the best stopover combinations for your trip.</p>
      <div className="mt-8">
        <HeroSearch />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Quick Facts</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
            <li>Flight time: ~16hrs</li>
            <li>Best airlines: EVA Air, ANA, Cathay Pacific</li>
            <li>Popular airports: YVR → BKK</li>
          </ul>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Best Time to Fly</h2>
          <p className="mt-3 text-slate-600">November-February is peak season; shoulder months can offer lower fares.</p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="py-2 text-slate-900">Cabin</th>
                <th className="py-2 text-slate-900">Typical Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 text-slate-600">Economy</td>
                <td className="py-2 text-slate-600">CAD$920-1500</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
      <a href={withMarker("https://www.aviasales.com/search/YVR0109BKK1", marker)} target="_blank" rel="noopener noreferrer sponsored" className="mt-8 inline-block rounded-full bg-sky-500 px-5 py-3 font-semibold text-white hover:bg-sky-600">
        Search Vancouver to Bangkok Flights
      </a>
    </section>
  );
}
