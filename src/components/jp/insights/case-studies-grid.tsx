"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MarketingLink } from "@/components/marketing/marketing-link";

export type Region = "north-america" | "asia-pacific" | "middle-east";
export type Topic =
  | "retail-energy"
  | "utility"
  | "energy-transition"
  | "billing-cx"
  | "market-ops";
export type Focus =
  | "electricity"
  | "gas"
  | "water"
  | "renewables"
  | "ev"
  | "bess";

type MediaKind = "video" | "image";

export type CaseStudy = {
  slug: string;
  company: string;
  title: string;
  region: Region;
  topic: Topic;
  focus: Focus;
  pills: string[];
  metrics: string[];
  quote: string;
  attribution: { name: string; role: string; company: string };
  media: { kind: MediaKind; tone: 1 | 2 | 3 | 4; icon: string };
  href?: string;
};

const REGION_LABELS: Record<Region, string> = {
  "north-america": "北米",
  "asia-pacific": "アジア太平洋",
  "middle-east": "中東",
};

const TOPIC_LABELS: Record<Topic, string> = {
  "retail-energy": "小売電気",
  utility: "ユーティリティ",
  "energy-transition": "エネルギー転換",
  "billing-cx": "請求・顧客体験",
  "market-ops": "市場オペレーション",
};

const FOCUS_LABELS: Record<Focus, string> = {
  electricity: "電力",
  gas: "ガス",
  water: "水道",
  renewables: "再生可能エネルギー",
  ev: "EV",
  bess: "BESS",
};

const MEDIA_TONES: Record<
  1 | 2 | 3 | 4,
  { gradient: string; iconColor: string; pattern: string }
> = {
  1: {
    gradient:
      "linear-gradient(135deg, #1E2840 0%, #2C365D 55%, #0B7A66 100%)",
    iconColor: "rgba(0, 210, 162, 0.85)",
    pattern:
      "radial-gradient(circle at 85% 20%, rgba(0,210,162,0.35), transparent 55%)",
  },
  2: {
    gradient:
      "linear-gradient(135deg, #0B5468 0%, #1A88A0 55%, #00D2A2 100%)",
    iconColor: "rgba(255, 255, 255, 0.92)",
    pattern:
      "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.18), transparent 55%)",
  },
  3: {
    gradient:
      "linear-gradient(135deg, #2C365D 0%, #3F4F8F 55%, #5A7BBF 100%)",
    iconColor: "rgba(0, 210, 162, 0.95)",
    pattern:
      "radial-gradient(circle at 75% 75%, rgba(0,210,162,0.28), transparent 55%)",
  },
  4: {
    gradient:
      "linear-gradient(135deg, #2C365D 0%, #5B3F7A 50%, #C77B4A 100%)",
    iconColor: "rgba(255, 255, 255, 0.92)",
    pattern:
      "radial-gradient(circle at 30% 80%, rgba(255,210,140,0.28), transparent 55%)",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: "easeOut" as const },
  }),
};

