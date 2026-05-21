import { HeroSection } from "@/components/home/hero-section";
import { LogoCloudUS } from "@/components/home/us/logo-cloud-us";
import { ValuePillarsSectionUS } from "@/components/home/us/value-pillars-section-us";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSectionUS } from "@/components/home/us/testimonials-section-us";
import { ContactSectionUS } from "@/components/home/us/contact-section-us";

export default function USHome() {
  return (
    <>
      <HeroSection />
      <LogoCloudUS />
      <ValuePillarsSectionUS />
      <StatsSection />
      <TestimonialsSectionUS />
      <ContactSectionUS />
    </>
  );
}
