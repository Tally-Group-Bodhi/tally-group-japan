import { ButtonLink } from "@/components/ui/button";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CTABanner({
  title = "Find out how Tally Group can help your business",
  subtitle,
  ctaText = "Request a demo",
  ctaHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="bg-tally-navy py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{subtitle}</p>}
        <div className="mt-8">
          <ButtonLink href={ctaHref} size="lg" className="bg-tally-green hover:bg-tally-green-dark text-white px-8">
            {ctaText}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
