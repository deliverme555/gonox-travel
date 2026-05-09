import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { withMarker } from "@/lib/affiliate";

type HotelItem = {
  name: string;
  location: string;
  stars: number;
  pricePrefix: string;
  priceAmount: string;
  score: string;
  image: string;
  url: string;
};

const hotels: HotelItem[] = [
  {
    name: "Park Hyatt Tokyo",
    location: "Tokyo, Japan",
    stars: 5,
    pricePrefix: "From CAD",
    priceAmount: "$450",
    score: "9.4 Excellent",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    url: "https://www.booking.com/hotel/jp/park-hyatt-tokyo.html?aid=304142",
  },
  {
    name: "The Peninsula Hong Kong",
    location: "Hong Kong",
    stars: 5,
    pricePrefix: "From CAD",
    priceAmount: "$520",
    score: "9.6 Excellent",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c4fe1fa7?w=800&q=80",
    url: "https://www.booking.com/city/hk/hong-kong.html?aid=304142",
  },
  {
    name: "Rosewood Bangkok",
    location: "Bangkok, Thailand",
    stars: 5,
    pricePrefix: "From CAD",
    priceAmount: "$280",
    score: "9.3 Excellent",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    url: "https://www.booking.com/city/th/bangkok.html?aid=304142",
  },
  {
    name: "Lotte Hotel Seoul",
    location: "Seoul, South Korea",
    stars: 5,
    pricePrefix: "From CAD",
    priceAmount: "$320",
    score: "9.1 Excellent",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    url: "https://www.booking.com/city/kr/seoul.html?aid=304142",
  },
  {
    name: "W Taipei",
    location: "Taipei, Taiwan",
    stars: 5,
    pricePrefix: "From CAD",
    priceAmount: "$350",
    score: "9.0 Excellent",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    url: "https://www.booking.com/city/tw/taipei.html?aid=304142",
  },
  {
    name: "Sofitel Manila",
    location: "Manila, Philippines",
    stars: 5,
    pricePrefix: "From CAD",
    priceAmount: "$180",
    score: "8.9 Excellent",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    url: "https://www.booking.com/city/ph/manila.html?aid=304142",
  },
];

export default function PopularHotelsSection() {
  const marker = process.env.NEXT_PUBLIC_TP_MARKER;

  return (
    <section className="container-shell py-10">
      <h2 className="section-title text-slate-900">Popular Hotels</h2>
      <p className="section-subtitle mt-2 opacity-70">
        Hand-picked stays for every budget
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel) => (
          <article
            key={hotel.name}
            className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-200 hover:shadow-2xl"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <span className="badge-text absolute bottom-3 right-3 rounded-md bg-sky-500 px-2.5 py-1 font-bold text-white">
                {hotel.score}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-slate-900">{hotel.name}</h3>
              <p className="mt-1 text-sm opacity-70">{hotel.location}</p>
              <p className="mt-2 text-base text-amber-500">
                {"★".repeat(hotel.stars)}
              </p>
              <p className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-sm opacity-70">{hotel.pricePrefix}</span>
                <span className="text-2xl font-bold text-sky-600">
                  {hotel.priceAmount}
                </span>
                <span className="text-sm opacity-60">/night</span>
              </p>
              <a
                href={withMarker(hotel.url, marker) ?? ""}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-card-cta mt-4 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-sky-500 px-4 py-3 text-center text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-sky-600"
              >
                View Deal
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/hotels"
          className="btn-card-cta inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold tracking-wide text-slate-700 transition-all duration-200 hover:border-sky-400 hover:text-sky-600"
        >
          View All Hotels
        </Link>
      </div>
    </section>
  );
}
