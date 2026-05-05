import type { Metadata } from "next";
import Link from "next/link";
import { CorporatePageHero } from "@/components/corporate/page-hero";

export const metadata: Metadata = {
  title: "VoltEdge Retail Case Study",
};

const metrics = [
  { value: "3×", label: "Product launch speed" },
  { value: "XX%", label: "Ops cost reduction" },
  { value: "XX%", label: "Billing accuracy" },
];

export default function VoltEdgeCaseStudyPage() {
  return (
    <>
      <CorporatePageHero
        breadcrumbs={[
          { label: "Home", href: "/corporate/us" },
          { label: "Insights" },
          { label: "Case Studies", href: "/corporate/us/case-studies" },
          { label: "VoltEdge Retail" },
        ]}
        title="Scaling complex products without adding back-office headcount"
        lede="How a North American electricity retailer tripled product launch velocity on the Tally+ platform."
      >
        <div className="flex flex-wrap gap-[8px] mt-[16px]">
          {["North America", "Retail energy", "Electricity"].map((pill) => (
            <span
              key={pill}
              className="inline-block px-[12px] py-[4px] rounded-full text-xs font-medium bg-white/80 text-navy border border-stroke1"
            >
              {pill}
            </span>
          ))}
        </div>
      </CorporatePageHero>

      <article className="py-[96px]">
        <div className="max-w-[720px] mx-auto px-8">
          <Link
            href="/corporate/us/case-studies"
            className="inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-turquoise transition-colors mb-[48px]"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            All case studies
          </Link>

          <blockquote className="my-[32px] py-[24px] px-[28px] rounded-xl bg-bg2 border-l-[3px] border-turquoise">
            <p className="text-lg leading-[1.55] text-fg1 italic">
              &ldquo;Tally+ let us launch three new product bundles in a single quarter — something that previously would have required doubling our ops team.&rdquo;
            </p>
            <footer className="mt-[12px] text-sm font-medium text-fg1">
              Sarah Mitchell
              <span className="text-fg3 font-normal"> · VP Retail Operations, VoltEdge Retail</span>
            </footer>
          </blockquote>

          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mt-[56px] mb-[14px] inline-flex items-center gap-2">
            <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
            The challenge
          </div>
          <h2 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-navy mb-[16px]">
            Legacy billing held back growth
          </h2>
          <div className="space-y-[16px]">
            <p className="text-lg leading-[1.55] text-fg2">
              VoltEdge Retail, a mid-market electricity retailer serving commercial and industrial customers across the U.S., was growing fast — but its legacy billing platform couldn&rsquo;t keep up. Every new product bundle required months of custom development, manual configuration, and dedicated back-office staff to manage exceptions.
            </p>
            <p className="text-lg leading-[1.55] text-fg2">
              As the company expanded its portfolio to include time-of-use rates, demand-response incentives, and renewable energy credits, the operational overhead became unsustainable. Leadership needed a platform that could scale product complexity without scaling headcount.
            </p>
          </div>

          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mt-[56px] mb-[14px] inline-flex items-center gap-2">
            <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
            The solution
          </div>
          <h2 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-navy mb-[16px]">
            A modular platform built for velocity
          </h2>
          <div className="space-y-[16px]">
            <p className="text-lg leading-[1.55] text-fg2">
              VoltEdge selected Tally+ for its modular architecture, allowing the team to configure new products through the platform&rsquo;s rules engine rather than writing custom code. The migration was completed in under six months with zero billing disruptions.
            </p>
            <p className="text-lg leading-[1.55] text-fg2">
              Key capabilities that drove the decision:
            </p>
            <ul className="space-y-[10px] pl-[20px]">
              <li className="text-lg leading-[1.55] text-fg2 list-disc">
                Configurable product builder with multi-commodity support
              </li>
              <li className="text-lg leading-[1.55] text-fg2 list-disc">
                Automated exception handling and billing validation
              </li>
              <li className="text-lg leading-[1.55] text-fg2 list-disc">
                Real-time margin visibility across the product portfolio
              </li>
              <li className="text-lg leading-[1.55] text-fg2 list-disc">
                Tally Glass AI for anomaly detection and customer insights
              </li>
            </ul>
          </div>

          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mt-[56px] mb-[14px] inline-flex items-center gap-2">
            <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
            Measurable results
          </div>
          <h2 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-navy mb-[16px]">
            Faster launches, lower cost
          </h2>
          <p className="text-lg leading-[1.55] text-fg2 mb-[32px]">
            Within the first year on Tally+, VoltEdge tripled their product launch cadence, reduced billing exceptions, and held back-office headcount flat despite a growing customer base.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mb-[48px]">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="bg-white border border-stroke1 rounded-xl p-[24px] text-center"
              >
                <span className="block text-[32px] font-bold text-turquoise leading-none">
                  {m.value}
                </span>
                <span className="block mt-[8px] text-sm text-fg2">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-[48px] p-[28px] rounded-xl bg-bg2 border border-stroke1 flex flex-col items-center text-center">
            <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center mb-[20px]">
              <button
                type="button"
                className="w-[64px] h-[64px] rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <span className="material-symbols-outlined text-[32px] text-white">play_arrow</span>
              </button>
            </div>
            <p className="text-sm text-fg3">Video coming soon</p>
          </div>

          <div className="mt-[64px] pt-[48px] border-t border-stroke1 text-center">
            <h2 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-navy mb-[12px]">
              Ready to see similar results?
            </h2>
            <p className="text-lg leading-[1.55] text-fg2 mb-[28px]">
              Talk to our team about how Tally+ can accelerate your business.
            </p>
            <Link
              href="/corporate/us/contact"
              className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover transition-all"
            >
              Request a Demo <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
