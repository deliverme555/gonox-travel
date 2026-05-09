import type { Metadata } from "next";
import HeroSearch from "@/components/HeroSearch";

export const metadata: Metadata = {
  title: "Vancouver to Seoul Flights | Gonox Travel",
  description:
    "Compare Vancouver to Seoul flights and track better fare options in CAD.",
  openGraph: {
    title: "Vancouver to Seoul Flights | Gonox Travel",
    description:
      "Compare Vancouver to Seoul flights and track better fare options in CAD.",
    url: "https://www.gonoxtravel.com/en/flights/vancouver-to-seoul",
    siteName: "Gonox Travel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vancouver to Seoul Flights | Gonox Travel",
    description:
      "Compare Vancouver to Seoul flights and track better fare options in CAD.",
  },
};

export default function VancouverToSeoulPage() {
  return (
    <section className="container-shell py-14">
      <h1 className="text-4xl font-bold text-slate-900">Cheap Flights from Vancouver to Seoul</h1>
      <p className="mt-4 max-w-3xl text-slate-600">Find competitive YVR to ICN fares with live comparison across major carriers.</p>
      <div className="mt-8">
        <HeroSearch />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Quick Facts</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
            <li>Flight time: ~11hrs</li>
            <li>Best airlines: Korean Air, Air Canada, Asiana</li>
            <li>Popular airports: YVR → ICN</li>
          </ul>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Best Time to Fly</h2>
          <p className="mt-3 text-slate-600">April-June and September-November are common value periods.</p>
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
                <td className="py-2 text-slate-600">CAD$860-1400</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
      <a href="https://www.aviasales.com/search/YVR0109ICN1?marker=526748" target="_blank" rel="noopener noreferrer sponsored" className="mt-8 inline-block rounded-full bg-sky-500 px-5 py-3 font-semibold text-white hover:bg-sky-600">
        Search Vancouver to Seoul Flights
      </a>
    </section>
  );
}
