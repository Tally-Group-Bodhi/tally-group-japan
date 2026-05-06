import type { Metadata } from "next";
import Link from "next/link";
import { CorporatePageHero } from "@/components/corporate/page-hero";

export const metadata: Metadata = {
  title: "Events",
};

const upcomingEvents = [
  {
    date: "May 19–21, 2026",
    title: "CEBA at SUMMIT 2026",
    location: "Seattle, WA",
    description:
      "Peter Weigand leads a roundtable discussion on Japan's deregulating energy market and emerging opportunities for North American retailers at the Clean Energy Buyers Alliance annual summit.",
    href: "https://ceba.swoogo.com/summit2026/home",
  },
  {
    date: "April 20–21, 2026",
    title: "EMC25",
    location: "Houston, TX",
    description:
      "The premier gathering for retail energy professionals. Meet the Tally+ team to discuss how modern billing platforms accelerate product velocity and reduce operational cost.",
    href: "https://energymarketingconferences.com/emc25-information/",
  },
  {
    date: "April 14–16, 2026",
    title: "IUCX Conference 2026",
    location: "Tampa, FL",
    description:
      "Exploring innovation across the utility customer experience lifecycle. Visit our booth to see live demos of Tally Glass AI and the Tally+ modular platform.",
    href: "https://www.iucx.org/conference-2026",
  },
];

export default function EventsPage() {
  return (
    <>
      <CorporatePageHero
        breadcrumbs={[
          { label: "Home", href: "/corporate/us" },
          { label: "Events" },
        ]}
        title="Events"
        lede="Join us at our upcoming conferences, webinars, and community events."
      />

      <section
        className="py-[96px]"
        style={{
          background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px] inline-flex items-center gap-2">
            <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
            Upcoming
          </div>
          <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy mb-[48px]">
            Upcoming Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white border border-stroke1 rounded-xl p-[28px] flex flex-col"
              >
                <p className="font-mono text-xs font-semibold text-turquoise mb-[12px]">
                  {event.date}
                </p>
                <h3 className="text-lg font-bold tracking-[-0.02em] text-navy mb-[8px]">
                  {event.title}
                </h3>
                <p className="text-sm font-medium text-fg3 mb-[12px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  {event.location}
                </p>
                <p className="text-sm leading-[1.55] text-fg2 mb-[24px] flex-1">
                  {event.description}
                </p>
                <a
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-turquoise text-navy hover:bg-turquoise-hover transition-all w-full"
                >
                  Learn More
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[96px] border-t border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8 text-center">
          <h2 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-navy mb-[12px]">
            Meet us
          </h2>
          <p className="text-lg leading-[1.55] text-fg2 max-w-[48ch] mx-auto mb-[28px]">
            We&rsquo;d love to meet you there. Contact us to schedule a meeting.
          </p>
          <Link
            href="/corporate/us/contact"
            className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
