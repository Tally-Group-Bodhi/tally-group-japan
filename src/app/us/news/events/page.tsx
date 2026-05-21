import type { Metadata } from "next";
import { USCtaSection } from "@/components/us/cta-section";
import {
  EventsList,
  MeetInPersonSection,
  type EventItem,
} from "@/components/us/news/events-list";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join us at upcoming conferences, webinars, and community events.",
};

const events: EventItem[] = [
  {
    slug: "distributech-2026",
    date: "February 9–12, 2026",
    dateISO: "2026-02-09",
    title: "DISTRIBUTECH International 2026",
    location: "Dallas, TX",
    description:
      "The premier annual transmission and distribution event covering smart grid, AMI, asset management, and customer engagement — bringing together utilities, vendors, and consultants across the U.S. energy ecosystem.",
    href: "https://www.distributech.com/",
    external: true,
    tone: 1,
    icon: "bolt",
  },
  {
    slug: "cs-week-2026",
    date: "May 4–7, 2026",
    dateISO: "2026-05-04",
    title: "CS Week 2026",
    location: "Tampa, FL",
    description:
      "The largest customer-service and information-technology conference for the electric, gas, and water utility industries — focused on billing, customer experience, and operations.",
    href: "https://www.csweek.org/",
    external: true,
    tone: 3,
    icon: "hub",
  },
];

export default function USEventsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] pb-[56px] lg:pt-[160px] lg:pb-[80px] border-b border-stroke1"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <h1 className="text-[36px] lg:text-[56px] font-light leading-[1.1] tracking-[-0.025em] text-navy max-w-[26ch] m-0">
            Events
          </h1>
          <p className="mt-[20px] text-[17px] leading-[1.75] text-fg2 max-w-[60ch] m-0">
            Join us at upcoming conferences, webinars, and community events.
          </p>
        </div>
      </section>

      {/* Upcoming events grid */}
      <EventsList events={events} />

      {/* Meet in person prompt */}
      <MeetInPersonSection href="/contact" />

      {/* Final CTA */}
      <USCtaSection
        eyebrow="Next steps"
        title="Let's talk about how Tally+ can support your business."
        description="Reach out about operational challenges, market strategy, or platform-adoption plans."
      />
    </>
  );
}
