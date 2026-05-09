import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { withMarker } from "@/lib/affiliate";

export default function Footer() {
  const t = useTranslations("footer");
  const marker = process.env.NEXT_PUBLIC_TP_MARKER;

  return (
    <footer className="mt-16 bg-slate-900 py-12 text-slate-200">
      <div className="container-shell grid gap-10 md:grid-cols-4">
        <div>
          <p className="text-xl font-bold text-white">Gonox Travel</p>
          <p className="mt-3 text-sm text-slate-300">{t("description")}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            {t("quickLinks")}
          </p>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/">{t("home")}</Link>
            <Link href="/flights">{t("flights")}</Link>
            <Link href="/hotels">{t("hotels")}</Link>
            <Link href="/deals">{t("deals")}</Link>
            <Link href="/blog">{t("blog")}</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Popular Routes
          </p>
          <div className="mt-3 grid gap-2 text-sm">
            <a href={withMarker("https://www.aviasales.com/search/YVR0109TYO1", marker)} target="_blank" rel="noopener noreferrer sponsored">
              Vancouver to Tokyo
            </a>
            <a href={withMarker("https://www.aviasales.com/search/YVR0109HKG1", marker)} target="_blank" rel="noopener noreferrer sponsored">
              Vancouver to Hong Kong
            </a>
            <a href={withMarker("https://www.aviasales.com/search/YVR0109BKK1", marker)} target="_blank" rel="noopener noreferrer sponsored">
              Vancouver to Bangkok
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            {t("followUs")}
          </p>
          <div className="mt-3 flex gap-3">
            <a className="rounded-full bg-slate-800 px-3 py-1 text-sm" href="https://x.com" target="_blank" rel="noopener noreferrer">
              X
            </a>
            <a className="rounded-full bg-slate-800 px-3 py-1 text-sm" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              IG
            </a>
            <a className="rounded-full bg-slate-800 px-3 py-1 text-sm" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              YT
            </a>
          </div>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-300">
            Popular Destinations
          </p>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/destinations">Tokyo</Link>
            <Link href="/destinations">Paris</Link>
            <Link href="/destinations">Bali</Link>
          </div>
        </div>
      </div>
      <p className="container-shell mt-8 border-t border-slate-800 pt-6 text-sm text-slate-400">
        {t("copyright")}
      </p>
    </footer>
  );
}
