import type { Metadata } from "next";
import { ProductHero } from "@/components/sections/product-hero";
import { ProductFeatures } from "@/components/sections/product-features";
import { ProductCTA } from "@/components/sections/product-cta";
import { Testimonial } from "@/components/sections/testimonial";
import {
  FileText,
  Receipt,
  Users,
  AlertTriangle,
  Database,
  BarChart3,
  Zap,
  Shield,
  DollarSign,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tally Billing",
  description:
    "Our multi-utility SaaS-based billing platform is flexible, quick to deploy and infinitely scalable.",
};

const features = [
  {
    icon: FileText,
    title: "Quote to Contract",
    description:
      "Prepare energy offers and generate contracts for complex C&I and multi-site deals, automatically triggering transfers and onboarding.",
  },
  {
    icon: Receipt,
    title: "Utility Billing",
    description:
      "This multi-utility platform can be used for C&I, residential, ENOs and distributed energy resources.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Simplify the operations experience with Tally Billing's intuitive customer management layer.",
  },
  {
    icon: AlertTriangle,
    title: "Exception Management",
    description:
      "Automation and simplifying exception management makes a zero-touch future possible.",
  },
  {
    icon: Database,
    title: "Data Lake",
    description:
      "Quickly deploy our fully cloud based data lake to provide a platform for advanced analytics, machine learning and business intelligence.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "As experts in leveraging and analysing utility data, we've developed complex models for tariffs, churn, exceptions and new energy solutions.",
  },
  {
    icon: Zap,
    title: "Tariff Optimisation",
    description:
      "Run ongoing bulk or one-off simulations to calculate your customers' best combination of network and retail tariffs.",
  },
  {
    icon: Shield,
    title: "New Energy Innovation",
    description:
      "Our ability to bill any complex tariff structures means we're supporting grid transformation and the move to a cleaner future.",
  },
  {
    icon: DollarSign,
    title: "Revenue Assurance",
    description:
      "Bill reconciliation capability with real-time views of potential issues prevents revenue leakage.",
  },
  {
    icon: Scale,
    title: "Market Compliance",
    description:
      "Our platform is designed to be fully compliant with the energy market.",
  },
];

const heroFeatures = [
  "Advanced Data Management",
  "Credit Management",
  "Tariff Optimisation",
  "Payments",
  "Billing",
  "Service Management",
  "Compliance & Reporting",
  "Data Migration",
  "New Energy Innovation",
  "Customer Management",
  "Market Compliance",
];

export default function BillingPage() {
  return (
    <>
      <ProductHero
        title="New innovation"
        subtitle="Our multi-utility SaaS-based billing platform is flexible, quick to deploy and infinitely scalable."
        features={heroFeatures}
      />

      <ProductFeatures
        badge="Fast, cost-effective innovation"
        title="Our billing platforms"
        features={features}
      />

      <Testimonial
        quote="The team immediately mobilised additional resources and oversight to remediate a complex operational billing challenge with minimal business and customer impact."
        name="Stuart Rainsford"
        title="GM Energy"
        company="VOCUS GROUP"
      />

      <ProductCTA productName="Tally Billing" />
    </>
  );
}
