import type { MetadataRoute } from "next";

const baseUrl = "https://www.gonoxtravel.com";
const locales = ["en", "zh", "zh-TW", "fr", "es", "it", "ja", "ko", "pt", "de"];
const routes = [
  "",
  "/flights",
  "/hotels",
  "/deals",
  "/blog",
  "/about",
  "/contact",
  "/cheap-flights",
  "/destinations",
  "/flights/vancouver-to-tokyo",
  "/flights/vancouver-to-hong-kong",
  "/flights/vancouver-to-bangkok",
  "/flights/vancouver-to-seoul",
  "/flights/vancouver-to-taipei",
  "/flights/vancouver-to-manila",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "daily" : "weekly",
      priority:
        route === ""
          ? 1
          : route === "/blog"
            ? 0.6
            : route.startsWith("/flights")
              ? 0.8
              : 0.7,
    })),
  );
}
