type DealCardProps = {
  title: string;
  subtitle: string;
  price: string;
  ctaLabel: string;
  href: string;
  airlineOrLocation?: string;
  rating?: string;
};

export default function DealCard({
  title,
  subtitle,
  price,
  ctaLabel,
  href,
  airlineOrLocation,
  rating,
}: DealCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-md">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
      {airlineOrLocation && (
        <p className="mt-2 text-xs font-medium text-slate-500">{airlineOrLocation}</p>
      )}
      {rating && <p className="mt-1 text-xs text-amber-500">{rating}</p>}
      <p className="mt-4 text-2xl font-bold text-slate-900">{price}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="mt-4 inline-block rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600"
      >
        {ctaLabel}
      </a>
    </article>
  );
}
