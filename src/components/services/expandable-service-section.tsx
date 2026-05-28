"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ExpandableDetails = {
  intro: string;
  capabilitiesHeading: string;
  capabilities: string[];
  outcomesHeading: string;
  outcomes: string[];
  secondaryGroups?: { heading: string; items: string[] }[];
};

type Props = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFirst?: boolean;
  altBg?: boolean;
  compact?: boolean;
  details: ExpandableDetails;
};

function PlainBulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-[14px] mb-0 pl-[1.2em] list-disc">
      {items.map((item) => (
        <li key={item} className="text-[20px] leading-[1.7] text-fg2">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ExpandableServiceSection({
  id,
  title,
  description,
  image,
  imageAlt,
  imageFirst = false,
  altBg,
  compact = false,
  details,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const expandedContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!expanded) return;
    expandedContentRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [expanded]);

  return (
    <section
      className={`${compact ? "py-[72px]" : "py-[96px]"} border-b border-stroke1 ${altBg ? "bg-bg2" : ""}`}
      aria-labelledby={id}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 ${
            compact ? "gap-[32px] lg:gap-[56px]" : "gap-[48px] lg:gap-[72px]"
          } items-center`}
        >
          <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
            <h2
              id={id}
              className="text-[30px] font-light leading-[1.25] tracking-[-0.02em] text-navy m-0"
            >
              {title}
            </h2>
            <p className="mt-[16px] text-[20px] leading-[1.7] text-fg2 m-0 max-w-[52ch]">
              {description}
            </p>

            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-[24px] inline-flex items-center gap-1 text-[20px] leading-[1.4] text-navy cursor-pointer hover:text-navy-dark transition-colors"
              aria-expanded={expanded}
              aria-controls={`${id}-expanded`}
            >
              <span>{expanded ? "\u9589\u3058\u308b" : "\u8a73\u7d30\u3092\u898b\u308b"}</span>
              <span
                className={`material-symbols-outlined text-[20px] transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
          </div>

          <div className={`order-first ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
            <div
              className={`relative ${compact ? "aspect-[16/8]" : "aspect-[16/9]"} w-full rounded-2xl overflow-hidden border border-stroke1 bg-bg2`}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                quality={95}
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {expanded && (
          <div
            id={`${id}-expanded`}
            ref={expandedContentRef}
            className="mt-[20px] pt-[20px] border-t border-stroke1 scroll-mt-[140px]"
          >
            <p className="text-[20px] leading-[1.7] text-fg2 m-0 w-full">{details.intro}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] mt-[24px]">
              <div>
                <h4 className="text-[30px] font-light leading-[1.25] tracking-[-0.02em] text-navy m-0 lg:whitespace-nowrap">
                  {details.capabilitiesHeading}
                </h4>
                <PlainBulletList items={details.capabilities} />
              </div>

              <div>
                <h4 className="text-[30px] font-light leading-[1.25] tracking-[-0.02em] text-navy m-0 lg:whitespace-nowrap">
                  {details.outcomesHeading}
                </h4>
                <PlainBulletList items={details.outcomes} />
              </div>
            </div>

            {details.secondaryGroups && details.secondaryGroups.length > 0 && (
              <div
                className={`grid grid-cols-1 ${
                  details.secondaryGroups.length > 1 ? "lg:grid-cols-2" : ""
                } gap-[32px] mt-[24px]`}
              >
                {details.secondaryGroups.map((group) => (
                  <div key={group.heading}>
                    <h4 className="text-[30px] font-light leading-[1.25] tracking-[-0.02em] text-navy m-0">
                      {group.heading}
                    </h4>
                    <PlainBulletList items={group.items} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
