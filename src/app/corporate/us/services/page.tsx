import type { Metadata } from "next";
import Image from "next/image";
import { CorporatePageHero } from "@/components/corporate/page-hero";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  {
    title: "Implementation",
    image: "/us/Implementation.PNG",
    text: "We collaborate closely with your IT team and cross-functional stakeholders to develop a clear project plan\u2014and deliver results on time and within budget.",
    imagePosition: "left" as const,
  },
  {
    title: "Integration",
    image: "/us/Integration.PNG",
    text: "Use your system integrator or ours\u2014either way, you can tap into our API library or seamlessly integrate with your core systems.",
    imagePosition: "right" as const,
  },
  {
    title: "Market Expansion Planning",
    image: "/us/Market Expansion.PNG",
    text: "Skipping Stone partners with you to research and assess opportunities\u2014building a strong business case for expansion into new territories, countries, or commodity markets.",
    imagePosition: "left" as const,
  },
  {
    title: "Product/Service Design",
    image: "/us/Products Services.PNG",
    text: "Skipping Stone assists with requirements definition, revenue stack analysis, product and pricing design, and customer acquisition strategy.",
    imagePosition: "right" as const,
  },
  {
    title: "Growth Strategies",
    image: "/us/Growth.PNG",
    text: "Skipping Stone works with you to assess buy, build, or partner options\u2014and, if acquisition is the preferred path, identifies candidates and supports the M&A process from beginning to end.",
    imagePosition: "left" as const,
  },
];

export default function ServicesPage() {
  return (
    <>
      <CorporatePageHero
        breadcrumbs={[
          { label: "Home", href: "/corporate/us" },
          { label: "Services" },
        ]}
        title="Services"
        lede="We go beyond technical services to support our clients."
      />

      <section
        className="py-[96px]"
        style={{ background: "linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)" }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px] inline-flex items-center gap-2">
            <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
            What we offer
          </div>
          <h2 className="text-[30px] lg:text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-navy mb-[48px]">
            End-to-end support.
          </h2>

          <div className="space-y-[72px]">
            {services.map((service) => (
              <div
                key={service.title}
                className="grid grid-cols-1 md:grid-cols-2 gap-[48px] items-center"
              >
                {service.imagePosition === "left" ? (
                  <>
                    <div>
                      <div className="rounded-xl border border-stroke1 shadow-[0_4px_16px_rgba(0,0,0,0.06)] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={800}
                          height={600}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <h3 className="mt-[16px] text-lg font-semibold text-navy">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-lg leading-[1.55] text-fg2">
                      {service.text}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-lg leading-[1.55] text-fg2 md:order-1">
                      {service.text}
                    </p>
                    <div className="md:order-2">
                      <div className="rounded-xl border border-stroke1 shadow-[0_4px_16px_rgba(0,0,0,0.06)] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={800}
                          height={600}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <h3 className="mt-[16px] text-lg font-semibold text-navy">
                        {service.title}
                      </h3>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
