import type { Metadata } from "next";
import Image from "next/image";

const SLUG = "hedge-pricing-seminar-2026-10";
const PAGE_PATH = `/news/events/${SLUG}`;

const EYEBROW = "小売電気事業者向け無料セミナー";
const TITLE = "ヘッジ取引を活用した小売電気料金メニューの新潮流";

const REGISTRATION_FORM_URL = "https://forms.cloud.microsoft/r/Bk3CaUfwbn";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "ヘッジ取引を活用した料金メニューについて、商品設計、請求・顧客管理、価格リスク管理のポイントを解説する小売電気事業者向け無料セミナーです。",
  alternates: { canonical: PAGE_PATH },
};

const AUDIENCE = [
  "新たな料金メニューの開発を検討している方",
  "固定価格や市場連動以外の料金設計に関心のある方",
  "電力調達・リスク管理部門の責任者・担当者",
  "請求・顧客管理システムの要件を検討している方",
  "海外電力市場の最新動向や事例を知りたい方",
] as const;

const SCHEDULE = [
  {
    time: "9:00〜9:30",
    title: "受付",
  },
  {
    time: "9:30〜10:00",
    title: "先物市場を活用したヘッジ型料金メニューの設計",
    speaker: "鮫島 隆太郎 氏",
    role: "株式会社Power Risk Management & Solutions 代表取締役",
  },
  {
    time: "10:00〜10:30",
    title: "ヘッジ型料金メニューに対応する請求・顧客管理の実務",
    speaker: "山口 元久 氏",
    role: "Tally Group合同会社 カントリーセールスマネージャー",
  },
  {
    time: "10:30〜11:00",
    title: "ヘッジ型料金における価格リスク管理",
    speaker: "浅野 泰一 氏",
    role: "スキッピングストーン合同会社 代表取締役社長",
  },
  {
    time: "11:00〜11:30",
    title: "交流会・ネットワーキング",
    note: "講師や参加者同士の情報交換の場としてぜひご活用ください。",
  },
] as const;

const SPEAKERS = [
  {
    name: "鮫島 隆太郎 氏",
    role: "株式会社Power Risk Management & Solutions 代表取締役",
    bio: "電力市場自由化黎明期から電力取引・リスク管理に従事。先物市場やヘッジ取引を活用した料金メニュー設計、ポートフォリオ管理、市場リスク管理に関する豊富な実務経験を有し、小売電力事業者の競争力強化を支援。",
    photo: "/events/hedge-pricing-seminar-2026-10/ryutaro-samejima.jpg",
  },
  {
    name: "山口 元久 氏",
    role: "Tally Group合同会社 カントリーセールスマネージャー",
    bio: "電力・ガス業界向けソリューションの分野で約10年以上にわたり事業開発に従事。請求・顧客管理、フィールドサービス、エネルギー業務DXに関する豊富な知見を有し、日本の電力小売市場におけるRetail 3.0への移行を支援。",
    photo: "/events/hedge-pricing-seminar-2026-10/motohisa-yamaguchi.jpg",
  },
  {
    name: "浅野 泰一 氏",
    role: "スキッピングストーン合同会社 代表取締役社長",
    bio: "三井物産にて約38年間、エネルギー・社会インフラ分野の事業開発、投資、M&Aに従事。近年は再生可能エネルギー、コーポレートPPA、グリーン水素、蓄電池事業の開発や事業性評価、電力市場リスク分析を推進。",
    photo: "/events/hedge-pricing-seminar-2026-10/taiichi-asano.jpg",
  },
] as const;

function RegisterButton({
  className,
  fullWidth = false,
}: {
  className?: string;
  fullWidth?: boolean;
}) {
  const isExternal = REGISTRATION_FORM_URL.startsWith("http");

  return (
    <a
      href={REGISTRATION_FORM_URL}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`inline-flex items-center justify-center px-[24px] py-[14px] rounded-full text-[15px] font-semibold bg-turquoise text-navy hover:bg-turquoise-hover transition-colors ${
        fullWidth ? "w-full sm:w-auto" : ""
      } ${className ?? ""}`}
    >
      無料で参加登録する
    </a>
  );
}

