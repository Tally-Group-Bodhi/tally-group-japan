import type { Metadata } from "next";
import {
  EventsList,
  MeetInPersonSection,
  type EventItem,
} from "@/components/jp/news/events-list";

export const metadata: Metadata = {
  title: "イベント",
  description:
    "開催予定のカンファレンス、ウェビナー、コミュニティイベントなどにぜひご参加ください。",
  alternates: { canonical: "/news/events" },
};

const events: EventItem[] = [
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
            開催予定のカンファレンス、ウェビナー、コミュニティイベントなどにぜひご参加ください。
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
