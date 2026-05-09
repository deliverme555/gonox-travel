import DestinationCard from "@/components/DestinationCard";
import HeroSearch from "@/components/HeroSearch";
import HotelSearch from "@/components/HotelSearch";
import PopularHotelsSection from "@/components/PopularHotelsSection";
import PopularRoutesSection from "@/components/PopularRoutesSection";
import { Link } from "@/i18n/navigation";
import { withMarker } from "@/lib/affiliate";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gonox Travel | Flights, Hotels & Deals",
  description:
    "Compare flights, hotels and travel deals worldwide with Gonox Travel.",
  openGraph: {
    title: "Gonox Travel | Flights, Hotels & Deals",
    description:
      "Compare flights, hotels and travel deals worldwide with Gonox Travel.",
    url: "https://www.gonoxtravel.com",
    siteName: "Gonox Travel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonox Travel | Flights, Hotels & Deals",
    description:
      "Compare flights, hotels and travel deals worldwide with Gonox Travel.",
  },
  alternates: {
    canonical: "https://www.gonoxtravel.com",
  },
};

export default function HomePage() {
  const marker = process.env.NEXT_PUBLIC_TP_MARKER;
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dateToken = `${dd}${mm}`;

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90"
          alt="Aerial cloudscape view for travel planning"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/80" />
        <div className="container-shell relative min-h-[70vh] py-16 md:py-24">
          <p className="fade-in-up text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            GONOX TRAVEL
          </p>
          <h1 className="fade-in-up mt-4 max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Search Flights Smarter
          </h1>
          <p className="fade-in-up mt-4 max-w-2xl text-lg text-slate-100 md:text-xl">
            Compare hundreds of airlines. Find the best deals.
          </p>
          <div className="fade-in-up mt-8 flex flex-wrap gap-3">
            <a
              href="#hero-search"
              className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Search Flights
            </a>
            <Link
              href="/deals"
              className="rounded-full border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Explore Deals
            </Link>
          </div>
          <div id="hero-search" className="fade-in-up relative mt-10 md:mt-14">
            <div className="rounded-2xl">
              <HeroSearch />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-5 text-white">
        <div className="container-shell grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "✈️", label: "Compare 500+ Airlines" },
            { icon: "🔒", label: "Secure Booking Experience" },
            { icon: "💰", label: "No Hidden Fees" },
            { icon: "🌍", label: "Trusted by Travelers Worldwide" },
          ].map((badge, index) => (
            <div
              key={badge.label}
              className={`flex items-center gap-3 text-sm ${
                index !== 0 ? "border-white/10 md:border-l md:pl-4" : ""
              }`}
            >
              <span className="text-sky-400">{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </section>

      <PopularRoutesSection />

      <section className="container-shell py-10">
        <h2 className="text-2xl font-bold text-slate-900">Popular Destinations</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <DestinationCard
            city="Tokyo"
            country="Japan"
            summary="City lights, food districts and culture."
            image="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80"
            href={withMarker(`https://www.aviasales.com/search/YVR${dateToken}NRT1`, marker)}
            ctaLabel="Explore Flights"
          />
          <DestinationCard
            city="Hong Kong"
            country="China SAR"
            summary="Skyline views and vibrant city life."
            image="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80"
            href={withMarker(`https://www.aviasales.com/search/YVR${dateToken}HKG1`, marker)}
            ctaLabel="Explore Flights"
          />
          <DestinationCard
            city="Bangkok"
            country="Thailand"
            summary="Street food, temples and riverside stays."
            image="https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80"
            href={withMarker(`https://www.aviasales.com/search/YVR${dateToken}BKK1`, marker)}
            ctaLabel="Explore Flights"
          />
          <DestinationCard
            city="Seoul"
            country="South Korea"
            summary="Modern neighborhoods and rich culture."
            image="https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80"
            href={withMarker(`https://www.aviasales.com/search/YVR${dateToken}ICN1`, marker)}
            ctaLabel="Explore Flights"
          />
          <DestinationCard
            city="Taipei"
            country="Taiwan"
            summary="Night markets and mountain-city views."
            image="https://images.unsplash.com/photo-1470004914212-05527e49370b?w=800&q=80"
            href={withMarker(`https://www.aviasales.com/search/YVR${dateToken}TPE1`, marker)}
            ctaLabel="Explore Flights"
          />
          <DestinationCard
            city="Manila"
            country="Philippines"
            summary="Island gateway with vibrant local food."
            image="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80"
            href={withMarker(`https://www.aviasales.com/search/YVR${dateToken}MNL1`, marker)}
            ctaLabel="Explore Flights"
          />
        </div>
      </section>

      <PopularHotelsSection />

      <section className="container-shell py-10">
        <h2 className="text-2xl font-bold text-slate-900">Find Your Perfect Hotel</h2>
        <div className="mt-6">
          <HotelSearch />
        </div>
      </section>

      <section className="container-shell py-10">
        <h2 className="text-2xl font-bold text-slate-900">Travel Blog Insights</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Best Time to Fly Vancouver to Tokyo
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Seasonal timing tips to find better fares and fewer layovers.
            </p>
            <Link href="/blog" className="mt-3 inline-block text-sm font-semibold text-sky-600">
              Read More
            </Link>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Cheap Flights Tips 2026
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Practical booking tactics that help reduce long-haul airfare costs.
            </p>
            <Link href="/blog" className="mt-3 inline-block text-sm font-semibold text-sky-600">
              Read More
            </Link>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Top Hotels in Bangkok
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Compare value hotels and premium stays by district.
            </p>
            <Link href="/blog" className="mt-3 inline-block text-sm font-semibold text-sky-600">
              Read More
            </Link>
          </article>
        </div>
      </section>

      <section className="container-shell py-14">
        <h2 className="text-2xl font-bold text-slate-900">Why Gonox Travel</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-2xl">✈️</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              Compare 500+ Airlines
            </h3>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-2xl">💸</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              Best Price Guarantee
            </h3>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-2xl">✅</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              No Booking Fees
            </h3>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-2xl">🔔</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              24/7 Flight Alerts
            </h3>
          </article>
        </div>
      </section>
    </div>
  );
}
