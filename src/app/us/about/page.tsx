import type { Metadata } from "next";
import Image from "next/image";
import { HistoryTimeline } from "@/components/about/history-timeline";
import { USCtaSection } from "@/components/us/cta-section";

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

const supportingTestimonials = [
  {
    name: "Anika Phan",
    role: "Head of Customer Operations, Alinta Energy",
    initials: "AP",
    quote:
      "Glass Vision cut our average handle time by 38 seconds in the first month. The platform speaks energy out of the box \u2014 NMIs, embedded networks, life-support flags.",
  },
  {
    name: "James Wong",
    role: "Head of Technology, Energy Locals",
    initials: "JW",
    quote:
      "We migrated 400k accounts to Tally in eight months. The team is responsive, pragmatic, and they actually understand the NEM.",
  },
  {
    name: "Priya Sharma",
    role: "GM Customer Operations, Momentum Energy",
    initials: "PS",
    quote:
      "Tally took our billing from a constant headache to a quiet utility. We\u2019ve never trusted a vendor more with our customer data.",
  },
];

const leaders = [
  {
    name: "Peter Weigand",
    role: "Chief Growth Officer",
    bio: "As Tally\u2019s Chief Growth Officer, Peter leads Tally\u2019s expansion across the U.S. and Japan markets. He has been instrumental in growing energy companies globally for many years, serving as CEO of four energy companies prior to joining Tally, and having held board roles across a number of energy startups. In addition to his role as CGO, he is also CEO of Skipping Stone, Tally\u2019s wholly owned energy consulting business. He focuses on accelerating Tally\u2019s global growth by developing relationships that leverage both consulting services and Tally\u2019s market leading solutions.",
    photoSrc: "/us/Peter Weigand.jpg",
  },
  {
    name: "Andrew Duncan",
    role: "Chief Executive Officer",
    bio: "Andrew is the Founder and Chairman of Tally and was appointed CEO in 2022 following the merger that formed Tally Group. With more than 30 years\u2019 experience in the Australian energy market, he has played a key role in driving technology-led transformation across retail energy. Andrew founded Serviceworks and led its successful sale to Computershare in 2011, establishing the first bureau provider for Australia\u2019s deregulated energy market. A recognised founder and investor, he brings deep industry insight and a pragmatic, execution-focused approach, driven by a founder\u2019s mindset and a focus on simplifying operations and improving customer outcomes.",
    photoSrc: "/corporate/Andrew.jpg",
  },
  {
    name: "Travis Lehman",
    role: "Chief Operating Officer",
    bio: "Travis joined Agility CIS in 2019 as Transformation Director, leading the Value Creation Programme including M&A through a pivotal period of growth and integration. With experience spanning strategy, transactions and execution, he specialises in scaling technology businesses in complex global markets. Prior to Tally, Travis spent about a decade with Deloitte Consulting in the M&A practice in San Francisco and holds an MBA from Stanford Graduate School of Business. He brings a calm, solutions-focused approach, translating strategy into disciplined execution to drive sustainable growth.",
    photoSrc: "/corporate/Travis Lehman.jpg",
  },
  {
    name: "Eric Yilmaz",
    role: "Chief Technology Officer",
    bio: "Eric joined Tally in 2023, bringing more than 20 years\u2019 experience across technology strategy, digital platforms, infrastructure, operations and product development. Prior to Tally, he was CTO at Sorted and held senior innovation and technology roles at EY, working at the intersection of emerging technology and enterprise scale. He leads Tally\u2019s global technology function with a focus on modern engineering, cloud architecture and applied AI, driving quality, security and speed to value. Eric is deeply focused on building high-performing teams and future-ready platforms.",
    photoSrc: "/corporate/Eric Yilmaz.jpg",
  },
  {
    name: "Raine Figaro",
    role: "Delivery Lead",
    bio: "Joined Tally as the U.S. Delivery Lead in 2023. 20+ years of experience in global program, project and portfolio management, consulting, and relationship management, including delivery lead roles at Amazon Web Services, Capital One, Microsoft and Verizon.",
    photoSrc: "/us/Raine Figaro.jpg",
  },
  {
    name: "Atsuyo Miller",
    role: "Director of Marketing",
    bio: "Joined Tally as Director of Marketing in 2026, leading U.S. and Japan markets. Previously VP of Marketing at an energy consulting firm, with experience across Fortune Global 500 environments including Microsoft and Toshiba. Brings expertise across energy and technology sectors and experience leading cross-cultural, cross-functional teams.",
    photoSrc: "/us/Atsuyo Miller.jpg",
  },
  {
    name: "Chris Bates",
    role: "Product Manager Orion | Product & Client",
    bio: "Joined Tally as a Data Engineer in 2012, transitioned to Architect for US Energy Platforms with 14+ years of experience in designing enterprise-grade billing and regulatory solutions and driving architectural standards for the energy and utilities sector.",
    photoSrc: "/us/Chris Bates.jpg",
  },
  {
    name: "TBD",
    role: "Sales Manager",
    bio: "Bio coming soon.",
  },
  {
    name: "TBD",
    role: "Sales & Marketing Coordinator",
    bio: "Bio coming soon.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px]" style={{
        background: "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)"
      }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <h1 className="text-[44px] lg:text-[64px] font-light leading-[1.04] tracking-[-0.025em] text-navy">
            Intelligent utilitech<br />solutions.
          </h1>

          <p className="mt-[20px] text-[19px] leading-[1.55] text-fg2 max-w-[60ch]">
            A world-leading cloud-native software platform and ecosystem enabling decarbonisation, digitisation and decentralisation for energy retailers globally.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section id="who-we-are" className="scroll-mt-[88px] py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Who we are
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

      {/* History Timeline */}
      <HistoryTimeline />

      {/* Leadership */}
      <section id="leadership" className="scroll-mt-[88px] py-[96px] border-b border-stroke1" style={{
        background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)"
      }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              Tally Group Leadership
            </div>
            <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy">
              Experienced leaders in utility transformation.
            </h2>
            <p className="mt-[16px] text-sm leading-[1.55] text-fg2 m-0 max-w-[60ch]">
              Driving the transition to smarter utilities backed by deep expertise, global scale and proven execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {leaders.map((leader) => (
              <LeaderCard
                key={`${leader.name}-${leader.role}`}
                leader={leader}
                photoSrc={leader.photoSrc}
              />
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
              Trusted by those who matter.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-[20px] items-stretch">
            <div className="bg-bg2 rounded-xl p-[32px] lg:p-[40px] flex flex-col gap-[24px]">
              <blockquote className="m-0 p-0 text-[20px] lg:text-[26px] leading-[1.4] text-fg1 tracking-[-0.005em] font-medium">
                <span className="text-turquoise text-[48px] font-bold leading-none block mb-3">&ldquo;</span>
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

            <div className="flex flex-col gap-[20px]">
              {supportingTestimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-bg2 rounded-xl p-[24px] lg:p-[28px] flex flex-col gap-[16px] flex-1"
                >
                  <blockquote className="m-0 p-0 text-[15px] leading-[1.55] text-fg1 font-medium">
                    <span className="text-turquoise text-[28px] font-bold leading-none block mb-1">&ldquo;</span>
                    {t.quote}
                  </blockquote>
                  <div className="flex items-center gap-[12px] mt-auto">
                    <div
                      className="w-9 h-9 rounded-full grid place-items-center text-white text-[11px] font-semibold shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #2C365D, #1E2840)",
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-fg1">
                        {t.name}
                      </div>
                      <div className="text-[12px] text-fg2">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section id="mission-values" className="scroll-mt-[88px] py-[96px] border-b border-stroke1" style={{
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
      <USCtaSection />
    </>
  );
}

type LeaderProfile = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

function LeaderCard({
  leader,
  photoSrc,
}: {
  leader: LeaderProfile;
  photoSrc?: string;
}) {
  const photo = photoSrc ? (
    <div className="w-[88px] h-[88px] rounded-full overflow-hidden shrink-0 border border-stroke1 bg-bg2">
      <Image
        src={photoSrc}
        alt={`Portrait of ${leader.name}`}
        width={88}
        height={88}
        className="w-full h-full object-cover object-[center_top]"
        loading="lazy"
      />
    </div>
  ) : (
    <div
      className="w-[88px] h-[88px] rounded-full shrink-0 border border-stroke1 bg-bg2"
      aria-hidden
    />
  );

  return (
    <article className="bg-white border border-stroke1 rounded-xl p-[24px] flex flex-col gap-[16px] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-[14px]">
        {photo}
        <div>
          <h3 className="m-0 mb-[2px] text-base font-semibold text-navy tracking-tight leading-tight">
            {leader.name}
          </h3>
          <p className="m-0 text-sm text-fg2">{leader.role}</p>
        </div>
      </div>
      <p className="m-0 text-sm leading-[1.55] text-fg2">{leader.bio}</p>
    </article>
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
