import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Gonox Travel",
  description: "Search flights, hotels and travel deals worldwide",
  metadataBase: new URL("https://www.gonoxtravel.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gonox Travel",
    description: "Search flights, hotels and travel deals worldwide",
    url: "https://www.gonoxtravel.com",
    siteName: "Gonox Travel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonox Travel",
    description: "Search flights, hotels and travel deals worldwide",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
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
        <Script
          src="https://tpembars.com/NTI2NzQ4.js?t=526748"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
