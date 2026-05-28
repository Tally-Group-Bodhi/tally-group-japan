import { HomeBetaQuadGrid } from "@/components/home/jp/home-beta-quad-grid";
import { StatsSection } from "@/components/home/stats-section";

export default function JPHome() {
  return (
    <>
      <HomeBetaQuadGrid />
      <div className="pb-6">
        <StatsSection />
      </div>
    </>
  );
}
