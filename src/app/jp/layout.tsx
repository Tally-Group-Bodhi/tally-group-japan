import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JP_MARKETING_BASE, MarketingRegionProvider } from "@/contexts/marketing-region";

export const metadata: Metadata = {
  title: {
    default: "Tally Group — エネルギー小売事業者のためのプラットフォーム",
    template: "%s | Tally Group",
  },
  description:
    "1つのプラットフォーム、8つのプロダクト — エネルギー小売事業者を支える小売、営業、運営のソフトウェア。",
  openGraph: {
    locale: "ja_JP",
  },
};

export default function JPMainLayout({ children }: { children: React.ReactNode }) {
  return (
    <MarketingRegionProvider basePath={JP_MARKETING_BASE}>
      <div lang="ja" className="font-jp contents">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </MarketingRegionProvider>
  );
}
