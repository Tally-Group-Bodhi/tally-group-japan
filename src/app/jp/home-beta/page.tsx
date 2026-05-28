import type { Metadata } from "next";
import { HomeBetaQuadGrid } from "@/components/home/jp/home-beta-quad-grid";

export const metadata: Metadata = {
  title: "ホーム (Beta)",
  description:
    "Tally Group のホームページ・デモ版。新しいコンセプトとレイアウトを試すためのサンドボックスです。",
};

export default function JPHomeBetaPage() {
  return <HomeBetaQuadGrid />;
}
