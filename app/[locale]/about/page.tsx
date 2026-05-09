import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Gonox Travel",
  description:
    "Learn how Gonox Travel helps users compare travel options and book with confidence.",
  openGraph: {
    title: "About | Gonox Travel",
    description:
      "Learn how Gonox Travel helps users compare travel options and book with confidence.",
    url: "https://www.gonoxtravel.com/en/about",
    siteName: "Gonox Travel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Gonox Travel",
    description:
      "Learn how Gonox Travel helps users compare travel options and book with confidence.",
  },
};

export default function AboutPage() {
  const t = useTranslations("pages.about");
  const points = ["point1", "point2", "point3", "point4"] as const;

  return (
    <section className="container-shell py-14">
      <h1 className="heading-xl text-slate-900">{t("title")}</h1>
      <p className="section-subtitle mt-3 max-w-3xl">{t("description")}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {points.map((point) => (
          <article key={point} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="heading-sm text-slate-900">
              {t(`values.${point}.title`)}
            </h2>
            <p className="body-base mt-2 text-slate-600">
              {t(`values.${point}.summary`)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
