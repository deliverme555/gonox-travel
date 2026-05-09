export type RouteItem = {
  fromCode: string;
  fromCity: string;
  toCode: string;
  toCity: string;
  toCountry: string;
  priceFromCad: number;
  flag: string;
};

export type LocationPreset = {
  country: string;
  departureCode: string;
  departureCity: string;
  routes: RouteItem[];
};

const vancouverRoutes: RouteItem[] = [
  { fromCode: "YVR", fromCity: "Vancouver", toCode: "NRT", toCity: "Tokyo", toCountry: "Japan", priceFromCad: 850, flag: "🇯🇵" },
  { fromCode: "YVR", fromCity: "Vancouver", toCode: "HKG", toCity: "Hong Kong", toCountry: "China SAR", priceFromCad: 780, flag: "🇭🇰" },
  { fromCode: "YVR", fromCity: "Vancouver", toCode: "BKK", toCity: "Bangkok", toCountry: "Thailand", priceFromCad: 920, flag: "🇹🇭" },
  { fromCode: "YVR", fromCity: "Vancouver", toCode: "ICN", toCity: "Seoul", toCountry: "South Korea", priceFromCad: 860, flag: "🇰🇷" },
  { fromCode: "YVR", fromCity: "Vancouver", toCode: "TPE", toCity: "Taipei", toCountry: "Taiwan", priceFromCad: 800, flag: "🇹🇼" },
  { fromCode: "YVR", fromCity: "Vancouver", toCode: "MNL", toCity: "Manila", toCountry: "Philippines", priceFromCad: 750, flag: "🇵🇭" },
];