export function CaseStudiesGrid({ studies }: { studies: CaseStudy[] }) {
  const [regions, setRegions] = useState<Region[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [focuses, setFocuses] = useState<Focus[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return studies.filter((s) => {
      if (regions.length > 0 && !regions.includes(s.region)) return false;
      if (topics.length > 0 && !topics.includes(s.topic)) return false;
      if (focuses.length > 0 && !focuses.includes(s.focus)) return false;
      return true;
    });
  }, [studies, regions, topics, focuses]);

  const total = studies.length;
  const visible = filtered.length;
  const activeCount = regions.length + topics.length + focuses.length;
  const isFiltered = activeCount > 0;
  const filtersPanelId = "case-studies-filters-panel";

  function handleReset() {
    setRegions([]);
    setTopics([]);
    setFocuses([]);
  }

  function toggleValue<T extends string>(
    current: T[],
    setter: (next: T[]) => void,
    value: T,
  ) {
    setter(
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value],
    );
  }

  return (
    <>
      <section aria-label="導入事例の絞り込み">
        <div className="max-w-[1240px] mx-auto px-8 pt-[24px] lg:pt-[28px]">
          <div className="flex flex-wrap items-center gap-x-[16px] gap-y-[12px]">
            <button
              type="button"
              onClick={() => setIsFiltersOpen((v) => !v)}
              aria-expanded={isFiltersOpen}
              aria-controls={filtersPanelId}
              className={`inline-flex items-center gap-[8px] px-[16px] py-[10px] rounded-full text-[13px] font-semibold leading-none border transition-all ${
                isFiltersOpen || isFiltered
                  ? "bg-navy text-white border-navy hover:bg-navy-dark"
                  : "bg-white text-navy border-stroke1 hover:border-navy/40"
              }`}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden
              >
                tune
              </span>
              絞り込み
              {activeCount > 0 && (
                <span
                  className="inline-flex items-center justify-center min-w-[20px] h-[20px] px-[6px] rounded-full bg-turquoise text-navy text-[11px] font-bold tabular-nums"
                  aria-label={`${activeCount}件の条件が適用中`}
                >
                  {activeCount}
                </span>
              )}
              <span
                className={`material-symbols-outlined text-[18px] transition-transform ${
                  isFiltersOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              >
                expand_more
              </span>
            </button>

            {isFiltered && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-[13px] font-medium text-navy hover:text-turquoise transition-colors"
              >
                <span
                  className="material-symbols-outlined text-[16px]"
                  aria-hidden
                >
                  close
                </span>
                条件をクリア
              </button>
            )}

            <p
              className="text-sm text-fg2 m-0 ml-auto"
              aria-live="polite"
            >
              {isFiltered
                ? `全${total}件中 ${visible}件を表示しています。`
                : `全${total}件の事例を表示しています。`}
            </p>
          </div>

          <AnimatePresence initial={false}>
            {isFiltersOpen && (
              <motion.div
                id={filtersPanelId}
                key="filters-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="pt-[24px] mt-[24px] border-t border-stroke1 flex flex-col gap-[20px]">
                  <FilterPillGroup
                    label="地域"
                    values={regions}
                    onToggle={(v) =>
                      toggleValue(regions, setRegions, v as Region)
                    }
                    onClear={() => setRegions([])}
                    allLabel="すべての地域"
                    options={Object.entries(REGION_LABELS).map(
                      ([value, label]) => ({
                        value,
                        label,
                      }),
                    )}
                  />
                  <FilterPillGroup
                    label="トピック"
                    values={topics}
                    onToggle={(v) => toggleValue(topics, setTopics, v as Topic)}
                    onClear={() => setTopics([])}
                    allLabel="すべてのトピック"
                    options={Object.entries(TOPIC_LABELS).map(
                      ([value, label]) => ({
                        value,
                        label,
                      }),
                    )}
                  />
                  <FilterPillGroup
                    label="分野"
                    values={focuses}
                    onToggle={(v) =>
                      toggleValue(focuses, setFocuses, v as Focus)
                    }
                    onClear={() => setFocuses([])}
                    allLabel="すべての分野"
                    options={Object.entries(FOCUS_LABELS).map(
                      ([value, label]) => ({
                        value,
                        label,
                      }),
                    )}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section
        className="pt-[40px] pb-[80px] lg:pt-[48px] lg:pb-[96px]"
        aria-labelledby="cs-stories-heading"
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <h2 id="cs-stories-heading" className="sr-only">
            主な事例
          </h2>

          {visible === 0 ? (
            <div
              role="status"
              className="border border-dashed border-stroke1 rounded-2xl bg-bg2 px-[24px] py-[48px] text-center"
            >
              <p className="text-base text-navy font-semibold m-0">
                条件に一致する事例がありません
              </p>
              <p className="text-sm text-fg2 mt-[8px] m-0">
                地域・トピック・分野を変更するか、条件をクリアしてください。
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
              {filtered.map((study, i) => (
                <motion.div
                  key={study.slug}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                >
                  <CaseStudyCard study={study} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function FilterPillGroup({
  label,
  values,
  onToggle,
  onClear,
  allLabel,
  options,
}: {
  label: string;
  values: string[];
  onToggle: (value: string) => void;
  onClear: () => void;
  allLabel: string;
  options: { value: string; label: string }[];
}) {
  const groupLabelId = `filter-group-${label}`;
  const noneSelected = values.length === 0;

  return (
    <div className="flex flex-col gap-[10px] sm:flex-row sm:items-center sm:gap-[16px]">
      <p
        id={groupLabelId}
        className="text-[11px] font-bold uppercase tracking-[0.12em] text-fg2 sm:w-[80px] sm:shrink-0 m-0"
      >
        {label}
      </p>
      <div
        role="group"
        aria-labelledby={groupLabelId}
        className="flex flex-wrap gap-[8px]"
      >
        <button
          key="__all"
          type="button"
          aria-pressed={noneSelected}
          onClick={onClear}
          className={`inline-flex items-center px-[14px] py-[7px] rounded-full text-[13px] font-medium leading-none border transition-all ${
            noneSelected
              ? "bg-navy text-white border-navy shadow-[0_2px_8px_rgba(44,54,93,0.18)]"
              : "bg-white text-fg2 border-stroke1 hover:border-navy/40 hover:text-navy"
          }`}
        >
          {allLabel}
        </button>
        {options.map((o) => {
          const isActive = values.includes(o.value);
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => onToggle(o.value)}
              className={`inline-flex items-center px-[14px] py-[7px] rounded-full text-[13px] font-medium leading-none border transition-all ${
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
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const tone = MEDIA_TONES[study.media.tone];
  const isVideo = study.media.kind === "video";
  const isLinked = Boolean(study.href);

  return (
    <article
      className={`group relative h-full bg-white border border-stroke1 rounded-2xl overflow-hidden flex flex-col transition-all hover:border-navy/30 hover:shadow-[0_12px_36px_rgba(44,54,93,0.10)] ${
        isLinked ? "cursor-pointer" : ""
      }`}
    >
      {isLinked && (
        <MarketingLink
          href={study.href!}
          aria-label={`${study.company}：${study.title}`}
          className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2"
        >
          <span className="sr-only">詳しく見る</span>
        </MarketingLink>
      )}
      <div
        className="relative aspect-[16/10] overflow-hidden"
        role="img"
        aria-label={`${study.company}の事例イメージ`}
        style={{ background: tone.gradient }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: tone.pattern }}
          aria-hidden
        />
        <div className="absolute inset-0 grid place-items-center">
          <span
            className="material-symbols-outlined text-[96px]"
            style={{ color: tone.iconColor }}
            aria-hidden
          >
            {study.media.icon}
          </span>
        </div>
        {isVideo && (
          <span className="absolute top-[12px] right-[12px] inline-flex items-center gap-1 px-[10px] py-[5px] rounded-full bg-black/55 text-white text-[11px] font-semibold uppercase tracking-[0.1em] backdrop-blur-sm">
            <span
              className="material-symbols-outlined text-[14px]"
              aria-hidden
            >
              play_circle
            </span>
            動画
          </span>
        )}
        <span className="absolute bottom-[12px] left-[14px] inline-flex items-center px-[10px] py-[4px] rounded-full bg-white/90 text-navy text-[11px] font-semibold tracking-[0.04em]">
          {REGION_LABELS[study.region]}
        </span>
      </div>

      <div className="p-[24px] flex flex-col flex-1">
        <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-fg2 m-0">
          {study.company}
        </p>
        <h3 className="mt-[8px] text-[18px] font-semibold leading-[1.4] tracking-[-0.01em] text-navy m-0">
          {study.title}
        </h3>

        <ul
          className="flex flex-wrap gap-[6px] mt-[14px] list-none p-0 m-0"
          aria-label="地域・トピック・分野"
        >
          {study.pills.map((pill) => (
            <li
              key={pill}
              className="px-[10px] py-[4px] rounded-full text-[11px] font-medium text-fg2 bg-bg2 border border-stroke1"
            >
              {pill}
            </li>
          ))}
        </ul>

        <ul
          className="mt-[18px] flex flex-col gap-[8px] list-none p-0 m-0"
          aria-label="主な成果"
        >
          {study.metrics.map((m) => (
            <li
              key={m}
              className="pl-[20px] relative text-[13.5px] leading-[1.6] text-fg2 before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-[7px] before:h-[7px] before:rounded-full before:border-[1.5px] before:border-turquoise before:bg-turquoise/40"
            >
              {m}
            </li>
          ))}
        </ul>

        <blockquote className="mt-[20px] pl-[14px] border-l-[3px] border-turquoise text-[14px] leading-[1.6] italic text-navy/90 m-0">
          {study.quote}
        </blockquote>
        <p className="mt-[10px] text-[12.5px] leading-[1.5] text-fg2 m-0">
          <strong className="font-semibold text-fg1">
            {study.attribution.name}
          </strong>
          、{study.attribution.role}、{study.attribution.company}
        </p>

        <div className="mt-auto pt-[20px]">
          <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-navy group-hover:text-turquoise transition-colors">
            {study.href ? "詳しく見る" : "近日公開"}
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
