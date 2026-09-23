import { MarketingLink } from "@/components/marketing/marketing-link";

const SEMINAR_HREF = "/news/events/hedge-pricing-seminar-2026-10";
const BANNER_COPY =
  "【参加無料｜10/21開催】ヘッジ取引を活用した小売電気料金メニューの新潮流 ▶︎ セミナー詳細はこちら";

export function SeminarAnnouncementBanner() {
  return (
    <MarketingLink
      href={SEMINAR_HREF}
      className="flex h-10 shrink-0 items-center justify-center rounded-[20px] bg-turquoise px-4 text-navy hover:bg-turquoise-hover transition-colors"
      aria-label="セミナー詳細ページへ"
    >
      <span className="max-w-full overflow-x-auto whitespace-nowrap text-center text-[12px] sm:text-[13px] lg:text-[14px] font-medium tracking-[-0.01em] leading-none">
        {BANNER_COPY}
      </span>
    </MarketingLink>
  );
}
