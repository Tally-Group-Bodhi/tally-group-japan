"use client";

import { useState } from "react";
import Link from "next/link";
import { CorporatePageHero } from "@/components/corporate/page-hero";

type ContactTarget = "tally" | "skipping-stone";

const tallyOffices = [
  { eyebrow: "Australia", city: "Melbourne", isHq: true, address: "11-13 Cubitt St, Cremorne, VIC 3121", email: "enquiries@tally-group.com" },
  { eyebrow: "New Zealand", city: "Auckland", address: "Level 11, 56 Cawley Street, Ellerslie, Auckland, 1051", email: "enquiries@tally-group.com" },
  { eyebrow: "North America", city: "Houston", address: "1450 Lake Robbins Drive, Suite 160, The Woodlands TX 77380", email: "retailenergy@tally-group.com" },
  { eyebrow: "Japan", city: "Tokyo", address: "Marunouchi Nijubashi Building, 2nd Floor, 3-2-2 Marunouchi, Chiyoda-ku, Tokyo 100-0005", email: "energy.zn@tally-group.com" },
  { eyebrow: "UAE", city: "Dubai", address: "Office 2402A, Tower A, Business Central Towers", email: "anuj.sahrawat@tally-group.com" },
  { eyebrow: "India", city: "Hyderabad", address: "Block 1, Cyber Pearl, Hitech City, Madhapur, Hyderabad 500081, Telangana", email: "enquiries@tally-group.com" },
];

const ssOffices = [
  { eyebrow: "United States", city: "Boston", address: "83 Pine Street, Suite 201, West Peabody, MA 01960", email: "info1@skippingstone.com" },
  { eyebrow: "Japan", city: "Tokyo", address: "The Energy Center, 4th Floor, 2-20-1 Nishi-Shimbashi, Minato-ku, Tokyo 105-0003", email: "Japan_info@skippingstone.com" },
];

interface ContactOffice {
  eyebrow: string;
  city: string;
  isHq?: boolean;
  address: string;
  email: string;
}

function ContactCard({ office }: { office: ContactOffice }) {
  return (
    <article className="bg-white border border-stroke1 rounded-xl p-[28px]">
      <p className="m-0 mb-[4px] text-xs font-bold tracking-[0.08em] uppercase text-fg2">
        {office.eyebrow}
      </p>
      <h4 className="m-0 mb-[8px] text-lg font-semibold text-navy tracking-tight leading-snug">
        {office.city}
        {office.isHq && (
          <span className="inline-block ml-2 px-2 py-0.5 text-[10px] font-bold tracking-[0.06em] uppercase align-middle text-navy bg-turquoise rounded">
            HQ
          </span>
        )}
      </h4>
      <p className="m-0 mb-[8px] text-sm leading-[1.55] text-fg2">{office.address}</p>
      <p className="m-0 text-sm">
        <Link href={`mailto:${office.email}`} className="font-medium text-navy hover:text-turquoise transition-colors">
          {office.email}
        </Link>
      </p>
    </article>
  );
}

export default function ContactPage() {
  const [activePanel, setActivePanel] = useState<ContactTarget>("tally");

  return (
    <>
      <CorporatePageHero
        breadcrumbs={[
          { label: "Home", href: "/corporate" },
          { label: "Contact Us" },
        ]}

        title="Contact Us"
        lede="Tally Group and Skipping Stone office contacts."
      >
        {/* LinkedIn strip */}
        <Link
          href="https://www.linkedin.com/company/tally-group"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[28px] flex items-center justify-between gap-[16px] md:gap-[20px] max-w-[460px] p-[16px] md:p-[20px] rounded-xl no-underline bg-white border border-stroke1 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:border-navy/20"
        >
          <div className="flex items-start gap-[12px] min-w-0">
            <span className="shrink-0 w-[22px] h-[22px] mt-0.5 text-navy">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full" aria-hidden="true">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </span>
            <div>
              <p className="m-0 text-sm font-bold text-navy tracking-tight leading-tight">Follow Us on LinkedIn</p>
              <p className="m-0 mt-[4px] text-xs leading-snug text-fg2">Stay updated with our latest news and insights.</p>
            </div>
          </div>
          <span className="shrink-0 inline-flex items-center gap-[6px] px-[14px] py-[8px] text-xs font-semibold text-white bg-navy rounded-lg leading-tight">
            Visit
            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </span>
        </Link>
      </CorporatePageHero>

      {/* Company toggle */}
      <section className="border-b border-stroke1 px-8 py-[24px]" style={{ background: "#F9F9FB" }}>
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center gap-[16px]">
          <p className="m-0 text-sm font-semibold text-navy">Choose a company of interest</p>
          <div className="flex flex-wrap gap-[8px]">
            <button
              type="button"
              className={`appearance-none cursor-pointer font-medium text-sm px-5 py-[9px] rounded-lg border transition-all ${
                activePanel === "tally"
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-fg1 border-stroke1 hover:border-navy/30"
              }`}
              aria-pressed={activePanel === "tally"}
              onClick={() => setActivePanel("tally")}
            >
              Tally Group
            </button>
            <button
              type="button"
              className={`appearance-none cursor-pointer font-medium text-sm px-5 py-[9px] rounded-lg border transition-all ${
                activePanel === "skipping-stone"
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-fg1 border-stroke1 hover:border-navy/30"
              }`}
              aria-pressed={activePanel === "skipping-stone"}
              onClick={() => setActivePanel("skipping-stone")}
            >
              Skipping Stone
            </button>
          </div>
        </div>
      </section>

      {/* Contact panels */}
      <section
        className="py-[96px]"
        style={{ background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)" }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          {activePanel === "tally" && (
            <div className="max-w-[800px]">
              <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px] inline-flex items-center gap-2">
                <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
                Tally Group offices
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                {tallyOffices.map((office) => (
                  <ContactCard key={office.city} office={office} />
                ))}
              </div>
            </div>
          )}

          {activePanel === "skipping-stone" && (
            <div className="max-w-[800px]">
              <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px] inline-flex items-center gap-2">
                <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
                Skipping Stone offices
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                {ssOffices.map((office) => (
                  <ContactCard key={`${office.city}-${office.eyebrow}`} office={office} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
