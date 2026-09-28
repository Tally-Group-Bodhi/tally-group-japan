import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "個人情報に関する基本方針",
  description:
    "タリーグループ合同会社における個人情報の取得、利用、管理その他の取扱いに関する基本方針です。",
  alternates: { canonical: "/privacy" },
};

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string };

type Section = {
  heading: string;
  blocks: Block[];
};

const intro: string[] = [
  "タリーグループ合同会社（以下「当社」という。）は、当社が取り扱う個人情報および個人データを適切に保護することを重要な責務と認識し、「個人情報の保護に関する法律」（以下「個人情報保護法」という。）その他の関連法令およびガイドラインを遵守します。",
  "本基本方針は、当社による個人情報の取得、利用、管理その他の取扱いについて定めるものです。",
];

const sections: Section[] = [
  {
    heading: "1. 個人情報の取得",
    blocks: [
      {
        type: "p",
        text: "当社は、適法かつ公正な手段により、業務上必要な範囲で個人情報を取得します。",
      },
      {
        type: "p",
        text: "当社が取得する個人情報には、例えば以下の情報が含まれます。",
      },
      {
        type: "ul",
        items: [
          "氏名",
          "会社名、所属、役職",
          "メールアドレス、電話番号、住所等の連絡先",
          "お問い合わせ、資料請求、セミナー・イベント等への参加に関する情報",
          "当社とのコミュニケーションおよび取引・サービス利用に関する情報",
          "その他、当社の事業活動に必要な情報",
        ],
      },
    ],
  },
  {
    heading: "2. 個人情報の利用目的",
    blocks: [
      {
        type: "p",
        text: "当社は、取得した個人情報を、以下の目的の範囲内で利用します。",
      },
      {
        type: "ul",
        items: [
          "当社の商品・サービスの提供、運営、改善および関連する業務の遂行",
          "商品・サービス、ソリューションその他当社が提供する情報のご案内",
          "お問い合わせ、資料請求その他のお申し出への対応",
          "セミナー、イベント、説明会、講演その他の活動に関するご案内および運営",
          "市場、業界動向、技術動向その他当社の事業に関連する情報、分析および知見の提供",
          "お客様、取引先その他の関係者との連絡、関係維持および円滑な業務遂行",
          "新たな商品・サービス、事業またはサービス改善の検討および開発",
          "契約の履行、請求、その他の取引管理",
          "法令または当局の要請への対応",
          "上記に付随または関連する業務",
        ],
      },
    ],
  },
  {
    heading: "3. 個人情報の第三者提供",
    blocks: [
      {
        type: "p",
        text: "当社は、個人情報保護法その他の法令により認められる場合を除き、ご本人の同意なく個人データを第三者に提供しません。",
      },
      {
        type: "p",
        text: "ただし、次項に定める共同利用については、個人情報保護法第27条第5項第3号に基づく共同利用として取り扱います。",
      },
    ],
  },
  {
    heading: "4. 個人情報の取扱いの委託",
    blocks: [
      {
        type: "p",
        text: "当社は、業務の遂行に必要な範囲で、個人情報の取扱いを第三者に委託することがあります。",
      },
      {
        type: "p",
        text: "この場合、委託先に対して必要かつ適切な監督を行い、個人情報の安全管理を確保します。",
      },
    ],
  },
  {
    heading: "5. 個人情報の共同利用",
    blocks: [
      {
        type: "p",
        text: "当社は、以下のとおり、スキッピングストーン合同会社（以下「スキッピングストーン」という。）との間で個人データを共同利用します。",
      },
      { type: "h3", text: "(1) 共同利用する個人データ" },
      {
        type: "p",
        text: "当社およびスキッピングストーンは、それぞれが取得した個人データを、以下に定める範囲で相互に共同利用します。",
      },
      {
        type: "p",
        text: "すなわち、当社が取得した個人データは当社およびスキッピングストーンが共同利用し、スキッピングストーンが取得した個人データについても当社およびスキッピングストーンが共同利用します。",
      },
      {
        type: "p",
        text: "共同利用する個人データの項目は、以下のとおりです。",
      },
      {
        type: "ul",
        items: [
          "氏名",
          "会社名、所属、役職",
          "メールアドレス、電話番号、住所等の連絡先",
          "お問い合わせ、資料請求、セミナー・イベント等への参加に関する情報",
          "当社またはスキッピングストーンとのコミュニケーションに関する情報",
          "当社またはスキッピングストーンとの取引、契約、サービス利用等に関する情報",
          "その他、共同利用の目的を達成するために必要な情報",
        ],
      },
      { type: "h3", text: "(2) 共同利用する者の範囲" },
      {
        type: "ul",
        items: ["タリーグループ", "スキッピングストーン"],
      },
      { type: "h3", text: "(3) 共同利用の目的" },
      {
        type: "p",
        text: "当社およびスキッピングストーンは、共同利用する個人データを、以下の目的で利用します。",
      },
      {
        type: "ul",
        items: [
          "当社またはスキッピングストーンが提供する商品・サービス、ソリューションその他の事業に関する情報提供およびご案内",
          "当社またはスキッピングストーンが提供する商品・サービスに関する営業活動、提案、販売促進その他の事業活動",
          "当社およびスキッピングストーンが共同で提供する商品・サービスその他の活動の遂行および改善",
          "業界動向、市場動向、技術動向その他の情報、分析、知見および将来見通し等の提供",
          "セミナー、イベント、説明会、講演その他の活動のご案内、運営および関連する連絡",
          "お問い合わせ、資料請求その他のお申し出への対応",
          "お客様、取引先その他の関係者との連絡、関係維持および円滑な業務遂行",
          "新たな商品・サービス、事業またはサービス改善の検討および開発",
          "上記に付随または関連する業務",
        ],
      },
      {
        type: "p",
        text: "なお、過去に取得した個人データについては、当該個人データを取得した際に通知または公表した利用目的その他、個人情報保護法上認められる範囲を超えて共同利用することはありません。",
      },
      { type: "h3", text: "(4) 個人データの管理について責任を有する者" },
      {
        type: "p",
        text: "会社名：タリーグループ合同会社",
      },
      {
        type: "p",
        text: "住所：〒105-0003 東京都港区西新橋2-20-1-4F",
      },
      {
        type: "p",
        text: "代表者：最高執行責任者 COO トラビス・リーマン",
      },
      {
        type: "p",
        text: "お問い合わせ先：contact_jp@tally-group.com",
      },
      {
        type: "p",
        text: "当社は、共同利用する個人データについて、適切な安全管理措置を講じます。",
      },
    ],
  },
  {
    heading: "6. 個人データの安全管理",
    blocks: [
      {
        type: "p",
        text: "当社は、個人データの漏えい、滅失または毀損等を防止するため、必要かつ適切な安全管理措置を講じます。",
      },
      {
        type: "p",
        text: "また、個人データを取り扱う従業者に対して必要な教育および監督を行います。",
      },
    ],
  },
  {
    heading: "7. 個人データの国外移転",
    blocks: [
      {
        type: "p",
        text: "当社は、個人データを外国にある第三者に提供する場合、個人情報保護法その他の適用法令に従い、必要な手続きを行います。",
      },
    ],
  },
  {
    heading: "8. Cookie等の利用",
    blocks: [
      {
        type: "p",
        text: "当社のWebサイトでは、サービスの利便性向上、利用状況の分析、Webサイトの改善その他の目的で、Cookieその他の類似技術を使用する場合があります。",
      },
      {
        type: "p",
        text: "Cookie等によって取得される情報には、個人を直接識別できない情報が含まれる場合があります。",
      },
    ],
  },
  {
    heading: "9. 保有個人データの開示等",
    blocks: [
      {
        type: "p",
        text: "ご本人またはその代理人は、個人情報保護法に基づき、当社が保有する個人データについて、利用目的の通知、開示、訂正、追加、削除、利用停止、消去または第三者提供の停止等を請求できる場合があります。",
      },
      {
        type: "p",
        text: "請求方法その他の詳細については、下記お問い合わせ先までご連絡ください。",
      },
    ],
  },
  {
    heading: "10. お問い合わせ",
    blocks: [
      {
        type: "p",
        text: "個人情報の取扱いに関するお問い合わせ、開示等の請求その他のお申し出については、以下までご連絡ください。",
      },
      { type: "p", text: "タリーグループ合同会社" },
      { type: "p", text: "〒105-0003 東京都港区西新橋2-20-1-4F" },
      {
        type: "p",
        text: "代表者：最高執行責任者 COO トラビス・リーマン",
      },
      {
        type: "p",
        text: "お問い合わせ窓口：contact_jp@tally-group.com",
      },
      { type: "p", text: "電話番号：03-6809-2307" },
    ],
  },
  {
    heading: "11. 基本方針の変更",
    blocks: [
      {
        type: "p",
        text: "当社は、法令の改正その他必要に応じて、本基本方針を変更することがあります。",
      },
      {
        type: "p",
        text: "変更後の基本方針は、当社Webサイトへの掲載その他適切な方法により公表します。",
      },
    ],
  },
];

