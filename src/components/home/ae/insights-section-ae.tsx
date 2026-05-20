"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type AEStory = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image?: string;
};

const stories: AEStory[] = [
  {
    slug: "five-minute-settlement",
    title: "التسوية كل خمس دقائق — 18 شهرًا بعد التفعيل",
    category: "ورقة بحثية",
    date: "15 أبريل 2026",
    image: "/blog/leverage-data-systems.png",
  },
  {
    slug: "sumo-replatform",
    title: "كيف نقلت Sumo مركز اتصالها إلى منصّة جديدة في 90 يومًا",
    category: "دراسة حالة",
    date: "2 أبريل 2026",
    image: "/blog/migration-and-modernisation.png",
  },
  {
    slug: "hardship-life-support",
    title: "حالات التعسّر ودعم الحياة — تصميم للحظات الأصعب",
    category: "دليل",
    date: "20 مارس 2026",
    image: "/blog/digitise-to-decarbonise.png",
  },
  {
    slug: "disruption-is-the-new-normal",
    title: "الاضطراب هو الوضع الطبيعي الجديد — نظرة على قطاع الطاقة في 2026",
    category: "رؤى",
    date: "9 يناير 2026",
    image: "/blog/behavioural-demand-response.png",
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

export function InsightsSectionAE() {
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
          <div className="max-w-[680px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              الأخبار والرؤى
            </div>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] font-light leading-[1.3] tracking-[-0.02em] text-navy">
              أحدث ما لدى الفريق
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-[6px] font-semibold text-[15px] text-navy hover:text-turquoise transition-colors shrink-0"
          >
            عرض كل المقالات{" "}
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          {stories.map((story, i) => (
            <motion.div
              key={story.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <Link
                href="#"
                className="group block h-full bg-white border border-stroke1 rounded-2xl overflow-hidden transition-all hover:border-navy/30 hover:shadow-[0_8px_32px_rgba(44,54,93,0.08)]"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  {story.image ? (
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy" />
                  )}
                  <span className="absolute top-[12px] left-[14px] z-10 bg-white/95 text-navy px-[10px] py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em]">
                    {story.category}
                  </span>
                  <span className="absolute bottom-[12px] left-[14px] z-10 text-white/80 text-xs font-mono">
                    {story.date}
                  </span>
                  {story.image && (
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-navy/30" />
                  )}
                </div>
                <div className="p-[20px]">
                  <h3 className="text-[15px] font-semibold text-fg1 leading-[1.6] tracking-[-0.005em]">
                    {story.title}
                  </h3>
                  <span className="mt-[16px] inline-flex items-center gap-1 text-[13px] font-semibold text-navy group-hover:text-turquoise transition-colors">
                    اقرأ المقال{" "}
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
