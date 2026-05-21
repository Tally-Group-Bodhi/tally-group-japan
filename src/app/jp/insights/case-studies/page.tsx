import type { Metadata } from "next";
import { JPCtaSection } from "@/components/jp/cta-section";
import {
  CaseStudiesGrid,
  type CaseStudy,
} from "@/components/jp/insights/case-studies-grid";

export const metadata: Metadata = {
  title: "導入事例",
  description:
    "世界各地の組織が、Tallyのソリューションによってどのように測定可能な成果を実現しているかをご紹介します。地域・トピック・分野で事例を絞り込めます。",
};

const heroMetrics: { value: string; suffix?: string; label: string }[] = [
  { value: "55", suffix: "+", label: "グローバル顧客数" },
  { value: "4M", suffix: "+", label: "メーター数" },
  { value: "XX", suffix: "%", label: "顧客満足度" },
];

const caseStudies: CaseStudy[] = [
  {
    slug: "voltedge-retail",
    company: "VoltEdge Retail",
    title: "複雑な商品ラインを拡大しつつ、バックオフィス人員の増員を抑える",
    region: "north-america",
    topic: "retail-energy",
    focus: "electricity",
    pills: ["北米", "小売電気", "電力"],
    metrics: [
      "時間帯別料金やグリーン付加サービスを、請求担当者を増やさずに導入",
      "料金・プログラムを横断した顧客の単一ビューをエージェントに提供",
      "コール量が横ばいのまま請求精度を維持",
    ],
    quote:
      "Tally+が料金組み立てを自動化したことで、新商品を四半期ではなく数週間で投入でき、チームは顧客がどの条件に縛られているかを一か所で把握できるようになりました。",
    attribution: {
      name: "サラ・ミッチェル",
      role: "小売オペレーション担当副社長",
      company: "VoltEdge Retail",
    },
    media: { kind: "video", tone: 1, icon: "bolt" },
    href: "/insights/case-studies/voltedge-retail",
  },
  {
    slug: "aquaworks",
    company: "AquaWorks",
    title: "大手水道事業者が顧客体験を変革",
    region: "asia-pacific",
    topic: "billing-cx",
    focus: "water",
    pills: ["オーストラリア", "請求・顧客体験", "水道"],
    metrics: [
      "130万世帯に供給",
      "コール量を45%削減",
      "顧客満足度92%",
    ],
    quote:
      "新しいセルフサービスポータルにより、お客様との接点が大きく変わりました。サポートチケットも大幅に減少しました。",
    attribution: {
      name: "ジェームス・チェン",
      role: "顧客オペレーション担当副社長",
      company: "AquaWorks",
    },
    media: { kind: "image", tone: 2, icon: "water_drop" },
  },
  {
    slug: "metrogrid-japan",
    company: "MetroGrid Japan",
    title: "メーター裏側の市場プロセスを高速化",
    region: "asia-pacific",
    topic: "utility",
    focus: "electricity",
    pills: ["日本", "ユーティリティ", "電力"],
    metrics: [
      "需要獲得・計量・精算を一つのワークフローに統合",
      "産業向け（C&I）のオンボーディングを数週間から数日へ短縮",
      "すべての引き継ぎで監査に耐えうる履歴を保持",
    ],
    quote:
      "スピードと統制の両立が求められました。Tally+は登録から精算までトレーサビリティを提供し、規制当局と自社チームが数値を信頼できるようにしました。",
    attribution: {
      name: "田中 由紀",
      role: "市場オペレーション担当ディレクター",
      company: "MetroGrid Japan",
    },
    media: { kind: "video", tone: 3, icon: "hub" },
  },
  {
    slug: "desert-sun-power",
    company: "Desert Sun Power Co.",
    title: "小売とDERプログラムを束ねた統合請求",
    region: "middle-east",
    topic: "energy-transition",
    focus: "renewables",
    pills: ["中東", "エネルギー転換", "再生可能エネルギー"],
    metrics: [
      "屋上ソーラー、蓄電池、小売供給を一枚の明細に集約",
      "例外処理を抑えながら顧客がプラン変更をセルフサービスで実施",
      "オペレーションがプログラム実績をリアルタイムで把握",
    ],
    quote:
      "DERと小売の束ねが戦略でしたが、鍵は統合請求でした。お客様は実際のエネルギー利用に沿った一枚の請求をようやく見られるようになりました。",
    attribution: {
      name: "オマール・アルファルシ",
      role: "最高顧客責任者",
      company: "Desert Sun Power Co.",
    },
    media: { kind: "image", tone: 4, icon: "solar_power" },
  },
];

export default function JPCaseStudiesPage() {
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
            お客様の導入実績
          </h1>
          <p className="mt-[20px] text-[17px] leading-[1.75] text-fg2 max-w-[60ch] m-0">
            世界各地の組織が、当社ソリューションによって測定可能な成果をどのように実現しているかをご紹介します。
          </p>

          <ul
            className="mt-[40px] grid grid-cols-1 sm:grid-cols-3 gap-[16px] sm:gap-[12px] list-none p-0 max-w-[860px]"
            aria-label="主要指標"
          >
            {heroMetrics.map((m) => (
              <li
                key={m.label}
                className="bg-white border border-stroke1 rounded-2xl px-[24px] py-[20px] shadow-[0_2px_12px_rgba(44,54,93,0.04)]"
              >
                <div className="flex items-baseline gap-[2px]">
                  <span className="text-[36px] lg:text-[44px] font-light leading-none tracking-[-0.03em] text-navy tabular-nums">
                    {m.value}
                  </span>
                  {m.suffix && (
                    <span className="text-[22px] lg:text-[26px] font-light leading-none text-turquoise">
                      {m.suffix}
                    </span>
                  )}
                </div>
                <p className="mt-[10px] text-[13px] font-medium text-fg2 m-0 leading-[1.5]">
                  {m.label}
                </p>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* Filterable grid */}
      <CaseStudiesGrid studies={caseStudies} />

      {/* Final CTA */}
      <JPCtaSection
        eyebrow="次のステップ"
        title="お客様の事業に Tally+ がどのように貢献できるか、ご相談ください。"
        description="業務課題、市場戦略、プラットフォーム導入計画について、お気軽にご相談ください。"
      />
    </>
  );
}
