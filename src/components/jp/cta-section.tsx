import type { ReactNode } from "react";
import { MarketingLink } from "@/components/marketing/marketing-link";
import {
  jpCtaPrimaryOnDarkClass,
  jpCtaSecondaryOnDarkClass,
} from "@/components/jp/cta-button-classes";

type JPCtaSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string | null;
};

export function JPCtaSection({
  eyebrow,
  title = "変化する市場に対応できるソリューションをお探しですか？",
  description =
    "バックオフィスシステムをご利用中の場合でも、グローバル基準の最新プラットフォームをご覧ください。その可能性をご確認いただけます。",
  primaryHref = "/contact",
  primaryLabel = "お問い合わせ",
  secondaryHref = "/contact",
  secondaryLabel = null,
}: JPCtaSectionProps = {}) {
  return (
    <section className="px-4 sm:px-6 py-[24px] sm:py-[32px]">
      <div className="relative overflow-hidden mx-auto max-w-[1680px] rounded-3xl bg-navy-dark text-white px-[24px] py-[64px] sm:px-[48px] sm:py-[80px] lg:px-[96px] lg:py-[112px] flex items-center">
        <div
          aria-hidden
          className="absolute -left-[100px] -bottom-[100px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,210,162,0.18), transparent 60%)",
          }}
        />
        <div className="relative w-full flex justify-center px-2 sm:px-0">
          <div className="text-left w-fit max-w-full">
            {eyebrow && (
              <div className="text-xs font-medium text-turquoise uppercase tracking-[0.12em] mb-[16px] inline-flex items-center gap-2">
                <span
                  className="w-[18px] h-[1px] bg-turquoise inline-block"
                  aria-hidden
                />
                {eyebrow}
              </div>
            )}
            <h2 className="text-[24px] sm:text-[30px] lg:text-[48px] font-light leading-[1.25] tracking-[-0.02em] text-white m-0">
              {title}
            </h2>
            {description && (
              <p className="mt-[16px] text-lg text-white/75 m-0 leading-[1.7] max-w-[40rem]">
                {description}
              </p>
            )}
            <div className="mt-[32px] flex flex-wrap items-center justify-start gap-3">
              <MarketingLink href={primaryHref} className={jpCtaPrimaryOnDarkClass}>
                {primaryLabel}
                <span
                  className="material-symbols-outlined text-[16px]"
                  aria-hidden
                >
                  arrow_forward
                </span>
              </MarketingLink>
              {secondaryLabel ? (
                <MarketingLink
                  href={secondaryHref}
                  className={jpCtaSecondaryOnDarkClass}
                >
                  {secondaryLabel}
                </MarketingLink>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
