"use client";

import { motion } from "framer-motion";

export type Whitepaper = {
  kind: "whitepaper";
  title: string;
  description: string;
  href: string;
};

export type Webinar = {
  kind: "webinar";
  videoId: string;
  thumbnail: string;
};

export type Resource = Whitepaper | Webinar;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: "easeOut" as const },
  }),
};

export function ResourcesGrid({ resources }: { resources: Resource[] }) {
  return (
    <section
      className="pt-[48px] pb-[80px] lg:pt-[56px] lg:pb-[96px]"
      aria-labelledby="resources-grid-heading"
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <h2 id="resources-grid-heading" className="sr-only">
          資料一覧
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {resources.map((resource, i) => (
            <motion.div
              key={
                resource.kind === "webinar"
                  ? `webinar-${resource.videoId}`
                  : `whitepaper-${resource.title}`
              }
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <ResourceCard resource={resource} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  if (resource.kind === "webinar") {
    return (
      <WebinarCard videoId={resource.videoId} thumbnail={resource.thumbnail} />
    );
  }

  return (
    <article className="group relative h-full bg-white border border-stroke1 rounded-2xl overflow-hidden flex flex-col transition-all hover:border-navy/30 hover:shadow-[0_12px_36px_rgba(44,54,93,0.10)]">
      <a
        href={resource.href}
        aria-label={`${resource.title}（ホワイトペーパー）`}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2"
      >
        <span className="sr-only">PDFを見る</span>
      </a>

      <div
        className="relative aspect-[16/10] overflow-hidden"
        role="img"
        aria-label="ホワイトペーパー プレビュー"
        style={{
          background:
            "linear-gradient(135deg, #F4FBF9 0%, #DFF4ED 55%, #BDE9DC 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 80% 30%, rgba(0,210,162,0.22), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 grid place-items-center">
          <span
            className="material-symbols-outlined text-[88px]"
            style={{ color: "rgba(11, 122, 102, 0.85)" }}
            aria-hidden
          >
            description
          </span>
        </div>
        <span className="absolute top-[12px] right-[12px] inline-flex items-center gap-1 px-[10px] py-[5px] rounded-full bg-black/55 text-white text-[11px] font-semibold uppercase tracking-[0.1em] backdrop-blur-sm">
          <span className="material-symbols-outlined text-[14px]" aria-hidden>
            picture_as_pdf
          </span>
          PDF
        </span>
      </div>

      <div className="p-[24px] flex flex-col flex-1">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-fg2 m-0">
          ホワイトペーパー
        </p>
        <h3 className="mt-[8px] text-[18px] font-semibold leading-[1.4] tracking-[-0.01em] text-navy m-0">
          {resource.title}
        </h3>

        <p className="mt-[14px] text-[14px] leading-[1.7] text-fg2 m-0 flex-1">
          {resource.description}
        </p>

        <div className="mt-auto pt-[20px]">
          <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-navy group-hover:text-turquoise transition-colors">
            PDFを見る
            <span className="material-symbols-outlined text-[18px]" aria-hidden>
              arrow_forward
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}

function WebinarCard({
  videoId,
  thumbnail,
}: {
  videoId: string;
  thumbnail: string;
}) {
  return (
    <article className="group relative h-full bg-white border border-stroke1 rounded-2xl overflow-hidden flex flex-col transition-all hover:border-navy/30 hover:shadow-[0_12px_36px_rgba(44,54,93,0.10)]">
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ウェビナーを視聴する"
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2"
      >
        <span className="sr-only">視聴する</span>
      </a>

      <div className="relative aspect-video overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnail}
          alt="ウェビナー サムネイル"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid place-items-center w-[72px] h-[72px] rounded-full bg-black/45 border-2 border-white/70 text-white transition-transform group-hover:scale-105">
            <span
              className="material-symbols-outlined text-[34px] translate-x-[2px]"
              aria-hidden
            >
              play_arrow
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}