export const locationPresets: Record<string, LocationPreset> = {
  Canada: {
    country: "Canada",
    departureCode: "YVR",
    departureCity: "Vancouver",
    routes: vancouverRoutes,
  },
  "Hong Kong": {
    country: "Hong Kong",
    departureCode: "HKG",
    departureCity: "Hong Kong",
    routes: [
      { fromCode: "HKG", fromCity: "Hong Kong", toCode: "NRT", toCity: "Tokyo", toCountry: "Japan", priceFromCad: 420, flag: "🇯🇵" },
      { fromCode: "HKG", fromCity: "Hong Kong", toCode: "LHR", toCity: "London", toCountry: "United Kingdom", priceFromCad: 880, flag: "🇬🇧" },
      { fromCode: "HKG", fromCity: "Hong Kong", toCode: "YVR", toCity: "Vancouver", toCountry: "Canada", priceFromCad: 780, flag: "🇨🇦" },
      { fromCode: "HKG", fromCity: "Hong Kong", toCode: "BKK", toCity: "Bangkok", toCountry: "Thailand", priceFromCad: 290, flag: "🇹🇭" },
      { fromCode: "HKG", fromCity: "Hong Kong", toCode: "ICN", toCity: "Seoul", toCountry: "South Korea", priceFromCad: 260, flag: "🇰🇷" },
      { fromCode: "HKG", fromCity: "Hong Kong", toCode: "TPE", toCity: "Taipei", toCountry: "Taiwan", priceFromCad: 180, flag: "🇹🇼" },
    ],
  },
  "United Kingdom": {
    country: "United Kingdom",
    departureCode: "LHR",
    departureCity: "London",
    routes: [
      { fromCode: "LHR", fromCity: "London", toCode: "JFK", toCity: "New York", toCountry: "United States", priceFromCad: 680, flag: "🇺🇸" },
      { fromCode: "LHR", fromCity: "London", toCode: "NRT", toCity: "Tokyo", toCountry: "Japan", priceFromCad: 920, flag: "🇯🇵" },
      { fromCode: "LHR", fromCity: "London", toCode: "DXB", toCity: "Dubai", toCountry: "United Arab Emirates", priceFromCad: 530, flag: "🇦🇪" },
      { fromCode: "LHR", fromCity: "London", toCode: "CDG", toCity: "Paris", toCountry: "France", priceFromCad: 190, flag: "🇫🇷" },
      { fromCode: "LHR", fromCity: "London", toCode: "BKK", toCity: "Bangkok", toCountry: "Thailand", priceFromCad: 860, flag: "🇹🇭" },
      { fromCode: "LHR", fromCity: "London", toCode: "HKG", toCity: "Hong Kong", toCountry: "Hong Kong", priceFromCad: 900, flag: "🇭🇰" },
    ],
  },
  Australia: {
    country: "Australia",
    departureCode: "SYD",
    departureCity: "Sydney",
    routes: [
      { fromCode: "SYD", fromCity: "Sydney", toCode: "NRT", toCity: "Tokyo", toCountry: "Japan", priceFromCad: 620, flag: "🇯🇵" },
      { fromCode: "SYD", fromCity: "Sydney", toCode: "DPS", toCity: "Bali", toCountry: "Indonesia", priceFromCad: 320, flag: "🇮🇩" },
      { fromCode: "SYD", fromCity: "Sydney", toCode: "LHR", toCity: "London", toCountry: "United Kingdom", priceFromCad: 1200, flag: "🇬🇧" },
      { fromCode: "SYD", fromCity: "Sydney", toCode: "SIN", toCity: "Singapore", toCountry: "Singapore", priceFromCad: 430, flag: "🇸🇬" },
      { fromCode: "SYD", fromCity: "Sydney", toCode: "BKK", toCity: "Bangkok", toCountry: "Thailand", priceFromCad: 460, flag: "🇹🇭" },
      { fromCode: "SYD", fromCity: "Sydney", toCode: "HKG", toCity: "Hong Kong", toCountry: "Hong Kong", priceFromCad: 470, flag: "🇭🇰" },
    ],
  },
  Singapore: {
    country: "Singapore",
    departureCode: "SIN",
    departureCity: "Singapore",
    routes: [
      { fromCode: "SIN", fromCity: "Singapore", toCode: "NRT", toCity: "Tokyo", toCountry: "Japan", priceFromCad: 460, flag: "🇯🇵" },
      { fromCode: "SIN", fromCity: "Singapore", toCode: "LHR", toCity: "London", toCountry: "United Kingdom", priceFromCad: 990, flag: "🇬🇧" },
      { fromCode: "SIN", fromCity: "Singapore", toCode: "SYD", toCity: "Sydney", toCountry: "Australia", priceFromCad: 520, flag: "🇦🇺" },
      { fromCode: "SIN", fromCity: "Singapore", toCode: "BKK", toCity: "Bangkok", toCountry: "Thailand", priceFromCad: 230, flag: "🇹🇭" },
      { fromCode: "SIN", fromCity: "Singapore", toCode: "HKG", toCity: "Hong Kong", toCountry: "Hong Kong", priceFromCad: 250, flag: "🇭🇰" },
      { fromCode: "SIN", fromCity: "Singapore", toCode: "DPS", toCity: "Bali", toCountry: "Indonesia", priceFromCad: 210, flag: "🇮🇩" },
    ],
  },
  Japan: {
    country: "Japan",
    departureCode: "TYO",
    departureCity: "Tokyo",
    routes: [
      { fromCode: "TYO", fromCity: "Tokyo", toCode: "YVR", toCity: "Vancouver", toCountry: "Canada", priceFromCad: 820, flag: "🇨🇦" },
      { fromCode: "TYO", fromCity: "Tokyo", toCode: "LHR", toCity: "London", toCountry: "United Kingdom", priceFromCad: 970, flag: "🇬🇧" },
      { fromCode: "TYO", fromCity: "Tokyo", toCode: "BKK", toCity: "Bangkok", toCountry: "Thailand", priceFromCad: 380, flag: "🇹🇭" },
      { fromCode: "TYO", fromCity: "Tokyo", toCode: "SIN", toCity: "Singapore", toCountry: "Singapore", priceFromCad: 420, flag: "🇸🇬" },
      { fromCode: "TYO", fromCity: "Tokyo", toCode: "ICN", toCity: "Seoul", toCountry: "South Korea", priceFromCad: 210, flag: "🇰🇷" },
      { fromCode: "TYO", fromCity: "Tokyo", toCode: "HKG", toCity: "Hong Kong", toCountry: "Hong Kong", priceFromCad: 260, flag: "🇭🇰" },
    ],
  },
  "South Korea": {
    country: "South Korea",
    departureCode: "ICN",
    departureCity: "Seoul",
    routes: [
      { fromCode: "ICN", fromCity: "Seoul", toCode: "NRT", toCity: "Tokyo", toCountry: "Japan", priceFromCad: 190, flag: "🇯🇵" },
      { fromCode: "ICN", fromCity: "Seoul", toCode: "BKK", toCity: "Bangkok", toCountry: "Thailand", priceFromCad: 340, flag: "🇹🇭" },
      { fromCode: "ICN", fromCity: "Seoul", toCode: "SIN", toCity: "Singapore", toCountry: "Singapore", priceFromCad: 360, flag: "🇸🇬" },
      { fromCode: "ICN", fromCity: "Seoul", toCode: "YVR", toCity: "Vancouver", toCountry: "Canada", priceFromCad: 860, flag: "🇨🇦" },
      { fromCode: "ICN", fromCity: "Seoul", toCode: "HKG", toCity: "Hong Kong", toCountry: "Hong Kong", priceFromCad: 230, flag: "🇭🇰" },
      { fromCode: "ICN", fromCity: "Seoul", toCode: "LHR", toCity: "London", toCountry: "United Kingdom", priceFromCad: 900, flag: "🇬🇧" },
    ],
  },
  Taiwan: {
    country: "Taiwan",
    departureCode: "TPE",
    departureCity: "Taipei",
    routes: [
      { fromCode: "TPE", fromCity: "Taipei", toCode: "NRT", toCity: "Tokyo", toCountry: "Japan", priceFromCad: 230, flag: "🇯🇵" },
      { fromCode: "TPE", fromCity: "Taipei", toCode: "BKK", toCity: "Bangkok", toCountry: "Thailand", priceFromCad: 260, flag: "🇹🇭" },
      { fromCode: "TPE", fromCity: "Taipei", toCode: "SIN", toCity: "Singapore", toCountry: "Singapore", priceFromCad: 250, flag: "🇸🇬" },
      { fromCode: "TPE", fromCity: "Taipei", toCode: "HKG", toCity: "Hong Kong", toCountry: "Hong Kong", priceFromCad: 170, flag: "🇭🇰" },
      { fromCode: "TPE", fromCity: "Taipei", toCode: "ICN", toCity: "Seoul", toCountry: "South Korea", priceFromCad: 220, flag: "🇰🇷" },
      { fromCode: "TPE", fromCity: "Taipei", toCode: "YVR", toCity: "Vancouver", toCountry: "Canada", priceFromCad: 820, flag: "🇨🇦" },
    ],
  },
  Thailand: {
    country: "Thailand",
    departureCode: "BKK",
    departureCity: "Bangkok",
    routes: [
      { fromCode: "BKK", fromCity: "Bangkok", toCode: "NRT", toCity: "Tokyo", toCountry: "Japan", priceFromCad: 360, flag: "🇯🇵" },
      { fromCode: "BKK", fromCity: "Bangkok", toCode: "SIN", toCity: "Singapore", toCountry: "Singapore", priceFromCad: 170, flag: "🇸🇬" },
      { fromCode: "BKK", fromCity: "Bangkok", toCode: "LHR", toCity: "London", toCountry: "United Kingdom", priceFromCad: 900, flag: "🇬🇧" },
      { fromCode: "BKK", fromCity: "Bangkok", toCode: "HKG", toCity: "Hong Kong", toCountry: "Hong Kong", priceFromCad: 210, flag: "🇭🇰" },
      { fromCode: "BKK", fromCity: "Bangkok", toCode: "ICN", toCity: "Seoul", toCountry: "South Korea", priceFromCad: 310, flag: "🇰🇷" },
      { fromCode: "BKK", fromCity: "Bangkok", toCode: "DPS", toCity: "Bali", toCountry: "Indonesia", priceFromCad: 230, flag: "🇮🇩" },
    ],
  },
  "United States": {
    country: "United States",
    departureCode: "JFK",
    departureCity: "New York",
    routes: [
      { fromCode: "JFK", fromCity: "New York", toCode: "LHR", toCity: "London", toCountry: "United Kingdom", priceFromCad: 620, flag: "🇬🇧" },
      { fromCode: "JFK", fromCity: "New York", toCode: "NRT", toCity: "Tokyo", toCountry: "Japan", priceFromCad: 900, flag: "🇯🇵" },
      { fromCode: "JFK", fromCity: "New York", toCode: "CDG", toCity: "Paris", toCountry: "France", priceFromCad: 540, flag: "🇫🇷" },
      { fromCode: "JFK", fromCity: "New York", toCode: "DXB", toCity: "Dubai", toCountry: "United Arab Emirates", priceFromCad: 880, flag: "🇦🇪" },
      { fromCode: "JFK", fromCity: "New York", toCode: "HKG", toCity: "Hong Kong", toCountry: "Hong Kong", priceFromCad: 940, flag: "🇭🇰" },
      { fromCode: "JFK", fromCity: "New York", toCode: "YVR", toCity: "Vancouver", toCountry: "Canada", priceFromCad: 440, flag: "🇨🇦" },
    ],
  },
  default: {
    country: "Default",
    departureCode: "YVR",
    departureCity: "Vancouver",
    routes: vancouverRoutes,
  },
};

export function getPresetByCountry(country?: string | null): LocationPreset {
  if (!country) return locationPresets.default;
  return locationPresets[country] ?? locationPresets.default;
}
