import type { Metadata } from "next";
import Link from "next/link";
import { MarketingLink } from "@/components/marketing/marketing-link";
import { PositionFilter } from "@/components/sections/position-filter";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Tally Group and be part of a dynamic team transforming energy retail technology. Explore open positions across Australia, New Zealand, India, Japan, Dubai and the US.",
};

const cultureCards = [
  {
    icon: "groups",
    title: "Who we are",
    description:
      "We're a global business with 300+ high-performing people working in Australia, New Zealand, India, Japan, Dubai and the US. Our team members come from many different backgrounds and everyone brings a unique set of skills and experiences to the table.",
  },
  {
    icon: "visibility",
    title: "Our vision and values",
    description:
      "We believe in building better technology that benefits people and the planet. We're guided by our shared values: Quality, Integrity, Collaboration and Ownership. We take our work seriously, rather than ourselves.",
  },
  {
    icon: "trending_up",
    title: "Grow with us",
    description:
      "Our people power real change in the world and working with us means using your skills to have a positive impact. We offer a supportive and flexible environment where you'll be able to grow and achieve your personal career goals.",
  },
];

const perks = [
  { icon: "bolt", text: "Work at the forefront of utility tech" },
  { icon: "public", text: "Global locations across 6 countries" },
  { icon: "workspace_premium", text: "Proven career pathways" },
  { icon: "menu_book", text: "Tailored learning and development" },
  { icon: "work", text: "Flexible and remote working" },
  { icon: "payments", text: "Competitive salaries and benefits" },
];

const positions = [
  { title: "Customer Service Representative", department: "Design", location: "Brisbane, Australia", type: "Full-time" },
  { title: "Senior Developer", department: "Software Development", location: "Remote", type: "Full-time" },
  { title: "Customer Success Manager", department: "Customer Success", location: "Remote", type: "Full-time" },
  { title: "Sales Executive", department: "Sales", location: "Remote", type: "Full-time" },
  { title: "SEO Marketing Manager", department: "Marketing", location: "Remote", type: "Full-time" },
];

const locations = ["All locations", "Australia", "New Zealand", "USA", "Japan", "UAE", "India"];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stroke1 pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px]" style={{
        background: "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)"
      }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <h1 className="text-[44px] lg:text-[64px] font-light leading-[1.04] tracking-[-0.025em] text-navy">
            Join our team.
          </h1>

          <p className="mt-[20px] text-[19px] leading-[1.55] text-fg2 max-w-[60ch]">
            Be part of a dynamic and innovative environment where your skills and talents can flourish. We&apos;re committed to fostering growth and development for everyone.
          </p>

          <div className="flex gap-3 mt-[32px]">
            <Link href="#positions" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all">
              View open positions <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <Link href="#culture" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-transparent text-navy border border-stroke1 hover:bg-bg3 transition-all">
              Life at Tally
            </Link>
          </div>
        </div>
      </section>

      {/* Culture Cards */}
      <section id="culture" className="py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Life at Tally
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
              Make a real impact in the energy sector.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {cultureCards.map((card) => (
              <div key={card.title} className="bg-bg2 rounded-xl p-[28px] flex flex-col gap-[14px]">
                <div className="w-10 h-10 rounded-[10px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
                  <span className="material-symbols-outlined text-[22px]">{card.icon}</span>
                </div>
                <h3 className="text-xl font-semibold leading-[1.3] tracking-[-0.01em] text-fg1">{card.title}</h3>
                <p className="text-sm leading-[1.55] text-fg2 m-0">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-[96px] border-b border-stroke1 bg-bg2">
        <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[48px] lg:gap-[72px] items-start">
          <div>
            <div className="text-xs font-medium text-turquoise uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Why Tally
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
              A workplace where you&apos;ll thrive.
            </h2>
            <p className="mt-[20px] text-[17px] leading-[1.55] text-fg2 max-w-[50ch]">
              We offer a comprehensive suite of benefits designed to support your career growth, well-being and work-life balance.
            </p>
          </div>

          <div className="bg-white rounded-xl p-[28px] border border-stroke1">
            <h3 className="text-lg font-semibold text-navy mb-[24px]">What we offer</h3>
            <ul className="flex flex-col gap-[16px]">
              {perks.map((perk) => (
                <li key={perk.text} className="flex items-center gap-[12px]">
                  <div className="w-9 h-9 shrink-0 rounded-[8px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
                    <span className="material-symbols-outlined text-[18px]">{perk.icon}</span>
                  </div>
                  <span className="text-sm text-fg2 leading-[1.4]">{perk.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Open positions
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
              Join us and our growing team.
            </h2>
          </div>

          <PositionFilter positions={positions} locations={locations} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-[96px] bg-navy text-white">
        <div className="absolute -left-[100px] -bottom-[100px] w-[500px] h-[500px] rounded-full" style={{
          background: "radial-gradient(circle, rgba(0,210,162,0.18), transparent 60%)"
        }} />
        <div className="relative max-w-[1240px] mx-auto px-8 text-center">
          <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-white">
            Don&apos;t see the right role? Get in touch.
          </h2>
          <p className="mt-[16px] text-lg text-white/75 max-w-[50ch] mx-auto leading-[1.55]">
            We&apos;re always looking for talented people. Send us your CV and we&apos;ll keep you in mind for future opportunities.
          </p>
          <div className="mt-[32px]">
            <MarketingLink href="/contact" className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all shadow-sm">
              Contact us <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </MarketingLink>
          </div>
        </div>
      </section>
    </>
  );
}
