import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tally Group — エネルギー小売事業者のためのプラットフォーム",
    template: "%s | Tally Group",
  },
  description:
    "1つのプラットフォーム、8つのプロダクト — エネルギー小売事業者を支える小売、営業、運営のソフトウェア。",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.tally.co.jp"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Tally Group",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@100..900&display=swap" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap" />
      </head>
      <body className="min-h-full flex flex-col font-jp">
        {children}
      </body>
    </html>
  );
}
