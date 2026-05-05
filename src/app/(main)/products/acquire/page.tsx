import type { Metadata } from "next";
import { ProductHero } from "@/components/sections/product-hero";
import { ProductFeatures } from "@/components/sections/product-features";
import { ProductCTA } from "@/components/sections/product-cta";
import {
  FileText,
  DollarSign,
  Users,
  Compass,
  Upload,
  Map,
  Receipt,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tally Acquire",
  description:
    "Set up your sales channels in minutes with our cloud-native apps for energy, gas and internet retailers.",
};

const features = [
  {
    icon: FileText,
    title: "Quoting",
    description:
      "Reduce time to quote. Ensure 100% accuracy and compliance and realise support for phone, online and door-to-door quote generation.",
  },
  {
    icon: DollarSign,
    title: "Pricing & Products",
    description:
      "Launch new products and sales channels at speed. Manage all energy rates and offers from one place.",
  },
  {
    icon: Users,
    title: "Campaign Management",
    description:
      "Streamline lead management with an intuitive agent platform. Utilise smart workflow tools and granular campaign performance reporting.",
  },
  {
    icon: Compass,
    title: "Strategy",
    description:
      "Learn from the broad experience of our experts, who have consulted for early stage start-ups through to established retailers.",
  },
  {
    icon: Upload,
    title: "Onboarding",
    description:
      "Reduce manual onboarding processes with automated market communications, welcome kit generation and billing system syncing.",
  },
  {
    icon: Map,
    title: "Market Entry",
    description:
      "Obtain a retail license and establish compliant energy processes and systems to improve your service offering.",
  },
  {
    icon: Receipt,
    title: "Bill Parsing",
    description:
      "Instantly parse customer bills with a simple drag and drop interface. Simplify the customer sign-up journey, reduce human error and expedite sales.",
  },
];

const heroFeatures = [
  "Pricing & Products",
  "Quoting",
  "Sign-Up & Onboarding",
  "Bill Parsing",
  "Market Entry Check",
  "Compliance",
  "Sales Reporting",
  "Lead Management",
  "Chat",
  "Agent Sign-up",
  "Door to Door Sales",
];

export default function AcquirePage() {
  return (
    <>
      <ProductHero
        title="Accelerate sales"
        subtitle="Set up your sales channels in minutes with our cloud-native apps for energy, gas and internet retailers."
        features={heroFeatures}
      />

      <ProductFeatures
        title="Powerful sales tools for energy retailers"
        features={features}
        columns={3}
      />

      <ProductCTA productName="Tally Acquire" />
    </>
  );
}
