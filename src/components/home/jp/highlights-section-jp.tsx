"use client";

import { motion } from "framer-motion";

const highlights: Array<{ title: string; body: string }> = [
  {
    title: "\u30ea\u30c6\u30fc\u30eb 3.0 \u5bfe\u5fdc",
    body: "\u30d8\u30c3\u30b8\u5546\u54c1\u3092\u542b\u3080\u591a\u69d8\u306a\u6599\u91d1\u30e1\u30cb\u30e5\u30fc\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002\u6599\u91d1\u30e1\u30cb\u30e5\u30fc\u306e\u8a2d\u5b9a\u30fb\u5909\u66f4\u3092\u6570\u6642\u9593\u5358\u4f4d\u3067\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u3001\u8fc5\u901f\u306a\u696d\u52d9\u904b\u7528\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002",
  },
  {
    title: "\u30cd\u30c3\u30c8\u30bc\u30ed\u5bfe\u5fdc",
    body: "PPA\u30fbVPPA\u30fbEV\u30fb\u30c7\u30de\u30f3\u30c9\u30ec\u30b9\u30dd\u30f3\u30b9\u30fb\u84c4\u96fb\u6c60\u30fb\u30aa\u30f3\u30b5\u30a4\u30c8\u767a\u96fb\u306a\u3069\u3001\u8131\u70ad\u7d20\u5316\u306b\u5411\u3051\u305f\u3055\u307e\u3056\u307e\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002\u8907\u6570\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u30b5\u30fc\u30d3\u30b9\u8a2d\u8a08\u3082\u53ef\u80fd\u3067\u3059\u3002",
  },
  {
    title: "AI \u6d3b\u7528\u306b\u3088\u308b\u696d\u52d9\u52b9\u7387\u5316",
    body: "AI \u3092\u6d3b\u7528\u3057\u305f\u9ad8\u5ea6\u306a\u81ea\u52d5\u5316\u30fb\u696d\u52d9\u52b9\u7387\u5316\u6a5f\u80fd\u306b\u3088\u308a\u3001\u904b\u7528\u8ca0\u8377\u3092\u6291\u3048\u306a\u304c\u3089\u4e8b\u696d\u62e1\u5927\u3092\u652f\u63f4\u3057\u307e\u3059\u3002",
  },
];

export function HighlightsSectionJP() {
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
          {"\u5909\u5316\u3059\u308b\u30a8\u30cd\u30eb\u30ae\u30fc\u5e02\u5834\u306b\u3001\u67d4\u8edf\u304b\u3064\u8fc5\u901f\u306b\u5bfe\u5fdc"}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-bg2 rounded-2xl px-[28px] py-[40px] lg:py-[48px]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: "easeOut" as const,
              }}
            >
              <h3 className="text-[22px] lg:text-[24px] font-medium tracking-[-0.01em] leading-[1.4] text-navy mb-[16px]">
                {item.title}
              </h3>
              <p className="text-[15px] lg:text-[16px] leading-[1.85] text-fg2">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-[48px] lg:mt-[64px] max-w-[760px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-light leading-[1.3] tracking-[-0.02em] text-navy mb-[16px] lg:mb-[20px]">
            {"\u30b0\u30ed\u30fc\u30d0\u30eb\u5e02\u5834\u3067\u57f9\u3063\u305f\u7d4c\u9a13\u3068\u77e5\u898b"}
          </h3>
          <p className="text-[16px] lg:text-[18px] leading-[1.85] text-fg2">
            {"Tally+\u306f\u3001\u30cb\u30e5\u30fc\u30b8\u30fc\u30e9\u30f3\u30c9\u3001\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u3001\u7c73\u56fd\u3001\u65e5\u672c\u306e\u30a8\u30cd\u30eb\u30ae\u30fc\u5c0f\u58f2\u4e8b\u696d\u8005\u3067\u5c0e\u5165\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u5404\u5e02\u5834\u3067\u57f9\u3063\u305f\u7d4c\u9a13\u3068\u77e5\u898b\u3092\u3001\u65e5\u672c\u5e02\u5834\u5411\u3051\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306b\u3082\u53cd\u6620\u3057\u3066\u3044\u307e\u3059\u3002"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
