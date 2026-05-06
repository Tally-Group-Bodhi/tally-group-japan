import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductHeroProps {
  title: string;
  subtitle: string;
  features: string[];
}

export function ProductHero({ title, subtitle, features }: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-tally-gray-light">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tally-green)_0%,_transparent_50%)] opacity-5" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-light tracking-tight text-tally-navy sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-tally-gray">{subtitle}</p>
            <div className="mt-8">
              <ButtonLink href="/contact" size="lg" className="bg-tally-green hover:bg-tally-green-dark text-white px-8">
                Request a demo
              </ButtonLink>
            </div>
          </div>
          <div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-tally-navy">
                Key features
              </h3>
              <div className="flex flex-wrap gap-2">
                {features.map((feature) => (
                  <Badge
                    key={feature}
                    variant="secondary"
                    className="bg-tally-gray-light text-tally-navy"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