function renderEmailLinks(text: string): ReactNode {
  const parts = text.split(/(contact_jp@tally-group\.com)/g);
  return parts.map((part, i) =>
    part === "contact_jp@tally-group.com" ? (
      <a
        key={i}
        href="mailto:contact_jp@tally-group.com"
        className="text-navy font-medium hover:text-turquoise transition-colors"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );
}

export default function JPPrivacyPage() {
  return (
    <>
      <section
        className="relative overflow-hidden pt-[120px] pb-[56px] lg:pt-[160px] lg:pb-[80px] border-b border-stroke1"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <h1 className="text-[32px] lg:text-[48px] font-light leading-[1.3] tracking-[-0.02em] text-navy max-w-[20ch] m-0">
            個人情報に関する基本方針
          </h1>
          <p className="mt-[20px] text-[15px] leading-[1.75] text-fg2 m-0">
            制定日：2026年7月28日　最終改定日：2026年9月1日
          </p>
        </div>
      </section>

      <section className="py-[48px] lg:py-[72px]">
        <div className="max-w-[820px] mx-auto px-8 flex flex-col gap-[36px]">
          <div className="flex flex-col gap-[14px]">
            {intro.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[15px] lg:text-[16px] leading-[1.9] text-fg2 m-0"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-[20px] lg:text-[24px] font-medium tracking-[-0.01em] leading-[1.4] text-navy m-0 mb-[14px]">
                {section.heading}
              </h2>
              <div className="flex flex-col gap-[12px]">
                {section.blocks.map((block, i) => {
                  if (block.type === "h3") {
                    return (
                      <h3
                        key={`${section.heading}-h3-${i}`}
                        className="text-[16px] lg:text-[17px] font-semibold text-navy m-0 mt-[8px]"
                      >
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === "ul") {
                    return (
                      <ul
                        key={`${section.heading}-ul-${i}`}
                        className="m-0 pl-[1.25em] list-disc space-y-[6px] text-[15px] lg:text-[16px] leading-[1.8] text-fg2"
                      >
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={`${section.heading}-p-${i}`}
                      className="text-[15px] lg:text-[16px] leading-[1.9] text-fg2 m-0"
                    >
                      {renderEmailLinks(block.text)}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
