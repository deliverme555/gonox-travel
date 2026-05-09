import { NextResponse } from "next/server";
import { getPresetByCountry } from "@/lib/locationRoutes";

export async function GET() {
  try {
    const response = await fetch("http://ip-api.com/json/", {
      cache: "no-store",
    });

    if (!response.ok) {
      const fallback = getPresetByCountry();
      return NextResponse.json({
        city: fallback.departureCity,
        country: fallback.country,
        departureCode: fallback.departureCode,
        preset: fallback,
      });
    }

    const data = (await response.json()) as { country?: string; city?: string };
    const preset = getPresetByCountry(data.country);

    return NextResponse.json({
      city: data.city ?? preset.departureCity,
      country: data.country ?? "Unknown",
      departureCode: preset.departureCode,
      preset,
    });
  } catch {
    const fallback = getPresetByCountry();
    return NextResponse.json({
      city: fallback.departureCity,
      country: fallback.country,
      departureCode: fallback.departureCode,
      preset: fallback,
    });
  }
}
