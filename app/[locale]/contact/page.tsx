import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Gonox Travel",
  description:
    "Get in touch with Gonox Travel for partnerships, media and support inquiries.",
  openGraph: {
    title: "Contact | Gonox Travel",
    description:
      "Get in touch with Gonox Travel for partnerships, media and support inquiries.",
    url: "https://www.gonoxtravel.com/en/contact",
    siteName: "Gonox Travel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Gonox Travel",
    description:
      "Get in touch with Gonox Travel for partnerships, media and support inquiries.",
  },
};

export default function ContactPage() {
  const t = useTranslations("pages.contact");

  return (
    <section className="container-shell py-14">
      <h1 className="heading-xl text-slate-900">{t("title")}</h1>
      <p className="section-subtitle mt-3 max-w-3xl">{t("description")}</p>

      <form className="mt-8 max-w-2xl rounded-2xl bg-white p-6 shadow-sm">
        <div className="grid gap-4">
          <input
            className="min-h-[44px] rounded-xl border border-slate-300 px-4 py-3 text-base outline-none ring-sky-300 focus:ring"
            placeholder={t("form.name")}
          />
          <input
            className="min-h-[44px] rounded-xl border border-slate-300 px-4 py-3 text-base outline-none ring-sky-300 focus:ring"
            placeholder={t("form.email")}
          />
          <textarea
            className="min-h-36 rounded-xl border border-slate-300 px-4 py-3 text-base outline-none ring-sky-300 focus:ring"
            placeholder={t("form.message")}
          />
          <button type="button" className="btn-primary">
            {t("form.submit")}
          </button>
        </div>
      </form>
    </section>
  );
}
