"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { MarketingLink } from "@/components/marketing/marketing-link";

export type Whitepaper = {
  kind: "whitepaper";
  title: string;
  subtitle?: string;
  description: string;
  /** 「詳細を見る」リンク先（PDF・詳細ページなど） */
  href: string;
  /** 「資料を請求する」リンク先 */
  requestHref: string;
};

export type Webinar = {
  kind: "webinar";
  videoId: string;
  thumbnail: string;
  title: string;
  description: string;
};

export type Resource = Whitepaper | Webinar;

type KindFilter = "" | "whitepaper" | "webinar";

const KIND_OPTIONS: { value: KindFilter; label: string }[] = [
  { value: "", label: "すべて" },
  { value: "whitepaper", label: "ホワイトペーパー" },
  { value: "webinar", label: "動画・ウェビナー" },
];

function kindFromParam(value: string | null): KindFilter {
  if (value === "whitepaper" || value === "webinar") return value;
  return "";
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: "easeOut" as const },
  }),
};

export function ResourcesGrid({ resources }: { resources: Resource[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const kind = kindFromParam(searchParams.get("type"));

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      if (kind && r.kind !== kind) return false;
      return true;
    });
  }, [resources, kind]);

  const visible = filtered.length;

  function setKindFilter(next: KindFilter) {
    const params = new URLSearchParams(searchParams.toString());
    if (next) {
      params.set("type", next);
    } else {
      params.delete("type");
    }
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  function handleReset() {
    setKindFilter("");
  }

  return (
    <>
      <section aria-label="資料を絞り込む">
        <div className="max-w-[1240px] mx-auto px-8 pt-[8px] lg:pt-[12px]">
          <div
            role="radiogroup"
            aria-label="種類で絞り込む"
            className="flex flex-wrap gap-[8px]"
          >
            {KIND_OPTIONS.map((o) => {
              const isActive = kind === o.value;
              return (
                <button
                  key={o.value || "__all"}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  onClick={() => setKindFilter(o.value)}
                  className={`inline-flex items-center px-[14px] py-[8px] rounded-full text-[13px] font-medium leading-none border transition-all ${
                    isActive
                      ? "bg-navy text-white border-navy shadow-[0_2px_8px_rgba(44,54,93,0.18)]"
                      : "bg-white text-fg2 border-stroke1 hover:border-navy/40 hover:text-navy"
                  }`}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="pt-[32px] pb-[80px] lg:pt-[40px] lg:pb-[96px]"
        aria-labelledby="resources-grid-heading"
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <h2 id="resources-grid-heading" className="sr-only">
            資料一覧
          </h2>

          {visible === 0 ? (
            <div
              role="status"
              className="border border-dashed border-stroke1 rounded-2xl bg-bg2 px-[24px] py-[48px] text-center"
            >
              <p className="text-base text-navy font-semibold m-0">
                該当する資料がありません
              </p>
              <p className="text-sm text-fg2 mt-[8px] m-0">
                別の種類を選ぶか、フィルターを解除してください。
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-[20px] inline-flex items-center gap-2 px-5 py-[10px] rounded-full text-sm font-medium text-navy bg-white border border-stroke1 hover:border-navy transition-all"
              >
                フィルターを解除
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {filtered.map((resource, i) => (
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
          )}
        </div>
      </section>
    </>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  if (resource.kind === "webinar") {
    return <WebinarCard resource={resource} />;
  }

  return <WhitepaperCard resource={resource} />;
}

function WhitepaperCard({ resource }: { resource: Whitepaper }) {
  return (
    <article className="group relative h-full bg-white border border-stroke1 rounded-2xl overflow-hidden flex flex-col transition-all hover:border-navy/30 hover:shadow-[0_12px_36px_rgba(44,54,93,0.10)]">
      <MarketingLink
        href={resource.href}
        aria-label={`${resource.title}の詳細を見る`}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2"
      >
        <span className="sr-only">詳細を見る</span>
      </MarketingLink>

      <div className="p-[28px] sm:p-[32px] flex flex-col flex-1">
        <h3 className="text-[20px] sm:text-[22px] font-semibold leading-[1.45] tracking-[-0.01em] text-navy m-0">
          {resource.title}
        </h3>

        {resource.subtitle ? (
          <p className="mt-[10px] text-[15px] sm:text-[16px] font-semibold leading-[1.5] text-navy/85 m-0">
            {resource.subtitle}
          </p>
        ) : null}

        <p className="mt-[16px] text-[14px] sm:text-[15px] leading-[1.8] text-fg2 m-0 flex-1">
          {resource.description}
        </p>

        <div className="mt-auto pt-[28px] flex flex-wrap items-center justify-between gap-x-[16px] gap-y-[12px]">
          <span className="inline-flex items-center text-[14px] font-semibold text-navy border-b border-turquoise pb-[2px] group-hover:text-turquoise transition-colors">
            詳細を見る
          </span>

          <MarketingLink
            href={resource.requestHref}
            className="relative z-20 inline-flex items-center justify-center px-[18px] py-[10px] rounded-full text-[14px] font-semibold bg-turquoise text-navy hover:bg-turquoise-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2"
          >
            資料を請求する
          </MarketingLink>
        </div>
      </div>
    </article>
  );
}

function WebinarCard({ resource }: { resource: Webinar }) {
  return (
    <article className="group relative h-full bg-white border border-stroke1 rounded-2xl overflow-hidden flex flex-col transition-all hover:border-navy/30 hover:shadow-[0_12px_36px_rgba(44,54,93,0.10)]">
      <a
        href={`https://www.youtube.com/watch?v=${resource.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${resource.title}を視聴する`}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2"
      >
        <span className="sr-only">視聴する</span>
      </a>

      <div className="relative aspect-video overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resource.thumbnail}
          alt={`${resource.title} サムネイル`}
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

      <div className="p-[24px] flex flex-col flex-1">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-fg2 m-0">
          Peter&apos;s Viewpoint
        </p>
        <h3 className="mt-[8px] text-[18px] font-semibold leading-[1.4] tracking-[-0.01em] text-navy m-0">
          {resource.title}
        </h3>
        <p className="mt-[14px] text-[14px] leading-[1.7] text-fg2 m-0 flex-1">
          {resource.description}
        </p>
        <div className="mt-auto pt-[20px]">
          <span className="inline-flex items-center text-[14px] font-semibold text-navy border-b border-turquoise pb-[2px] group-hover:text-turquoise transition-colors">
            視聴する
          </span>
        </div>
      </div>
    </article>
  );
}
