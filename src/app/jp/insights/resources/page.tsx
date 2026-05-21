import type { Metadata } from "next";
import { MarketingLink } from "@/components/marketing/marketing-link";
import {
  ResourcesGrid,
  type Resource,
} from "@/components/jp/insights/resources-grid";

export const metadata: Metadata = {
  title: "資料",
  description:
    "エネルギー関連事業向けソリューションを理解するための、調査レポートや専門家によるセッションなどをご用意しています。",
};

const resources: Resource[] = [
  {
    kind: "webinar",
    title: "2026年の小売電気：商品スピードとリスク",
    date: "2026年3月18日",
    dateISO: "2026-03-18",
    duration: "45分",
    description:
      "オファーを迅速に投入しつつ、価格設定、与信、規制への整合を維持するパネルディスカッション。",
    speaker: "Jordan Ellis",
    role: "小売ソリューション担当副社長",
    tone: 1,
    href: "#",
  },
  {
    kind: "webinar",
    title: "AMIから実務に活かせるインサイトへ",
    date: "2026年2月4日",
    dateISO: "2026-02-04",
    duration: "38分",
    description:
      "ユーティリティが間隔データを、お客様が実際に申し込み、継続して参加するプログラムに変える方法。",
    speaker: "Dr. Priya Nandakumar",
    role: "グリッド解析担当ディレクター",
    tone: 2,
    href: "#",
  },
  {
    kind: "webinar",
    title: "BESSと小売：市場をつなぐ",
    date: "2026年1月22日",
    dateISO: "2026-01-22",
    duration: "52分",
    description:
      "蓄電と小売ポートフォリオが交差する際の契約構造、テレメトリ、精算上の考慮事項。",
    speaker: "Marcus Chen",
    role: "エネルギー市場 プリンシパル",
    tone: 3,
    href: "#",
  },
  {
    kind: "whitepaper",
    title: "小売電気プラットフォームの将来像",
    description:
      "複雑な料金・商品・市場ルールに対応しながら、請求・顧客システムをどのようにスケールさせるか。",
    href: "#",
  },
  {
    kind: "whitepaper",
    title: "AIとユーティリティの技術スタック",
    description:
      "セキュリティや監査可能性を損なわずに、AIアシスタントをオペレーションに接続する実践的なパターン。",
    href: "#",
  },
  {
    kind: "whitepaper",
    title: "産業向け小売事業者のネットゼロロードマップ",
    description:
      "サステナビリティ目標を、商品ポートフォリオ、報告、顧客向けプログラムに落とし込む方法。",
    href: "#",
  },
  {
    kind: "whitepaper",
    title: "デマンドレスポンス：技術入門",
    description:
      "DRプログラムを大規模に安定運用するための信号、精算、顧客接点。",
    href: "#",
  },
  {
    kind: "whitepaper",
    title: "規制市場における顧客体験",
    description:
      "チャネル横断で、コンプライアンス、コミュニケーション、デジタルセルフサービスを両立する。",
    href: "#",
  },
  {
    kind: "whitepaper",
    title: "クラウド請求におけるデータセキュリティ",
    description:
      "クラウドネイティブCISパートナーに求めるべき統制、監視、ベンダー実践。",
    href: "#",
  },
];

export default function JPResourcesPage() {
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
            資料
          </h1>
          <p className="mt-[20px] text-[17px] leading-[1.75] text-fg2 max-w-[60ch] m-0">
            エネルギー関連事業向けソリューションを理解するための、調査レポートや専門家によるセッションなどをご用意しています。
          </p>
        </div>
      </section>

      {/* Filterable grid */}
      <ResourcesGrid resources={resources} />

      {/* Final CTA */}
      <section className="relative overflow-hidden py-[96px] bg-navy text-white">
        <div
          aria-hidden
          className="absolute -left-[100px] -bottom-[100px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,210,162,0.18), transparent 60%)",
          }}
        />
        <div className="relative max-w-[1240px] mx-auto px-8 text-center">
          <div className="text-xs font-medium text-turquoise uppercase tracking-[0.12em] mb-[16px] inline-flex items-center gap-2">
            <span
              className="w-[18px] h-[1px] bg-turquoise inline-block"
              aria-hidden
            />
            次のステップ
          </div>
          <h2 className="text-[30px] lg:text-[48px] font-light leading-[1.2] tracking-[-0.02em] text-white max-w-[24ch] mx-auto m-0">
            お客様の事業に Tally+ がどのように貢献できるか、ご相談ください。
          </h2>
          <p className="mt-[16px] text-lg text-white/75 max-w-[52ch] mx-auto leading-[1.7]">
            業務課題、市場戦略、プラットフォーム導入計画について、お気軽にご相談ください。
          </p>
          <div className="mt-[32px] flex flex-wrap items-center justify-center gap-3">
            <MarketingLink
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all shadow-sm"
            >
              デモのご相談
              <span
                className="material-symbols-outlined text-[16px]"
                aria-hidden
              >
                arrow_forward
              </span>
            </MarketingLink>
            <MarketingLink
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold text-white border border-white/40 hover:bg-white/10 transition-all"
            >
              お問い合わせ
            </MarketingLink>
          </div>
        </div>
      </section>
    </>
  );
}
