"use client";

import { useEffect, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";

const localeOptions: Array<{ code: AppLocale; label: string }> = [
  { code: "en", label: "English" },
  { code: "zh", label: "简体中文" },
  { code: "zh-TW", label: "繁體中文" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "pt", label: "Português" },
  { code: "de", label: "Deutsch" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/flights", label: t("flights") },
    { href: "/hotels", label: t("hotels") },
    { href: "/deals", label: t("deals") },
    { href: "/blog", label: t("blog") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  const handleLanguageChange = (nextLocale: string) => {
    if (!routing.locales.includes(nextLocale as AppLocale)) return;
    localStorage.setItem("gonox-locale", nextLocale);
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as AppLocale });
    });
  };

  useEffect(() => {
    const preferred = localStorage.getItem("gonox-locale");
    if (!preferred || preferred === locale) return;
    if (!routing.locales.includes(preferred as AppLocale)) return;

    router.replace(pathname, { locale: preferred as AppLocale });
  }, [locale, pathname, router]);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-900 text-white">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Gonox Travel
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-200 transition hover:text-sky-400"
            >
              <span className="inline-flex items-center gap-2">
                {item.label}
                {item.href === "/deals" && (
                  <span className="rounded-full bg-sky-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                    Hot
                  </span>
                )}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            aria-label="Search"
            className="rounded-full border border-slate-600 bg-slate-800 p-2 text-white transition hover:border-sky-400"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <label htmlFor="locale-switcher" className="sr-only">
            {t("language")}
          </label>
          <select
            id="locale-switcher"
            disabled={isPending}
            value={locale}
            onChange={(event) => handleLanguageChange(event.target.value)}
            className="rounded-full border border-slate-600 bg-slate-800 px-4 py-2 text-sm text-white outline-none focus:border-sky-400"
          >
            {localeOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-md p-2 text-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-900 md:hidden">
          <div className="container-shell space-y-4 py-4">
            <nav className="grid gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-100"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="inline-flex items-center gap-2">
                    {item.label}
                    {item.href === "/deals" && (
                      <span className="rounded-full bg-sky-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                        Hot
                      </span>
                    )}
                  </span>
                </Link>
              ))}
            </nav>
            <select
              value={locale}
              onChange={(event) => handleLanguageChange(event.target.value)}
              className="w-full rounded-full border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white outline-none"
            >
              {localeOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </header>
  );
}
