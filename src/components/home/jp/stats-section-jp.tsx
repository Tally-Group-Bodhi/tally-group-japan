"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const dataInputs: Array<{ label: string; icon: string }> = [
  { label: "アカウント", icon: "person" },
  { label: "メーター", icon: "speed" },
  { label: "使用量", icon: "bar_chart" },
  { label: "料金", icon: "request_quote" },
  { label: "請求", icon: "receipt_long" },
  { label: "ハードシップ", icon: "volunteer_activism" },
  { label: "NMI", icon: "qr_code_2" },
  { label: "太陽光", icon: "solar_power" },
  { label: "決済", icon: "handshake" },
];

export function StatsSectionJP() {
  return (
    <section className="px-4 sm:px-6 pt-2 pb-0">
      <div
        className="relative overflow-hidden rounded-2xl border border-stroke1 text-white py-[96px] lg:py-[120px]"
        style={{
          background:
            "linear-gradient(180deg, #1E2840 0%, #141B30 55%, #0A1020 100%)",
        }}
      >
        <div
          className="absolute -right-[200px] -top-[200px] w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,210,162,0.15), transparent 60%)",
          }}
        />
        <div
          className="absolute -left-[200px] -bottom-[200px] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,210,162,0.08), transparent 60%)",
          }}
        />

        <div className="relative mx-auto px-8">
          <motion.div
            className="max-w-[720px] mx-auto text-center mb-[48px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.3] tracking-[-0.02em] text-white">
              Adora AI 搭載
            </h2>
            <p className="mt-[16px] text-[17px] lg:text-[19px] leading-[1.7] text-[#FE5E01]/85 max-w-[44ch] mx-auto">
              アカウント要約、ネクストベストアクション、ハードシップ検出 —
              小売運営の全データに基づき、ハルシネーションを起こしません。
            </p>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-[1040px]"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative z-20 flex flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-[6px] sm:gap-0">
              {dataInputs.map((item) => (
                <div
                  key={item.label}
                  className="shrink-0 flex flex-col items-center justify-center gap-[6px] w-[88px] sm:w-[104px] h-[64px] rounded-[10px] bg-[#1A2342]/90 border border-white/10 backdrop-blur-sm"
                >
                  <span className="material-symbols-outlined text-[#FE5E01] text-[20px]">
                    {item.icon}
                  </span>
                  <span className="text-[11.5px] font-medium text-white/85 leading-none whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="relative -mt-[1px] h-[140px] sm:h-[160px]"
              aria-hidden="true"
            >
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1121 177.946"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="adora-funnel-orange-jp"
                    x1="0.4975"
                    x2="0.5025"
                    y1="0"
                    y2="1"
                  >
                    <stop offset="0" stopColor="#FE5E01" stopOpacity="0" />
                    <stop offset="1" stopColor="#FE5E01" stopOpacity="0.45" />
                  </linearGradient>
                </defs>
                <path
                  d="M 501 152.434 C 450.874 110.017 113.411 48.349 0 0.002 C 222.008 -0.006 900.205 0.012 1121 0.002 C 1001.751 47.16 671.113 109.182 620 152.434 C 594.657 176.883 551.126 194.85 501 152.434 Z"
                  fill="url(#adora-funnel-orange-jp)"
                />
              </svg>
            </div>

            <div className="relative z-20 flex justify-center -mt-[36px]">
              <Image
                src="/brand/AdoraAi.svg"
                alt="Adora AI"
                width={227}
                height={101}
                priority
                className="h-[88px] w-auto"
              />
            </div>

            <div className="relative z-20 flex justify-center mt-[28px]">
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-white text-navy rounded-full px-7 h-[40px] text-[14px] font-medium shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] hover:bg-white/95 transition-colors"
              >
                詳細を見る
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
