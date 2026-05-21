"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

export type Whitepaper = {
  kind: "whitepaper";
  title: string;
  description: string;
  href: string;
};

export type Webinar = {
  kind: "webinar";
  title: string;
  description: string;
  href: string;
  date: string;
  dateISO: string;
  duration: string;
  speaker: string;
  role: string;
  tone: 1 | 2 | 3 | 4;
};

export type Resource = Whitepaper | Webinar;

type KindFilter = "" | "whitepaper" | "webinar";

const KIND_LABELS: Record<Exclude<KindFilter, "">, string> = {
  whitepaper: "ホワイトペーパー",
  webinar: "ウェビナー",
};

const MEDIA_TONES: Record<
  1 | 2 | 3 | 4,
  { gradient: string; pattern: string; iconColor: string }
> = {
  1: {
    gradient:
      "linear-gradient(135deg, #1E2840 0%, #2C365D 55%, #0B7A66 100%)",
    pattern:
      "radial-gradient(circle at 85% 20%, rgba(0,210,162,0.35), transparent 55%)",
    iconColor: "rgba(255, 255, 255, 0.95)",
  },
  2: {
    gradient:
      "linear-gradient(135deg, #0B5468 0%, #1A88A0 55%, #00D2A2 100%)",
    pattern:
      "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.18), transparent 55%)",
    iconColor: "rgba(255, 255, 255, 0.95)",
  },
  3: {
    gradient:
      "linear-gradient(135deg, #2C365D 0%, #3F4F8F 55%, #5A7BBF 100%)",
    pattern:
      "radial-gradient(circle at 75% 75%, rgba(0,210,162,0.28), transparent 55%)",
    iconColor: "rgba(255, 255, 255, 0.95)",
  },
  4: {
    gradient:
      "linear-gradient(135deg, #2C365D 0%, #5B3F7A 50%, #C77B4A 100%)",
    pattern:
      "radial-gradient(circle at 30% 80%, rgba(255,210,140,0.28), transparent 55%)",
    iconColor: "rgba(255, 255, 255, 0.95)",
  },
};

const WHITEPAPER_TILE = {
  gradient:
    "linear-gradient(135deg, #F4FBF9 0%, #DFF4ED 55%, #BDE9DC 100%)",
  pattern:
    "radial-gradient(circle at 80% 30%, rgba(0,210,162,0.22), transparent 55%)",
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: "easeOut" as const },
  }),
};

