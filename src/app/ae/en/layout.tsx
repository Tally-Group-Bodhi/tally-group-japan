import type { Metadata } from "next";
import { AE_EN_MARKETING_BASE, MarketingRegionProvider } from "@/contexts/marketing-region";

export const metadata: Metadata = {
  title: {
    default: "Tally Group — The platform for UAE energy retailers",
    template: "%s | Tally Group",
  },
  description:
    "One platform, eight products — running the retail, sales and operations software behind UAE energy retailers.",
  openGraph: {
    locale: "en_AE",
  },
};

export default function AEEnLayout({ children }: { children: React.ReactNode }) {
  return (
    <MarketingRegionProvider basePath={AE_EN_MARKETING_BASE}>
      {children}
    </MarketingRegionProvider>
  );
}
