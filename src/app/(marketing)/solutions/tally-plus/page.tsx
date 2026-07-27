import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import {
  TechBodyParagraph,
  TechCardGrid,
  TechHero,
  TechIntegGrid,
  TechIntroBand,
  TechSection,
} from "@/components/jp/tech/tech-page";

export const metadata: Metadata = {
  title: "Tally+ プラットフォーム",
  description:
    "契約・料金・請求から顧客対応、分析まで電力小売業務全体を支え、リテール3.0の経営アジェンダ実現を支援するクラウドネイティブなプラットフォームです。",
  alternates: { canonical: "/solutions/tally-plus" },
};

const agendaCards = [
  {
    icon: "trending_up",
    title: "収益性のある成長",
    body: "複雑な料金体系や法人向けサービス、新エネルギー商材の拡大を支えながら、収益性とマージンを確保",
  },
  {
    icon: "rocket_launch",
    title: "市場投入の加速",
    body: "商品戦略と業務運用をシームレスにつなぎ、新商品や料金メニューの迅速な市場展開を支援",
  },
  {
    icon: "savings",
    title: "運用コストの削減",
    body: "自動化、ワークフロー管理、例外処理の標準化により、運用負荷を抑えながら事業拡大に対応",
  },
  {
    icon: "receipt_long",
    title: "請求・回収の最適化",
    body: "請求・回収プロセスの効率化と精度向上による収益確保と財務リスクの低減",
  },
  {
    icon: "sentiment_satisfied",
    title: "優れた顧客体験",
    body: "一般需要家・法人双方におけるセルフサービスとオペレーター業務の最適化による顧客体験の向上",
  },
  {
    icon: "foundation",
    title: "将来を見据えた基盤",
    body: "再エネ、PPA、EV、蓄電池、デマンドレスポンスなど新たな事業機会への対応基盤",
  },
];

const o2cMetrics = [
  { value: "99", unit: "％", label: "自動化率", detail: "請求を自動生成" },
  { value: "0", unit: "％", label: "処理失敗率", detail: "安定した一括請求処理" },
  { value: "12万", unit: "件/時", label: "処理性能", detail: "請求生成処理能力" },
];

const o2cParagraphs = [
  {
    strong: "請求管理",
    text: "は、複雑な料金体系や新エネルギー商品に対応し、請求業務の自動化によって高い精度と安定性を実現します。託送料金との突合、計量データの検証・突合、託送・卸市場取引に関わる精算データの管理、収益漏れ防止・収納・督促・債権管理を一体化することで、収益漏れを防ぎながら請求業務の正確性を維持します。実運用では請求処理の99％を自動化し、請求バッチ処理の失敗ゼロ、時間あたり12万件の処理能力を実現しています。",
  },
  {
    strong: "業務運用",
    text: "は、低圧・高圧／特別高圧・一括受電などの事業セグメントごとに、顧客管理と請求業務を統合管理します。申込登録から供給開始・スイッチング、計量データの検証までを標準化・一元化することで、請求データの品質向上と例外処理の削減を実現し、安定した事業運営を支援します。",
  },
  {
    strong: "与信・債権管理",
    text: "は、請求から入金管理、督促、債権回収までを一貫して支援します。与信管理と回収・督促プロセスを他モジュールと連携させることで、未回収リスクを低減し、安定したキャッシュフローの確保に貢献します。",
  },
  {
    strong: "ワークフロー管理",
    text: "は、請求、需要家対応、入金・収納、督促、例外処理などの業務を、分断された手作業中心の運用から自動化された業務プロセスへと移行します。例外案件は適切な担当者へ自動的に振り分けられ、標準化された運用と業務の可視化を実現。220以上の自動化ワークフローにより、事業規模の拡大に伴う運用負荷の増加を抑制します。",
  },
];

