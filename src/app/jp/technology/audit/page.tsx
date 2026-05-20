import type { Metadata } from "next";
import {
  TechBodyParagraph,
  TechHero,
  TechIntroBand,
  TechSection,
  TechSubheading,
} from "@/components/jp/tech/tech-page";

export const metadata: Metadata = {
  title: "監査",
  description:
    "売上保全、照合済みメーターデータ・請求データ、オペレーションインテリジェンスにより、オーダー・ツー・キャッシュ（O2C）全体のトレーサビリティを確保。内部監査・第三者監査への対応を支援します。",
};

export default function JPAuditPage() {
  return (
    <>
      <TechHero
        eyebrow="テクノロジー / 監査"
        title="監査"
        lede="売上保全、照合済みメーターデータ・請求データ、オペレーションインテリジェンスにより、オーダー・ツー・キャッシュ（O2C）全体のトレーサビリティを確保。内部監査・第三者監査への対応を支援します。"
      />

      <TechIntroBand
        eyebrow="エビデンス管理"
        heading="エビデンス管理とガバナンス"
        paragraphs={[
          "Tally+ エコシステムは、請求業務、MDM（マスターデータ管理）、市場業務ワークフローと連携しながら、売上確保機能を包括的に提供します。",
          "これにより、異常値・調整・各種例外について、使用量データから請求・決済・清算に至るまで、一連のデータを追跡・検証できる環境を提供します。",
        ]}
        keywords={["売上確保", "データ検証", "オペレーションインテリジェンス"]}
      />

      <TechSection
        id="audit-monitor-heading"
        eyebrow="監視・照合"
        heading="監視・照合"
        lede="ADM（Automated Data Management）は、使用量・請求・メータリングなどの取引データを自動で検証・照合し、スマートな正規化と照合により、請求精度の向上と手作業による再作業の削減を実現します。"
      >
        <TechBodyParagraph>
          また、オペレーションダッシュボードやアラート機能により、例外や異常を可視化し、迅速な対応を支援します。尚、振り分け処理は、導入構成・連携内容により変動します）
        </TechBodyParagraph>

        <TechSubheading id="audit-timeseries-heading">
          インターバルデータおよび積算値データ
        </TechSubheading>
        <TechBodyParagraph>
          原データの取得から検証ルールの適用、請求算定要素に至るまでのトレーサビリティを提供します。
        </TechBodyParagraph>

        <TechSubheading id="audit-batch-heading">
          バッチおよびリアルタイムシグナル
        </TechSubheading>
        <TechBodyParagraph>
          エンタープライズ標準に準拠し、SIEM や ITSM との連携にも対応可能な監視機能を提供します。
        </TechBodyParagraph>

        <TechSubheading id="audit-genai-heading">
          生成 AI によるチェック機能
        </TechSubheading>
        <TechBodyParagraph>
          請求・データ・プロセス・ドキュメントの各種検証を支援する AI エージェントが、不整合を検知し、担当者による確認作業をサポートします。
        </TechBodyParagraph>
      </TechSection>

      <TechSection
        id="audit-gov-heading"
        eyebrow="ガバナンス"
        heading="ガバナンス"
        altBg
        lede="職務分離は、役割にベースのアクセス制御により担保されます。ポータル単位での詳細な権限制御にも対応しています。"
      >
        <TechBodyParagraph>
          重要な設定には承認・確認プロセスを適用し、価格・商品変更については統制されたリリース管理のもとで運用されます。
        </TechBodyParagraph>
        <TechBodyParagraph>
          これにより、電力小売業務に求められるオペレーショナルリスク管理要件に対応します。
        </TechBodyParagraph>

        <TechSubheading id="audit-wf-heading">ワークフロー管理・例外対応</TechSubheading>
        <TechBodyParagraph>
          複雑な電力小売業務に対応するため、運用チーム向けに柔軟な例外管理およびワークフロー管理を提供します。
        </TechBodyParagraph>

        <TechSubheading id="audit-cm-heading">変更管理</TechSubheading>
        <TechBodyParagraph>
          既存システムとの並行稼働および段階的な移行アプローチ（ストラングラーフィグ、アブストラクション分離など）により、大規模切替に伴う運用リスクおよび監査リスクを低減します。
        </TechBodyParagraph>
      </TechSection>

      <TechSection
        id="audit-check-heading"
        eyebrow="コンプライアンス"
        heading="コンプライアンスチェック・監査エビデンス"
        lede="定期確認プロセス、データエクスポート機能、監査向け証跡パッケージを通じて、プラットフォームログ、照合結果、設定スナップショットなどを統合した監査対応資料を生成します。"
      >
        <TechBodyParagraph>
          お客様の統制要件に応じて、必要な範囲・粒度で柔軟に出力可能です。
        </TechBodyParagraph>

        <TechSubheading id="audit-cadence-heading">実施サイクル</TechSubheading>
        <TechBodyParagraph>
          日次の自動チェックに加え、モデル変更や料金改定時には定期的な手動レビューを組み合わせることで、運用サイクルに応じた検証を実現します。
        </TechBodyParagraph>

        <TechSubheading id="audit-artifacts-heading">提供可能な成果物例</TechSubheading>
        <TechBodyParagraph>
          統制マトリクス、請求・決済におけるサンプリング手法、例外管理レポート、第三者監査人向けレターなどを、タリーの担当窓口経由でご提供します。
        </TechBodyParagraph>
      </TechSection>
    </>
  );
}
