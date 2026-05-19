import type { Metadata } from "next";
import {
  TechBodyParagraph,
  TechBulletList,
  TechHero,
  TechIntroBand,
  TechSection,
  TechSubheading,
} from "@/components/jp/tech/tech-page";

export const metadata: Metadata = {
  title: "監査",
  description:
    "売上保全から監査対応まで。メータ・ツー・キャッシュ全体のトレーサビリティを、照合データとインテリジェンスで確保。",
};

export default function JPAuditPage() {
  return (
    <>
      <TechHero
        eyebrow="テクノロジー / 監査"
        title={
          <>
            売上保全から監査対応まで
            <br className="hidden sm:block" />
            <span className="text-fg2 font-light text-[26px] lg:text-[32px]">
              メータ・ツー・キャッシュ全体のトレーサビリティを、照合データとインテリジェンスで確保。
            </span>
          </>
        }
      />

      <TechIntroBand
        eyebrow="エビデンス管理"
        heading="エビデンス管理とガバナンス"
        paragraphs={[
          "Tally+ エコシステムは、請求業務、MDM（メーターデータ管理）、市場業務ワークフローと連携しながら、売上確保機能を包括的に提供します。",
          "これにより、異常値・調整・各種例外について、使用量データから請求、決済・清算に至るまで、一連のデータを追跡・検証できる環境を提供します。",
        ]}
        keywords={["売上確保", "データ検証", "オペレーションインテリジェンス"]}
      />

      <TechSection
        id="audit-monitor-heading"
        eyebrow="監視・照合"
        heading="監視・照合"
        lede="ADM（取引データ自動管理）は、使用量データ・請求データ・メーターデータなどの取引データを自動的に検証・照合し、データ形式の補正および標準化を通じて、請求精度の向上と手作業による再処理の削減を実現します。"
      >
        <TechBodyParagraph>
          また、ダッシュボードおよびアラート機能により異常や例外を可視化し、迅速な運用対応を支援します（ルーティング方法は導入構成・連携内容に応じて異なります）。
        </TechBodyParagraph>

        <TechSubheading id="audit-timeseries-heading">
          時系列使用量データおよび積算値データのトレーサビリティ
        </TechSubheading>
        <TechBulletList
          items={[
            {
              text: "生データの取得から検証ルール、請求計算に至るまで、データ処理の履歴を追跡可能とします。",
            },
            {
              text: "バッチ処理およびリアルタイム監視の双方に対応し、SIEMやIT運用管理ツールとの連携も可能です。",
            },
          ]}
        />

        <TechSubheading id="audit-genai-heading">生成AIを活用した検証支援</TechSubheading>
        <TechBodyParagraph>
          生成AIを活用したオペレーションインテリジェンスにより、請求書検証・データ検証・プロセス検証・ドキュメント検証を支援し、不整合や異常の検知およびレビュー業務の効率化を実現します。
        </TechBodyParagraph>
      </TechSection>

      <TechSection
        id="audit-gov-heading"
        eyebrow="ガバナンス"
        heading="ガバナンス"
        altBg
        lede="職務分掌は、ロールベースのアクセス制御、ポータル単位の詳細権限設定、承認・確認プロセス、価格・商品変更時の統制されたリリース管理により維持されます。"
      >
        <TechBodyParagraph>
          これにより、電力小売業務におけるオペレーショナルリスク管理に対応します。
        </TechBodyParagraph>

        <TechSubheading id="audit-wf-heading">ワークフロー管理・例外対応</TechSubheading>
        <TechBodyParagraph>
          複雑な電力小売業務に対応するため、運用チーム向けに柔軟な例外管理およびワークフロー管理を提供します。
        </TechBodyParagraph>

        <TechSubheading id="audit-cm-heading">変更管理</TechSubheading>
        <TechBodyParagraph>
          既存システムとの並行稼働および段階的な移行アプローチにより、大規模切替時の運用リスクおよび監査リスクを低減します。
        </TechBodyParagraph>
      </TechSection>

      <TechSection
        id="audit-check-heading"
        eyebrow="コンプライアンス"
        heading="コンプライアンスチェック・監査エビデンス"
        lede="定期確認、エクスポート機能、監査向け証跡資料により、プラットフォームログ、照合結果、設定スナップショットなどを組み合わせた監査対応資料を提供します。"
      >
        <TechBodyParagraph>お客様の統制要件に応じて、必要な範囲で出力可能です。</TechBodyParagraph>

        <TechSubheading id="audit-cadence-heading">実施サイクル</TechSubheading>
        <TechBodyParagraph>
          日次の自動チェックに加え、モデル変更や料金改定時には定期的な手動レビューを実施可能です。
        </TechBodyParagraph>

        <TechSubheading id="audit-artifacts-heading">提供可能な成果物例</TechSubheading>
        <TechBodyParagraph>
          統制一覧、請求・決済に関するサンプリング手法、未対応例外レポート、第三者監査人向けレターなどを提供します。
        </TechBodyParagraph>
        <TechBodyParagraph>
          これらは タリーの担当窓口を通じて提供されます。
        </TechBodyParagraph>
      </TechSection>
    </>
  );
}
