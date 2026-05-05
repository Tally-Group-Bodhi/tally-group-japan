import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface ProductFeature {
  icon?: LucideIcon;
  title: string;
  description: string;
}

interface ProductFeaturesProps {
  badge?: string;
  title: string;
  subtitle?: string;
  features: ProductFeature[];
  columns?: 2 | 3 | 4;
}

export function ProductFeatures({
  badge,
  title,
  subtitle,
  features,
  columns = 2,
}: ProductFeaturesProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(badge || title) && (
          <div className="mb-12 text-center">
            {badge && (
              <span className="text-sm font-semibold uppercase tracking-wider text-tally-green">
                {badge}
              </span>
            )}
            <h2 className="mt-2 text-3xl font-bold text-tally-navy sm:text-4xl">{title}</h2>
            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-lg text-tally-gray">{subtitle}</p>
            )}
          </div>
        )}
        <div className={`grid grid-cols-1 gap-6 ${gridCols[columns]}`}>
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 bg-tally-gray-light">
              <CardContent className="p-6">
                {feature.icon && (
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-tally-green/10">
                    <feature.icon className="h-5 w-5 text-tally-green" />
                  </div>
                )}
                <h3 className="mb-2 text-base font-semibold text-tally-navy">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-tally-gray">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
