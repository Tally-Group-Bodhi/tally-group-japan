import type { Metadata } from "next";
import Image from "next/image";
import { MarketingLink } from "@/components/marketing/marketing-link";
import {
  jpCtaPrimaryOnLightCompactClass,
  jpCtaSecondaryOnLightCompactClass,
} from "@/components/jp/cta-button-classes";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "導入・統合支援から市場拡大・戦略アドバイザリーまで、Tallyのサービスは変化するエネルギー市場における事業推進を支援します。",
};

function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
      <span className="w-[18px] h-[1px] bg-turquoise inline-block" aria-hidden />
      {children}
    </div>
  );
}

function ServiceImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-stroke1 bg-bg2">
      <Image
        src={src}
        alt={alt}
        fill
        quality={95}
        sizes="(max-width: 768px) 100vw, 560px"
        className="object-cover object-center"
      />
    </div>
  );
}

function SubListHeading({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-navy/70 m-0">
      {children}
    </p>
  );
}

function BulletList({
  items,
  singleColumn = false,
}: {
  items: string[];
  singleColumn?: boolean;
}) {
  return (
    <ul
      className={`grid gap-x-6 gap-y-2 list-none m-0 p-0 mt-[14px] ${
        singleColumn ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {items.map((item) => (
        <li
          key={item}
          className="text-[20px] leading-[1.7] text-fg2 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-[6px] before:h-[6px] before:rounded-full before:bg-turquoise"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function StoryCard({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-bg2 rounded-xl p-[28px] flex flex-col gap-[14px] h-full">
      <div className="w-10 h-10 rounded-[10px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
        <span className="material-symbols-outlined text-[22px]">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold leading-[1.4] tracking-[-0.01em] text-fg1 m-0">
        {title}
      </h3>
      <ul className="list-none m-0 p-0 flex flex-col gap-[10px]">
        {items.map((item) => (
          <li key={item} className="text-sm leading-[1.7] text-fg2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

type ServiceBlock = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFirst: boolean;
  altBg?: boolean;
  capabilities?: string[];
  capabilitiesSingleColumn?: boolean;
  outcomes?: string[];
  regionCards?: { icon: string; title: string; items: string[] }[];
  growthColumns?: { icon: string; title: string; items: string[] }[];
};

const services: ServiceBlock[] = [
  {
    id: "svc-implementation",
    label: "サービス 01",
    title: "導入",
    description:
      "ITチームおよびビジネス関係者と緊密に連携し、Tallyソリューションの成功的な展開と定着を支援します。",
    image: "/us/Implementation.jpg",
    imageAlt: "導入支援サービス",
    imageFirst: false,
    capabilities: [
      "部門横断的な業務プロセスのマッピング",
      "コンプライアンスおよび報告要件",
      "ユーザーロールとワークフロー設定",
      "セキュリティモデルとセットアップ",
      "ビジネスルールと権限",
      "データ変換および移行マッピング",
      "テストおよび検証支援",
      "ユーザートレーニングとオンボーディング",
      "ローンチ後の最適化",
    ],
    outcomes: [
      "業務の効率化",
      "迅速な業務稼働準備",
      "システム定着の向上",
      "導入リスクの低減",
    ],
  },
  {
    id: "svc-integration",
    label: "サービス 02",
    title: "統合",
    description:
      "Tallyソリューションとエンタープライズのテクノロジーエコシステム全体とのシームレスな統合を支援します。",
    image: "/us/Integration.jpg",
    imageAlt: "統合サービス",
    imageFirst: true,
    altBg: true,
    capabilities: [
      "システム横断の機能マッピング",
      "業務プロセス統合",
      "データ共有と同期",
      "クラウド統合支援",
      "API開発と接続",
      "APIライブラリ支援",
      "統合ガバナンス",
      "サードパーティプラットフォーム連携",
    ],
    outcomes: [
      "手作業プロセスの削減",
      "業務可視性の向上",
      "ワークフローの効率化",
      "スケーラブルなシステム接続",
    ],
  },
  {
    id: "svc-market",
    label: "サービス 03",
    title: "市場拡大計画",
    description:
      "Skipping Stoneは、市場機会の評価と、実践的な事業計画に基づく拡大戦略の策定を組織とともに進めます。",
    image: "/us/Market-Expansion.jpg",
    imageAlt: "市場拡大計画",
    imageFirst: false,
    capabilities: [
      "戦略およびセグメンテーション分析",
      "ビジネスケースの策定",
      "収益構造の分析",
      "顧客獲得戦略",
      "顧客受容性調査",
      "テクノロジー要件の計画",
    ],
    outcomes: [
      "明確な市場拡大ロードマップ",
      "投資判断の可視化",
      "市場参入リスクの低減",
      "戦略計画の高度化",
    ],
    regionCards: [
      {
        icon: "temple_buddhist",
        title: "日本市場での実績",
        items: [
          "小売エネルギーのリスク管理",
          "小売エネルギーのM&A",
          "取引戦略とリスク管理",
          "再生可能エネルギー市場",
          "BESS市場",
          "デマンドレスポンス市場",
        ],
      },
      {
        icon: "public",
        title: "国際市場での実績",
        items: [
          "天然ガスの現物・金融市場",
          "小売・卸売市場",
          "発電および再生可能エネルギー",
          "エネルギーマネジメント",
          "BESS",
          "リスク管理",
          "M&Aおよび投資支援",
        ],
      },
    ],
  },
  {
    id: "svc-product",
    label: "サービス 04",
    title: "プロダクト／サービス設計",
    description:
      "顧客の期待、業務目標、市場機会に沿ったプロダクト・サービスの設計と改善を支援します。",
    image: "/us/Products-Services.jpg",
    imageAlt: "プロダクト／サービス設計",
    imageFirst: true,
    altBg: true,
    capabilities: [
      "プロダクト・サービス戦略",
      "カスタマーエクスペリエンス設計",
      "価格・パッケージ戦略",
      "カスタマージャーニー分析",
      "デジタルサービス計画",
      "市場差別化戦略",
      "業務設計支援",
      "規制対応",
    ],
    outcomes: [
      "顧客エンゲージメントの強化",
      "市場ポジショニングの向上",
      "市場投入の迅速化",
      "業務と顧客ニーズの整合",
    ],
  },
  {
    id: "svc-growth",
    label: "サービス 05",
    title: "戦略的成長支援",
    description:
      "変化するエネルギー市場に沿った、持続可能な成長戦略の評価と計画を組織が進められるよう支援します。",
    image: "/us/Growth.jpg",
    imageAlt: "戦略的成長支援",
    imageFirst: false,
    growthColumns: [
      {
        icon: "merge_type",
        title: "主な支援領域",
        items: [
          "新規市場機会の評価",
          "事業拡大戦略",
          "Go-to-Market計画",
          "パートナーエコシステムの評価",
          "収益機会の分析",
          "業務スケーラビリティの計画",
          "戦略的パートナーシップ支援",
        ],
      },
      {
        icon: "handshake",
        title: "パートナーシップとエコシステム支援",
        items: [
          "戦略的テクノロジー・市場パートナーの特定",
          "Go-to-Market連携計画の支援",
          "エコシステム統合戦略の推進",
          "業務・テクノロジー要件の整合",
        ],
      },
      {
        icon: "rocket_launch",
        title: "想定される成果",
        items: [
          "市場機会の拡大",
          "エコシステム連携の強化",
          "長期的な事業成長の支援",
          "業務リスクの低減",
        ],
      },
    ],
  },
];

function ServiceContent({ service }: { service: ServiceBlock }) {
  return (
    <div>
      <h2
        id={service.id}
        className="text-[30px] font-light leading-[1.25] tracking-[-0.02em] text-navy m-0"
      >
        {service.title}
      </h2>
      <p className="mt-[16px] text-[20px] leading-[1.7] text-fg2 m-0 max-w-[52ch]">
        {service.description}
      </p>
      {service.capabilities && (
        <div className="mt-[28px]">
          <SubListHeading>主な支援領域</SubListHeading>
          <BulletList
            items={service.capabilities}
            singleColumn={service.capabilitiesSingleColumn}
          />
        </div>
      )}
      {service.outcomes && (
        <div className="mt-[24px]">
          <SubListHeading>想定される成果</SubListHeading>
          <BulletList items={service.outcomes} />
        </div>
      )}
    </div>
  );
}

function ServiceSection({ service }: { service: ServiceBlock }) {
  return (
    <section
      className={`py-[96px] border-b border-stroke1 ${service.altBg ? "bg-bg2" : ""}`}
      aria-labelledby={service.id}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[72px] items-start">
          {service.imageFirst ? (
            <>
              <div className="order-first lg:order-none lg:sticky lg:top-[120px]">
                <ServiceImage src={service.image} alt={service.imageAlt} />
              </div>
              <ServiceContent service={service} />
            </>
          ) : (
            <>
              <ServiceContent service={service} />
              <div className="order-first lg:order-none lg:sticky lg:top-[120px]">
                <ServiceImage src={service.image} alt={service.imageAlt} />
              </div>
            </>
          )}
        </div>

        {service.regionCards && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[56px]">
            {service.regionCards.map((card) => (
              <StoryCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                items={card.items}
              />
            ))}
          </div>
        )}

        {service.growthColumns && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[56px]">
            {service.growthColumns.map((col) => (
              <StoryCard
                key={col.title}
                icon={col.icon}
                title={col.title}
                items={col.items}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const frameworkSteps = ["計画", "導入", "統合", "最適化", "成長"];

const expertise = [
  {
    icon: "temple_buddhist",
    title: "日本エネルギー市場での実績",
    description:
      "進化し続ける日本のエネルギー市場で組織を支援してきた、10年以上の経験があります。",
  },
  {
    icon: "public",
    title: "国際市場での実績",
    description:
      "日本および米国を含む国際市場で組織を支援してきた実績があります。",
  },
  {
    icon: "settings_suggest",
    title: "テクノロジーと業務の専門性",
    description:
      "導入、統合、業務計画、事業成長の各イニシアチブを通じて組織を支援します。",
  },
];

const faqs = [
  {
    q: "既存のシステムインテグレーターと連携できますか？",
    a: "はい。お客様が選定された導入・テクノロジーパートナーと連携できます。",
  },
  {
    q: "日本国外の組織も支援対象ですか？",
    a: "はい。日本および国際市場で事業を展開する組織を支援しています。",
  },
  {
    q: "プラットフォームサービスに加えてアドバイザリーサービスも提供していますか？",
    a: "はい。業務の最適化と事業成長を支援する付加価値の高いアドバイザリーサービスを提供しています。",
  },
];

export default function JPServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px] border-b border-stroke1"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <SectionEyebrow>サービス</SectionEyebrow>
          <h1 className="text-[32px] lg:text-[48px] font-light leading-[1.3] tracking-[-0.02em] text-navy max-w-[36ch]">
            導入・統合支援から市場拡大・戦略アドバイザリーまで、Tallyのサービスは変化するエネルギー市場における事業推進を支援します。
          </h1>
          <p className="mt-[20px] text-[17px] leading-[1.75] text-fg2 max-w-[60ch]">
            プラットフォームの展開、業務統合、市場計画、事業成長の各段階で組織を支援します。
          </p>

          <div className="flex flex-wrap gap-3 mt-[32px]">
            <MarketingLink
              href="/contact"
              className={jpCtaPrimaryOnLightCompactClass}
            >
              デモのご相談
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </MarketingLink>
            <MarketingLink
              href="/contact"
              className={jpCtaSecondaryOnLightCompactClass}
            >
              お問い合わせ
            </MarketingLink>
          </div>
        </div>
      </section>

      {/* お客様へのサポート体制 framework */}
      <section className="bg-bg2 py-[80px] border-b border-stroke1" aria-labelledby="framework-heading">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="max-w-[720px]">
            <SectionEyebrow>プロセス</SectionEyebrow>
            <h2
              id="framework-heading"
              className="text-[30px] font-light leading-[1.25] tracking-[-0.02em] text-navy m-0"
            >
              お客様へのサポート体制
            </h2>
            <p className="mt-[16px] text-[20px] leading-[1.7] text-fg2 m-0 max-w-[52ch]">
              当社のサービスは、プラットフォーム導入から事業成長まで、組織のライフサイクル全体を支援するよう設計されています。
            </p>
          </div>

          <ol
            className="mt-[40px] flex flex-wrap items-stretch gap-[10px] list-none m-0 p-0"
            aria-label="計画、導入、統合、最適化、成長"
          >
            {frameworkSteps.map((step, i) => (
              <li
                key={step}
                className="flex items-center gap-[10px] flex-1 min-w-[140px]"
              >
                <div className="flex-1 bg-white border border-stroke1 rounded-xl px-[18px] py-[16px] flex items-center gap-[12px] shadow-[0_2px_12px_rgba(44,54,93,0.04)]">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-turquoise/15 text-navy text-[13px] font-semibold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-semibold text-navy">{step}</span>
                </div>
                {i < frameworkSteps.length - 1 && (
                  <span
                    className="material-symbols-outlined text-fg2/60 text-[20px] hidden sm:inline"
                    aria-hidden
                  >
                    arrow_forward
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service blocks */}
      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}

      {/* 実績と専門性 */}
      <section className="py-[96px] border-b border-stroke1" aria-labelledby="experience-heading">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="max-w-[720px]">
            <SectionEyebrow>EXPERIENCE</SectionEyebrow>
            <h2
              id="experience-heading"
              className="text-[30px] font-light leading-[1.25] tracking-[-0.02em] text-navy m-0"
            >
              実績と専門性
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[48px]">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-stroke1 rounded-xl p-[28px] flex flex-col gap-[14px] h-full"
              >
                <div className="w-10 h-10 rounded-[10px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
                  <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold leading-[1.4] tracking-[-0.01em] text-fg1 m-0">
                  {item.title}
                </h3>
                <p className="text-sm leading-[1.75] text-fg2 m-0">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg2 py-[96px] border-b border-stroke1" aria-labelledby="faq-heading">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="mb-[40px]">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2
              id="faq-heading"
              className="text-[30px] font-light leading-[1.25] tracking-[-0.02em] text-navy m-0"
            >
              よくあるご質問
            </h2>
          </div>

          <div className="bg-white border border-stroke1 rounded-2xl divide-y divide-stroke1">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group px-[24px] py-[20px] [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-start justify-between gap-[16px] cursor-pointer list-none text-[20px] font-semibold text-navy leading-[1.5]">
                  <span>{faq.q}</span>
                  <span
                    className="material-symbols-outlined text-[22px] text-turquoise shrink-0 transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    add
                  </span>
                </summary>
                <div className="mt-[12px] text-[20px] leading-[1.7] text-fg2">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
