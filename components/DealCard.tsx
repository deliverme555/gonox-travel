type DealCardProps = {
  title: string;
  subtitle: string;
  price: string;
  cta: string;
};

export default function DealCard({ title, subtitle, price, cta }: DealCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-md">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
      <p className="mt-4 text-2xl font-bold text-slate-900">{price}</p>
      <button className="mt-4 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600">
        {cta}
      </button>
    </article>
  );
}
