import type { Metadata } from "next";
import { ProductHero } from "@/components/sections/product-hero";
import { ProductFeatures } from "@/components/sections/product-features";
import { ProductCTA } from "@/components/sections/product-cta";
import { Settings, Users, Shield, Megaphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Tally Customer",
  description:
    "Robust front and back office operations to support your customer experience.",
};

const features = [
  {
    icon: Settings,
    title: "Operations",
    description:
      "Free up time to focus on innovation and growing your business by outsourcing customer service management and onboarding, billing and settlements.",
  },
  {
    icon: Users,
    title: "CRM",
    description:
      "Improve CX and decision making with an enterprise-class CRM platform designed for utilities. Gain a 360° view of all stages of the customer lifecycle.",
  },
  {
    icon: Shield,
    title: "Compliance",
    description:
      "Leverage our energy market expertise to support your compliance obligations. Gain peace of mind that you're supporting your teams and customers.",
  },
  {
    icon: Megaphone,
    title: "Dynamic Campaigns",
    description:
      "Automatically manage dynamic, multi-step campaigns that present existing customers or new leads with relevant offers.",
  },
];

const heroFeatures = [
  "Customer Care & Management",
  "Chat",
  "Reporting",
  "CRM",
  "Financials & Collections",
  "Market Comms",
  "Audits & Optimisations",
];

export default function CustomerPage() {
  return (
    <>
      <ProductHero
        title="Boost Your Customer Experience"
        subtitle="Robust front and back office operations to support your customer experience."
        features={heroFeatures}
      />

      <ProductFeatures
        title="Everything you need for exceptional customer service"
        features={features}
        columns={2}
      />

      <ProductCTA productName="Tally Customer" />
    </>
  );
}
