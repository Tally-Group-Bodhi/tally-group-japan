import type { Metadata } from "next";
import { MarketingLink } from "@/components/marketing/marketing-link";
import { WhitepaperRequestForm } from "@/components/jp/insights/whitepaper-request-form";

const SLUG = "japan-electricity-retail-market-outlook-2026-09-10";
const PAGE_PATH = `/insights/resources/${SLUG}`;

const TITLE = "日本の電力小売市場 今後 10 年の展望";
const SUBTITLE = "リテール 3.0—適者生存の時代";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "日本の電力小売市場が向かう「リテール 3.0」の姿を展望し、市場変化への対応策と成功のための実践的なアプローチを解説するホワイトペーパーです。",
  alternates: { canonical: PAGE_PATH },
};

const LEARNINGS = [
  "日本の電力小売市場の進化と今後 10 年の市場予測",
  "リテール 3.0 時代における競争環境の変化",
  "卸電力市場の成熟が小売事業者へ与える影響",
  "海外自由化市場における成功事例",
  "市場再編時代を勝ち抜くための戦略的アプローチ",
  "収益性と成長を両立するためのベストプラクティス",
] as const;

const AUDIENCE = [
  "電力小売事業者の経営層・事業責任者",
  "電力調達・リスク管理部門",
  "新規参入を検討する事業者",
  "エネルギー業界の投資家・アナリスト",
  "電力市場制度や市場動向を研究する関係者",
] as const;

export default function JapanElectricityRetailMarketOutlookPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-[120px] pb-[64px] lg:pt-[148px] lg:pb-[80px]">
        <div
          aria-hidden
          className="absolute -right-[120px] -bottom-[160px] w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,210,162,0.18), transparent 60%)",
          }}
        />
        <div className="relative max-w-[900px] mx-auto px-8">
          <MarketingLink
            href="/insights/resources"
            className="inline-flex items-center gap-[6px] text-[13px] font-semibold text-white/75 hover:text-turquoise transition-colors"
          >
            <span
              className="material-symbols-outlined text-[18px]"
              aria-hidden
            >
              arrow_back
            </span>
            資料一覧へ
          </MarketingLink>

          <h1 className="mt-[28px] text-[28px] sm:text-[36px] lg:text-[44px] font-semibold leading-[1.35] tracking-[-0.02em] text-white m-0">
            {TITLE}
          </h1>
          <p className="mt-[18px] text-[22px] sm:text-[24px] font-semibold leading-[1.5] text-white/90 m-0">
            {SUBTITLE}
          </p>
          <div className="mt-[24px] text-[17px] sm:text-[19px] leading-[1.7] text-white/80">
            <p className="m-0">著者：ピーター・ウェイガンド</p>
            <p className="m-0">最高事業成長責任者</p>
          </div>
          <a
            href="#request-form"
            className="mt-[32px] inline-flex items-center justify-center px-[22px] py-[12px] rounded-full text-[14px] font-semibold bg-turquoise text-navy hover:bg-turquoise-hover transition-colors"
          >
            資料を請求する
          </a>
        </div>
      </section>

      {/* Body */}
      <article className="bg-white py-[64px] lg:py-[88px]">
        <div className="max-w-[760px] mx-auto px-8 space-y-[48px]">
          <section aria-labelledby="wp-overview-heading">
            <h2
              id="wp-overview-heading"
              className="text-[22px] sm:text-[24px] font-semibold text-navy m-0"
            >
              ホワイトペーパー概要
            </h2>
            <div className="mt-[20px] space-y-[18px] text-[16px] sm:text-[17px] leading-[1.85] text-fg1">
              <p className="m-0">
                日本の電力小売市場は、全面自由化から約 10
                年を迎え、新たな転換点に差し掛かっています。
              </p>
              <p className="m-0">
                自由化初期に誕生した「リテール
                1.0」、その後の競争拡大を特徴とする「リテール
                2.0」を経て、市場はいま「リテール
                3.0」の時代へと移行しています。この変化は単なる制度改正ではなく、事業者の競争力、市場構造、収益モデルそのものを大きく変えるものです。
              </p>
              <p className="m-0">
                本ホワイトペーパーでは、世界各国の自由化電力市場での経験と知見をもとに、日本の電力小売市場が今後
                10
                年間でどのように進化していくのかを考察します。また、市場構造の変化が電力小売事業者に与える影響と、海外市場で実際に成果を上げてきた成功戦略について解説します。
              </p>
            </div>
          </section>

          <section aria-labelledby="wp-author-heading">
            <h2
              id="wp-author-heading"
              className="text-[22px] sm:text-[24px] font-semibold text-navy m-0"
            >
              著者より
            </h2>
            <div className="mt-[20px] space-y-[18px] text-[16px] sm:text-[17px] leading-[1.85] text-fg1">
              <p className="m-0">
                私はこれまで、世界各国の自由化電力市場に携わり、日本市場についても全面自由化が開始される
                2 年前から事業立ち上げに関与してきました。
              </p>
              <p className="m-0">
                本ホワイトペーパーは、こうした国内外での経験をもとに、日本の電力小売市場が「リテール
                3.0」へ移行する中で起こりうる変化、その変化が事業者に与える影響、そして競争が成熟した海外市場で実践されている成功戦略について独自の視点からまとめたものです。
              </p>
            </div>
          </section>

          <section aria-labelledby="wp-learnings-heading">
            <h2
              id="wp-learnings-heading"
              className="text-[22px] sm:text-[24px] font-semibold text-navy m-0"
            >
              本ホワイトペーパーでわかること
            </h2>
            <ul className="mt-[20px] space-y-[12px] pl-[22px] m-0 text-[16px] sm:text-[17px] leading-[1.75] text-fg1 list-disc marker:text-turquoise">
              {LEARNINGS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="wp-audience-heading">
            <h2
              id="wp-audience-heading"
              className="text-[22px] sm:text-[24px] font-semibold text-navy m-0"
            >
              このような方におすすめ
            </h2>
            <ul className="mt-[20px] space-y-[12px] pl-[22px] m-0 text-[16px] sm:text-[17px] leading-[1.75] text-fg1 list-disc marker:text-turquoise">
              {AUDIENCE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <aside className="rounded-2xl border border-turquoise/25 bg-[linear-gradient(160deg,rgba(0,210,162,0.10)_0%,rgba(44,54,93,0.04)_100%)] px-[24px] py-[28px] sm:px-[28px] sm:py-[32px]">
            <p className="text-[17px] sm:text-[18px] font-semibold leading-[1.6] text-navy m-0">
              今後 10
              年、日本の電力小売市場は「成長の時代」から「選別の時代」へ。
            </p>
            <p className="mt-[14px] text-[15px] sm:text-[16px] leading-[1.8] text-fg1 m-0">
              市場環境が大きく変化する中で、生き残る事業者と淘汰される事業者を分ける要因とは何か。本ホワイトペーパーで詳しく解説します。
            </p>
          </aside>
        </div>
      </article>

      {/* Request form */}
      <section
        id="request-form"
        className="scroll-mt-[100px] bg-bg2 py-[64px] lg:py-[88px] border-t border-stroke1"
        aria-labelledby="request-form-heading"
      >
        <div className="max-w-[640px] mx-auto px-8">
          <div className="bg-white border border-stroke1 rounded-2xl shadow-[0_8px_28px_rgba(44,54,93,0.08)] px-[24px] py-[32px] sm:px-[36px] sm:py-[40px]">
            <h2
              id="request-form-heading"
              className="text-[24px] sm:text-[28px] font-semibold text-navy m-0"
            >
              資料請求フォーム
            </h2>
            <p className="mt-[14px] mb-[28px] text-[15px] leading-[1.75] text-fg2 m-0">
              下記フォームに必要事項をご入力の上、「資料を請求する」ボタンをクリックしてください。追って、資料を送信いたします。
            </p>
            <WhitepaperRequestForm whitepaperTitle={TITLE} />
          </div>
        </div>
      </section>
    </>
  );
}
