import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tally is a world-leading cloud-native software platform and ecosystem enabling decarbonisation, digitisation and decentralisation for energy retailers globally.",
};

const storyCards = [
  {
    icon: "rocket_launch",
    title: "Revolutionizing Energy Solutions",
    description:
      "At Tally Group, we put our energy into building world-leading utility technology. We're transforming how people power their homes and businesses by reinventing how energy retailers operate.",
  },
  {
    icon: "cloud",
    title: "Cloud-Native SaaS Provider",
    description:
      "As a cloud-native SaaS provider with extensive experience and clients worldwide, we're well-placed to help businesses thrive in a rapidly changing market.",
  },
  {
    icon: "public",
    title: "Empowering Customers Globally",
    description:
      "We offer a comprehensive suite of innovative billing, digital and analytics solutions designed to meet globally diverse market and regulatory requirements, empower customers and reduce cost-to-serve.",
  },
  {
    icon: "lightbulb",
    title: "Innovation in Changing Landscapes",
    description:
      "We're committed to innovating in a competitive landscape amidst climate change, grid transformation, and new technologies despite constraints from legacy tech and lackluster service.",
  },
  {
    icon: "handshake",
    title: "Uniting Energy Solutions Worldwide",
    description:
      "Tally Group formed in 2021, following the merger of leading cloud-based billing solutions provider Agility CIS and fast-growing energy retail SaaS software provider Tally.",
  },
  {
    icon: "language",
    title: "Global Reach and Impact",
    description:
      "We combine global outlook with local focus, and our team operates from locations in Australia, New Zealand, Japan, India, Dubai and the United States.",
  },
];

const utilityCommitments = [
  { icon: "bar_chart", text: "Accurate, scalable billing" },
  { icon: "trending_down", text: "Reduced cost to serve" },
  { icon: "lightbulb", text: "Fast, cost-effective innovation" },
  { icon: "verified_user", text: "Trusted implementation partner" },
  { icon: "group", text: "Reduced churn, better engagement" },
  { icon: "lock", text: "Best practice in data and tech" },
];

const peopleCommitments = [
  { icon: "bolt", text: "Work at the forefront of utility tech" },
  { icon: "public", text: "Global locations" },
  { icon: "workspace_premium", text: "Proven career pathways" },
  { icon: "menu_book", text: "Tailored learning and development" },
  { icon: "work", text: "Flexible working" },
  { icon: "payments", text: "Competitive salaries" },
];

const consumerCommitments = [
  { icon: "favorite", text: "Personalised experience" },
  { icon: "chat", text: "Straightforward communications" },
  { icon: "smartphone", text: "Multi-channel support" },
  { icon: "target", text: "Digital-first strategy" },
  { icon: "apartment", text: "Simplify market participation" },
  { icon: "location_on", text: "Build trust with utility providers" },
];

