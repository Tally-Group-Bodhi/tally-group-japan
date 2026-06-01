import type { Metadata } from "next";
import Image from "next/image";
import { DemoContactForm } from "@/components/jp/contact/demo-contact-form";
import { OurLocationsSection } from "@/components/sections/our-locations-section";
import { officeRegions } from "@/data/office-regions";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Tally Group team. Book a demo, ask a question, or explore a partnership.",
};

const japanOffices =
  officeRegions.find((region) => region.id === "japan")?.offices ?? [];

const contactMethods = [
  {
    icon: "mail",
    title: "Email us",
    description: "Our team will get back to you within 24 hours.",
    detail: "enquiries@tally-group.com",
    href: "mailto:enquiries@tally-group.com",
  },
  {
    icon: "linkedin",
    title: "LinkedInでフォロー",
    description: "最新ニュースやインサイトをお届けします。",
    detail: "LinkedInを見る",
    href: "https://www.linkedin.com/company/tally-group",
    external: true,
  },
];

export default function ContactPage() {
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
          <div className="flex flex-col gap-[24px] lg:flex-row lg:items-start lg:justify-between lg:gap-[48px]">
            <div className="min-w-0 lg:flex-1">
              <h1 className="text-[44px] lg:text-[64px] font-light leading-[1.04] tracking-[-0.025em] text-navy">
                お問い合わせ
              </h1>

              <p className="mt-[20px] text-[19px] leading-[1.55] text-fg2 max-w-[60ch]">
                Tally+や各サービスに関するご質問・ご相談、デモのご希望がございましたら、お問い合わせフォームよりお気軽にお問い合わせください。
              </p>
            </div>

            <div className="flex flex-col gap-[12px] sm:flex-row lg:flex-col lg:w-[300px] lg:shrink-0 lg:pt-[12px]">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  {...("external" in method && method.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-[14px] rounded-xl border border-stroke1 bg-white px-[16px] py-[14px] transition-all hover:border-navy/30 hover:shadow-sm sm:flex-1 lg:flex-initial"
                >
                  {method.icon === "linkedin" ? (
                    <div className="w-10 h-10 shrink-0 grid place-items-center">
                      <Image
                        src="/logos/linkedin.png"
                        alt="LinkedIn"
                        width={36}
                        height={36}
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 shrink-0 rounded-[10px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
                      <span className="material-symbols-outlined text-[20px]">
                        {method.icon}
                      </span>
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-fg1">
                      {method.title}
                    </p>
                    <p className="text-[13px] font-medium text-navy truncate group-hover:text-turquoise transition-colors">
                      {method.detail}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form + Offices */}
      <section className="py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-[48px] lg:gap-[64px]">
            {/* Left - Offices */}
            <div>
              <div className="flex flex-col gap-[28px]">
                <div>
                  <p className="text-[26px] font-semibold text-navy leading-[1.4] m-0">
                    タリーグループ東京オフィス
                  </p>
                  <p className="mt-3 text-[18px] leading-[1.7] text-fg1 m-0">〒105-0003</p>
                  <p className="text-[18px] leading-[1.7] text-fg1 m-0">
                    東京都港区西新橋 2-20-1-4F
                  </p>
                  <p className="text-[18px] leading-[1.7] text-fg1 m-0">The Energy Center</p>
                </div>
                {japanOffices[0]?.email && (
                  <a
                    href={`mailto:${japanOffices[0].email}`}
                    className="block text-sm font-medium text-navy hover:text-turquoise transition-colors"
                  >
                    {japanOffices[0].email}
                  </a>
                )}
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white border border-stroke1 rounded-xl p-[32px] lg:p-[40px] h-fit">
              <h3 className="text-xl font-semibold text-navy mb-[8px]">
                お問い合わせ・デモのご相談
              </h3>
              <p className="text-sm text-fg2 mb-[24px] leading-[1.55]">
                下記フォームに必要事項をご入力の上、「送信」ボタンをクリックしてください。追って、担当者よりご連絡いたします。
              </p>
              <DemoContactForm />
            </div>
          </div>
        </div>
      </section>

      <OurLocationsSection
        defaultRegionId="japan"
        eyebrow="グローバルネットワーク"
        title="世界各地の拠点"
        description={null}
        language="ja"
      />
    </>
  );
}
