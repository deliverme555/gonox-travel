type DestinationCardProps = {
  city: string;
  country: string;
  summary: string;
};

export default function DestinationCard({
  city,
  country,
  summary,
}: DestinationCardProps) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
        {country}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-slate-900">{city}</h3>
      <p className="mt-3 text-sm text-slate-600">{summary}</p>
    </article>
  );
}
