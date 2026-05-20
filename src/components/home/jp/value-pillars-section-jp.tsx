"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pillars: Array<{
  title: string;
  body: string;
  image: string;
  alt: string;
}> = [
  {
    title: "サービス提供コストを削減",
    body: "Tally+は複雑な業務を自動化し、直感的なセルフサービスと先回りのコミュニケーションでコンタクトセンターへの問い合わせを抑制。リアルタイムの分析で対応スピードを高め、運用効率を飛躍的に向上させます。",
    image:
      "https://images.unsplash.com/photo-1758526214018-a746f9554b8b?auto=format&fit=crop&w=1600&q=90",
    alt: "スマートフォンとクレジットカードで支払いをする女性",
  },
  {
    title: "新たな機会を捉える",
    body: "Tally+は柔軟で将来を見据えたプラットフォーム上で、新しいプロダクト・サービスの迅速な市場投入、変化するエネルギーモデルへの対応、そして新規収益源の創出を可能にし、ユーティリティのイノベーションを加速させます。",
    image: "/home/capture-opportunities.png",
    alt: "オフィスでノートパソコンを使い、考え込むビジネスパーソン",
  },
  {
    title: "人と組織の力を引き出す",
    body: "Tally+はお客さまとオペレーター双方に、よりスマートなツールを提供。セルフサービス、迅速な課題解決、パーソナライズされたスムーズなやり取りを実現します。アカウント管理から新エネルギーサービスの導入まで、あらゆる接点でより良い体験をお届けします。",
    image: "/shutterstock_2748143915.jpg",
    alt: "ヘッドセットを着用しPC作業をするコンタクトセンターのオペレーター",
  },
];

export function ValuePillarsSectionJP() {
  return (
    <section className="px-4 sm:px-6 pt-2 pb-[24px] sm:pb-[32px]">
      <div className="relative overflow-hidden rounded-2xl bg-bg2 py-[72px] lg:py-[112px] px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto space-y-[72px] lg:space-y-[120px]">
          {pillars.map((pillar, i) => {
            const imageOnLeft = i % 2 === 0;
            return (
              <motion.div
                key={pillar.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] lg:gap-[80px] items-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div
                  className={`relative aspect-square w-full rounded-2xl overflow-hidden bg-bg3 ${
                    imageOnLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    quality={95}
                    sizes="(min-width: 1024px) 560px, (min-width: 640px) 90vw, 100vw"
                    className="object-cover"
                    unoptimized={pillar.image.startsWith("/")}
                  />
                </div>
                <div
                  className={`${imageOnLeft ? "lg:order-2" : "lg:order-1"}`}
                >
                  <h3 className="text-[28px] sm:text-[32px] lg:text-[44px] font-light leading-[1.3] tracking-[-0.02em] text-navy mb-[20px] lg:mb-[24px]">
                    {pillar.title}
                  </h3>
                  <p className="text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.85] text-fg2 max-w-[52ch]">
                    {pillar.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
