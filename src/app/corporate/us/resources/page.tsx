"use client";

import { useState } from "react";
import Link from "next/link";
import { CorporatePageHero } from "@/components/corporate/page-hero";

const whitepapers = [
  {
    title: "The Future of Retail Energy Platforms",
    description:
      "How modern billing systems scale to support complex product portfolios, multi-commodity services, and real-time pricing.",
  },
  {
    title: "AI and the Utility Technology Stack",
    description:
      "Practical AI patterns for demand forecasting, anomaly detection, and automated customer interactions in energy retail.",
  },
  {
    title: "Net-Zero Roadmaps for C&I Retailers",
    description:
      "Translating corporate sustainability commitments into actionable portfolio strategies and product design.",
  },
  {
    title: "Demand Response: A Technical Primer",
    description:
      "From curtailment signals to settlement — understanding the full DR lifecycle and the platform requirements that support it.",
  },
  {
    title: "Customer Experience in Regulated Markets",
    description:
      "Balancing compliance constraints with modern digital experiences across onboarding, billing, and support.",
  },
  {
    title: "Data Security for Cloud Billing",
    description:
      "Architecture patterns, access controls, and monitoring strategies for cloud-native utility billing platforms.",
  },
];

const webinars = [
  {
    title: "Retail Energy in 2026: Product Velocity and Risk",
    date: "March 18, 2026",
    duration: "45 min",
    description:
      "An in-depth discussion on how leading retailers are accelerating product launches while managing margin exposure in volatile markets.",
    speaker: "Jordan Ellis",
    role: "VP Retail Solutions",
  },
  {
    title: "From AMI to Actionable Insights",
    date: "February 4, 2026",
    duration: "38 min",
    description:
      "Turning raw meter data into operational intelligence — practical workflows for grid analytics teams and retail operations.",
    speaker: "Dr. Priya Nandakumar",
    role: "Director Grid Analytics",
  },
  {
    title: "BESS and Retail: Bridging Markets",
    date: "January 22, 2026",
    duration: "52 min",
    description:
      "How battery energy storage systems create new retail product categories and what billing platforms need to support them.",
    speaker: "Marcus Chen",
    role: "Principal Energy Markets",
  },
];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<"whitepapers" | "webinars">("whitepapers");

  return (
    <>
      <CorporatePageHero
        breadcrumbs={[
          { label: "Home", href: "/corporate/us" },
          { label: "Resources" },
        ]}
        title="Resources"
        lede="Deep dives, research reports, and expert-led sessions to help you understand solutions for energy-related business."
      />

      <section className="border-b border-stroke1 px-8 py-[24px]" style={{ background: "#F9F9FB" }}>
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center gap-[16px]">
          <p className="m-0 text-sm font-semibold text-navy">Browse by type</p>
          <div className="flex flex-wrap gap-[8px]">
            <button
              type="button"
              className={`appearance-none cursor-pointer font-medium text-sm px-5 py-[9px] rounded-lg border transition-all ${
                activeTab === "whitepapers"
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-fg1 border-stroke1 hover:border-navy/30"
              }`}
              aria-pressed={activeTab === "whitepapers"}
              onClick={() => setActiveTab("whitepapers")}
            >
              Whitepapers
            </button>
            <button
              type="button"
              className={`appearance-none cursor-pointer font-medium text-sm px-5 py-[9px] rounded-lg border transition-all ${
                activeTab === "webinars"
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-fg1 border-stroke1 hover:border-navy/30"
              }`}
              aria-pressed={activeTab === "webinars"}
              onClick={() => setActiveTab("webinars")}
            >
              Webinars
            </button>
          </div>
        </div>
      </section>

      <section
        className="py-[96px]"
        style={{ background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)" }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <p className="text-xs text-fg3 italic mb-[32px]">
            Placeholder content: Titles, descriptions, and links below are samples.
          </p>

          {activeTab === "whitepapers" && (
            <>
              <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px] inline-flex items-center gap-2">
                <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
                Whitepapers
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                {whitepapers.map((wp) => (
                  <div
                    key={wp.title}
                    className="bg-white border border-stroke1 rounded-xl p-[28px] flex flex-col"
                  >
                    <div className="w-[40px] h-[40px] rounded-lg bg-bg2 border border-stroke1 flex items-center justify-center mb-[16px]">
                      <span className="material-symbols-outlined text-[20px] text-navy">description</span>
                    </div>
                    <h3 className="text-base font-bold tracking-[-0.02em] text-navy mb-[8px]">
                      {wp.title}
                    </h3>
                    <p className="text-sm leading-[1.55] text-fg2 mb-[20px] flex-1">
                      {wp.description}
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1 text-sm font-medium text-navy no-underline hover:text-turquoise transition-colors"
                    >
                      View PDF
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "webinars" && (
            <>
              <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px] inline-flex items-center gap-2">
                <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
                Webinars
              </div>
              <div className="space-y-[24px]">
                {webinars.map((wb) => (
                  <div
                    key={wb.title}
                    className="bg-white border border-stroke1 rounded-xl p-[28px] grid grid-cols-1 md:grid-cols-[280px_1fr] gap-[28px]"
                  >
                    <div className="aspect-video rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-navy to-navy-dark">
                      <span className="material-symbols-outlined text-[48px] text-white/80">play_circle</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-bold tracking-[-0.02em] text-navy mb-[8px]">
                        {wb.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-fg3 mb-[12px]">
                        <span className="font-mono font-semibold text-turquoise">{wb.date}</span>
                        <span className="w-[3px] h-[3px] rounded-full bg-fg3" />
                        <span>{wb.duration}</span>
                      </div>
                      <p className="text-sm leading-[1.55] text-fg2 mb-[16px]">
                        {wb.description}
                      </p>
                      <p className="text-sm text-fg1 font-medium">
                        {wb.speaker}
                        <span className="text-fg3 font-normal"> · {wb.role}</span>
                      </p>
                      <div className="mt-[20px]">
                        <Link
                          href="#"
                          className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all"
                        >
                          Watch Now
                          <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
