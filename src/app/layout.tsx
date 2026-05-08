import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Tally Group — The platform for Australian energy retailers",
    template: "%s | Tally Group",
  },
  description:
    "One platform, eight products — running the retail, sales and operations software behind Australia's energy retailers.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.tally.co"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Tally Group",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className="h-full antialiased">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@100..900&display=swap" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
