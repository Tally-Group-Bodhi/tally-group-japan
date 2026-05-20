import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AE_MARKETING_BASE, MarketingRegionProvider } from "@/contexts/marketing-region";

export const metadata: Metadata = {
  title: {
    default: "Tally Group — منصة شركات تجزئة الطاقة",
    template: "%s | Tally Group",
  },
  description:
    "منصة واحدة، ثمانية منتجات — البرمجيات التي تدير عمليات البيع بالتجزئة والمبيعات والتشغيل لشركات الطاقة.",
  openGraph: {
    locale: "ar_AE",
  },
};

export default function AEMainLayout({ children }: { children: React.ReactNode }) {
  return (
    <MarketingRegionProvider basePath={AE_MARKETING_BASE}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </MarketingRegionProvider>
  );
}
