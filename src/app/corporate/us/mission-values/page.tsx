import type { Metadata } from "next";
import { CorporatePageHero } from "@/components/corporate/page-hero";

export const metadata: Metadata = {
  title: "Mission and Values",
};

const pillars = [
  {
    title: "clients",
    items: [
      "Robust and configurable solutions",
      "AI capabilities that matter",
      "On time, on budget implementations",
      "World class support",
      "A development pipeline that is client driven",
    ],
  },
  {
    title: "clients\u2019 customers",
    items: [
      "An exceptional customer experience",
      "Easy to become a customer",
      "Accurate billing with payment options",
      "Knowledge enabled customer service reps",
      "Clear and useful communications",
    ],
  },
  {
    title: "our people",
    items: [
      "An engaging and learning environment",
      "Global locations",
      "Proven career pathways",
      "Rewards for exceeding customer expectations",
      "Competitive compensation and benefits",
    ],
  },
];

export default function MissionValuesPage() {
  return (
    <>
      <CorporatePageHero
        breadcrumbs={[
          { label: "Home", href: "/corporate/us" },
          { label: "About" },
          { label: "Mission and Values" },
        ]}
        title="Mission and Values"
        lede="Committed to our clients, the customers they serve, and our employees."
      />

      <section
        className="py-[96px]"
        style={{ background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)" }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px] inline-flex items-center gap-2">
            <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
            Our commitments
          </div>
          <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy mb-[48px]">
            What we stand&nbsp;for.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="bg-white border border-stroke1 rounded-xl p-[28px]"
              >
                <h3 className="m-0 mb-[20px] text-sm font-semibold text-navy uppercase tracking-[0.06em] leading-snug">
                  Our commitment to{" "}
                  <span className="text-turquoise">{pillar.title}</span>
                </h3>
                <ul className="m-0 p-0 list-none space-y-[12px]">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-[1.55] text-fg2 pl-[20px] relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-turquoise"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
