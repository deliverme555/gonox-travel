import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Gonox Travel",
  description: "Practical guides and destination insights from Gonox editors.",
  openGraph: {
    title: "Blog | Gonox Travel",
    description: "Practical guides and destination insights from Gonox editors.",
    url: "https://www.gonoxtravel.com/en/blog",
    siteName: "Gonox Travel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Gonox Travel",
    description: "Practical guides and destination insights from Gonox editors.",
  },
};

export default function BlogPage() {
  const t = useTranslations("pages.blog");
  const posts = ["post1", "post2", "post3"] as const;

  return (
    <section className="container-shell py-14">
      <h1 className="heading-xl text-slate-900">{t("title")}</h1>
      <p className="section-subtitle mt-3 max-w-3xl">{t("description")}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="heading-sm text-slate-900">
              {t(`items.${post}.title`)}
            </h2>
            <p className="body-base mt-3 text-slate-600">{t(`items.${post}.summary`)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
