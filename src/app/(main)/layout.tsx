import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MarketingRegionProvider } from "@/contexts/marketing-region";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MarketingRegionProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </MarketingRegionProvider>
  );
}