export function ResourcesGrid({ resources }: { resources: Resource[] }) {
  const [kind, setKind] = useState<KindFilter>("");

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      if (kind && r.kind !== kind) return false;
      return true;
    });
  }, [resources, kind]);

  const total = resources.length;
  const visible = filtered.length;
  const isFiltered = kind !== "";

  function handleReset() {
    setKind("");
  }

  const kindOptions: { value: KindFilter; label: string }[] = [
    { value: "", label: "すべて" },
    ...Object.entries(KIND_LABELS).map(([value, label]) => ({
      value: value as KindFilter,
      label,
    })),
  ];

  return (
    <>
      <section aria-label="資料の絞り込み">
        <div className="max-w-[1240px] mx-auto px-8 pt-[8px] lg:pt-[12px]">
          <div className="flex flex-col gap-[16px] sm:flex-row sm:items-center sm:gap-[20px]">
            <div
              role="radiogroup"
              aria-label="種類で絞り込み"
              className="flex flex-wrap gap-[8px]"
            >
              {kindOptions.map((o) => {
                const isActive = kind === o.value;
                return (
                  <button
                    key={o.value || "__all"}
                    type="button"
                    role="radio"
                    aria-checked={isActive}
                    onClick={() => setKind(o.value)}
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

            <p
              className="text-sm text-fg2 m-0 sm:ml-auto"
              aria-live="polite"
            >
              {isFiltered
                ? `全${total}件中 ${visible}件を表示しています。`
                : `全${total}件の資料を表示しています。`}
            </p>
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
                条件に一致する資料がありません
              </p>
              <p className="text-sm text-fg2 mt-[8px] m-0">
                種類を変更するか、条件をクリアしてください。
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-[20px] inline-flex items-center gap-2 px-5 py-[10px] rounded-full text-sm font-medium text-navy bg-white border border-stroke1 hover:border-navy transition-all"
              >
                条件をクリア
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {filtered.map((resource, i) => (
                <motion.div
                  key={`${resource.kind}-${resource.title}`}
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
  const isWebinar = resource.kind === "webinar";
  const tone = isWebinar ? MEDIA_TONES[resource.tone] : null;
  const eyebrow = isWebinar
    ? `ウェビナー · ${resource.duration}`
    : "ホワイトペーパー";
  const cta = isWebinar ? "視聴する" : "PDFを見る";

  return (
    <article className="group relative h-full bg-white border border-stroke1 rounded-2xl overflow-hidden flex flex-col transition-all hover:border-navy/30 hover:shadow-[0_12px_36px_rgba(44,54,93,0.10)]">
      <a
        href={resource.href}
        aria-label={`${resource.title}（${eyebrow}）`}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2"
      >
        <span className="sr-only">{cta}</span>
      </a>

      <div
        className="relative aspect-[16/10] overflow-hidden"
        role="img"
        aria-label={isWebinar ? "ウェビナー プレビュー" : "ホワイトペーパー プレビュー"}
        style={{
          background: tone ? tone.gradient : WHITEPAPER_TILE.gradient,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: tone ? tone.pattern : WHITEPAPER_TILE.pattern }}
          aria-hidden
        />
        <div className="absolute inset-0 grid place-items-center">
          {isWebinar ? (
            <span className="grid place-items-center w-[72px] h-[72px] rounded-full bg-white/20 border-2 border-white/45 text-white transition-transform group-hover:scale-105">
              <span
                className="material-symbols-outlined text-[34px] translate-x-[2px]"
                aria-hidden
              >
                play_arrow
              </span>
            </span>
          ) : (
            <span
              className="material-symbols-outlined text-[88px]"
              style={{ color: "rgba(11, 122, 102, 0.85)" }}
              aria-hidden
            >
              description
            </span>
          )}
        </div>
        <span className="absolute top-[12px] right-[12px] inline-flex items-center gap-1 px-[10px] py-[5px] rounded-full bg-black/55 text-white text-[11px] font-semibold uppercase tracking-[0.1em] backdrop-blur-sm">
          <span
            className="material-symbols-outlined text-[14px]"
            aria-hidden
          >
            {isWebinar ? "play_circle" : "picture_as_pdf"}
          </span>
          {isWebinar ? "動画" : "PDF"}
        </span>
      </div>

      <div className="p-[24px] flex flex-col flex-1">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-fg2 m-0">
          {eyebrow}
        </p>
        <h3 className="mt-[8px] text-[18px] font-semibold leading-[1.4] tracking-[-0.01em] text-navy m-0">
          {resource.title}
        </h3>

        {isWebinar && (
          <p className="mt-[10px] text-[12.5px] font-semibold text-fg2 m-0">
            <time dateTime={resource.dateISO}>{resource.date}</time>
          </p>
        )}

        <p className="mt-[14px] text-[14px] leading-[1.7] text-fg2 m-0 flex-1">
          {resource.description}
        </p>

        {isWebinar && (
          <p className="mt-[16px] text-[12.5px] leading-[1.5] text-fg2 m-0">
            <strong className="font-semibold text-fg1">
              {resource.speaker}
            </strong>
            、{resource.role}
          </p>
        )}

        <div className="mt-auto pt-[20px]">
          <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-navy group-hover:text-turquoise transition-colors">
            {cta}
            <span
              className="material-symbols-outlined text-[18px]"
              aria-hidden
            >
              arrow_forward
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}
