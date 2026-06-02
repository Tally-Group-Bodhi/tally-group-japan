import type { Metadata } from "next";
import { HomeBetaQuadGrid } from "@/components/home/jp/home-beta-quad-grid";
import { HighlightsSectionJP } from "@/components/home/jp/highlights-section-jp";
import { MetricsSectionJP } from "@/components/home/jp/metrics-section-jp";
import { LogoMarqueeJP } from "@/components/home/jp/logo-marquee-jp";

export const metadata: Metadata = {
  title: {
    absolute: "AIで進化するエネルギー小売プラットフォーム | Tally Group",
  },
  description:
    "Tally+ は、請求・営業・運営から脱炭素化までを支えるクラウドネイティブなエネルギー小売プラットフォームです。AIで業務を効率化し、小売3.0や分散型エネルギーにも柔軟に対応します。",
  alternates: { canonical: "/" },
};

export default function JPHome() {
  return (
    <>
      <HomeBetaQuadGrid />
      <HighlightsSectionJP />
      <MetricsSectionJP />
      <LogoMarqueeJP />
    </>
  );
}
