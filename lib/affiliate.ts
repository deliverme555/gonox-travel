export function withMarker(url: string, marker?: string | null): string {
  const cleanMarker = marker?.trim();
  if (!cleanMarker) return url;

  const parsed = new URL(url);
  parsed.searchParams.set("marker", cleanMarker);
  return parsed.toString();
}
