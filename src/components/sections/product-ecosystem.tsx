import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Monitor, BarChart3, Headphones } from "lucide-react";

const products = [
  {
    icon: Users,
    title: "Manage the full customer lifecycle",
    description: "Manage the full customer lifecycle with dynamic, multi-step campaigns.",
    href: "/products/acquire",
  },
  {
    icon: Monitor,
    title: "Digitise your customer journeys",
    description: "Unified digital tools that enable cross-platform customer engagement.",
    href: "/products/digital",
  },
  {
    icon: BarChart3,
    title: "Implement new innovation in billing",
    description: "Accurate, scalable, SaaS-based billing, CIS and market gateway.",
    href: "/products/billing",
  },
  {
    icon: Headphones,
    title: "Boost your customer experience",
    description: "Front and back office operations to support your technology.",
    href: "/products/customer",
  },
];

export function ProductEcosystem() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-tally-green">
            Our product groups
          </span>
          <h2 className="mt-2 text-3xl font-bold text-tally-navy sm:text-4xl">
            The Tally ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-tally-gray">
            Tally puts its energy into building world-leading utility technology
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link key={product.title} href={product.href}>
              <Card className="group h-full border-0 bg-tally-gray-light transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-tally-green/10">
                    <product.icon className="h-6 w-6 text-tally-green" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-tally-navy group-hover:text-tally-green transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-tally-gray">{product.description}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-tally-green">
                    Learn more &rarr;
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
