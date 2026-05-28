import type { Metadata } from "next";
import { HomeBetaQuadGrid } from "@/components/home/jp/home-beta-quad-grid";
import { StatsSection } from "@/components/home/stats-section";

export const metadata: Metadata = {
  title: "ホーム (Beta)",
  description:
    "Tally Group のホームページ・デモ版。新しいコンセプトとレイアウトを試すためのサンドボックスです。",
};

export default function JPHomeBetaPage() {
  return (
    <>
      <HomeBetaQuadGrid />
      <div className="pb-16 sm:pb-20 lg:pb-24">
        <StatsSection />
      </div>
    </>
  );
}
