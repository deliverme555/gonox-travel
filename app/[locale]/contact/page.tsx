import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("pages.contact");

  return (
    <section className="container-shell py-14">
      <h1 className="text-3xl font-bold text-slate-900">{t("title")}</h1>
      <p className="mt-3 max-w-3xl text-slate-600">{t("description")}</p>

      <form className="mt-8 max-w-2xl rounded-2xl bg-white p-6 shadow-sm">
        <div className="grid gap-4">
          <input
            className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-sky-300 focus:ring"
            placeholder={t("form.name")}
          />
          <input
            className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-sky-300 focus:ring"
            placeholder={t("form.email")}
          />
          <textarea
            className="min-h-36 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-sky-300 focus:ring"
            placeholder={t("form.message")}
          />
          <button
            type="button"
            className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            {t("form.submit")}
          </button>
        </div>
      </form>
    </section>
  );
}