const salesParagraphs = [
  {
    strong: "料金メニュー管理",
    text: "は、リテール3.0時代に求められる柔軟な料金メニュー設計を支援します。複雑な料金体系や価格改定にも迅速に対応し、見積精度とマージン管理を向上させながら、高圧・特別高圧を含む法人向け商品の迅速な市場投入を支援します。",
  },
  {
    strong: "営業支援ポータル",
    text: "は、リード獲得から商談、見積までをデジタルチャネル上で一元管理します。営業担当者は顧客情報、商品情報、案件の進捗を一画面で把握でき、顧客獲得から成約までのプロセスを効率化します。",
  },
  {
    strong: "自動申込・契約登録",
    text: "は、申込受付から契約登録、各種通知までのプロセスを自動化します。手作業による入力ミスを削減し、販売業務から契約・請求・回収業務へのシームレスな引き継ぎを実現します。",
  },
];

const salesSteps = ["リード獲得", "見積・提案", "申込", "契約登録", "請求・運用へ"];

const cxParagraphs = [
  {
    strong: "カスタマーサービス向け AI アシスタント（Adora）",
    text: "は、4つのAIエージェントがコンタクトセンター業務や顧客対応を支援するAI機能です。Adoraインサイトはリアルタイムガイダンスと根本原因分析、Adoraコンパニオンはセルフサービスとアプリ内支援、Adoraディフェンダーはコンプライアンス強化、Adoraプレディクトは解約リスク分析や契約拡大機会の特定を担い、需要家対応の品質向上と効率化を実現します。",
  },
  {
    strong: "統合オペレーター画面",
    text: "は、需要家情報、契約情報、請求情報などを一画面で確認・操作できるオペレーター向け画面です。主要業務を単一画面から実行できるため、複数システムを行き来する必要がなく、多くの業務が数クリックで実行できます。対応時間の短縮と教育期間の削減にも貢献します。",
  },
  {
    strong: "顧客ポータル（一般需要家向け・法人向け）",
    text: "は、マイアカウントポータル、モバイルアプリ、プッシュ通知などのデジタルチャネルを提供します。問い合わせの多くはセルフサービスで解決し、コールセンター負荷の軽減と顧客利便性の向上を実現します。法人顧客や多拠点需要家にも対応します。",
  },
  {
    strong: "顧客体験最適化",
    text: "は、セルフサービス、リアルタイムコミュニケーション、パーソナライズされた顧客接点を提供します。初回解決率の向上、平均処理時間の短縮、コンプライアンス強化を通じて、一貫した顧客体験の実現を支援します。",
  },
];

const adoraCards = [
  {
    icon: "psychology",
    title: "Adora インサイト",
    subhead: "リアルタイムコールインテリジェンス",
    body: "通話中のAIガイダンス、根本原因分析、最適な対応提案、自動通話要約の提供",
  },
  {
    icon: "support_agent",
    title: "Adora コンパニオン",
    subhead: "ガイド付きセルフサービス",
    body: "状況に応じたヘルプ、アプリ内支援、タスク自動化の提供",
  },
  {
    icon: "security",
    title: "Adora ディフェンダー",
    subhead: "コンプライアンス強化",
    body: "請求ルール遵守、誤った供給停止の防止、規制要件への対応の自動実行",
  },
  {
    icon: "insights",
    title: "Adora プレディクト",
    subhead: "予測インテリジェンス",
    body: "解約リスク分析、契約拡大機会の特定、顧客維持施策の最適化支援",
  },
];

const decarbonParagraphs = [
  {
    strong: "デマンドレスポンス",
    text: "は、需要管理とデマンドレスポンスプログラムの設計・運用を支援します。需要抑制・需要シフトやインセンティブ管理を通じて、需給最適化と新たな収益機会の創出を実現します。",
  },
  {
    strong: "太陽光・EV・蓄電池対応",
    text: "は、太陽光発電、蓄電池、VPP、EV関連サービスの契約・請求・運用を支援します。PPAや非化石価値・環境価値に関連する複雑な料金・請求条件にも柔軟に対応します。",
  },
  {
    strong: "分散型エネルギー管理",
    text: "は、分散型エネルギーリソース（DER）の可視化と分析を提供します。太陽光発電、蓄電池、EVなどの稼働状況、発電・充放電状況、利用状況を把握し、最適なサービス設計と運用管理を支援します。",
  },
  {
    strong: "CO2排出量レポート",
    text: "は、需要・使用量データに基づくCO2 排出量の算定とレポート作成を支援します。サステナビリティ報告や脱炭素施策の効果測定を可能にします。",
  },
];

