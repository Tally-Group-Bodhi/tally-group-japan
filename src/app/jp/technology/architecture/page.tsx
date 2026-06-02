import type { Metadata } from "next";
import {
  TechBodyParagraph,
  TechBulletList,
  TechHero,
  TechPrincipleGrid,
  TechSection,
  TechSubheading,
} from "@/components/jp/tech/tech-page";

export const metadata: Metadata = {
  title: "アーキテクチャ",
  description:
    "Tally+ のモジュール型サービス、システム連携、複数チャネルを支えるアーキテクチャ原則と参照アーキテクチャの概要。",
};

const principles = [
  {
    icon: "architecture",
    title: "設計原則",
    items: [
      "信頼性、セキュリティ、コスト最適化、運用性、パフォーマンス効率をすべての設計基盤として適用",
    ],
  },
  {
    icon: "view_module",
    title: "モジュール化",
    items: [
      "モジュール型コンポーネントを前提とした設計",
      "疎結合・高凝集により、安定したプラットフォーム構造を実現",
      "プラットフォーム内で再利用可能とし、必要に応じて他環境への展開も可能",
      "モジュール内の柔軟性を確保",
      "モジュール間の拡張性・柔軟性を確保",
    ],
  },
  {
    icon: "verified_user",
    title: "コンプライアンス遵守",
    items: [
      "すべてのソリューションは、対象領域における規制および業界要件に準拠",
    ],
  },
  {
    icon: "integration_instructions",
    title: "統合対応",
    items: [
      "モジュール間および外部連携において、業界標準のエンタープライズ統合パターンに準拠",
      "APIにより社内外のシステム連携を実現",
      "変更イベントに基づきコンポーネント間の状態変化を検知し、必要に応じて外部システムへリアルタイムに連携",
    ],
  },
  {
    icon: "group_work",
    title: "統合設計",
    items: [
      "共通機能はモジュールとして統合・集約",
      "コンプライアンスリスクの低減を実現",
    ],
  },
  {
    icon: "stars",
    title: "価値に基づく優先順位",
    items: [
      "請求・決済・市場取引などの重要な業務領域を最優先",
      "競争優位性の源泉となる領域を強化",
      "イノベーションおよび成長領域への投資を推進",
      "コンプライアンスおよびセキュリティを最優先事項として確保",
    ],
  },
  {
    icon: "trending_up",
    title: "段階的進化",
    items: [
      "ビッグバン型の一括移行ではなく、段階的な進化を優先",
      "機能拡張時には、標準的な移行パターン（Strangler Fig、抽象化分離、並行稼働など）を適用",
      "早期に価値を提供しながら、リスクを最小化",
    ],
  },
];

export default function JPArchitecturePage() {
  return (
    <>
      <TechHero
        eyebrow="テクノロジー / アーキテクチャ"
        title="Tally+ アーキテクチャ概要"
        lede="Tally+プラットフォームでは、モジュール型サービスとシステム連携、複数チャネルを前提としたアーキテクチャ原則および参照アーキテクチャを定義しています。"
      />

      <TechSection
        id="principles-heading"
        eyebrow="アーキテクチャ原則"
        heading="アーキテクチャ原則"
        large
      >
        <TechPrincipleGrid cards={principles} />
      </TechSection>

      <TechSection
        id="target-heading"
        eyebrow="参照アーキテクチャ"
        heading="参照アーキテクチャ"
        altBg
        large
        lede={
          <p className="m-0">
            Tally+はモジュール型設計を前提としたプラットフォームです。エネルギー小売事業者のエンタープライズ環境と連携し、各種システムとの統合を実現します。
          </p>
        }
      >
        <TechSubheading>コアプラットフォーム内構成</TechSubheading>
        <TechBodyParagraph large>
          統合されたアクセス層および顧客体験層がモジュール型サービス層の上位に位置します。統合機能とイベント処理により、各システム間の連携を実現します。
        </TechBodyParagraph>
        <div className="mt-[16px]">
          <TechBulletList
            large
            items={[
              {
                strong: "非認証領域",
                text: "Webサイト、SNS、営業支援ポータル",
              },
              {
                strong: "認証領域",
                text: "顧客ポータル、顧客アプリ、法人向けポータル、代理店ポータル",
              },
              {
                text: "統合レイヤー（汎用・個別連携）およびイベント基盤によるモジュール間・企業システム連携",
              },
            ]}
          />
        </div>

        <TechSubheading>エンタープライズ連携（参考）</TechSubheading>
        <TechBodyParagraph large>
          クライアント側における代表的なシステム連携です。
        </TechBodyParagraph>
        <div className="mt-[16px]">
          <TechBulletList
            large
            columns={2}
            items={[
              { text: "エンタープライズデータプラットフォーム" },
              { text: "顧客ID管理・認証基盤（IDAM）" },
              { text: "マーケティング基盤：人事・財務ERP" },
              { text: "顧客既存の業務支援システム群" },
            ]}
          />
        </div>
      </TechSection>
    </>
  );
}
