import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ask Geoffrey AI | AI Automation for Growing Businesses",
  description:
    "Free AI audit for your business. We identify automation opportunities, design practical systems, and help you save time, improve follow-up, and support growth.",
  metadataBase: new URL("https://askgeoffreyai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ask Geoffrey AI | AI Automation for Growing Businesses",
    description:
      "Free AI audit for your business. We identify automation opportunities, design practical systems, and help you save time, improve follow-up, and support growth.",
    url: "https://askgeoffreyai.com",
    siteName: "Ask Geoffrey AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/geoffrey-avatar.jpg",
        width: 400,
        height: 400,
        alt: "Ask Geoffrey AI",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@geoffreyai24934",
    title: "Ask Geoffrey AI | AI Automation for Growing Businesses",
    description:
      "Free AI audit for your business. We identify automation opportunities and design practical systems to help you grow.",
    images: ["/geoffrey-avatar.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
