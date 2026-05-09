import type { Metadata } from "next";
import DestinationCard from "@/components/DestinationCard";
import { withMarker } from "@/lib/affiliate";

export const metadata: Metadata = {
  title: "Destinations | Gonox Travel",
  description:
    "Explore popular destinations and jump directly to flight search offers.",
  openGraph: {
    title: "Destinations | Gonox Travel",
    description:
      "Explore popular destinations and jump directly to flight search offers.",
    url: "https://www.gonoxtravel.com/en/destinations",
    siteName: "Gonox Travel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Destinations | Gonox Travel",
    description:
      "Explore popular destinations and jump directly to flight search offers.",
  },
};

const marker = process.env.NEXT_PUBLIC_TP_MARKER;

const destinations = [
  {
    city: "Tokyo",
    country: "Japan",
    summary: "Tech-forward city breaks, food districts and culture.",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
  },
  {
    city: "Paris",
    country: "France",
    summary: "Museums, architecture and cafe-lined boulevards.",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
  },
  {
    city: "London",
    country: "United Kingdom",
    summary: "Historic landmarks, neighborhoods and theater.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
  },
  {
    city: "Bali",
    country: "Indonesia",
    summary: "Beach escapes, surf, wellness and lush scenery.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
  },
  {
    city: "New York",
    country: "United States",
    summary: "Skylines, shopping and iconic city experiences.",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    summary: "Modern luxury, desert activities and skyline views.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  },
];

export default function DestinationsPage() {
  return (
    <section className="container-shell py-14">
      <h1 className="heading-xl text-slate-900">Popular Destinations</h1>
      <p className="section-subtitle mt-4 max-w-3xl">
        Discover trending cities and jump straight to flight comparisons with
        affiliate-enabled booking links.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.city}
            city={destination.city}
            country={destination.country}
            summary={destination.summary}
            image={destination.image}
            href={withMarker("https://www.aviasales.com/", marker)}
          />
        ))}
      </div>
    </section>
  );
}
