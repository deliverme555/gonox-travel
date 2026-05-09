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
          <p className="body-base mt-3 text-slate-300">{t("description")}</p>
        </div>

        <div>
          <p className="label-upper text-slate-300">{t("quickLinks")}</p>
          <div className="mt-3 grid gap-2 text-sm font-medium">
            <Link href="/">{t("home")}</Link>
            <Link href="/flights">{t("flights")}</Link>
            <Link href="/hotels">{t("hotels")}</Link>
            <Link href="/deals">{t("deals")}</Link>
            <Link href="/blog">{t("blog")}</Link>
          </div>
        </div>

        <div>
          <p className="label-upper text-slate-300">Popular Routes</p>
          <div className="mt-3 grid gap-2 text-sm font-medium">
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
          <p className="label-upper text-slate-300">{t("followUs")}</p>
          <div className="mt-3 flex gap-3">
            <a
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-slate-800 px-3 text-sm font-medium transition-all duration-200 hover:text-sky-400"
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <a
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-slate-800 px-3 text-sm font-medium transition-all duration-200 hover:text-pink-400"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              IG
            </a>
            <a
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-slate-800 px-3 text-sm font-medium transition-all duration-200 hover:text-red-400"
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              YT
            </a>
          </div>
          <p className="label-upper mt-5 text-slate-300">Popular Destinations</p>
          <div className="mt-3 grid gap-2 text-sm font-medium">
            <Link href="/destinations">Tokyo</Link>
            <Link href="/destinations">Paris</Link>
            <Link href="/destinations">Bali</Link>
          </div>
        </div>
      </div>
      <p className="body-sm container-shell mt-8 border-t border-slate-800 pt-6 text-slate-400">
        {t("copyright")}
      </p>
      <div className="container-shell mt-4 flex flex-wrap gap-4 text-xs text-slate-400 opacity-60">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-and-conditions">Terms & Conditions</Link>
        <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
        <a href="/sitemap.xml">Sitemap</a>
      </div>
      <p className="container-shell mt-3 text-xs opacity-60">
        © 2026 Gonox Travel. All rights reserved.
      </p>
      <p className="container-shell mt-4 text-xs italic opacity-50">
        Powered by Travelpayouts affiliate network. Gonox Travel participates in affiliate programs.
        We may earn a commission when you book through our links, at no extra cost to you.
      </p>
    </footer>
  );
}
