export interface InsightPost {
  title: string;
  excerpt: string;
  date: string;
  /** Sortable ISO timestamp used to order posts by recency. */
  publishedAt: string;
  slug: string;
  category: string;
  cta: string;
  image?: string;
  thumb?: string;
}

export const insightPosts: InsightPost[] = [
  {
    title: "Five-minute settlement: eighteen months on",
    excerpt:
      "What smaller retailers learned the hard way about 5MS — and the data architecture choices that separated the retailers who scaled from the ones who stalled.",
    date: "15 Apr 2026",
    publishedAt: "2026-04-15",
    slug: "five-minute-settlement",
    category: "Whitepaper",
    cta: "Read paper",
    image: "/blog/leverage-data-systems.png",
  },
  {
    title: "How Sumo re-platformed its contact centre in 90 days",
    excerpt:
      "A step-by-step look at the cutover from legacy agent desktop to Glass Vision — with the numbers on AHT, FCR and NPS that matter.",
    date: "02 Apr 2026",
    publishedAt: "2026-04-02",
    slug: "sumo-replatform",
    category: "Case study",
    cta: "Read case study",
    image: "/blog/migration-and-modernisation.png",
  },
  {
    title: "Hardship & life-support: designing for the hardest moments",
    excerpt:
      "How we built hardship detection into every Tally surface — and why the AER's 2025 guidelines changed the way we think about product UX.",
    date: "20 Mar 2026",
    publishedAt: "2026-03-20",
    slug: "hardship-life-support",
    category: "Guide",
    cta: "Read guide",
    image: "/blog/digitise-to-decarbonise.png",
  },
  {
    title: "Disruption is the new normal",
    excerpt: "What's in store for the energy sector in 2023 - and beyond?",
    date: "January 9, 2023",
    publishedAt: "2023-01-09",
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
    publishedAt: "2022-12-05",
    slug: "abstracted-billing",
    category: "Product Updates",
    cta: "Read article",
    image: "/blog/digitise-to-decarbonise.png",
  },
  {
    title:
      "Digitise to decarbonise: how to help your customers take climate action with a click",
    excerpt:
      "Zef Fugaz, Tally Group's Head of Product - Digital, explains how digital customer tools are transforming retail energy businesses.",
    date: "November 24, 2022",
    publishedAt: "2022-11-24",
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
    publishedAt: "2022-11-24",
    slug: "migration-and-modernisation",
    category: "Company News",
    cta: "Read article",
    image: "/blog/leadership-boost.png",
  },
  {
    title:
      "Leadership boost renews Tally Group's focus on excellence in customer service, tech delivery and product innovation",
    excerpt: "New executive leadership roles announced for Tally Group",
    date: "November 21, 2022",
    publishedAt: "2022-11-21",
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
    publishedAt: "2022-11-01",
    slug: "behavioural-demand-response",
    category: "Insights",
    cta: "Read article",
    image: "/blog/disruption-is-the-new-normal.png",
  },
  {
    title:
      "The lowdown on load disaggregation: how Tally Group can help your customers save money on their power bills",
    excerpt:
      "Tally Group Data Scientist Afshin Khadangi explains how load disaggregation puts power back in the hands of your customers.",
    date: "September 22, 2022",
    publishedAt: "2022-09-22",
    slug: "load-disaggregation",
    category: "Product Updates",
    cta: "Read article",
    image: "/blog/load-disaggregation.png",
  },
  {
    title:
      "How to leverage data, systems and digital CX tools to empower customers and drive down costs",
    excerpt:
      "Tally Group Senior Vice-President (North America) Jennifer Moore explains how investing in digital-first customer experience strategy can help ener...",
    date: "September 12, 2022",
    publishedAt: "2022-09-12",
    slug: "leverage-data-systems",
    category: "Insights",
    cta: "Read article",
    image: "/blog/leverage-data-systems.png",
  },
  {
    title: "Global brand rollout for Tally Group",
    excerpt: "The energy sector is evolving fast. So is our business.",
    date: "May 24, 2022",
    publishedAt: "2022-05-24",
    slug: "global-brand-rollout",
    category: "Company News",
    cta: "Read article",
    image: "/blog/global-brand-rollout.png",
  },
];

export function getLatestInsights(limit: number): InsightPost[] {
  return [...insightPosts]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}
