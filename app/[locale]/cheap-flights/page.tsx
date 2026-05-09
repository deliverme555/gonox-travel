import type { Metadata } from "next";
import TravelpayoutsWidget from "@/components/TravelpayoutsWidget";

export const metadata: Metadata = {
  title: "Cheap Flights | Gonox Travel",
  description:
    "Find and compare cheap flights worldwide. Search hundreds of airlines for the best deals.",
  openGraph: {
    title: "Cheap Flights | Gonox Travel",
    description:
      "Find and compare cheap flights worldwide. Search hundreds of airlines for the best deals.",
    url: "https://www.gonoxtravel.com/en/cheap-flights",
    siteName: "Gonox Travel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheap Flights | Gonox Travel",
    description:
      "Find and compare cheap flights worldwide. Search hundreds of airlines for the best deals.",
  },
  alternates: {
    canonical: "https://www.gonoxtravel.com/en/cheap-flights",
  },
};

type CheapFlightsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function CheapFlightsPage({ params }: CheapFlightsPageProps) {
  const { locale } = await params;

  return (
    <section className="container-shell py-14">
      <h1 className="text-4xl font-bold text-slate-900">Find Cheap Flights</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        Compare routes, dates and airlines in seconds. Gonox Travel helps you
        scan global airfares and surface lower prices from trusted partners.
      </p>
      <div className="mt-8">
        <TravelpayoutsWidget type="flights" locale={locale} currency="CAD" />
      </div>
    </section>
  );
}
