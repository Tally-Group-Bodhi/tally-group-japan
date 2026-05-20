import type { Metadata } from "next";
import Image from "next/image";
import { MarketingLink } from "@/components/marketing/marketing-link";
import { ContactForm } from "@/components/sections/contact-form";
import { OfficeAddressBlock } from "@/components/sections/office-address-block";
import { OurLocationsSection } from "@/components/sections/our-locations-section";
import { officeRegions } from "@/data/office-regions";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع فريق Tally Group في الإمارات. احجز عرضًا تجريبيًا، أو اطرح سؤالًا، أو استكشف فرصة شراكة.",
};

const uaeOffices = officeRegions.find((region) => region.id === "uae")?.offices ?? [];

const contactMethods = [
  {
    icon: "mail",
    title: "راسلنا عبر البريد الإلكتروني",
    description: "سيعاود فريقنا التواصل معك خلال 24 ساعة.",
    detail: "anuj.sahrawat@tally-group.com",
    href: "mailto:anuj.sahrawat@tally-group.com",
  },
  {
    icon: "linkedin",
    title: "تابعنا على LinkedIn",
    description: "تابعنا للاطّلاع على آخر الأخبار والمستجدّات.",
    detail: "Tally Group",
    href: "https://www.linkedin.com/company/tally-group",
    external: true,
  },
];

export default function AEContactPage() {
  return (
    <div lang="ar" dir="rtl" className="font-ar contents">
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px]"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <h1 className="text-[44px] lg:text-[64px] font-light leading-[1.2] tracking-[-0.02em] text-navy">
            تواصل معنا.
          </h1>

          <p className="mt-[20px] text-[19px] leading-[1.8] text-fg2 max-w-[60ch]">
            سواء كنت تبحث عن عرض تجريبي، أو لديك أسئلة عن منتجاتنا، أو ترغب في استكشاف فرصة شراكة، فإن فريقنا في الإمارات هنا لمساعدتك.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-[96px] border-b border-stroke1">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[48px] lg:gap-[72px]">
            {/* Left - Contact Info */}
            <div>
              <div className="mb-[48px]">
                <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
                  <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
                  تواصل
                </div>
                <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.2] tracking-[-0.02em] text-navy">
                  يسرّ فريقنا الودود الاستماع إليك.
                </h2>
              </div>

              <div className="flex flex-col gap-[24px]">
                {contactMethods.map((method) => (
                  <div key={method.title} className="bg-bg2 rounded-xl p-[24px] flex gap-[16px]">
                    {method.icon === "linkedin" ? (
                      <div className="w-10 h-10 shrink-0 grid place-items-center">
                        <Image src="/logos/linkedin.png" alt="LinkedIn" width={36} height={36} />
                      </div>
                    ) : (
                      <div className="w-10 h-10 shrink-0 rounded-[10px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
                        <span className="material-symbols-outlined text-[20px]">{method.icon}</span>
                      </div>
                    )}
                    <div>
                      <h3 className="text-[15px] font-semibold text-fg1">{method.title}</h3>
                      <p className="text-sm text-fg2 mt-[4px]">{method.description}</p>
                      <a
                        href={method.href}
                        className="text-sm font-semibold text-navy hover:text-turquoise transition-colors mt-[8px] inline-block"
                        dir="ltr"
                        {...("external" in method && method.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {method.detail}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Offices */}
              <div className="mt-[48px]">
                <h3 className="text-lg font-semibold text-navy mb-[20px]">مكتبنا</h3>
                <div className="flex flex-col gap-[28px]">
                  {uaeOffices.map((office) => (
                    <div key={office.city}>
                      <OfficeAddressBlock office={office} language="ar" />
                      <a
                        href={`mailto:${office.email}`}
                        className="mt-3 block text-sm font-medium text-navy hover:text-turquoise transition-colors"
                        dir="ltr"
                      >
                        {office.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white border border-stroke1 rounded-xl p-[32px] lg:p-[40px] h-fit">
              <h3 className="text-xl font-semibold text-navy mb-[24px]">أرسل لنا رسالة</h3>
              <ContactForm language="ar" />
            </div>
          </div>
        </div>
      </section>

      <OurLocationsSection
        defaultRegionId="uae"
        eyebrow="حضور عالمي"
        title="مواقعنا حول العالم"
        description="تعمل Tally Group في ستّ مناطق. اختر منطقة لعرض مكاتبنا المحلية وبيانات التواصل."
        language="ar"
      />

      {/* CTA */}
      <section className="relative overflow-hidden py-[96px] bg-navy text-white">
        <div
          className="absolute -left-[100px] -bottom-[100px] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,210,162,0.18), transparent 60%)",
          }}
        />
        <div className="relative max-w-[1240px] mx-auto px-8 text-center">
          <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.2] tracking-[-0.02em] text-white">
            تفضّل حجز عرض تجريبي مباشرةً؟
          </h2>
          <p className="mt-[16px] text-lg text-white/75 max-w-[50ch] mx-auto leading-[1.8]">
            احجز جولة مخصّصة مع أحد المتخصّصين في منتجاتنا.
          </p>
          <div className="mt-[32px]">
            <MarketingLink
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all shadow-sm"
            >
              احجز عرضًا تجريبيًا{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </MarketingLink>
          </div>
        </div>
      </section>
    </div>
  );
}
