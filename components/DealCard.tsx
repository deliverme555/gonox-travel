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
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
      <h3 className="heading-sm text-slate-900">{title}</h3>
      <p className="body-base mt-2 text-slate-600">{subtitle}</p>
      {airlineOrLocation && (
        <p className="body-sm mt-2 font-medium text-slate-500">{airlineOrLocation}</p>
      )}
      {rating && <p className="body-sm mt-1 text-amber-500">{rating}</p>}
      <p className="price-display mt-4">{price}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="btn-primary mt-4 inline-flex"
      >
        {ctaLabel}
      </a>
    </article>
  );
}
