import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JPLayoutCta } from "@/components/jp/jp-layout-cta";
import { MarketingRegionProvider } from "@/contexts/marketing-region";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <MarketingRegionProvider basePath="">
      <div lang="ja" className="font-jp flex flex-1 flex-col w-full min-h-0">
        <Header />
        <main className="flex-1">{children}</main>
        <JPLayoutCta />
        <Footer />
      </div>
    </MarketingRegionProvider>
  );
}
