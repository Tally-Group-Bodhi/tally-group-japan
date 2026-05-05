import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticles } from "@/components/sections/blog-articles";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "The latest industry news, interviews, technologies, and resources from Tally Group.",
};

const posts = [
  {
    title: "Five-minute settlement: eighteen months on",
    excerpt:
      "What smaller retailers learned the hard way about 5MS — and the data architecture choices that separated the retailers who scaled from the ones who stalled.",
    date: "15 Apr 2026",
    slug: "five-minute-settlement",
    category: "Whitepaper",
    cta: "Read paper",
    thumb: "css-grid",
  },
  {
    title: "How Sumo re-platformed its contact centre in 90 days",
    excerpt:
      "A step-by-step look at the cutover from legacy agent desktop to Glass Vision — with the numbers on AHT, FCR and NPS that matter.",
    date: "02 Apr 2026",
    slug: "sumo-replatform",
    category: "Case study",
    cta: "Read case study",
    thumb: "css-agent",
  },
  {
    title: "Hardship & life-support: designing for the hardest moments",
    excerpt:
      "How we built hardship detection into every Tally surface — and why the AER's 2025 guidelines changed the way we think about product UX.",
    date: "20 Mar 2026",
    slug: "hardship-life-support",
    category: "Guide",
    cta: "Read guide",
    thumb: "css-compliance",
  },
  {
    title: "Disruption is the new normal",
    excerpt:
      "What's in store for the energy sector in 2023 - and beyond?",
    date: "January 9, 2023",
    slug: "disruption-is-the-new-normal",
    category: "Insights",
    cta: "Read article",
    image: "/blog/behavioural-demand-response.png",
  },
  {
    title: "Abstracted billing: how our tools can help energy retailers innovate",
    excerpt:
      "Want to experiment with new consumer products but unsure if your current system is up to the challenge? Here's how we can help.",
    date: "December 5, 2022",
    slug: "abstracted-billing",
    category: "Product Updates",
    cta: "Read article",
    image: "/blog/digitise-to-decarbonise.png",
  },
  {
    title: "Digitise to decarbonise: how to help your customers take climate action with a click",
    excerpt:
      "Zef Fugaz, Tally Group's Head of Product - Digital, explains how digital customer tools are transforming retail energy businesses.",
    date: "November 24, 2022",
    slug: "digitise-to-decarbonise",
    category: "Insights",
    cta: "Read article",
    image: "/blog/abstracted-billing.png",
  },
  {
    title: "Migration and modernisation: our partnership with Nama Group",
    excerpt:
      "Tally Group Middle East Vice-President, Anuj Sahrawat, takes a look at how Tally Group has helped transform Oman's energy sector.",
    date: "November 24, 2022",
    slug: "migration-and-modernisation",
    category: "Company News",
    cta: "Read article",
    image: "/blog/leadership-boost.png",
  },
  {
    title: "Leadership boost renews Tally Group's focus on excellence in customer service, tech delivery and product innovation",
    excerpt:
      "New executive leadership roles announced for Tally Group",
    date: "November 21, 2022",
    slug: "leadership-boost",
    category: "Company News",
    cta: "Read article",
    image: "/blog/migration-and-modernisation.png",
  },
  {
    title: "How behavioural demand response can help energy businesses thrive",
    excerpt:
      "Want to engage your customers and reduce load through peak events with simple, intuitive demand response tools? Here's how.",
    date: "November 1, 2022",
    slug: "behavioural-demand-response",
    category: "Insights",
    cta: "Read article",
    image: "/blog/disruption-is-the-new-normal.png",
  },
  {
    title: "The lowdown on load disaggregation: how Tally Group can help your customers save money on their power bills",
    excerpt:
      "Tally Group Data Scientist Afshin Khadangi explains how load disaggregation puts power back in the hands of your customers.",
    date: "September 22, 2022",
    slug: "load-disaggregation",
    category: "Product Updates",
    cta: "Read article",
    image: "/blog/load-disaggregation.png",
  },
  {
    title: "How to leverage data, systems and digital CX tools to empower customers and drive down costs",
    excerpt:
      "Tally Group Senior Vice-President (North America) Jennifer Moore explains how investing in digital-first customer experience strategy can help ener...",
    date: "September 12, 2022",
    slug: "leverage-data-systems",
    category: "Insights",
    cta: "Read article",
    image: "/blog/leverage-data-systems.png",
  },
  {
    title: "Global brand rollout for Tally Group",
    excerpt:
      "The energy sector is evolving fast. So is our business.",
    date: "May 24, 2022",
    slug: "global-brand-rollout",
    category: "Company News",
    cta: "Read article",
    image: "/blog/global-brand-rollout.png",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px]"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <span className="inline-flex items-center gap-2 px-3 py-[5px] bg-white border border-stroke1 rounded-full text-xs font-medium text-fg2 uppercase tracking-[0.08em]">
            <span className="w-[6px] h-[6px] rounded-full bg-turquoise" />
            Insights
          </span>

          <h1 className="mt-[24px] text-[44px] lg:text-[64px] font-extrabold leading-[1.04] tracking-[-0.025em] text-navy">
            News &amp; insights.
          </h1>

          <p className="mt-[20px] text-[19px] leading-[1.55] text-fg2 max-w-[60ch]">
            The latest industry news, whitepapers, case studies and resources from the Tally Group team.
          </p>

          <div className="flex gap-3 mt-[32px]">
            <Link
              href="#articles"
              className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all"
            >
              Browse articles{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <BlogArticles posts={posts} />

      {/* CTA */}
      <section className="relative overflow-hidden py-[96px] bg-navy text-white">
        <div
          className="absolute -left-[100px] -bottom-[100px] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,210,162,0.18), transparent 60%)",
          }}
        />
        <div className="relative max-w-[1240px] mx-auto px-8 text-center">
          <h2 className="text-[30px] lg:text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            Want to learn more about Tally Group?
          </h2>
          <p className="mt-[16px] text-lg text-white/75 max-w-[50ch] mx-auto leading-[1.55]">
            Book a demo, ask a question, or explore our platform.
          </p>
          <div className="mt-[32px]">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all shadow-sm"
            >
              Request a demo{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
