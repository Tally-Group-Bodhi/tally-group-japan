import { HeroSection } from "@/components/home/hero-section";
import { LogoCloud } from "@/components/home/logo-cloud";
import { ValuePillarsSection } from "@/components/home/value-pillars-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { InsightsSection } from "@/components/home/insights-section";
import { ContactSection } from "@/components/home/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <ValuePillarsSection />
      <TestimonialsSection />
      <InsightsSection />
      <ContactSection />
    </>
  );
}
