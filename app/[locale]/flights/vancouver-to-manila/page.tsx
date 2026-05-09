import type { Metadata } from "next";
import HeroSearch from "@/components/HeroSearch";
import { withMarker } from "@/lib/affiliate";
const marker = process.env.NEXT_PUBLIC_TP_MARKER;

export const metadata: Metadata = {
  title: "Vancouver to Manila Flights | Gonox Travel",
  description:
    "Find cheap flights from Vancouver to Manila and compare fares from CAD$750 return.",
};

export default function VancouverToManilaPage() {
  return (
    <section className="container-shell py-14">
      <h1 className="heading-xl text-slate-900">Cheap Flights from Vancouver to Manila</h1>
      <p className="section-subtitle mt-4 max-w-3xl">
        Compare YVR to MNL routes, stopovers and airline options quickly.
      </p>
      <div className="mt-8">
        <HeroSearch />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="heading-md text-slate-900">Quick Facts</h2>
          <ul className="body-base mt-3 list-disc space-y-2 pl-6 text-slate-600">
            <li>Flight time: ~15hrs</li>
            <li>Best airlines: Philippine Airlines, EVA Air, ANA</li>
            <li>Popular airports: YVR → MNL</li>
          </ul>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="heading-md text-slate-900">Best Time to Fly</h2>
          <p className="body-base mt-3 text-slate-600">
            January-March and September-November often present better fare windows.
          </p>
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
                <td className="py-2 text-slate-600">CAD$750-1300</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
      <a href={withMarker("https://www.aviasales.com/search/YVR0109MNL1", marker)} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary mt-8 inline-flex">
        Search Vancouver to Manila Flights
      </a>
    </section>
  );
}
