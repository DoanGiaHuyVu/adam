import "./css/global.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono, Outfit } from "next/font/google";
import { siteOrigin, BASE_PATH } from "~/lib/constants";
import { Analytics } from "@vercel/analytics/react";

const jetBrainsMono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  fallback: ["var(--font-system)"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "600", "700", "800", "900"],
});

const basementGrotesque = localFont({
  src: [
    { path: "./fonts/BasementGrotesque-Regular.woff2", weight: "400" },
    { path: "./fonts/BasementGrotesque-BlackExpanded.woff2", weight: "800" },
    {
      path: "./fonts/BasementGrotesqueDisplay-UltraBlackExtraExpanded.woff2",
      weight: "900",
    },
  ],
  fallback: ["var(--font-system)"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Adam's Portfolio",
  description:
    "A creative portfolio showcasing interactive 3D experiences and web development projects.",
  viewport: {
    height: "device-height",
    initialScale: 1,
    width: "device-width",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  manifest: `${BASE_PATH}/manifest.webmanifest`,
  twitter: {
    card: "summary_large_image",
    creator: "@adamvu",
    description: "A creative portfolio showcasing interactive 3D experiences and web development projects.",
    images: [{ width: 1200, height: 630, url: `${siteOrigin}/og.jpg` }],
    site: "@adamvu",
    title: "Adam's Portfolio",
  },
  openGraph: {
    description: "A creative portfolio showcasing interactive 3D experiences and web development projects.",
    images: [{ width: 1200, height: 630, url: `${siteOrigin}/og.jpg` }],
    locale: "en-US",
    siteName: "Adam's Portfolio",
    title: "Adam's Portfolio",
    type: "website",
    url: siteOrigin,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{
        ["--font-basement-grotesque" as string]: `${basementGrotesque.style.fontFamily}, var(--font-system), sans-serif`,
        ["--font-jetbrains-mono" as string]: `${jetBrainsMono.style.fontFamily}, var(--font-system), sans-serif`,
        ["--font-outfit" as string]: `${outfit.style.fontFamily}, sans-serif`,
      }}
    >
      <body>{children}</body>

      <Analytics />
    </html>
  );
}
