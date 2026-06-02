import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tally.co.jp";

export const metadata: Metadata = {
  title: {
    default: "Tally Group — エネルギー小売事業者のためのプラットフォーム",
    template: "%s | Tally Group",
  },
  description:
    "1つのプラットフォーム、8つのプロダクト — エネルギー小売事業者を支える小売、営業、運営のソフトウェア。",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Tally Group",
    title: "Tally Group — エネルギー小売事業者のためのプラットフォーム",
    description:
      "1つのプラットフォーム、8つのプロダクト — エネルギー小売事業者を支える小売、営業、運営のソフトウェア。",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 2752,
        height: 1536,
        alt: "Tally Group — エネルギー小売プラットフォーム",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tally Group — エネルギー小売事業者のためのプラットフォーム",
    description:
      "1つのプラットフォーム、8つのプロダクト — エネルギー小売事業者を支える小売、営業、運営のソフトウェア。",
    images: ["/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tally Group",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/TallyOfficialLogo.svg`,
  description:
    "エネルギー小売事業者向けのクラウドネイティブなプラットフォーム。請求、営業、運営、脱炭素ソリューションを1つの基盤で提供します。",
  sameAs: ["https://www.linkedin.com/company/tally-group"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tally Group",
  url: SITE_URL,
  inLanguage: "ja",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
