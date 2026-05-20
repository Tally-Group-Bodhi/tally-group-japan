"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMarketingHref } from "@/contexts/marketing-region";

const stats = [
  {
    label: "平均契約年数",
    value: "10+",
    suffix: "年",
  },
  {
    label: "グローバルで提供するメーターポイント数",
    value: "5M+",
    suffix: "",
  },
  {
    label: "年間請求額",
    value: "$15B+",
    suffix: "",
  },
];

export function HeroSectionJP() {
  const href = useMarketingHref();

  return (
    <>
      <section className="relative min-h-[100dvh] flex flex-col bg-white pt-[84px] px-4 sm:px-6 pb-4 sm:pb-6">
        <div className="absolute inset-0 mt-[84px] mx-4 sm:mx-6 mb-4 sm:mb-6 rounded-[20px] overflow-hidden">
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 text-center mt-auto pb-[48px] sm:pb-[64px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[40px] sm:text-[52px] lg:text-[68px] font-light leading-[1.25] tracking-[-0.02em] text-white">
              エネルギー業界の
              <span className="text-turquoise">
                顧客エンゲージメントと
                <br />
                顧客管理
              </span>
              を支えるグローバルソリューション
            </h1>

            <p className="mt-[16px] text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.7] text-white/80 max-w-[50ch] mx-auto">
              ― 小売事業者・ユーティリティなど、幅広いエネルギー企業に対応
            </p>

            <div className="flex flex-wrap gap-3 mt-[36px] justify-center">
              <Link
                href={href("/contact")}
                className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full text-[15px] font-semibold bg-white text-navy hover:bg-white/90 transition-all shadow-lg"
              >
                デモのご相談
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full text-[15px] font-semibold text-white border border-white/40 hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                概要資料をダウンロード
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-[48px] lg:py-[64px]">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-bg2 rounded-2xl px-[28px] py-[32px] lg:py-[40px]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: "easeOut" as const,
                }}
              >
                <p className="text-[14px] leading-[1.6] text-fg2 mb-[20px]">
                  {stat.label}
                </p>
                <div className="text-[48px] lg:text-[56px] font-normal tracking-[-0.03em] leading-none text-navy tabular-nums flex items-baseline gap-2 flex-wrap">
                  <span>{stat.value}</span>
                  {stat.suffix && (
                    <span className="text-[22px] lg:text-[26px] font-normal text-fg2 tracking-normal">
                      {stat.suffix}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
