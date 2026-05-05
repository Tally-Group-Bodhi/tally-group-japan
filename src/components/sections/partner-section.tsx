import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Rocket, Network } from "lucide-react";

const partnerCards = [
  {
    icon: Shield,
    title: "Complete billing and portal solutions for C&I customers",
    description:
      "Our flexible, innovative platform is designed to manage all complex C&I tariffs. We've also got a range of C&I focused portals and engagement solutions ready to go.",
  },
  {
    icon: Zap,
    title: "Reduce cost to serve and enable mass market innovation",
    description:
      "Our technology tools can transform your business, whether you're looking to launch new products, deliver digital customer solutions, or use our machine learning and analytics to reduce cost to serve.",
  },
  {
    icon: Rocket,
    title: "Everything you need to launch a new utility retailer in weeks",
    description:
      "Looking for help with billing, customer engagement, market gateway, or front and back office operations? We can provide everything you need to efficiently bring a new retail offering to market.",
  },
  {
    icon: Network,
    title: "Retail solutions for modern and legacy embedded networks",
    description:
      "Our onboarding, customer management, billing and engagement solution enables our clients to manage embedded network retail operations with minimal overheads.",
  },
];

export function PartnerSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-tally-green">
            Your utilitech partner
          </span>
          <h2 className="mt-2 text-3xl font-bold text-tally-navy sm:text-4xl">
            Tally Group is a trusted cloud utility{" "}
            <span className="text-tally-green">technology partner</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-tally-gray">
            We&apos;re transforming utility technology across multiple industry sectors by enabling
            innovation and reducing cost to serve.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {partnerCards.map((card) => (
            <Card key={card.title} className="border-0 bg-tally-gray-light">
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tally-green/10">
                  <card.icon className="h-5 w-5 text-tally-green" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-tally-navy">{card.title}</h3>
                  <p className="mt-2 text-sm text-tally-gray">{card.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
