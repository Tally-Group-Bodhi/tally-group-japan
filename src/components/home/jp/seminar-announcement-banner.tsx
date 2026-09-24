import { MarketingLink } from "@/components/marketing/marketing-link";

const SEMINAR_HREF = "/news/events/hedge-pricing-seminar-2026-10";

export function SeminarAnnouncementBanner() {
  return (
    <MarketingLink
      href={SEMINAR_HREF}
      className="group flex min-h-[56px] shrink-0 items-center justify-center rounded-[20px] bg-[#FFD41E] px-5 sm:px-6 py-3 text-navy/70 ring-1 ring-navy/10 hover:bg-[#F0C510] transition-colors"
      aria-label="セミナー詳細ページへ"
    >
      <span className="text-center text-[15px] sm:text-[16px] lg:text-[17px] font-medium leading-[1.35] tracking-[-0.01em]">
        <span className="whitespace-nowrap text-navy font-semibold">
          【
          <span className="font-bold">参加無料</span>
          ｜
          <span className="font-bold">10/21開催</span>
          】
        </span>
        <span className="mx-[0.35em]">
          ヘッジ取引を活用した小売電気料金メニューの新潮流
        </span>
        <span className="whitespace-nowrap">
          セミナー詳細はこちら
          <span
            aria-hidden
            className="ml-[0.35em] inline-block transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </span>
    </MarketingLink>
  );
}
