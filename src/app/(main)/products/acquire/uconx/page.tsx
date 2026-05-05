import type { Metadata } from "next";
import { ProductHero } from "@/components/sections/product-hero";
import { ProductCTA } from "@/components/sections/product-cta";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Tally Acquire UCONX",
  description:
    "Tally Acquire is a cloud-native app developed with and for energy, gas and internet retailers that enables you to set up sales channels in minutes.",
};

const sections = [
  {
    title: "Pricing and product management",
    description:
      "Easy management of offers and rates, with the ability to import and export pricing. Store and manage historic, current and future pricing and offers. Full integration with billing systems, CRM, and Data Warehouse.",
  },
  {
    title: "Sales conversion",
    description:
      "Tally Acquire integrates with your website to provide self-service comparative quoting functionality to your customers. Track leads from agent and web channels with a Performance Dashboard.",
  },
  {
    title: "Compliance and security",
    description:
      "Automatic feed of price change and compliance information to regulators. Centralised product, pricing, quoting and onboarding communication. Advanced security protects client and customer data.",
  },
];

const detailCards = [
  {
    title: "Accurate quoting",
    bullets: [
      "Price-only and comparative quotes for electricity, gas, and internet",
      "Consumer Data Rights solution for importing energy usage",
      "Credit rating checks and address verification",
      "Fast, accurate quoting using MSATS integration",
    ],
  },
  {
    title: "Smart documentation",
    bullets: [
      "Automated, customisable branded PDF quotes",
      "Welcome Packs for your customers",
      "Interactive PDFs with click-through acceptance",
      "Switching process initiation",
    ],
  },
  {
    title: "System integration",
    bullets: [
      "Credit agency systems integration",
      "Billing systems and existing CRMs",
      "Industry database integration for accuracy",
      "API powers self-quoting via retail websites",
    ],
  },
  {
    title: "Reporting",
    bullets: [
      "Pricing and sales conversions by channel",
      "Real-time reports on quoting and sales",
      "Track quoting volumes and conversion rates",
      "Analysis by date and distributor",
    ],
  },
];

export default function UconxPage() {
  return (
    <>
      <ProductHero
        title="Accelerate sales"
        subtitle="Tally Acquire is a cloud-native app developed with and for energy, gas and internet retailers that enables you to set up sales channels in minutes."
        features={[
          "Pricing Management",
          "Sales Conversion",
          "Compliance",
          "Quoting",
          "Documentation",
          "Reporting",
        ]}
      />

      {/* UCONX Overview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-tally-green">
              UCONX
            </span>
            <h2 className="mt-2 text-3xl font-bold text-tally-navy sm:text-4xl">
              Accelerate your energy sales pipeline
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-tally-gray">
              Improve your customer experience
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {sections.map((section) => (
              <Card key={section.title} className="border-0 bg-tally-gray-light">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-semibold text-tally-navy">{section.title}</h3>
                  <p className="text-sm leading-relaxed text-tally-gray">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Cards */}
      <section className="bg-tally-gray-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {detailCards.map((card) => (
              <Card key={card.title} className="border bg-white">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-tally-navy">{card.title}</h3>
                  <ul className="space-y-2">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-tally-green/10">
                          <Check className="h-2.5 w-2.5 text-tally-green" />
                        </div>
                        <span className="text-sm text-tally-gray">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProductCTA productName="Tally Acquire" />
    </>
  );
}
