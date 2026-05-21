import type { Metadata } from "next";
import { MarketingLink } from "@/components/marketing/marketing-link";
import { JPCtaSection } from "@/components/jp/cta-section";

export const metadata: Metadata = {
  title: "VoltEdge Retail（北米） | 導入事例",
  description:
    "競争の激しい北米の電力小売において、時間帯別料金やグリーン付加サービスを投入しつつ、請求の正確性を維持し、サポート件数の増加を抑えた取り組みです。",
};

const pills = ["北米", "小売電気", "電力"];

const solutionBullets = [
  "ルール駆動の価格設定とライダーにより、請求書発行前の手作業による表チェックを削減しました。",
  "エージェントはお客様と同じ台帳を参照できるため、複雑な問い合わせの処理時間を短縮しました。",
  "変更にわたる監査証跡により、規制当局や社内レビューへの対応が容易になりました。",
];

const metrics: { value: string; label: string }[] = [
  {
    value: "XX%",
    label: "例：市場投入までのリードタイム短縮（数値は確定次第更新）",
  },
  {
    value: "X.XM+",
    label: "例：対応顧客アカウント数（数値は確定次第更新）",
  },
  {
    value: "XX%",
    label: "例：請求例外の削減（数値は確定次第更新）",
  },
];

const VIDEO_GRADIENT =
  "linear-gradient(135deg, #1E2840 0%, #2C365D 55%, #0B7A66 100%)";
const VIDEO_PATTERN =
  "radial-gradient(circle at 85% 20%, rgba(0,210,162,0.35), transparent 55%)";

function ArticleHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="mt-[56px] mb-[20px] text-[24px] lg:text-[28px] font-semibold leading-[1.35] tracking-[-0.01em] text-navy first:mt-0"
    >
      {children}
    </h2>
  );
}

