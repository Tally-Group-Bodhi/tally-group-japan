import type { Metadata } from "next";
import {
  ResourcesGrid,
  type Resource,
} from "@/components/jp/insights/resources-grid";

export const metadata: Metadata = {
  title: "資料",
  description:
    "エネルギー業界の最新動向やソリューション理解に役立つ、コラムや動画コンテンツをご紹介しています。",
  alternates: { canonical: "/insights/resources" },
};

const resources: Resource[] = [
  {
    kind: "whitepaper",
    title: "日本の電力小売市場 今後 10 年の展望",
    subtitle: "リテール 3.0—適者生存の時代",
    description:
      "成熟する卸電力市場と激化する競争環境の中で、電力小売事業者はどのように収益性と成長を両立させるべきか。日本市場が向かう「リテール 3.0」の姿を展望し、市場変化への対応策と成功のための実践的なアプローチを解説します。",
    href: "/insights/resources/japan-electricity-retail-market-outlook-2026-09-10",
    requestHref:
      "/insights/resources/japan-electricity-retail-market-outlook-2026-09-10#request-form",
  },
  {
    kind: "webinar",
    videoId: "1fTWH0KWaxU",
    thumbnail: "/webinars/video-1.png",
    title: "市場連動型電力料金プラン vs イラン戦争",
    description:
      "本動画は業界30年以上の経験を有する米スキッピングストーン会長兼CEOのピーター・ウェイガンドによるエネルギー時事コラムを基に作成されました。",
  },
  {
    kind: "webinar",
    videoId: "7j99_-kPvvg",
    thumbnail: "/webinars/video-2.png",
    title: "産業用需要家のためのエネルギーコスト管理",
    description:
      "本動画は、エネルギー業界において30年超の経験を有する、米国スキッピングストーンのCEO、ピーター・ウェイガンドによるエネルギー時事コラムを基に作成されました。",
  },
  {
    kind: "webinar",
    videoId: "0qLOICi1z3c",
    thumbnail: "/webinars/video-3.png",
    title: "来たるLNG争奪戦への備え",
    description:
      "本動画は、業界30年以上の経験を有する米国スキッピングストーンのCEO、ピーター・ウェイガンドによるエネルギー時事コラムを基に作成されました。",
  },
  {
    kind: "webinar",
    videoId: "Xj8sL4L2qDg",
    thumbnail: "/webinars/video-4.png",
    title: "自由化市場における電力会社のリスクマネジメント",
    description:
      "本動画はエネルギー業界において30年超の経験を有する、米国スキッピングストーンのCEO、ピーター・ウェイガンドによるエネルギー時事コラムを基に作成されました。",
  },
];

export default function JPResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] pb-[56px] lg:pt-[160px] lg:pb-[80px] border-b border-stroke1"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <h1 className="text-[32px] lg:text-[48px] font-light leading-[1.3] tracking-[-0.02em] text-navy max-w-[26ch] m-0">
            資料
          </h1>
          <p className="mt-[20px] text-[17px] leading-[1.75] text-fg2 max-w-[60ch] m-0">
            エネルギー業界の最新動向やソリューション理解に役立つ、コラムや動画コンテンツをご紹介しています。
          </p>
        </div>
      </section>

      <ResourcesGrid resources={resources} />
    </>
  );
}
