import { HeroSection } from "@/components/home/hero-section";
import { LogoCloud } from "@/components/home/logo-cloud";
import { ProductsSection } from "@/components/home/products-section";
import { PlatformSection } from "@/components/home/platform-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { InsightsSection } from "@/components/home/insights-section";
import { ContactSection } from "@/components/home/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <ProductsSection />
      <PlatformSection />
      <StatsSection />
      <TestimonialsSection />
      <InsightsSection />
      <ContactSection />
    </>
  );
}
