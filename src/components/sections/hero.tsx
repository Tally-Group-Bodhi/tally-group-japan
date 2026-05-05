import { ButtonLink } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

interface HeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  centered?: boolean;
}

export function Hero({
  badge,
  title,
  highlight,
  subtitle,
  ctaText = "Request a demo",
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
  centered = false,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-tally-gray-light">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tally-green)_0%,_transparent_50%)] opacity-5" />
      <div
        className={`relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36 ${
          centered ? "text-center" : ""
        }`}
      >
        {badge && (
          <FadeIn delay={0} className={centered ? "flex justify-center mb-6" : "mb-6"}>
            <span className="inline-flex items-center rounded-full bg-tally-green/10 px-4 py-1.5 text-xs font-medium text-tally-green">
              {badge}
            </span>
          </FadeIn>
        )}
        <FadeIn delay={0.1}>
          <h1
            className={`text-4xl font-bold tracking-tight text-tally-navy sm:text-5xl lg:text-6xl ${
              centered ? "mx-auto max-w-4xl" : "max-w-3xl"
            }`}
          >
            {title}{" "}
            {highlight && <span className="text-tally-green">{highlight}</span>}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            className={`mt-6 text-lg leading-relaxed text-tally-gray sm:text-xl ${
              centered ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
          >
            {subtitle}
          </p>
        </FadeIn>
        {ctaText && (
          <FadeIn delay={0.3}>
            <div
              className={`mt-10 flex flex-col gap-4 sm:flex-row ${
                centered ? "justify-center" : ""
              }`}
            >
              <ButtonLink href={ctaHref} size="lg" className="bg-tally-green hover:bg-tally-green-dark text-white px-8">
                {ctaText}
              </ButtonLink>
              {secondaryCtaText && secondaryCtaHref && (
                <ButtonLink href={secondaryCtaHref} variant="outline" size="lg" className="px-8">
                  {secondaryCtaText}
                </ButtonLink>
              )}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
