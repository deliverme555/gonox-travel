"use client";

import { useMemo, useState } from "react";

type TravelpayoutsWidgetProps = {
  type: "flights" | "hotels" | "cars";
  locale?: string;
  currency?: string;
  className?: string;
};

const marker = "526748";

export default function TravelpayoutsWidget({
  type,
  locale = "en",
  currency = "CAD",
  className = "",
}: TravelpayoutsWidgetProps) {
  const [isLoading, setIsLoading] = useState(true);

  const iframeSrc = useMemo(() => {
    const params = new URLSearchParams({
      trs: marker,
      shmarker: marker,
      locale,
      curr: currency,
      widget: type,
    });
    return `https://tp.media/content?${params.toString()}`;
  }, [currency, locale, type]);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}
    >
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/90">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-sky-500" />
        </div>
      )}

      <iframe
        src={iframeSrc}
        title={`Travelpayouts ${type}`}
        className="h-[420px] w-full min-w-0 border-0 md:h-[460px]"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
