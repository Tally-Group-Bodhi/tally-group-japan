"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useMarketingHref } from "@/contexts/marketing-region";

const rotatingWords = ["請求", "営業", "運営", "コンプライアンス"];

const stats = [
  {
    label: "NEMおよびWEM全域の小売事業者・パートナー",
    value: "110",
    suffix: "+",
  },
  {
    label: "毎シフトでTallyを使用するコンタクトセンターのエージェント",
    value: "450",
    suffix: "+",
  },
  {
    label: "プラットフォームで年間処理されるエネルギーアカウント数",
    value: "4",
    suffix: "m+",
  },
];

export function HeroSectionJP() {
  const href = useMarketingHref();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

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
              <span className="inline-flex items-baseline justify-center gap-[0.15em] flex-wrap">
                <span>エネルギー小売の</span>
                <motion.span
                  layout
                  className="relative inline-flex h-[1.25em] overflow-hidden -mb-[0.1em] align-baseline"
                  transition={{ layout: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }}
                >
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={rotatingWords[wordIndex]}
                      className="block text-turquoise leading-[1.25] whitespace-nowrap"
                      initial={{ opacity: 0, y: "100%" }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: "-100%" }}
                      transition={{
                        y: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
                      }}
                    >
                      {rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </motion.span>
              </span>
              <br />
              プラットフォーム
            </h1>

            <p className="mt-[16px] text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.7] text-white/80 max-w-[40ch] mx-auto">
              1つのプラットフォーム、8つのプロダクト —
              エネルギー小売事業者を支える、小売・営業・運営のソフトウェア
            </p>

            <div className="flex flex-wrap gap-3 mt-[36px] justify-center">
              <Link
                href={href("/contact")}
                className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full text-[15px] font-semibold bg-white text-navy hover:bg-white/90 transition-all shadow-lg"
              >
                デモを予約
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full text-[15px] font-semibold text-white border border-white/40 hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                お問い合わせ
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
                <div className="text-[48px] lg:text-[56px] font-normal tracking-[-0.03em] leading-none text-navy tabular-nums">
                  {stat.value}
                  <span className="text-navy font-normal">{stat.suffix}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