const aboutStats = [
  { num: "110", unit: "+", label: "Clients globally" },
  { num: "450", unit: "+", label: "Global staff" },
  { num: "4", unit: " mil +", label: "Meter points" },
  { num: "200", unit: "+", label: "5-star reviews" },
];

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
    name: "Tim Szakacs",
    role: "EGM & President \u2013 AU/NZ",
    bio: "Joined as Global Chief Product Officer in 2021 before being appointed Executive General Manager and President, AU/NZ. An experienced Executive and Company Director with significant exposure to international Energy Markets.",
    photo: "Tim Szakacs.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stroke1 pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px]" style={{
        background: "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)"
      }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <span className="inline-flex items-center gap-2 px-3 py-[5px] bg-white border border-stroke1 rounded-full text-xs font-medium text-fg2 uppercase tracking-[0.08em]">
            <span className="w-[6px] h-[6px] rounded-full bg-turquoise" />
            About us
          </span>

          <h1 className="mt-[24px] text-[44px] lg:text-[64px] font-extrabold leading-[1.04] tracking-[-0.025em] text-navy">
            Intelligent utilitech<br />solutions.
          </h1>

          <p className="mt-[20px] text-[19px] leading-[1.55] text-fg2 max-w-[60ch]">
            A world-leading cloud-native software platform and ecosystem enabling decarbonisation, digitisation and decentralisation for energy retailers globally.
          </p>

          <div className="flex gap-3 mt-[32px]">
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all">
              Request a demo <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <Link href="#story" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-transparent text-navy border border-stroke1 hover:bg-bg3 transition-all">
              Our story
            </Link>
          </div>
        </div>
      </section>

      {/* Story Cards */}
      <section id="story" className="py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Our story
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
              Energizing innovation in utility technology and energy retail operations.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {storyCards.map((card) => (
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

      {/* Metrics */}
      <section className="py-[96px] border-b border-stroke1 bg-bg2">
        <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[48px] lg:gap-[72px] items-center">
          <div>
            <div className="text-xs font-medium text-turquoise uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Unparalleled breadth of experience
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
              More new energy expertise than any other provider in Australia.
            </h2>

            <div className="grid grid-cols-2 gap-x-[48px] gap-y-[36px] mt-[48px]">
              {aboutStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-[40px] lg:text-[48px] font-bold tracking-[-0.03em] leading-none tabular-nums text-turquoise">
                    {stat.num}{stat.unit}
                  </div>
                  <div className="mt-[8px] text-sm font-medium text-fg1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[640/520] rounded-2xl overflow-hidden">
            <Image
              src="/about-metrics.png"
              alt="Energy infrastructure"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-[96px] border-b border-stroke1" style={{
        background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)"
      }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Meet the team
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
              Meet our management team.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="bg-white border border-stroke1 rounded-xl p-[24px] flex flex-col gap-[16px] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-center gap-[14px]">
                  <div className="w-[88px] h-[88px] rounded-full overflow-hidden shrink-0 border border-stroke1 bg-bg2">
                    <Image
                      src={`/corporate/${leader.photo}`}
                      alt={`Portrait of ${leader.name}`}
                      width={88}
                      height={88}
                      className="w-full h-full object-cover object-[center_top]"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="m-0 mb-[2px] text-base font-semibold text-navy tracking-tight leading-tight">
                      {leader.name}
                    </h3>
                    <p className="m-0 text-sm text-fg2">
                      {leader.role}
                    </p>
                  </div>
                </div>
                <p className="m-0 text-sm leading-[1.55] text-fg2">
                  {leader.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="max-w-[720px] mb-[48px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              What our partners say
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
              Operators, not slides.
            </h2>
          </div>

          <div className="bg-bg2 rounded-xl p-[32px] max-w-[800px] flex flex-col gap-[20px]">
            <blockquote className="m-0 p-0 text-xl leading-[1.5] text-fg1 tracking-[-0.005em] font-medium">
              <span className="text-turquoise text-[40px] font-bold leading-none block mb-2">&ldquo;</span>
              They make the complex simple and helped us achieve better business outcomes.
            </blockquote>
            <div className="flex items-center gap-[14px] mt-auto">
              <div className="w-11 h-11 rounded-full text-white text-sm font-semibold grid place-items-center" style={{
                background: "linear-gradient(135deg, #2C365D, #1E2840)"
              }}>
                DH
              </div>
              <div>
                <div className="text-sm font-semibold text-fg1">David Hayes</div>
                <div className="text-[13px] text-fg2">CEO, Next Business Energy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-[96px] border-b border-stroke1" style={{
        background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)"
      }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Our commitments
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
              What we stand for.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
            <CommitmentColumn title="Our commitment to utilities" items={utilityCommitments} />
            <CommitmentColumn title="Our commitment to our people" items={peopleCommitments} />
            <CommitmentColumn title="Our commitment to consumers" items={consumerCommitments} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-[96px] bg-navy text-white">
        <div className="absolute -left-[100px] -bottom-[100px] w-[500px] h-[500px] rounded-full" style={{
          background: "radial-gradient(circle, rgba(0,210,162,0.18), transparent 60%)"
        }} />
        <div className="relative max-w-[1240px] mx-auto px-8 text-center">
          <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-white">
            Find out how Tally Group can help your business.
          </h2>
          <p className="mt-[16px] text-lg text-white/75 max-w-[50ch] mx-auto leading-[1.55]">
            Book a demo, ask a question, or just say hello.
          </p>
          <div className="mt-[32px]">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all shadow-sm">
              Request a demo <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CommitmentColumn({
  title,
  items,
}: {
  title: string;
  items: { icon: string; text: string }[];
}) {
  return (
    <div className="bg-bg2 rounded-xl p-[28px]">
      <h3 className="text-lg font-semibold text-navy mb-[24px]">{title}</h3>
      <ul className="flex flex-col gap-[16px]">
        {items.map((item) => (
          <li key={item.text} className="flex items-center gap-[12px]">
            <div className="w-9 h-9 shrink-0 rounded-[8px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
              <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
            </div>
            <span className="text-sm text-fg2 leading-[1.4]">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
