"use client";

import { useState } from "react";
import Link from "next/link";
import { CorporatePageHero } from "@/components/corporate/page-hero";

const caseStudies = [
  {
    title: "Scaling complex products without adding back-office headcount",
    client: "VoltEdge Retail",
    region: "North America",
    topic: "Retail energy",
    focus: "Electricity",
    gradient: "from-turquoise/20 to-navy/10",
    quote:
      "Tally+ let us launch three new product bundles in a single quarter — something that previously would have required doubling our ops team.",
    quoteAuthor: "Sarah Mitchell",
    quoteRole: "VP Retail Operations",
    metrics: [
      { value: "3×", label: "Product launch speed" },
      { value: "XX%", label: "Ops cost reduction" },
    ],
    href: "/corporate/us/case-studies/voltedge-north-america",
  },
  {
    title: "Leading water utility transforms customer experience",
    client: "AquaWorks",
    region: "Australia",
    topic: "CX",
    focus: "Water",
    gradient: "from-blue-400/20 to-navy/10",
    quote:
      "The migration to Tally+ gave us a single view of every customer interaction — billing, service requests, and outage notifications — in one platform.",
    quoteAuthor: "James Thornton",
    quoteRole: "Head of Digital",
    metrics: [
      { value: "XX%", label: "CSAT improvement" },
      { value: "XX%", label: "Call volume reduction" },
    ],
    href: "#",
  },
  {
    title: "Faster market processes behind the meter",
    client: "MetroGrid Japan",
    region: "Japan",
    topic: "Utility",
    focus: "Electricity",
    gradient: "from-rose-400/20 to-navy/10",
    quote:
      "With Tally+ we cut our market-switching cycle time in half, giving us a real competitive advantage in Japan's rapidly deregulating market.",
    quoteAuthor: "Takeshi Yamamoto",
    quoteRole: "COO",
    metrics: [
      { value: "50%", label: "Faster switching" },
      { value: "XX%", label: "Error rate reduction" },
    ],
    href: "#",
  },
  {
    title: "Unified billing for bundled retail and DER programs",
    client: "Desert Sun Power Co.",
    region: "Middle East",
    topic: "Energy transition",
    focus: "Renewables",
    gradient: "from-amber-400/20 to-navy/10",
    quote:
      "Bundling solar, storage, and retail supply into a single bill was impossible on our legacy system. Tally+ made it straightforward.",
    quoteAuthor: "Amira Hassan",
    quoteRole: "Director of Retail Products",
    metrics: [
      { value: "XX%", label: "Billing accuracy" },
      { value: "1", label: "Unified bill" },
    ],
    href: "#",
  },
];

const regions = ["All Regions", "North America", "Australia", "Japan", "Middle East"];
const topics = ["All Topics", "Retail energy", "CX", "Utility", "Energy transition"];
const focusAreas = ["All Focus Areas", "Electricity", "Water", "Renewables"];

export default function CaseStudiesPage() {
  const [regionFilter, setRegionFilter] = useState("All Regions");
  const [topicFilter, setTopicFilter] = useState("All Topics");
  const [focusFilter, setFocusFilter] = useState("All Focus Areas");

  const filtered = caseStudies.filter((cs) => {
    if (regionFilter !== "All Regions" && cs.region !== regionFilter) return false;
    if (topicFilter !== "All Topics" && cs.topic !== topicFilter) return false;
    if (focusFilter !== "All Focus Areas" && cs.focus !== focusFilter) return false;
    return true;
  });

  function clearFilters() {
    setRegionFilter("All Regions");
    setTopicFilter("All Topics");
    setFocusFilter("All Focus Areas");
  }

  return (
    <>
      <CorporatePageHero
        breadcrumbs={[
          { label: "Home", href: "/corporate/us" },
          { label: "Insights" },
          { label: "Case Studies" },
        ]}
        title="Customer Success Stories"
        lede="See how organizations across the globe achieve measurable results using our solutions."
      >
        <div className="flex flex-wrap gap-[48px] mt-[32px]">
          {[
            { value: "55+", label: "Global Customers" },
            { value: "4M+", label: "Meters" },
            { value: "XX%", label: "Customer Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="block text-[36px] font-bold tracking-[-0.04em] text-navy leading-none">
                <span className="text-turquoise">{stat.value}</span>
              </span>
              <span className="block mt-[6px] text-xs font-bold tracking-[0.06em] uppercase text-fg2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-[20px] text-xs text-fg3 italic">
          Detailed case studies are in production.
        </p>
      </CorporatePageHero>

      <section
        className="py-[96px]"
        style={{
          background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="flex flex-wrap items-end gap-3 mb-[48px] p-[20px] bg-white border border-stroke1 rounded-xl">
            <div className="flex-1 min-w-[160px]">
              <label className="block text-xs font-medium text-fg3 mb-[6px]">Region</label>
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="w-full rounded-lg border border-stroke1 bg-white px-3 py-[9px] text-sm text-fg1 focus:outline-none focus:ring-2 focus:ring-turquoise/40"
              >
                {regions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[160px]">
              <label className="block text-xs font-medium text-fg3 mb-[6px]">Topic</label>
              <select
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
                className="w-full rounded-lg border border-stroke1 bg-white px-3 py-[9px] text-sm text-fg1 focus:outline-none focus:ring-2 focus:ring-turquoise/40"
              >
                {topics.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[160px]">
              <label className="block text-xs font-medium text-fg3 mb-[6px]">Focus Area</label>
              <select
                value={focusFilter}
                onChange={(e) => setFocusFilter(e.target.value)}
                className="w-full rounded-lg border border-stroke1 bg-white px-3 py-[9px] text-sm text-fg1 focus:outline-none focus:ring-2 focus:ring-turquoise/40"
              >
                {focusAreas.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
            <button
              onClick={clearFilters}
              className="px-4 py-[9px] rounded-lg text-sm font-medium text-fg2 border border-stroke1 hover:bg-bg2 transition-colors"
            >
              Clear
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {filtered.map((cs) => (
              <div
                key={cs.client}
                className="bg-white border border-stroke1 rounded-xl overflow-hidden flex flex-col"
              >
                <div className={`h-[160px] bg-gradient-to-br ${cs.gradient} flex items-center justify-center`}>
                  <span className="text-[20px] font-bold text-navy/60">{cs.client}</span>
                </div>
                <div className="p-[28px] flex flex-col flex-1">
                  <div className="flex flex-wrap gap-[6px] mb-[14px]">
                    {[cs.region, cs.topic, cs.focus].map((pill) => (
                      <span
                        key={pill}
                        className="inline-block px-[10px] py-[3px] rounded-full text-[11px] font-medium bg-bg2 text-fg2 border border-stroke1"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base font-bold tracking-[-0.02em] text-navy mb-[10px]">
                    {cs.title}
                  </h3>
                  <blockquote className="text-sm leading-[1.55] text-fg2 italic mb-[16px] flex-1">
                    &ldquo;{cs.quote}&rdquo;
                    <footer className="mt-[8px] text-xs not-italic font-medium text-fg1">
                      — {cs.quoteAuthor}, {cs.quoteRole}
                    </footer>
                  </blockquote>
                  <div className="flex gap-[20px] mb-[20px]">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <span className="block text-[20px] font-bold text-turquoise leading-none">
                          {m.value}
                        </span>
                        <span className="block text-[11px] text-fg3 mt-[2px]">{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={cs.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-navy no-underline hover:text-turquoise transition-colors"
                  >
                    Read case study
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-[64px]">
              <p className="text-lg text-fg2">No case studies match your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-[16px] text-sm font-medium text-turquoise hover:text-turquoise-hover transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
