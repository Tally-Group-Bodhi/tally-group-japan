import { Check } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  bullets: string[];
  imagePosition?: "left" | "right";
  badge?: string;
}

export function FeatureShowcase({ features }: { features: Feature[] }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-tally-green">
            Features
          </span>
          <h2 className="mt-2 text-3xl font-bold text-tally-navy sm:text-4xl">
            Enabling seamless access to energy for all.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-tally-gray">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain
            more users.
          </p>
        </div>
        <div className="space-y-24">
          {features.map((feature, index) => {
            const isReversed = (feature.imagePosition ?? (index % 2 === 0 ? "right" : "left")) === "left";
            return (
              <div
                key={feature.title}
                className={`flex flex-col items-center gap-12 lg:flex-row ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  {feature.badge && (
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-tally-green">
                      {feature.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-tally-navy sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-lg text-tally-gray">{feature.description}</p>
                  <ul className="mt-6 space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tally-green/10">
                          <Check className="h-3 w-3 text-tally-green" />
                        </div>
                        <span className="text-sm text-tally-gray">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-tally-gray-light to-tally-green/5 p-8">
                    <div className="flex h-full items-center justify-center rounded-xl bg-white shadow-sm">
                      <span className="text-sm text-tally-gray">Product Screenshot</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
