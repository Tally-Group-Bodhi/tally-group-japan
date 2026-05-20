import { HeroSectionAE } from "@/components/home/ae/hero-section-ae";
import { LogoCloudAE } from "@/components/home/ae/logo-cloud-ae";
import { ValuePillarsSectionAE } from "@/components/home/ae/value-pillars-section-ae";
import { TestimonialsSectionAE } from "@/components/home/ae/testimonials-section-ae";
import { InsightsSectionAE } from "@/components/home/ae/insights-section-ae";
import { ContactSectionAE } from "@/components/home/ae/contact-section-ae";

export default function AEHome() {
  return (
    <div lang="ar" dir="rtl" className="font-ar contents">
      <HeroSectionAE />
      <LogoCloudAE />
      <ValuePillarsSectionAE />
      <TestimonialsSectionAE />
      <InsightsSectionAE />
      <ContactSectionAE />
    </div>
  );
}
