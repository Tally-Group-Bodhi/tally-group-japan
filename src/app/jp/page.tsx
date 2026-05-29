import { HomeBetaQuadGrid } from "@/components/home/jp/home-beta-quad-grid";
import { HighlightsSectionJP } from "@/components/home/jp/highlights-section-jp";
import { MetricsSectionJP } from "@/components/home/jp/metrics-section-jp";
import { LogoMarqueeJP } from "@/components/home/jp/logo-marquee-jp";
import { StatsSection } from "@/components/home/stats-section";

export default function JPHome() {
  return (
    <>
      <HomeBetaQuadGrid />
      <HighlightsSectionJP />
      <MetricsSectionJP />
      <LogoMarqueeJP />
      <div className="pb-6">
        <StatsSection />
      </div>
    </>
  );
}
