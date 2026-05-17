import type { Metadata } from "next";
import Image from "next/image";
import { CorporatePageHero } from "@/components/corporate/page-hero";

export const metadata: Metadata = {
  title: "U.S. Leadership",
};

const leaders: {
  name: string;
  role: string;
  bio: string;
  photo?: string;
}[] = [
  {
    name: "Peter Weigand",
    role: "Chief Growth Officer",
    photo: "Peter Weigand.jpg",
    bio: "Joined Tally as Chief Growth Officer in 2026 to lead U.S. and Japan markets. Former CEO of four energy and technology companies, including one successful IPO. Recognized among PennWell\u2019s Top 50 Most Influential People in Energy, with extensive experience scaling businesses and driving growth across global energy and technology sectors.",
  },
  {
    name: "Raine Figaro",
    role: "Delivery Lead",
    photo: "Raine Figaro.jpg",
    bio: "20+ years of enterprise delivery experience spanning cloud migration, platform engineering, and large-scale program management. Previously held senior delivery and engineering roles at AWS, Capital One, Microsoft, and Verizon.",
  },
  {
    name: "TBD",
    role: "Sales Manager",
    bio: "Bio coming soon.",
  },
  {
    name: "Atsuyo Miller",
    role: "Director of Marketing",
    photo: "Atsuyo Miller.jpg",
    bio: "Joined Tally in 2026 as Director of Marketing. Former VP of Marketing with deep expertise in B2B technology and energy sectors, having held leadership roles at Microsoft and Toshiba. Brings a strong track record in brand strategy, demand generation, and global marketing operations.",
  },
  {
    name: "Chris Bates",
    role: "Product Manager Orion | Product & Client",
    photo: "Chris Bates.jpg",
    bio: "Joined the company in 2012 and has held various roles across the business. With 14+ years of experience in the energy and utilities sector, Chris brings deep domain knowledge to product management, focusing on client outcomes and platform evolution.",
  },
  {
    name: "TBD",
    role: "Sales & Marketing Coordinator",
    bio: "Bio coming soon.",
  },
];

export default function USLeadershipPage() {
  return (
    <>
      <CorporatePageHero
        breadcrumbs={[
          { label: "Home", href: "/corporate/us" },
          { label: "About" },
          { label: "U.S. Leadership" },
        ]}
        title="U.S. Leadership"
        lede="Leaders shaping growth and delivery of Tally+ across the United States."
      />

      <section
        className="py-[96px]"
        style={{ background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)" }}
      >
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px] inline-flex items-center gap-2">
            <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
            Meet the team
          </div>
          <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy mb-[20px]">
            U.S. leadership.
          </h2>
          <p className="text-lg leading-[1.55] text-fg2 max-w-[640px] mb-[48px]">
            Meet the U.S. leadership team. Additional roles and bios may be added as the team grows.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            {leaders.map((leader) => (
              <article
                key={`${leader.name}-${leader.role}`}
                className="bg-white border border-stroke1 rounded-xl p-[28px] flex flex-row items-start justify-between gap-[24px] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="m-0 mb-[4px] text-lg font-semibold text-navy tracking-tight leading-tight">
                    {leader.name}
                  </h3>
                  <p className="m-0 mb-[12px] text-xs font-medium text-fg2 uppercase tracking-[0.06em]">
                    {leader.role}
                  </p>
                  <p className="m-0 text-sm leading-[1.55] text-fg2">
                    {leader.bio}
                  </p>
                </div>
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden shrink-0 border border-stroke1 bg-bg2">
                  {leader.photo ? (
                    <Image
                      src={`/us/${leader.photo}`}
                      alt={`Portrait of ${leader.name}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover object-[center_top]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-fg3 text-2xl font-bold">
                      ?
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