export default function HedgePricingSeminarPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-[120px] pb-[64px] lg:pt-[148px] lg:pb-[80px]">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 700px 420px at 85% 20%, rgba(0,210,162,0.16), transparent 55%), radial-gradient(ellipse 500px 360px at 10% 90%, rgba(90,123,191,0.22), transparent 60%)",
          }}
        />
        <div className="relative max-w-[900px] mx-auto px-8">
          <p className="text-turquoise text-[15px] sm:text-[16px] font-semibold m-0">
            {EYEBROW}
          </p>
          <h1 className="mt-[16px] text-[28px] sm:text-[36px] lg:text-[44px] font-semibold leading-[1.35] tracking-[-0.02em] text-white m-0">
            ヘッジ取引を活用した
            <br />
            小売電気料金メニューの新潮流
          </h1>
          <div className="mt-[32px]">
            <RegisterButton />
          </div>
        </div>
      </section>

      {/* Main content */}
      <article className="bg-white py-[64px] lg:py-[88px]">
        <div className="max-w-[760px] mx-auto px-8 space-y-[48px]">
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-navy block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2"
            aria-label="セミナー参加登録フォームを開く"
          >
            <Image
              src="/events/hedge-pricing-seminar-2026-10/card.jpg"
              alt="ヘッジ取引を活用した小売電気料金メニューの新潮流"
              fill
              className="object-contain object-center transition-opacity hover:opacity-95"
              sizes="(min-width: 760px) 696px, 100vw"
              priority
            />
          </a>

          <section aria-labelledby="seminar-overview-heading">
            <h2 id="seminar-overview-heading" className="sr-only">
              セミナー概要
            </h2>
            <div className="space-y-[18px] text-[16px] sm:text-[17px] leading-[1.85] text-fg1">
              <p className="m-0">
                近年、日本の卸電力市場における金融取引の発展により、ヘッジ取引を活用した料金メニューが現実的な選択肢となりつつあります。
              </p>
              <p className="m-0">
                本セミナーでは、固定価格プランやブロック&インデックス型プランを例に、商品設計、請求・顧客管理、価格リスク管理のポイントを解説します。
              </p>
              <p className="m-0">
                小売電気事業者の商品戦略や競争力強化に役立つ実践的な知見をご紹介します。
              </p>
            </div>
          </section>

          <section aria-labelledby="seminar-audience-heading">
            <h2
              id="seminar-audience-heading"
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

          <section aria-labelledby="seminar-schedule-heading">
            <h2
              id="seminar-schedule-heading"
              className="text-[22px] sm:text-[24px] font-semibold text-navy m-0"
            >
              スケジュール
            </h2>
            <ol className="mt-[20px] m-0 p-0 list-none divide-y divide-stroke1 border-y border-stroke1">
              {SCHEDULE.map((item) => (
                <li
                  key={`${item.time}-${item.title}`}
                  className="grid grid-cols-1 sm:grid-cols-[9.5rem_1fr] gap-x-[20px] gap-y-[6px] py-[18px]"
                >
                  <p className="text-[14px] font-semibold text-navy m-0 tabular-nums">
                    {item.time}
                  </p>
                  <div>
                    <p className="text-[16px] font-semibold leading-[1.5] text-navy m-0">
                      {item.title}
                    </p>
                    {"speaker" in item && item.speaker ? (
                      <p className="mt-[6px] text-[14px] text-fg2 m-0">
                        {item.speaker}
                      </p>
                    ) : null}
                    {"role" in item && item.role ? (
                      <p className="mt-[2px] text-[14px] text-fg2 m-0">
                        {item.role}
                      </p>
                    ) : null}
                    {"note" in item && item.note ? (
                      <p className="mt-[6px] text-[14px] text-fg2 m-0">
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="seminar-speakers-heading">
            <h2
              id="seminar-speakers-heading"
              className="text-[22px] sm:text-[24px] font-semibold text-navy m-0"
            >
              講演者紹介
            </h2>
            <div className="mt-[20px] grid grid-cols-1 gap-[16px]">
              {SPEAKERS.map((speaker) => (
                <article
                  key={speaker.name}
                  className="border border-stroke1 rounded-2xl bg-white px-[22px] py-[22px] flex gap-[18px] items-start"
                >
                  {speaker.photo ? (
                    <div className="w-[88px] h-[88px] rounded-full overflow-hidden shrink-0 border border-stroke1 bg-bg2">
                      <Image
                        src={speaker.photo}
                        alt={`${speaker.name}の肖像`}
                        width={88}
                        height={88}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-[88px] h-[88px] rounded-full shrink-0 border border-stroke1 bg-bg2"
                      aria-hidden
                    />
                  )}
                  <div className="min-w-0">
                    <h3 className="text-[17px] font-semibold text-navy m-0">
                      {speaker.name}
                    </h3>
                    {speaker.role ? (
                      <p className="mt-[6px] text-[13px] font-medium text-fg2 m-0">
                        {speaker.role}
                      </p>
                    ) : null}
                    {speaker.bio ? (
                      <p className="mt-[12px] text-[14px] leading-[1.75] text-fg1 m-0">
                        {speaker.bio}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="register"
            className="scroll-mt-[100px] border-t border-stroke1 pt-[40px]"
            aria-labelledby="seminar-register-heading"
          >
            <h2
              id="seminar-register-heading"
              className="text-[22px] sm:text-[24px] font-semibold text-navy m-0"
            >
              お申し込み
            </h2>
            <p className="mt-[14px] text-[16px] leading-[1.75] text-fg1 m-0">
              セミナーへの参加をご希望の方は、下記よりお申し込みください。
            </p>
            <div className="mt-[24px]">
              <RegisterButton fullWidth />
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