export default function VoltedgeRetailCaseStudyPage() {
  return (
    <>
      {/* Hero zone (back nav + hero share the same gradient) */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 900px 600px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        {/* Back nav */}
        <div className="pt-[112px] lg:pt-[140px] pb-[12px] lg:pb-[16px]">
          <div className="max-w-[1240px] mx-auto px-8">
            <MarketingLink
              href="/insights/case-studies"
              className="inline-flex items-center gap-[6px] text-[13px] font-semibold text-navy hover:text-turquoise transition-colors"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden
              >
                arrow_back
              </span>
              導入事例一覧へ
            </MarketingLink>
          </div>
        </div>

        {/* Hero */}
        <section className="relative pt-[24px] pb-[56px] lg:pt-[32px] lg:pb-[80px]">
          <div className="max-w-[1240px] mx-auto px-8">
          <ul
            aria-label="地域・トピック・分野"
            className="flex flex-wrap gap-[8px] list-none p-0 m-0 mb-[24px]"
          >
            {pills.map((pill) => (
              <li
                key={pill}
                className="inline-flex items-center px-[12px] py-[6px] rounded-full text-[12px] font-semibold tracking-[0.04em] text-navy bg-white border border-stroke1"
              >
                {pill}
              </li>
            ))}
          </ul>

          <h1 className="text-[34px] lg:text-[52px] font-light leading-[1.25] tracking-[-0.025em] text-navy max-w-[24ch] m-0">
            複雑な商品ラインを拡大しつつ、バックオフィス人員の増員を抑える
          </h1>

          <p className="mt-[20px] text-[17px] leading-[1.75] text-fg2 max-w-[60ch] m-0">
            競争の激しい北米の電力小売において、時間帯別料金やグリーン付加サービスを投入しつつ、請求の正確性を維持し、サポート件数の増加を抑えた取り組みです。
          </p>

          <ul
            aria-label="主要指標"
            className="mt-[40px] grid grid-cols-1 sm:grid-cols-3 gap-[16px] sm:gap-[12px] list-none p-0 max-w-[920px]"
          >
            {metrics.map((m) => {
              const numeric = m.value.replace(/[%+]+$/, "");
              const suffix = m.value.match(/[%+]+$/)?.[0] ?? "";
              return (
                <li
                  key={m.label}
                  className="bg-white border border-stroke1 rounded-2xl px-[24px] py-[20px] shadow-[0_2px_12px_rgba(44,54,93,0.04)]"
                >
                  <div className="flex items-baseline gap-[2px]">
                    <span className="text-[36px] lg:text-[44px] font-light leading-none tracking-[-0.03em] text-navy tabular-nums">
                      {numeric}
                    </span>
                    {suffix && (
                      <span className="text-[22px] lg:text-[26px] font-light leading-none text-turquoise">
                        {suffix}
                      </span>
                    )}
                  </div>
                  <p className="mt-[10px] text-[13px] font-medium text-fg2 m-0 leading-[1.5]">
                    {m.label}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      </div>

      {/* Article */}
      <article
        className="bg-bg2 pt-[40px] pb-[80px] lg:pt-[48px] lg:pb-[96px]"
        aria-labelledby="cs-detail-title"
      >
        <div className="max-w-[820px] mx-auto px-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-fg2 m-0">
            VoltEdge Retail
          </p>

          <h2 id="cs-detail-title" className="sr-only">
            複雑な商品ラインを拡大しつつ、バックオフィス人員の増員を抑える
          </h2>

          {/* Testimonial */}
          <aside
            aria-label="お客様の声"
            className="mt-[28px] bg-turquoise/10 rounded-2xl p-[28px] lg:p-[32px]"
          >
            <span
              className="material-symbols-outlined text-[32px] text-turquoise"
              aria-hidden
            >
              format_quote
            </span>
            <blockquote className="mt-[8px] m-0 text-[18px] lg:text-[20px] font-medium italic leading-[1.6] text-navy">
              Tally+が料金組み立てを自動化したことで、新商品を四半期ではなく数週間で投入でき、チームは顧客がどの条件に縛られているかを一か所で把握できるようになりました。
            </blockquote>
            <p className="mt-[20px] text-[13.5px] leading-[1.5] text-fg2 m-0">
              <strong className="font-semibold text-fg1">
                サラ・ミッチェル
              </strong>
              、小売オペレーション担当副社長、VoltEdge Retail
            </p>
          </aside>

          {/* Prose sections */}
          <div className="mt-[56px]">
            <ArticleHeading id="challenge">課題</ArticleHeading>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[16px] leading-[1.85] text-fg1 m-0">
                VoltEdgeは、競争の激しい市場で時間帯別（TOU）料金体系や任意のグリーン商品によって差別化する必要がありましたが、請求オペレーションの膨張や、例外がコールセンターに流れることは避けたかったのです。
              </p>
              <p className="text-[16px] leading-[1.85] text-fg1 m-0">
                レガシーの表計算や場当たり的な回避策ではマーケティングのペースに追いつけず、新しいライダーが加わるたびに請求例外のリスクとお客様の不満が増えていました。
              </p>
            </div>

            <ArticleHeading id="solution">ソリューション</ArticleHeading>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[16px] leading-[1.85] text-fg1 m-0">
                Tally+は料金組み立てと商品ルールを自動化し、新しいオファーを小売の厳しいスケジュールに合わせて設定・リリースできるようにしました。カスタマーサービスとバックオフィスは、加入・ライダー・料金について一貫した単一の画面で業務を行います。
              </p>
              <p className="text-[16px] leading-[1.85] text-fg1 m-0">
                実装では、都度のカスタム開発ではなく、運用がガバナンスのもとで日々の変更を自ら担えるよう、繰り返し使える設定パターンに焦点を置きました。
              </p>
            </div>

            <ul className="mt-[24px] flex flex-col gap-[12px] list-none p-0 m-0">
              {solutionBullets.map((item) => (
                <li
                  key={item}
                  className="pl-[28px] relative text-[15.5px] leading-[1.7] text-fg2 before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-[10px] before:h-[10px] before:rounded-full before:border-[2px] before:border-turquoise before:bg-turquoise/30"
                >
                  {item}
                </li>
              ))}
            </ul>

            <ArticleHeading id="results">定量的な成果</ArticleHeading>
            <p className="text-[16px] leading-[1.85] text-fg1 m-0">
              VoltEdgeは、請求担当者を増やさずに複数の付加サービスを投入し、商品構成が拡大してもコール量の上昇を抑えました。ロールアウト時も請求に関する苦情の急増はなく、精度は高水準を維持しました。
            </p>

            <ArticleHeading id="video">動画</ArticleHeading>
            <button
              type="button"
              aria-label="動画を再生：サラ・ミッチェル氏による VoltEdge の変革（プレースホルダー）"
              className="group relative w-full aspect-video overflow-hidden rounded-2xl border border-stroke1 focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2 transition-shadow hover:shadow-[0_16px_48px_rgba(44,54,93,0.18)]"
              style={{ background: VIDEO_GRADIENT }}
            >
              <span
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{ background: VIDEO_PATTERN }}
              />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid place-items-center w-[72px] h-[72px] rounded-full bg-white/95 text-navy shadow-[0_8px_28px_rgba(0,0,0,0.25)] transition-transform group-hover:scale-105">
                  <span
                    className="material-symbols-outlined text-[36px] translate-x-[2px]"
                    aria-hidden
                  >
                    play_arrow
                  </span>
                </span>
              </span>
              <span className="absolute top-[14px] left-[14px] inline-flex items-center gap-1 px-[10px] py-[5px] rounded-full bg-black/45 text-white text-[11px] font-semibold uppercase tracking-[0.1em] backdrop-blur-sm">
                <span
                  className="material-symbols-outlined text-[14px]"
                  aria-hidden
                >
                  play_circle
                </span>
                動画
              </span>
            </button>
            <p className="mt-[16px] text-center text-[14px] leading-[1.6] text-fg2 m-0">
              動画：VoltEdge Retail
              小売オペレーション担当副社長のサラ・ミッチェル氏が、変革の経緯を語ります。
            </p>
          </div>

          <div className="mt-[64px] pt-[40px] border-t border-stroke1 flex flex-wrap items-center justify-between gap-[16px]">
            <MarketingLink
              href="/insights/case-studies"
              className="inline-flex items-center gap-[6px] text-[14px] font-semibold text-navy hover:text-turquoise transition-colors"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden
              >
                arrow_back
              </span>
              導入事例一覧へ
            </MarketingLink>
            <MarketingLink
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-semibold bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all shadow-sm"
            >
              デモのご相談
              <span
                className="material-symbols-outlined text-[16px]"
                aria-hidden
              >
                arrow_forward
              </span>
            </MarketingLink>
          </div>
        </div>
      </article>

      {/* Final CTA */}
      <JPCtaSection
        eyebrow="次のステップ"
        title="お客様の事業に Tally+ がどのように貢献できるか、ご相談ください。"
        description="業務課題、市場戦略、プラットフォーム導入計画について、お気軽にご相談ください。"
      />
    </>
  );
}
