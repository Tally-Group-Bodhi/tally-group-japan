"use client";

import { motion } from "framer-motion";

const metrics: Array<{ value: string; label: string }> = [
  {
    value: "50+",
    label: "\u30a8\u30cd\u30eb\u30ae\u30fc\u5c0f\u58f2\u30fb\u5378\u58f2\u4e8b\u696d\u8005\u306e\u304a\u5ba2\u69d8",
  },
  {
    value: "500\u4e07+",
    label: "\u8a08\u91cf\u5730\u70b9",
  },
  {
    value: "2\u5146\u5186+",
    label: "\u5e74\u9593\u8acb\u6c42\u51e6\u7406\u984d",
  },
];

export function MetricsSectionJP() {
  return (
    <section className="py-[48px] lg:py-[64px]">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.h2
          className="text-center text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.3] tracking-[-0.02em] text-navy mb-[48px] lg:mb-[64px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {"\u5358\u4e00\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3001\u67d4\u8edf\u306a\u696d\u52d9\u8a2d\u8a08\u3092\u5b9f\u73fe"}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="bg-bg2 rounded-2xl px-[28px] py-[48px] lg:py-[72px] text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: "easeOut" as const,
              }}
            >
              <div className="text-[48px] lg:text-[56px] font-normal tracking-[-0.03em] leading-none text-navy tabular-nums mb-[20px]">
                {metric.value}
              </div>
              <p className="text-[15px] lg:text-[16px] leading-[1.6] text-fg2">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
