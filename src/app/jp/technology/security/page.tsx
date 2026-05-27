import type { Metadata } from "next";
import {
  TechBodyParagraph,
  TechCardGrid,
  TechHero,
  TechIntroBand,
  TechSection,
} from "@/components/jp/tech/tech-page";

export const metadata: Metadata = {
  title: "セキュリティ",
  description:
    "Tally+は、安全性・可用性・コンプライアンスを備え、顧客・メーター・請求・市場・業務データを安全に保護することで、エネルギー小売業務の安定運用とガバナンス対応を支援します。",
};

const principleCards = [
  {
    icon: "shield",
    title: "設計段階から組み込まれたセキュリティ",
    body: "セキュリティ対策は、プラットフォーム、ホスティング環境、外部連携、運用プロセス全体にわたって適用されています。",
  },
  {
    icon: "encrypted",
    title: "データ保護と整合性",
    body: "顧客データ、メーターデータ、請求データ、市場データなどの重要情報は、役割に応じたアクセス制御、暗号化、操作履歴の記録などの仕組みにより、安全に保護されています。",
  },
  {
    icon: "monitor_heart",
    title: "安定運用と障害対応",
    body: "クラウドホスティング、バックアップ、監視、インシデント対応を含む運用体制により、安定した小売業務の継続性を支援します。",
  },
];

const dataProtectionItems = [
  {
    strong: "アクセス制御",
    text: "役割に応じたアクセス制御により、ユーザーごとに必要な機能・データへのアクセスを制限しています。",
  },
  {
    strong: "暗号化",
    text: "データは、通信時および保存時の双方で暗号化され、ホスティング環境に応じた適切な方式が適用されます。",
  },
  {
    strong: "操作履歴の記録",
    text: "管理者操作や業務操作は記録され、調査、ガバナンス、業務レビューに活用できます。",
  },
  {
    strong: "データ保護と整合性",
    text: "自動検証、照合処理、適切な運用管理を通じて、請求・市場・顧客業務におけるデータの正確性を維持します。",
  },
];

export default function JPSecurityPage() {
  return (
    <>
      <TechHero
        eyebrow="テクノロジー / セキュリティ"
        title="セキュリティ"
        lede="Tally+は、安全性・可用性・コンプライアンスを備え、顧客・メーター・請求・市場・業務データを安全に保護することで、エネルギー小売業務の安定運用とガバナンス対応を支援します。"
      />

      <TechIntroBand
        eyebrow="信頼性"
        heading="安心して導入いただくために"
        large
        paragraphs={[
          "Tally+には、セキュリティ、プライバシー保護、安定した業務運用を支えるための仕組みが組み込まれています。",
          "エンタープライズ企業に求められる調達・リスク評価・コンプライアンス審査にも対応し、複雑かつ変化の多いエネルギー市場における安全で安定した運用を支援します。",
        ]}
        pills={[
          { label: "コンプライアンス規制対応", href: "#sec-compliance-heading" },
          { label: "データ保護・整合性", href: "#sec-data-heading" },
          { label: "安定運用・障害対応", href: "#sec-hosting-heading" },
        ]}
      />

      <TechSection
        id="sec-principles-heading"
        eyebrow="基本方針"
        lede="Tally は、以下の 3 つの基本方針に基づいてサービスを提供しています。"
        large
      >
        <TechCardGrid items={principleCards} columns={3} />
      </TechSection>

      <TechSection
        id="sec-compliance-heading"
        eyebrow="コンプライアンス規制対応"
        heading="コンプライアンスおよび規制対応"
        large
        noBorder
        lede={
          <>
            <p className="m-0">
              エネルギー小売事業では、市場ルールや料金体系、顧客対応など、変化する制度や業務への柔軟な対応が求められます。Tally+は、こうした規制対応を前提に設計されており、日本のエネルギー市場における運用に対応しています。
            </p>
            <p className="m-0 mt-[16px]">
              本プラットフォームは、多様な料金プラン、料金設計、使用量・請求業務、市場連携業務をサポートします。さらに、設定変更や承認、実行プロセスに適切な管理・統制を組み込むことで、精算・請求業務の安定運用を支援します。
            </p>
          </>
        }
      />

      <TechSection
        id="sec-data-heading"
        eyebrow="データ保護・整合性"
        heading="データ保護と整合性"
        large
        lede="Tally+では、機密性の高い顧客データや業務データを安全に保護するため、各種セキュリティ対策および運用管理を実施しています。"
      >
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-[48px] gap-y-[36px] m-0 p-0">
          {dataProtectionItems.map((item) => (
            <div key={item.strong} className="flex flex-col gap-[10px]">
              <span className="w-[28px] h-[2px] bg-turquoise" aria-hidden />
              <dt className="text-[22px] font-semibold leading-[1.4] tracking-[-0.01em] text-navy m-0">
                {item.strong}
              </dt>
              <dd className="text-[20px] leading-[1.7] text-fg2 m-0">{item.text}</dd>
            </div>
          ))}
        </dl>
      </TechSection>

      <TechSection
        id="sec-hosting-heading"
        eyebrow="安定運用・障害対応"
        heading="ホスティングと安定運用"
        altBg
        large
        lede={
          <>
            <p className="m-0">
              Tally+は、可用性、安全性、安定したサービス提供を支える最新のクラウド基盤と運用体制のもとで提供されています。
            </p>
            <p className="m-0 mt-[16px]">
              運用体制には、監視、バックアップ・復旧、変更管理、インシデント対応、リリース管理などが含まれます。これらは、規制対応が求められるSaaSとして、適切な社内管理体制および運用手順に基づいて運営されています。
            </p>
          </>
        }
      />

      <TechSection
        id="sec-assurance-heading"
        eyebrow="認証・監査"
        heading="アシュアランスと認証情報"
        large
        lede="タリーでは、NDA締結のもと、調達プロセスやセキュリティ審査に必要な各種資料を提供しています。"
      >
        <TechBodyParagraph large>
          提供内容には、製品やホスティング構成、サービス範囲に応じて、セキュリティ対策の概要、認証情報、監査レポート、第三者評価資料などが含まれます。
        </TechBodyParagraph>
      </TechSection>
    </>
  );
}
