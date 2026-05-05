import type { Metadata } from "next";
import { ProductHero } from "@/components/sections/product-hero";
import { ProductFeatures } from "@/components/sections/product-features";
import { ProductCTA } from "@/components/sections/product-cta";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingDown,
  RefreshCw,
  TrendingUp,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tally Digital",
  description:
    "A complete digital self-service product suite for mass-market customers.",
};

const heroFeatures = [
  "Insights & Engagement",
  "Credit Management",
  "Self Service Portal",
  "Chat / Bots",
  "Help Centre / FAQs",
  "Move Home",
  "Payment Options",
  "Notifications",
  "Retention",
  "Demand Response",
  "Loyalty & Rewards",
  "Revenue Assurance",
  "Usage Graphs",
  "Disaggregation",
  "Plans",
];

const valueProps = [
  {
    icon: TrendingDown,
    title: "Lower cost to serve",
    description:
      "Tally Digital allows your customers to manage their account, payments, explore insights and chat with virtual or personal support. It's available anytime, anywhere via our native mobile apps and online web portal.",
  },
  {
    icon: RefreshCw,
    title: "Reduce churn",
    description:
      "Customers receive personalised weekly updates between bills (preventing bill shock). Independent research has shown our solution reduces churn by a third and consistently ranks NPS scores over 50.",
  },
  {
    icon: TrendingUp,
    title: "Enable Upsell",
    description:
      "Leverage granular usage data to provide highly personalised insights and offers. When integrated with Tally Trust our email comms have high click-through rates (40%-70%).",
  },
  {
    icon: Database,
    title: "Rich Data",
    description:
      "Our machine learning analytics extract insights that enable a whole new energy customer experience. Run demand response programmes and capture important data on customer behaviour.",
  },
];

const digitalProducts = [
  {
    title: "Digital Self Service (DSS)",
    description:
      "Tally DSS is a modern suite of digital tools that allows end users to manage their account, payment, chat and explore insights. Fully integrated with chat capability. Available on web and mobile.",
  },
  {
    title: "Trust",
    description:
      "Tally TRUST reduces churn, boosts brand stickiness and can be deployed quickly. Reduce churn by up to 30% with weekly customer updates.",
  },
  {
    title: "Behavioural Demand Response (BDR)",
    description:
      "Tally BDR reduces load and saves your business money during peak events. Gain access to Tally Group's award-winning behavioural demand response platform.",
  },
  {
    title: "Load Disaggregation",
    description:
      "Tally LDA provides weekly usage insights at the appliance category level for customers. Reduce cost to serve by giving customers personalised and actionable insights.",
  },
  {
    title: "CANDI",
    description:
      "Tally CANDI is a flexible admin interface for C&I customers to analyse usage, forecasting, invoices and manage users. Supports complex products that require flexibility.",
  },
];

export default function DigitalPage() {
  return (
    <>
      <ProductHero
        title="Digitise your customer journeys"
        subtitle="A complete digital self-service product suite for mass-market customers."
        features={heroFeatures}
      />

      {/* Value Propositions */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop) => (
              <Card key={prop.title} className="border-0 bg-tally-gray-light">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-tally-green/10">
                    <prop.icon className="h-5 w-5 text-tally-green" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-tally-navy">{prop.title}</h3>
                  <p className="text-sm leading-relaxed text-tally-gray">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProductFeatures
        badge="Our digital products"
        title="Energizing Innovation in Utility Technology and Energy Retail Operations"
        features={digitalProducts}
        columns={3}
      />

      <ProductCTA productName="Tally Digital" />
    </>
  );
}
