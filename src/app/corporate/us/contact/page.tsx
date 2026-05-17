"use client";

import Link from "next/link";
import { CorporatePageHero } from "@/components/corporate/page-hero";

const offices = [
  { eyebrow: "Australia", city: "Melbourne", isHq: true, address: "11-13 Cubitt St, Cremorne, VIC 3121", email: "enquiries@tally-group.com" },
  { eyebrow: "New Zealand", city: "Auckland", address: "Level 11, 56 Cawley Street, Ellerslie, Auckland, 1051", email: "enquiries@tally-group.com" },
  { eyebrow: "North America", city: "Houston", address: "1450 Lake Robbins Drive, Suite 160, The Woodlands TX 77380", email: "retailenergy@tally-group.com" },
  { eyebrow: "Japan", city: "Tokyo", address: "Marunouchi Nijubashi Building, 2nd Floor, 3-2-2 Marunouchi, Chiyoda-ku, Tokyo 100-0005", email: "energy.zn@tally-group.com" },
  { eyebrow: "UAE", city: "Dubai", address: "Office 2402A, Tower A, Business Central Towers", email: "anuj.sahrawat@tally-group.com" },
  { eyebrow: "India", city: "Hyderabad", address: "Block 1, Cyber Pearl, Hitech City, Madhapur, Hyderabad 500081, Telangana", email: "enquiries@tally-group.com" },
];

interface Office {
  eyebrow: string;
  city: string;
  isHq?: boolean;
  address: string;
  email: string;
}

function OfficeCard({ office }: { office: Office }) {
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

export default function USContactPage() {
  return (
    <>
      <CorporatePageHero
        breadcrumbs={[
          { label: "Home", href: "/corporate/us" },
          { label: "Contact Us" },
        ]}
        title="Contact Us"
        lede="Get in touch with Tally+ United States."
      >
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

      {/* Contact Cards */}
      <section className="py-[96px] border-b border-stroke1">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            <article className="bg-white border border-stroke1 rounded-xl p-[28px]">
              <div className="w-[40px] h-[40px] rounded-lg bg-turquoise/10 flex items-center justify-center mb-[16px]">
                <span className="material-symbols-outlined text-[20px] text-turquoise">mail</span>
              </div>
              <h3 className="m-0 mb-[8px] text-lg font-semibold text-navy">Sales</h3>
              <p className="m-0 text-sm leading-[1.55] text-fg2 mb-[12px]">Get in touch with our sales team.</p>
              <Link
                href="mailto:retailenergy@tally-group.com"
                className="text-sm font-medium text-navy hover:text-turquoise transition-colors"
              >
                retailenergy@tally-group.com
              </Link>
            </article>

            <article className="bg-white border border-stroke1 rounded-xl p-[28px]">
              <div className="w-[40px] h-[40px] rounded-lg bg-turquoise/10 flex items-center justify-center mb-[16px]">
                <span className="material-symbols-outlined text-[20px] text-turquoise">support_agent</span>
              </div>
              <h3 className="m-0 mb-[8px] text-lg font-semibold text-navy">Support</h3>
              <p className="m-0 text-sm leading-[1.55] text-fg2 mb-[12px]">Reach our support team for assistance.</p>
              <Link
                href="mailto:enquiries@tally-group.com"
                className="text-sm font-medium text-navy hover:text-turquoise transition-colors"
              >
                enquiries@tally-group.com
              </Link>
            </article>

            <article className="bg-white border border-stroke1 rounded-xl p-[28px]">
              <div className="w-[40px] h-[40px] rounded-lg bg-turquoise/10 flex items-center justify-center mb-[16px]">
                <span className="material-symbols-outlined text-[20px] text-turquoise">play_circle</span>
              </div>
              <h3 className="m-0 mb-[8px] text-lg font-semibold text-navy">See It in Action</h3>
              <p className="m-0 text-sm leading-[1.55] text-fg2 mb-[12px]">Request a demo through our contact form.</p>
              <Link
                href="/corporate/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-turquoise transition-colors"
              >
                Go to contact form
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section
        className="py-[96px]"
        style={{ background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)" }}
      >
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px] inline-flex items-center gap-2">
            <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
            Global offices
          </div>
          <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy mb-[40px]">
            Our Offices
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {offices.map((office) => (
              <OfficeCard key={office.city} office={office} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
