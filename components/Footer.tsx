import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="mt-16 bg-slate-900 py-12 text-slate-200">
      <div className="container-shell grid gap-10 md:grid-cols-3">
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
            {t("followUs")}
          </p>
          <div className="mt-3 flex gap-3">
            <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">X</span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">IG</span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">YT</span>
          </div>
        </div>
      </div>
      <p className="container-shell mt-8 border-t border-slate-800 pt-6 text-sm text-slate-400">
        {t("copyright")}
      </p>
    </footer>
  );
}
