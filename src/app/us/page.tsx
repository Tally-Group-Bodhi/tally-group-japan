import { HeroSection } from "@/components/home/hero-section";
import { LogoCloud } from "@/components/home/logo-cloud";
import { TallyPlusSection } from "@/components/home/tally-plus-section";
import { PlatformSection } from "@/components/home/platform-section";
import { StatsSection } from "@/components/home/stats-section";
import { FutureOfEnergySection } from "@/components/home/future-of-energy-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { InsightsSection } from "@/components/home/insights-section";
import { ContactSection } from "@/components/home/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <TallyPlusSection />
      <PlatformSection />
      <StatsSection />
      <FutureOfEnergySection />
      <TestimonialsSection />
      <InsightsSection />
      <ContactSection />
    </>
  );
}
