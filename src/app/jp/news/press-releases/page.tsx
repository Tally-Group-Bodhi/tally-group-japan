import type { Metadata } from "next";
import { JPCtaSection } from "@/components/jp/cta-section";
import {
  PressReleasesList,
  type PressRelease,
} from "@/components/jp/news/press-releases-list";

export const metadata: Metadata = {
  title: "プレスリリース",
  description: "Tally Group からのプレスリリースおよびお知らせです。",
};

const pressReleases: PressRelease[] = [
  {
    slug: "skipping-stone-acquisition",
    date: "2026年3月4日",
    dateISO: "2026-03-04",
    title:
      "Tally Group、スキッピングストーンを買収しグローバル展開を拡大",
    excerpt:
      "Tally Groupは、エネルギー分野の戦略コンサルティングおよび導入支援サービスをグローバルに提供するスキッピングストーンの買収を発表しました。スキッピングストーンは完全子会社として、従来のブランドを維持しながら事業運営を継続します。",
    href: "/news/press-releases/skipping-stone-acquisition",
    image: "/corporate/SS Acquisition PR Image.png",
    imageAlt: "Tally Group のスキッピングストーン買収に関する発表",
  },
];

export default function JPPressReleasesPage() {
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
          <h1 className="text-[36px] lg:text-[56px] font-light leading-[1.2] tracking-[-0.025em] text-navy max-w-[26ch] m-0">
            プレスリリース
          </h1>
          <p className="mt-[20px] text-[17px] leading-[1.75] text-fg2 max-w-[60ch] m-0">
            Tally Group からのプレスリリースおよびお知らせです。
          </p>
        </div>
      </section>

      {/* List */}
      <PressReleasesList releases={pressReleases} />

      {/* Final CTA */}
      <JPCtaSection
        eyebrow="次のステップ"
        title="お客様の事業に Tally+ がどのように貢献できるか、ご相談ください。"
        description="業務課題、市場戦略、プラットフォーム導入計画について、お気軽にご相談ください。"
      />
    </>
  );
}
