"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stories = [
  {
    date: "Apr 15, 2026",
    title:
      "How Sumo re-platformed its contact centre in 90 days with Glass Vision",
    href: "#",
  },
  {
    date: "Apr 2, 2026",
    title:
      "Five-minute settlement: what smaller retailers learned the hard way about 5MS",
    href: "#",
  },
  {
    date: "Mar 20, 2026",
    title:
      "Hardship & life-support: designing for the hardest moments in energy retail",
    href: "#",
  },
  {
    date: "Mar 8, 2026",
    title:
      "How Alinta reduced average handle time by 38 seconds with a single panel",
    href: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export function InsightsSection() {
  return (
    <section id="insights" className="py-[96px] lg:py-[120px]">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-[48px] gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-navy">
            Impact stories from our partners
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-[6px] font-semibold text-[15px] text-navy hover:text-turquoise transition-colors shrink-0"
          >
            View all stories{" "}
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          {stories.map((story, i) => (
            <motion.div
              key={story.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <Link
                href={story.href}
                className="group block h-full bg-white border border-stroke1 rounded-2xl overflow-hidden transition-all hover:border-navy/30 hover:shadow-[0_8px_32px_rgba(44,54,93,0.08)]"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-navy-dark to-navy relative overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0,210,162,0.15) 1px, transparent 1px) 0 0 / 24px 24px, linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px) 0 0 / 24px 24px",
                    }}
                  />
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(0,210,162,0.3), transparent 65%)",
                    }}
                  />
                  <span className="absolute bottom-[12px] left-[14px] text-white/60 text-xs font-mono">
                    {story.date}
                  </span>
                </div>
                <div className="p-[20px]">
                  <h3 className="text-[15px] font-semibold text-fg1 leading-[1.4] tracking-[-0.005em]">
                    {story.title}
                  </h3>
                  <span className="mt-[16px] inline-flex items-center gap-1 text-[13px] font-semibold text-navy group-hover:text-turquoise transition-colors">
                    Read more{" "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
