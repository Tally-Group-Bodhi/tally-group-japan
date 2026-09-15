"use client";

import { motion } from "framer-motion";
import { MarketingLink } from "@/components/marketing/marketing-link";
import { jpCtaPrimaryOnLightClass } from "@/components/jp/cta-button-classes";

export type EventItem = {
  slug: string;
  date: string;
  dateISO: string;
  title: string;
  titleLines?: string[];
  eyebrow?: string;
  location: string;
  description: string;
  href: string;
  external?: boolean;
  tone: 1 | 2 | 3 | 4;
  icon: string;
  image?: string;
  imageFit?: "cover" | "contain";
  logos?: { src: string; alt: string; onDark?: boolean; maxHeightClass?: string }[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: "easeOut" as const },
  }),
};

export function EventsList({ events }: { events: EventItem[] }) {
  return (
    <section
      className="pt-[40px] pb-[56px] lg:pt-[48px] lg:pb-[72px]"
      aria-labelledby="events-upcoming-heading"
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="flex items-baseline gap-3 mb-[24px]">
          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.12em] inline-flex items-center gap-2">
            <span
              className="w-[18px] h-[1px] bg-turquoise inline-block"
              aria-hidden
            />
            イベント・カンファレンス
          </div>
        </div>
        <h2
          id="events-upcoming-heading"
          className="text-[30px] font-light leading-[1.25] tracking-[-0.02em] text-navy m-0 mb-[28px] lg:mb-[36px]"
        >
          イベント・カンファレンス情報
        </h2>

        {events.length === 0 ? (
          <div
            role="status"
            className="border border-dashed border-stroke1 rounded-2xl bg-bg2 px-[24px] py-[48px] text-center"
          >
            <p className="text-base text-navy font-semibold m-0">
              現在お知らせできる予定はありません
            </p>
            <p className="text-sm text-fg2 mt-[8px] m-0">
              新しい情報が決まり次第、こちらに掲載いたします。
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {events.map((event, i) => (
              <motion.div
                key={event.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function EventCard({ event }: { event: EventItem }) {
  const titleLines = event.titleLines ?? [event.title];
  const hasImage = Boolean(event.image);
  const hasLogos = Boolean(event.logos?.length);

  const linkProps = event.external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <article className="group relative h-full bg-white border border-stroke1 rounded-2xl overflow-hidden flex flex-col transition-all hover:border-navy/30 hover:shadow-[0_12px_36px_rgba(44,54,93,0.10)]">
      <a
        href={event.href}
        aria-label={`${event.title}：${event.date}、${event.location}`}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2"
        {...linkProps}
      >
        <span className="sr-only">詳細情報を見る</span>
      </a>

      {hasImage ? (
        <div
          className="relative aspect-[16/10] overflow-hidden"
          role="img"
          aria-label={`${event.title}のイメージ`}
          style={{
            background:
              event.imageFit === "contain" ? "#000000" : undefined,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={event.image}
            alt=""
            loading="lazy"
            className={`absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-[1.03] ${
              event.imageFit === "contain"
                ? "object-contain px-[14%] py-[10%]"
                : "object-cover"
            }`}
          />
          <span className="absolute top-[12px] right-[12px] inline-flex items-center gap-1 px-[10px] py-[5px] rounded-full bg-black/55 text-white text-[11px] font-semibold uppercase tracking-[0.1em] backdrop-blur-sm">
            <span
              className="material-symbols-outlined text-[14px]"
              aria-hidden
            >
              event
            </span>
            イベント
          </span>
          <span className="absolute bottom-[12px] left-[14px] inline-flex items-center px-[10px] py-[4px] rounded-full bg-white/90 text-navy text-[11px] font-semibold tracking-[0.04em]">
            {event.location}
          </span>
        </div>
      ) : hasLogos ? (
        <div
          className="relative aspect-[16/10] overflow-hidden border-b border-stroke1 bg-bg2"
          aria-label={`${event.title}の主催ロゴ`}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[10px] px-[28px] py-[20px]">
            {event.logos!.map((logo) => (
              <div
                key={logo.src}
                className={`relative w-full grid place-items-center ${
                  logo.onDark
                    ? "bg-navy-dark rounded-md px-[12px] py-[8px]"
                    : ""
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className={`${logo.maxHeightClass ?? "max-h-[40px]"} w-auto max-w-full object-contain`}
                />
              </div>
            ))}
          </div>
          <span className="absolute top-[12px] right-[12px] inline-flex items-center gap-1 px-[10px] py-[5px] rounded-full bg-black/55 text-white text-[11px] font-semibold uppercase tracking-[0.1em] backdrop-blur-sm">
            <span
              className="material-symbols-outlined text-[14px]"
              aria-hidden
            >
              event
            </span>
            イベント
          </span>
          <span className="absolute bottom-[12px] left-[14px] inline-flex items-center px-[10px] py-[4px] rounded-full bg-white/90 text-navy text-[11px] font-semibold tracking-[0.04em]">
            {event.location}
          </span>
        </div>
      ) : null}

      <div className="p-[24px] flex flex-col flex-1">
        <p className="text-[12px] font-semibold tracking-[0.04em] text-fg2 m-0">
          <time dateTime={event.dateISO}>{event.date}</time>
        </p>

        {event.eyebrow ? (
          <p className="mt-[10px] text-[13px] font-semibold leading-[1.5] text-navy/80 m-0">
            {event.eyebrow}
          </p>
        ) : null}

        <h3
          className={`${event.eyebrow ? "mt-[6px]" : "mt-[8px]"} text-[18px] font-semibold leading-[1.4] tracking-[-0.01em] text-navy m-0`}
        >
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>

        <p className="mt-[10px] text-[13px] font-medium text-fg2 m-0">
          {event.location}
        </p>

        <p className="mt-[14px] text-[14px] leading-[1.7] text-fg2 m-0 flex-1">
          {event.description}
        </p>

        <div className="mt-auto pt-[20px]">
          <span className="inline-flex items-center justify-center gap-1 w-full px-[16px] py-[12px] rounded-lg text-[14px] font-semibold bg-turquoise text-navy group-hover:bg-turquoise-hover transition-colors">
            詳細情報
            <span
              className="material-symbols-outlined text-[18px]"
              aria-hidden
            >
              {event.external ? "open_in_new" : "arrow_forward"}
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}

export function MeetInPersonSection({
  href = "/contact",
}: {
  href?: string;
}) {
  return (
    <section
      className="pb-[80px] lg:pb-[96px]"
      aria-labelledby="meet-in-person-heading"
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="relative overflow-hidden bg-white border border-stroke1 rounded-2xl p-[28px] sm:p-[40px] lg:p-[48px] flex flex-col gap-[20px] lg:flex-row lg:items-center lg:gap-[40px]">
          <div
            className="absolute -right-[80px] -top-[80px] w-[300px] h-[300px] rounded-full pointer-events-none"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle, rgba(0,210,162,0.10), transparent 60%)",
            }}
          />
          <div className="relative flex-1">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.12em] mb-[14px] inline-flex items-center gap-2">
              <span
                className="w-[18px] h-[1px] bg-turquoise inline-block"
                aria-hidden
              />
              お打ち合わせ
            </div>
            <h2
              id="meet-in-person-heading"
              className="text-[22px] font-semibold leading-[1.4] tracking-[-0.01em] text-navy max-w-[28ch] m-0"
            >
              現地でのお打ち合わせ
            </h2>
            <p className="mt-[14px] text-[20px] leading-[1.7] text-fg2 m-0 pr-0 lg:pr-4">
              イベント会場で皆さまとお会いできることを楽しみにしております。個別のご相談やお打ち合わせも承っております。
            </p>
          </div>
          <div className="relative shrink-0">
            <MarketingLink
              href={href}
              className={jpCtaPrimaryOnLightClass}
            >
              お問い合わせ
              <span
                className="material-symbols-outlined text-[16px]"
                aria-hidden
              >
                arrow_forward
              </span>
            </MarketingLink>
          </div>
        </div>
      </div>
    </section>
  );
}