const complexBillingItems = [
  {
    title: "新エネルギーサービス対応",
    body: "蓄電池、VPP、需要家側設備などの新エネルギーサービスに対応した契約・請求・運用管理",
  },
  {
    title: "市場関連コストの反映",
    body: "市場価格、インバランス料金、需給調整関連費用、容量市場拠出金など、市場関連費用の料金明細への反映",
  },
  {
    title: "環境関連料金",
    body: "非化石証書、再エネ由来の環境価値、その他環境価値に関連する料金項目の請求処理",
  },
  {
    title: "スポット価格連動料金",
    body: "契約単価との組み合わせや従量料金超過時のスポット価格連動料金適用など、多様な料金設計への対応",
  },
  {
    title: "長期固定価格契約",
    body: "長期固定価格契約に加え、託送料金や市場関連費用を反映した請求処理に対応",
  },
  {
    title: "PPA・CfD（差金決済契約）",
    body: "PPAやCfD（差金決済契約）と小売契約を組み合わせた複合契約への対応と単一請求書による運用",
  },
  {
    title: "高度な料金設計",
    body: "スワップ、キャップ、スリーブ、バーチャル PPA、ダイナミックプライシング、従量料金・容量料金など高度な料金体系への対応",
  },
];

function ModuleChips({ items }: { items: string[] }) {
  const cols =
    items.length >= 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : items.length === 3
        ? "grid-cols-1 sm:grid-cols-3"
        : "grid-cols-1 sm:grid-cols-2";

  return (
    <ul className={`grid ${cols} gap-3 list-none m-0 p-0 mt-[24px]`}>
      {items.map((label) => (
        <li
          key={label}
          className="flex items-center justify-center px-4 py-[14px] rounded-[10px] text-center text-[15px] font-semibold leading-[1.45] text-navy bg-bg2 border border-stroke1"
        >
          <span>
            {label.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </span>
        </li>
      ))}
    </ul>
  );
}

function FeatureParagraphs({
  items,
}: {
  items: { strong: string; text: string }[];
}) {
  return (
    <div className="flex flex-col gap-5 mt-[28px]">
      {items.map((item) => (
        <p key={item.strong} className="text-[15px] leading-[1.75] text-fg2 m-0">
          <span className="font-semibold text-navy">{item.strong}</span>
          {item.text}
        </p>
      ))}
    </div>
  );
}

function MetricRow({
  items,
}: {
  items: { value: string; unit?: string; label: string; detail: string }[];
}) {
  return (
    <ul
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[32px] list-none m-0 p-0"
      aria-label="実績指標"
    >
      {items.map((item) => (
        <li
          key={item.label}
          className="rounded-xl px-[20px] py-[24px] text-center border border-turquoise/30 bg-[linear-gradient(160deg,rgba(0,210,162,0.12)_0%,rgba(44,54,93,0.04)_100%)] shadow-[0_4px_18px_rgba(0,210,162,0.1)]"
        >
          <span className="block text-[14px] font-bold text-navy/70 m-0 mb-[10px]">
            {item.label}
          </span>
          <strong className="block text-[40px] lg:text-[44px] font-bold tracking-[-0.03em] leading-none text-navy tabular-nums m-0 mb-[10px]">
            {item.value}
            {item.unit ? (
              <span className="text-[0.52em] font-bold tracking-normal align-[0.12em] ml-[2px]">
                {item.unit}
              </span>
            ) : null}
          </strong>
          <p className="text-[15px] font-semibold leading-[1.5] text-fg1 m-0">
            {item.detail}
          </p>
        </li>
      ))}
    </ul>
  );
}

function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-[32px] flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-2 list-none mb-0 ml-0 mr-0 p-0">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          <span className="inline-flex items-center px-[16px] py-[10px] rounded-[10px] text-[14px] font-semibold bg-bg2 text-navy border border-stroke1">
            {step}
          </span>
          {index < steps.length - 1 && (
            <span
              className="material-symbols-outlined text-[18px] text-turquoise hidden sm:inline"
              aria-hidden
            >
              arrow_forward
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

/** Homepage hero quadrant tints — used for section outlines & intro CTAs */
const HERO_ACCENTS = {
  o2c: "rgb(185, 188, 203)",
  sales: "rgb(188, 218, 251)",
  customerExperience: "rgb(215, 200, 244)",
  decarbon: "rgb(174, 215, 204)",
} as const;

function SolutionAreaCard({
  id,
  title,
  lede,
  modules,
  accent,
  children,
}: {
  id: string;
  title: string;
  lede: string;
  modules: string[];
  /** Border/accent color matching the homepage hero quadrant */
  accent: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="py-[48px] lg:py-[64px] bg-bg2 border-b border-stroke1 scroll-mt-[88px]"
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <article
          className="bg-white rounded-2xl border-2 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
          style={{ borderColor: accent }}
        >
          <h2
            id={`${id}-heading`}
            className="flex items-center gap-3 text-[24px] lg:text-[30px] font-semibold leading-[1.3] tracking-[-0.02em] text-navy m-0"
          >
            <span
              className="shrink-0 w-[9px] h-[9px] rounded-full"
              style={{
                backgroundColor: accent,
                boxShadow: `0 0 0 4px color-mix(in srgb, ${accent} 28%, transparent)`,
              }}
              aria-hidden
            />
            {title}
          </h2>
          <p className="mt-[16px] text-[16px] leading-[1.7] text-fg2 m-0">{lede}</p>
          <ModuleChips items={modules} />
          {children}
        </article>
      </div>
    </section>
  );
}

export default function TallyPlusOverviewPage() {
  return (
    <>
      <TechHero
        eyebrow="ソリューション / Tally+"
        title="Tally+ プラットフォーム"
        lede="契約・料金・請求から顧客対応、分析まで電力小売業務全体を支え、リテール3.0の経営アジェンダ実現を支援するクラウドネイティブなプラットフォームです。"
      />

      <TechIntroBand
        heading="Tally+が提供する4つのソリューション領域"
        large
        paragraphs={[
          "Tally+は、電力小売事業の主要業務を支える4つの領域で構成されています。各領域の独立した機能やモジュールは、共通のプラットフォーム上でシームレスに連携。AIエージェントが領域横断で業務とデータをつなぎ、事業成長に必要な俊敏性と拡張性を提供します。",
        ]}
        pills={[
          {
            label: "契約・請求・回収管理（O2C）",
            href: "#o2c",
            fill: HERO_ACCENTS.o2c,
          },
          {
            label: "販売・申込管理",
            href: "#sales",
            fill: HERO_ACCENTS.sales,
          },
          {
            label: "顧客対応・顧客接点",
            href: "#customer-experience",
            fill: HERO_ACCENTS.customerExperience,
          },
          {
            label: "脱炭素ソリューション",
            href: "#decarbon",
            fill: HERO_ACCENTS.decarbon,
          },
        ]}
      />

      <TechSection
        id="value-heading"
        eyebrow="リテール3.0"
        heading="リテール3.0の経営アジェンダを支援"
        large
      >
        <TechCardGrid items={agendaCards} columns={3} />
        <div className="mt-[40px]">
          <TechBodyParagraph wide>
            Tally+は、コンポーザブル・モジュールにより、必要な機能を選択し、お客様の要件に応じて柔軟に組み合わせることができます。各モジュールは共通プラットフォーム上でシームレスに連携し、事業要件や成長ステージの変化に対応する、柔軟で拡張性の高いシステム構成を実現します。
          </TechBodyParagraph>
        </div>
        <figure id="topology" className="mt-[48px] m-0 scroll-mt-[88px]">
          <Image
            src="/solutions/tally-plus-topology-v6.png"
            alt="Tally+ エネルギー小売向け請求・CRMケイパビリティの全体構成図。需要家エンゲージメント、共通サービス機能、セグメント別請求・CRMワークフローを示す。"
            width={4096}
            height={1904}
            className="w-full h-auto rounded-xl border border-stroke1 bg-white"
            sizes="(max-width: 1240px) 100vw, 1240px"
            priority
          />
        </figure>
      </TechSection>

      <SolutionAreaCard
        id="o2c"
        accent={HERO_ACCENTS.o2c}
        title="契約・請求・回収管理（O2C）"
        lede="契約から請求・回収までの業務を単一プラットフォームで統合し、複雑な料金体系や請求・入金・収納・収益管理に対応します。申込登録から請求準備、例外処理までをワークフローでつなぎ、業務効率化と運用品質の向上を実現します。"
        modules={["請求管理", "業務運用", "与信・債権管理", "ワークフロー管理"]}
      >
        <FeatureParagraphs items={o2cParagraphs} />
        <MetricRow items={o2cMetrics} />
      </SolutionAreaCard>

      <SolutionAreaCard
        id="sales"
        accent={HERO_ACCENTS.sales}
        title="販売・申込管理"
        lede="複雑な料金見積の作成に時間がかかる、法人営業がバックオフィスや料金担当者に依存する、契約条件や料金条件を、料金計算・請求条件へ正確に反映しにくい――こうした課題を解決します。料金メニュー管理から見積・申込、契約登録、料金計算・請求までを一気通貫でつなぎ、見積から請求までのプロセスをシームレスに実現します。"
        modules={["料金メニュー管理", "営業支援ポータル", "自動申込・契約登録"]}
      >
        <FeatureParagraphs items={salesParagraphs} />
        <ProcessSteps steps={salesSteps} />
      </SolutionAreaCard>

      <SolutionAreaCard
        id="customer-experience"
        accent={HERO_ACCENTS.customerExperience}
        title="顧客対応・顧客接点"
        lede="需要家情報、契約、請求、問い合わせ履歴が複数システムに分散し、オペレーターが業務ごとに画面を切り替えなければならない――こうした課題を解決します。AIアシスタント、統合オペレーター画面、顧客ポータル、デジタルチャネルを組み合わせ、需要家対応の効率化と需要家体験の向上を実現します。"
        modules={[
          "カスタマーサービス向け\nAI アシスタント",
          "統合オペレーター画面",
          "顧客ポータル",
          "顧客体験最適化",
        ]}
      >
        <FeatureParagraphs items={cxParagraphs} />
        <div className="mt-[32px]">
          <TechCardGrid items={adoraCards} columns={2} surface="outline" />
        </div>
      </SolutionAreaCard>

      <SolutionAreaCard
        id="decarbon"
        accent={HERO_ACCENTS.decarbon}
        title="脱炭素ソリューション"
        lede="再エネPPA、EV、蓄電池、デマンドレスポンスなど、新たなエネルギーサービスの展開には、契約・請求・運用を含めた業務基盤が求められます。需要家データや請求基盤と連携しながら、脱炭素ビジネスの立ち上げから拡大までを支援します。"
        modules={[
          "デマンドレスポンス",
          "太陽光・EV・蓄電池対応",
          "分散型エネルギー管理",
          "CO2排出量レポート",
        ]}
      >
        <FeatureParagraphs items={decarbonParagraphs} />
        <h3
          id="decarbon-billing-heading"
          className="text-[20px] lg:text-[22px] font-semibold leading-[1.35] tracking-[-0.01em] text-navy mt-[48px] mb-[16px] scroll-mt-[88px]"
        >
          新エネルギー・複雑請求への対応
        </h3>
        <TechBodyParagraph wide>
          Tally+は、再エネや分散型エネルギーサービスに伴う複雑な料金体系や請求業務に対応します。新たなエネルギー商品を既存業務へ統合し、収益化までを支援します。
        </TechBodyParagraph>
        <div className="mt-[28px]">
          <TechIntegGrid items={complexBillingItems} columns={2} />
        </div>
      </SolutionAreaCard>
    </>
  );
}
