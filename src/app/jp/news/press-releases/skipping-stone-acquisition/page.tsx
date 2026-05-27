import type { Metadata } from "next";
import Image from "next/image";
import { MarketingLink } from "@/components/marketing/marketing-link";

export const metadata: Metadata = {
  title: "Tally Group、スキッピングストーンを買収しグローバル展開を拡大",
  description:
    "Tally Groupは、エネルギー分野の戦略コンサルティングおよび導入支援サービスをグローバルに提供するスキッピングストーンの買収を発表しました。",
};

export default function JPSkippingStoneAcquisitionPage() {
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
              href="/news/press-releases"
              className="inline-flex items-center gap-[6px] text-[13px] font-semibold text-navy hover:text-turquoise transition-colors"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden
              >
                arrow_back
              </span>
              プレスリリース一覧へ
            </MarketingLink>
          </div>
        </div>

        {/* Hero */}
        <section className="relative pt-[24px] pb-[48px] lg:pt-[32px] lg:pb-[64px]">
          <div className="max-w-[1240px] mx-auto px-8">
            <h1 className="text-[32px] lg:text-[48px] font-light leading-[1.3] tracking-[-0.02em] text-navy max-w-[24ch] m-0">
              Tally Group、スキッピングストーンを買収しグローバル展開を拡大
            </h1>
            <p className="mt-[16px] text-sm font-semibold text-fg2 m-0">
              <time dateTime="2026-03-04">2026年3月4日</time>
            </p>
          </div>
        </section>
      </div>

      {/* Article */}
      <article className="bg-bg2 py-[80px] lg:py-[96px]">
        <div className="max-w-[760px] mx-auto px-8">
          <figure className="m-0 mb-[40px] lg:mb-[48px] rounded-2xl overflow-hidden border border-stroke1 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <Image
              src="/corporate/SS Acquisition PR Image JP.png"
              alt="Tally Group のスキッピングストーン買収に関する発表"
              width={1200}
              height={664}
              className="w-full h-auto"
            />
          </figure>

          <div className="space-y-[18px]">
            <p className="text-[20px] leading-[1.7] text-fg1 m-0">
              オーストラリア・メルボルン — 2026年3月4日 ― Tally Groupは本日、エネルギー分野の戦略コンサルティングおよび導入支援サービスをグローバルに提供するスキッピングストーンの買収を発表しました。
            </p>
            <p className="text-[20px] leading-[1.7] text-fg1 m-0">
              スキッピングストーンはTally Groupの完全子会社として、従来のブランドを維持しながら事業運営を継続いたします。両社はそれぞれの強みを組み合わせることで、グローバル市場におけるGo-to-Market体制の拡充と、エネルギー市場向け戦略ソリューションの提供力強化を図ってまいります。
            </p>
            <p className="text-[20px] leading-[1.7] text-fg1 m-0">
              Tally GroupのCEO、アンドリュー・ダンカンは次のように述べています。「この度のスキッピングストーンの買収は、Tallyの次なるグローバル成長フェーズに向けた重要な一歩です。」
            </p>
            <p className="text-[20px] leading-[1.7] text-fg1 m-0">
              さらに、「スキッピングストーンの第一線で培った市場知見と高度なアドバイザリー力を、業界をリードする当社のプラットフォームと組み合わせることで、戦略立案から実行までをスピーディに実現するお手伝いをいたします。これにより、お客様がより迅速に成果を創出できるよう支援してまいります。」
            </p>
            <p className="text-[20px] leading-[1.7] text-fg1 m-0">
              また、「特に米国および日本を含む主要市場における当社のプレゼンスが大きく向上します。なかでも日本市場は、オーストラリア市場の約10倍の規模を有し、規制緩和が加速していることから、当社にとって極めて重要な成長市場です。」
            </p>
            <p className="text-[20px] leading-[1.7] text-fg1 m-0">
              「当社は昨年、日本において大手小売事業者向けに、クラウドネイティブかつAI対応した請求プラットフォームとして国内初の導入を実現しました。ピーターおよびスキッピングストーンのチームと連携し、この先行優位を最大限に活かしてまいります。」
            </p>
            <p className="text-[20px] leading-[1.7] text-fg1 m-0">
              「この度の買収により当社の競争力はさらに高まり、ユーティリティ業界向けテクノロジーソリューションのリーディングプロバイダーとして、グローバル規模での事業拡大を加速できると確信し、今後の成長機会に大きな期待を寄せています。」と述べています。
            </p>
            <p className="text-[20px] leading-[1.7] text-fg1 m-0">
              スキッピングストーンの創業者兼CEO、ピーター・ウェイガンドは次のように述べています。「世界のエネルギー市場は急速に変化しており、事業者には従来のコモディティサービスにとどまらない、より高度な価値提供が求められています。」
            </p>
            <p className="text-[20px] leading-[1.7] text-fg1 m-0">
              さらに、「これまでのお客様との取り組みを通じて、従来型のバックオフィスシステムでは、こうした複雑性を十分に支えることが難しいことが明らかになりました。世界中のエネルギープラットフォームを比較検討した結果、Tally Groupのテクノロジーの強みと柔軟性を高く評価し、パートナーとして最適であると判断しました。」と述べています。
            </p>

            <h2 className="text-[22px] font-semibold leading-[1.4] tracking-[-0.01em] text-navy m-0 mt-[40px] mb-[4px]">
              スキッピングストーンについて
            </h2>
            <p className="text-[20px] leading-[1.7] text-fg1 m-0">
              スキッピングストーンは、エネルギー市場戦略コンサルティングおよび導入支援サービスを提供する、受賞歴を有するグローバルなコンサルティング会社です。エネルギー業界の経営経験を有するメンバーにより設立・運営され、業界全体にわたる深い専門性と豊富な実績を強みとしています。世界各地のお客様に対し、市場機会の創出や複雑な課題解決を支援しています。
            </p>
          </div>

          <div className="mt-[64px] pt-[40px] border-t border-stroke1 flex flex-wrap items-center justify-between gap-[16px]">
            <MarketingLink
              href="/news/press-releases"
              className="inline-flex items-center gap-[6px] text-[14px] font-semibold text-navy hover:text-turquoise transition-colors"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden
              >
                arrow_back
              </span>
              プレスリリース一覧へ
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
    </>
  );
}
