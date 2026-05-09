import Image from "next/image";

type DestinationCardProps = {
  city: string;
  country: string;
  summary: string;
  image: string;
  href?: string;
  ctaLabel?: string;
};

export default function DestinationCard({
  city,
  country,
  summary,
  image,
  href = "/cheap-flights",
  ctaLabel = "Explore Flights",
}: DestinationCardProps) {
  return (
    <a
      href={href}
      className="block overflow-hidden rounded-2xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <Image
        src={image}
        alt={city}
        width={800}
        height={500}
        className="h-48 w-full object-cover"
      />
      <article className="p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
          {country}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-slate-900">{city}</h3>
        <p className="mt-3 text-sm text-slate-600">{summary}</p>
        <span className="mt-4 inline-block rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white">
          {ctaLabel}
        </span>
      </article>
    </a>
  );
}
