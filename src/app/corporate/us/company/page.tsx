import type { Metadata } from "next";
import Link from "next/link";
import { CorporatePageHero } from "@/components/corporate/page-hero";

export const metadata: Metadata = {
  title: "Company",
};

const milestones = [
  {
    year: "2026",
    desc: "Tally Group acquires Skipping Stone, expanding advisory and consulting capabilities across the U.S. and Japan.",
  },
  {
    year: "2024",
    desc: "Tally purchases Alinta Energy\u2019s billing platform CORE, which supports Mass Market and C&I customers.",
  },
  {
    year: "2023",
    desc: "Tally Group is significantly backed by IFM Investors and the Clean Energy Finance Corporation (CEFC) in Australia.",
  },
  {
    year: "2021",
    desc: "The merger of Agility and Tally forms Tally Group, which has demonstrated market expertise and a proven track record of transitioning major enterprise mass-market platforms.",
  },
  {
    year: "2020",
    desc: "Agility acquired Znalytics and Webtools, and under Tally\u2019s leadership, acquisitions and integration have become a core strength driving accelerated revenue growth in Japan and the U.S.",
  },
  {
    year: "2018",
    desc: "Tally IT was founded by Australian market experts to address the gap for client-centric billing and digital solutions to address pain points for retailers from legacy providers.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <CorporatePageHero
        breadcrumbs={[
          { label: "Home", href: "/corporate/us" },
          { label: "About" },
          { label: "Company" },
        ]}
        title="Company"
        ledeAccent={[
          { text: "Delivering ", accent: "" },
          { text: "World Class Customer Experience", accent: "yes" },
          { text: " and ", accent: "" },
          { text: "Management Solutions", accent: "yes" },
        ]}
      />

      <section className="py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="max-w-[720px]">
            <div className="space-y-[16px]">
              <p className="text-lg leading-[1.55] text-fg2">
                Tally Group has proven solutions implemented globally that provide end-to-end customer experience and management solutions to utilities, energy retailers, and transition energy services companies.
              </p>
              <p className="text-lg leading-[1.55] text-fg2">
                Our Tally+ Pods and Modules can be configured specifically to fit or come in standard out-of-the-box packages.
              </p>
              <p className="text-lg leading-[1.55] text-fg2">
                In addition, Tally Glass, our AI tool, can be connected to Pods and Modules to optimize Tally+ and enhance user productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-[96px]"
        style={{ background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)" }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px] inline-flex items-center gap-2">
            <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
            Our story
          </div>
          <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy mb-[20px]">
            History
          </h2>
          <p className="text-lg leading-[1.55] text-fg2 max-w-[720px] mb-[48px]">
            Tally Group formed in 2021, following the merger of leading cloud-based billing solutions provider Agility CIS and fast-growing energy retail SaaS software provider Tally. The Tally Group includes Znalytics (US/Japan) and Webtools Energy (Australia and New Zealand), which were both acquired by Agility CIS in 2020. In May 2022, we rebranded globally as Tally Group. In 2026, Tally Group acquired{" "}
            <Link href="https://skippingstone.com/" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-turquoise transition-colors underline decoration-stroke1 underline-offset-2">
              Skipping Stone
            </Link>
            , an energy consulting firm, marking a key step in global growth.
          </p>

          <ol className="relative list-none m-0 p-0 max-w-[600px] before:content-[''] before:absolute before:left-[9px] before:top-[14px] before:bottom-[14px] before:w-[2px] before:bg-stroke1 before:rounded-sm">
            {milestones.map((m) => (
              <li key={m.year} className="relative pl-[48px] pb-[36px] last:pb-0">
                <span className="absolute left-0 top-[2px] w-5 h-5 rounded-full border-[3px] border-turquoise bg-white flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-turquoise" />
                </span>
                <h3 className="m-0 mb-[6px] font-mono text-sm font-semibold text-turquoise tracking-tight leading-tight">
                  {m.year}
                </h3>
                <p className="m-0 text-sm leading-[1.55] text-fg2">
                  {m.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
