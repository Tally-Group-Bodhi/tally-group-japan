import type { Metadata } from "next";
import {
  EventsList,
  MeetInPersonSection,
  type EventItem,
} from "@/components/jp/news/events-list";

export const metadata: Metadata = {
  title: "イベント",
  description:
    "イベント、カンファレンス、ウェビナーの開催情報をご紹介します。",
  alternates: { canonical: "/news/events" },
};

const events: EventItem[] = [
  {
    slug: "hedge-pricing-seminar-2026-10",
    date: "2026年10月 · 9:00〜11:30",
    dateISO: "2026-10-01",
    eyebrow: "小売電気事業者向け無料セミナー",
    title: "ヘッジ取引を活用した小売電気料金メニューの新潮流",
    location: "東京",
    description:
      "卸電力市場の金融取引の発展により現実味を帯びてきたヘッジ型料金メニューについて、商品設計、請求・顧客管理、価格リスク管理のポイントを解説する無料セミナーです。",
    href: "/news/events/hedge-pricing-seminar-2026-10",
    tone: 2,
    icon: "school",
    image: "/events/hedge-pricing-seminar-2026-10/card.jpg",
    imageFit: "contain",
    imageBackground: "#2C365D",
  },
  {
    slug: "japan-power-week-2026",
    date: "2026年10月19日〜22日",
    dateISO: "2026-10-19",
    title: "Japan Power Week 2026",
    location: "東京",
    description:
      "エネルギー分野の最新技術やソリューションが集結する展示会・カンファレンス。再生可能エネルギーや電力システム、脱炭素の最新動向を紹介し、業界関係者の交流とビジネス創出を促進します。",
    href: "https://vanirgm.com/japan-power-week",
    external: true,
    tone: 1,
    icon: "bolt",
    image: "/events/japan-power-week-2026.webp",
  },
  {
    slug: "smart-grid-expo-2026",
    date: "2026年9月9日〜11日",
    dateISO: "2026-09-09",
    title: "Smart Grid Expo 国際スマートグリッド展",
    titleLines: ["Smart Grid Expo", "国際スマートグリッド展"],
    location: "幕張メッセ",
    description:
      "スマートグリッド技術に特化した展示会。VPPやDR、エネルギー管理、蓄電池、EV活用など最新ソリューションが集結し、電力の効率化と脱炭素化を支える技術動向とビジネス機会を提供します。",
    href: "https://www.wsew.jp/hub/ja-jp/about/sg.html",
    external: true,
    tone: 3,
    icon: "hub",
    image: "/events/smart-grid-expo-2026.png",
    imageFit: "contain",
  },
];

export default function JPEventsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] pb-[56px] lg:pt-[160px] lg:pb-[80px] border-b border-stroke1"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <h1 className="text-[32px] lg:text-[48px] font-light leading-[1.3] tracking-[-0.02em] text-navy max-w-[26ch] m-0">
            イベント
          </h1>
          <p className="mt-[20px] text-[17px] leading-[1.75] text-fg2 max-w-[60ch] m-0">
            イベント、カンファレンス、ウェビナーの開催情報をご紹介します。
          </p>
        </div>
      </section>

      {/* Upcoming events grid */}
      <EventsList events={events} />

      {/* Meet in person prompt */}
      <MeetInPersonSection href="/contact" />
    </>
  );
}
