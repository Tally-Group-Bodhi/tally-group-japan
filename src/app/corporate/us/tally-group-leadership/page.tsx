import type { Metadata } from "next";
import Image from "next/image";
import { CorporatePageHero } from "@/components/corporate/page-hero";

export const metadata: Metadata = {
  title: "Tally Group Leadership",
};

const leaders = [
  {
    name: "Andrew Duncan",
    role: "Chief Executive Officer",
    bio: "Founder and Chairman of Tally. Appointed CEO in 2022 after merger of Tally Group. 20+ years experience in the Australian energy market. Andrew founded and sold Serviceworks to Computershare in 2011 (first bureau provider to Australian deregulated energy market). Leading Founder and Investor in Australian Energy market.",
    photo: "Andrew.jpg",
  },
  {
    name: "Travis Lehman",
    role: "Chief Operational Officer",
    bio: "Joined Agility as Transformation Director in 2019 to lead the M&A and Value Creation Programme. Previous Chief Commercial Officer with 8+ years at Deloitte Consulting\u2019s M&A practice in San Francisco. Holds Stanford MBA.",
    photo: "Travis Lehman.jpg",
  },
  {
    name: "Janet Le",
    role: "Chief Commercial Officer",
    bio: "Joined as Chief Commercial Officer in 2025. Experienced leader with 14+ years in commercial roles across the tech sector, including Compass Education and SEEK Limited, leading global expansion, M&A, and portfolio management. Began career at PwC in Audit, with a focus on growth, transformation, and value creation.",
    photo: "Janet Le.jpg",
  },
  {
    name: "Eric Yilmaz",
    role: "Chief Technology Officer",
    bio: "Joined as Chief Technology Officer in 2023. Previous CTO of Sorted and EY Innovation. 20+ years of experience across strategy, digital, infrastructure, operations and product development.",
    photo: "Eric Yilmaz.jpg",
  },
  {
    name: "Roger Barnes",
    role: "Global Chief Product Officer",
    bio: "President for AU/NZ at Tally Group before being appointed Global Chief Product Officer. 15+ years of experience in Energy and Utilities markets leading digital and product innovation, including CEO of Billcap and Programme Manager at Red Energy, Lumo Energy & BT Group.",
    photo: "Roger Barnes.jpg",
  },
  {
    name: "Peter Weigand",
    role: "Chief Growth Officer",
    bio: "Joined Tally as Chief Growth Officer in 2026 to lead U.S. and Japan markets. Former CEO of four energy and technology companies, including one successful IPO. Recognized among PennWell\u2019s Top 50 Most Influential People in Energy, with extensive experience scaling businesses and driving growth across global energy and technology sectors.",
    photo: "Peter Weigand.jpg",
  },
  {
    name: "Tim Szakacs",
    role: "EGM & President \u2013 AU/NZ",
    bio: "Joined as Global Chief Product Officer in 2021 before being appointed Executive General Manager and President, AU/NZ. An experienced Executive and Company Director with significant exposure to international Energy Markets.",
    photo: "Tim Szakacs.jpg",
  },
];

export default function TallyGroupLeadershipPage() {
  return (
    <>
      <CorporatePageHero
        breadcrumbs={[
          { label: "Home", href: "/corporate/us" },
          { label: "About" },
          { label: "Tally Group Leadership" },
        ]}
        title="Tally Group Leadership"
        lede="A global leadership team focused on delivering long-term value."
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
          <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy mb-[48px]">
            Tally Group leadership.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            {leaders.map((leader) => (
              <article
                key={leader.name}
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
                  <Image
                    src={`/us/${leader.photo}`}
                    alt={`Portrait of ${leader.name}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover object-[center_top]"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
