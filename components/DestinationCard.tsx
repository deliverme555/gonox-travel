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
      className="group block overflow-hidden rounded-2xl bg-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={image}
          alt={`${city}, ${country}`}
          width={800}
          height={600}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">
            {country}
          </p>
          <h3 className="mt-1 text-2xl font-semibold">{city}</h3>
          <p className="mt-2 text-sm text-white/80">{summary}</p>
          <span className="mt-4 inline-block rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {ctaLabel}
          </span>
        </div>
      </div>
    </a>
  );
}
