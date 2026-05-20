"use client";

import { useState } from "react";
import { officeRegions } from "@/data/office-regions";
import { OfficeAddressBlock } from "@/components/sections/office-address-block";

type OurLocationsSectionProps = {
  defaultRegionId?: string;
  eyebrow?: string;
  title?: string;
  description?: string | null;
  language?: "en" | "ja";
};

export function OurLocationsSection({
  defaultRegionId,
  eyebrow = "Global presence",
  title = "Our locations",
  description = "Tally Group operates across six regions. Select a region to view our local offices and contact details.",
  language = "en",
}: OurLocationsSectionProps = {}) {
  const initialRegionId =
    officeRegions.find((region) => region.id === defaultRegionId)?.id ?? officeRegions[0].id;
  const [activeRegionId, setActiveRegionId] = useState(initialRegionId);
  const activeRegion = officeRegions.find((region) => region.id === activeRegionId) ?? officeRegions[0];

  return (
    <section
      id="our-locations"
      className="py-[96px] border-b border-stroke1"
      style={{ background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)" }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[640px] mb-[40px]">
          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
            <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
            {eyebrow}
          </div>
          <h2 className="text-[30px] lg:text-[48px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
            {title}
          </h2>
          {description ? (
            <p className="mt-[16px] text-[17px] leading-[1.55] text-fg2">{description}</p>
          ) : null}
        </div>

        <div
          className="mb-[32px] flex flex-wrap gap-2"
          role="tablist"
          aria-label="Office regions"
        >
          {officeRegions.map((region) => {
            const isActive = region.id === activeRegionId;
            const regionLabel = language === "ja" && region.nameJa ? region.nameJa : region.name;
            return (
              <button
                key={region.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`region-panel-${region.id}`}
                id={`region-tab-${region.id}`}
                onClick={() => setActiveRegionId(region.id)}
                className={`px-4 py-[7px] rounded-lg text-[13px] font-medium transition-all border ${
                  isActive
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-fg2 border-stroke1 hover:bg-bg3"
                }`}
              >
                {regionLabel}
              </button>
            );
          })}
        </div>

        <div
          id={`region-panel-${activeRegion.id}`}
          role="tabpanel"
          aria-labelledby={`region-tab-${activeRegion.id}`}
          className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]"
        >
          {activeRegion.offices.map((office) => (
            <article
              key={office.city}
              className="bg-white border border-stroke1 rounded-xl p-[24px]"
            >
              <div>
                <OfficeAddressBlock office={office} language={language} />
                <a
                  href={`mailto:${office.email}`}
                  className="mt-4 block text-sm font-medium text-navy hover:text-turquoise transition-colors"
                >
                  {office.email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
