"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useMarketingHref } from "@/contexts/marketing-region";

const rotatingWords = ["الفوترة", "المبيعات", "العمليات", "الامتثال"];

const stats = [
  {
    label: "متوسط مدة العميل",
    value: "+10",
    suffix: "سنوات",
  },
  {
    label: "نقاط العدّادات المخدومة عالميًا",
    value: "+5M",
    suffix: "",
  },
  {
    label: "الفوترة السنوية",
    value: "+15B$",
    suffix: "",
  },
];

export function HeroSectionAE() {
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
            <p className="text-[18px] sm:text-[22px] lg:text-[24px] font-medium leading-[1.4] tracking-[0.04em] text-white">
              تحرّك أسرع. اخدم بذكاء أكبر.
            </p>

            <h1 className="mt-[20px] text-[40px] sm:text-[52px] lg:text-[68px] font-light leading-[1.25] tracking-[-0.02em] text-white">
              <span className="inline-flex items-baseline justify-center gap-[0.3em] flex-wrap">
                <span>منصّة</span>
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
              لشركات المرافق الرائدة في الإمارات
            </h1>

            <p className="mt-[20px] text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.8] text-white/80 max-w-[62ch] mx-auto">
              خفّض التكاليف، واغتنم الفرص، ومكّن فريقك. تقدّم منصّة Tally+ التشغيلية حلولًا متكاملة لتجزئة الطاقة مدعومة بالذكاء الاصطناعي في منظومة وحدات مرنة.
            </p>

            <div className="flex flex-wrap gap-3 mt-[36px] justify-center">
              <Link
                href={href("/contact")}
                className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full text-[15px] font-semibold bg-white text-navy hover:bg-white/90 transition-all shadow-lg"
              >
                احجز عرضًا تجريبيًا
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full text-[15px] font-semibold text-white border border-white/40 hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                تواصل معنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-[48px] lg:py-[64px]">
        <div className="max-w-[1600px] mx-auto px-8">
          <motion.h2
            className="text-center text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.3] tracking-[-0.02em] text-navy mb-[48px] lg:mb-[64px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            منصة واحدة، ثمانية منتجات، إمكانيات لا حدود لها.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-bg2 rounded-2xl px-[28px] py-[48px] lg:py-[72px]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: "easeOut" as const,
                }}
              >
                <p className="text-[14px] leading-[1.7] text-fg2 mb-[20px]">
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
