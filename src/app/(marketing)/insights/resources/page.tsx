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
    kind: "webinar",
    videoId: "1fTWH0KWaxU",
    thumbnail: "/webinars/video-1.png",
  },
  {
    kind: "webinar",
    videoId: "7j99_-kPvvg",
    thumbnail: "/webinars/video-2.png",
  },
  {
    kind: "webinar",
    videoId: "0qLOICi1z3c",
    thumbnail: "/webinars/video-3.png",
  },
  {
    kind: "webinar",
    videoId: "Xj8sL4L2qDg",
    thumbnail: "/webinars/video-4.png",
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
