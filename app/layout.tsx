import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
const marker = process.env.NEXT_PUBLIC_TP_MARKER?.trim();

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gonox Travel",
  description:
    "Discover smarter flight and hotel booking with Gonox Travel. Compare global fares, premium stays and real-time travel deals in seconds.",
  metadataBase: new URL("https://www.gonoxtravel.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gonox Travel",
    description:
      "Discover smarter flight and hotel booking with Gonox Travel. Compare global fares, premium stays and real-time travel deals in seconds.",
    url: "https://www.gonoxtravel.com",
    siteName: "Gonox Travel",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90",
        width: 1920,
        height: 1080,
        alt: "Gonox Travel hero sky view",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonox Travel",
    description:
      "Discover smarter flight and hotel booking with Gonox Travel. Compare global fares, premium stays and real-time travel deals in seconds.",
    images: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}>
      <head>
        {/* Google Search Console placeholder: replace content with your verification token */}
        <meta name="google-site-verification" content="GSC_VERIFICATION_PLACEHOLDER" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Google Analytics 4 placeholder: replace G-XXXXXXXXXX with your GA4 Measurement ID */}
        <Script
          id="ga4-placeholder"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        {marker ? (
          <Script
            src={`https://tpembars.com/NTI2NzQ4.js?t=${marker}`}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
