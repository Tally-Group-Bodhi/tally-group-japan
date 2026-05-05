"use client";

import { useState } from "react";
import Link from "next/link";
import { CorporatePageHero } from "@/components/corporate/page-hero";

type MacroRegion = "apac" | "north-america" | "middle-east";

const filterButtons: { label: string; key: MacroRegion }[] = [
  { label: "Asia Pacific", key: "apac" },
  { label: "North America", key: "north-america" },
  { label: "Middle East", key: "middle-east" },
];

interface Office {
  city: string;
  address: string;
  email: string;
  isHq?: boolean;
}

interface OfficeRegion {
  id: string;
  heading: string;
  macroRegion: MacroRegion;
  subregions?: { label: string; offices: Office[] }[];
  offices?: Office[];
}

const regions: OfficeRegion[] = [
  {
    id: "au-nz",
    heading: "Australia / New Zealand",
    macroRegion: "apac",
    subregions: [
      {
        label: "Australia",
        offices: [
          {
            city: "Melbourne",
            address: "11-13 Cubitt St, Cremorne, VIC 3121",
            email: "enquiries@tally-group.com",
            isHq: true,
          },
          {
            city: "Brisbane",
            address: "Level 1, North Tower, 527 Gregory Terrace, Fortitude Valley, Queensland 4006",
            email: "enquiries@tally-group.com",
          },
        ],
      },
      {
        label: "New Zealand",
        offices: [
          {
            city: "Auckland",
            address: "Level 11, 56 Cawley Street, Ellerslie, Auckland, 1051",
            email: "enquiries@tally-group.com",
          },
        ],
      },
    ],
  },
  {
    id: "na",
    heading: "North America",
    macroRegion: "north-america",
    offices: [
      {
        city: "Houston",
        address: "1450 Lake Robbins Drive, Suite 160, The Woodlands TX 77380",
        email: "retailenergy@tally-group.com",
      },
    ],
  },
  {
    id: "jp",
    heading: "Japan",
    macroRegion: "apac",
    offices: [
      {
        city: "Tokyo",
        address: "Marunouchi Nijubashi Building, 2nd Floor, 3-2-2 Marunouchi, Chiyoda-ku, Tokyo 100-0005",
        email: "energy.zn@tally-group.com",
      },
    ],
  },
  {
    id: "uae",
    heading: "UAE",
    macroRegion: "middle-east",
    offices: [
      {
        city: "Dubai",
        address: "Office 2402A, Tower A, Business Central Towers",
        email: "anuj.sahrawat@tally-group.com",
      },
    ],
  },
  {
    id: "in",
    heading: "India",
    macroRegion: "apac",
    offices: [
      {
        city: "Hyderabad",
        address: "Block 1, Cyber Pearl, Hitech City, Madhapur, Hyderabad 500081, Telangana",
        email: "enquiries@tally-group.com",
      },
      {
        city: "Bangalore",
        address: 'No.112, 2nd Floor, "B" Block, 7th Mile Hosur Rd, Krishna Reddy Industrial Area, AKR Tech Park, Kudlu Gate Bengaluru, Karnataka 560068',
        email: "enquiries@tally-group.com",
      },
    ],
  },
];

function OfficeCard({ office }: { office: Office }) {
  return (
    <article className="bg-white border border-stroke1 rounded-xl p-[28px]">
      <h3 className="m-0 mb-[8px] text-lg font-semibold text-navy tracking-tight leading-snug">
        {office.city}
        {office.isHq && (
          <span className="inline-block ml-2 px-2 py-0.5 text-[10px] font-bold tracking-[0.06em] uppercase align-middle text-navy bg-turquoise rounded">
            HQ
          </span>
        )}
      </h3>
      <p className="m-0 mb-[12px] text-sm leading-[1.55] text-fg2">{office.address}</p>
      <p className="m-0 text-sm">
        <Link href={`mailto:${office.email}`} className="font-medium text-navy hover:text-turquoise transition-colors">
          {office.email}
        </Link>
      </p>
    </article>
  );
}

export default function OfficesPage() {
  const [activeFilter, setActiveFilter] = useState<MacroRegion>("apac");

  return (
    <>
      <CorporatePageHero
        breadcrumbs={[
          { label: "Home", href: "/corporate" },
          { label: "Global Offices" },
        ]}

        title="Global Offices"
        lede="Where our teams meet the world: Australia, New Zealand, the Americas, Japan, the Middle East, and India."
      />

      {/* Filter bar */}
      <section className="border-b border-stroke1 px-8 py-[20px]" style={{ background: "#F9F9FB" }}>
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center gap-[20px]">
          <p className="m-0 text-sm font-semibold text-navy">Region</p>
          <div className="flex flex-wrap gap-[8px]" role="group">
            {filterButtons.map((btn) => (
              <button
                key={btn.key}
                type="button"
                className={`appearance-none cursor-pointer font-medium text-sm px-4 py-[9px] rounded-lg border transition-all ${
                  activeFilter === btn.key
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-fg1 border-stroke1 hover:border-navy/30"
                }`}
                aria-pressed={activeFilter === btn.key}
                onClick={() => setActiveFilter(btn.key)}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Office listings */}
      <section
        className="py-[96px]"
        style={{ background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)" }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          {regions
            .filter((r) => r.macroRegion === activeFilter)
            .map((region) => (
              <section key={region.id} className="mb-[64px] last:mb-0">
                <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px] inline-flex items-center gap-2">
                  <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
                  {region.heading}
                </div>

                {region.subregions?.map((sub) => (
                  <div key={sub.label} className="mt-[24px]">
                    <p className="mb-[16px] text-xs font-bold tracking-[0.08em] uppercase text-fg2">
                      {sub.label}
                    </p>
                    <div className={`grid gap-[24px] ${sub.offices.length === 1 ? "grid-cols-1 max-w-[calc((100%-1.5rem)/2)]" : "grid-cols-1 md:grid-cols-2"}`}>
                      {sub.offices.map((office) => (
                        <OfficeCard key={office.city} office={office} />
                      ))}
                    </div>
                  </div>
                ))}

                {region.offices && (
                  <div className={`mt-[16px] grid gap-[24px] ${region.offices.length === 1 ? "grid-cols-1 max-w-[calc((100%-1.5rem)/2)]" : "grid-cols-1 md:grid-cols-2"}`}>
                    {region.offices.map((office) => (
                      <OfficeCard key={office.city} office={office} />
                    ))}
                  </div>
                )}
              </section>
            ))}
        </div>
      </section>
    </>
  );
}
