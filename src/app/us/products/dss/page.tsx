import type { Metadata } from "next";
import { ProductHero } from "@/components/sections/product-hero";
import { ProductCTA } from "@/components/sections/product-cta";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Tally DSS - Digital Self Service",
  description:
    "Tally's web portal and native mobile app enable energy retailers to engage customers, boost loyalty and up-sell services.",
};

const solutionPoints = [
  {
    title: "Packed with features",
    description:
      "Tally DSS is a modern suite of digital tools to manage the customer experience. It allows end users to manage their account, payment, chat and explore insights.",
  },
  {
    title: "Lower cost to serve",
    description:
      "Tally DSS allows your customers to manage their account, payments, explore insights and chat with virtual or personal support. Available anytime, anywhere.",
  },
  {
    title: "Enjoy Flexibility",
    description:
      "Tally DSS integrates with any of Tally's billing systems or with your own via APIs. Our platform is ever evolving with the ability to purchase additional modules.",
  },
  {
    title: "Reduce Churn",
    description:
      "Customers receive personalised weekly updates between bills (preventing bill shock). Independent research has shown our solution reduces churn by a third.",
  },
  {
    title: "Rich data",
    description:
      "Our machine learning analytics extract insights that enable a whole new energy customer experience. Run demand response programmes and capture important data.",
  },
  {
    title: "Enable upsell",
    description:
      "Leverage granular usage data to provide highly personalised insights and offers. When integrated with Tally Trust, our email comms have high click-through rates (40%-70%).",
  },
];

const businessBenefits = [
  {
    title: "Put customers in control",
    bullets: [
      "Digital self-service gives customers more power, choice and convenience.",
      "Help customers understand their energy usage and influence their behaviour to save money.",
      "Allow customers to self-serve their energy account in a user-friendly, highly-personalised way.",
      "Customers with Solar PV / Community Batteries can monitor their generation without leaving the app.",
    ],
  },
  {
    title: "Lower cost to serve",
    bullets: [
      "Reduce cost to serve by giving your customers actionable insights.",
      "Provide 'just in time' insights that allow customers to take action on their own.",
      "Reduce enquiries to your contact centre.",
      "Enable customers to order new products and services via self service.",
    ],
  },
  {
    title: "Stay fresh and reduce churn",
    bullets: [
      "Low-friction integration.",
      "Works with legacy infrastructure.",
      "Tally DSS is an ever-evolving product that moves with the times.",
      "Access to Trust, Load Disaggregation and Behavioural Demand Response.",
    ],
  },
];

export default function DSSPage() {
  return (
    <>
      <ProductHero
        title="Digital Self Service"
        subtitle="Tally's web portal and native mobile app enable energy retailers to engage customers, boost loyalty and up-sell services."
        features={[
          "Self Service Portal",
          "Mobile App",
          "Usage Insights",
          "Chat Integration",
          "Bill Management",
          "Solar Monitoring",
        ]}
      />

      {/* The Tally Solution */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-tally-green">
              The Tally Solution
            </span>
            <h2 className="mt-2 text-3xl font-bold text-tally-navy sm:text-4xl">
              Packed with features
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionPoints.map((point) => (
              <Card key={point.title} className="border-0 bg-tally-gray-light">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-base font-semibold text-tally-navy">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-tally-gray">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="bg-tally-gray-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-tally-navy sm:text-4xl">
              How will Tally DSS be good for my business?
            </h2>
            <p className="mt-4 text-lg text-tally-gray">
              An engaged customer base that self-serves digitally.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {businessBenefits.map((benefit) => (
              <div key={benefit.title}>
                <h3 className="mb-4 text-lg font-semibold text-tally-navy">{benefit.title}</h3>
                <ul className="space-y-3">
                  {benefit.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-tally-green/10">
                        <Check className="h-2.5 w-2.5 text-tally-green" />
                      </div>
                      <span className="text-sm text-tally-gray">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductCTA productName="Tally Digital" />
    </>
  );
}
