import { HeroSectionJP } from "@/components/home/jp/hero-section-jp";
import { LogoCloudJP } from "@/components/home/jp/logo-cloud-jp";
import { ValuePillarsSectionJP } from "@/components/home/jp/value-pillars-section-jp";
import { TestimonialsSectionJP } from "@/components/home/jp/testimonials-section-jp";
import { ContactSectionJP } from "@/components/home/jp/contact-section-jp";

export default function JPHome() {
  return (
    <>
      <HeroSectionJP />
      <LogoCloudJP />
      <ValuePillarsSectionJP />
      <TestimonialsSectionJP />
      <ContactSectionJP />
    </>
  );
}
