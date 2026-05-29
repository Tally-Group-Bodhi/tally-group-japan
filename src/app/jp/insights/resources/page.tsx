import type { Metadata } from "next";
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
    videoId: "1fTWH0KWaxU",
    thumbnail: "/jp/webinars/Video 1.png",
  },
  {
    kind: "webinar",
    videoId: "7j99_-kPvvg",
    thumbnail: "/jp/webinars/Video 2.png",
  },
  {
    kind: "webinar",
    videoId: "0qLOICi1z3c",
    thumbnail: "/jp/webinars/Video 3.png",
  },
  {
    kind: "webinar",
    videoId: "Xj8sL4L2qDg",
    thumbnail: "/jp/webinars/Video 4.png",
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
          <h1 className="text-[32px] lg:text-[48px] font-light leading-[1.3] tracking-[-0.02em] text-navy max-w-[26ch] m-0">
            資料
          </h1>
          <p className="mt-[20px] text-[17px] leading-[1.75] text-fg2 max-w-[60ch] m-0">
            エネルギー関連事業向けソリューションを理解するための、調査レポートや専門家によるセッションなどをご用意しています。
          </p>
        </div>
      </section>

      {/* Filterable grid */}
      <ResourcesGrid resources={resources} />
    </>
  );
}
