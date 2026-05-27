import { MarketingLink } from "@/components/marketing/marketing-link";

export type BulletItem = { strong?: string; text: React.ReactNode };

export type TechIntroPill = string | { label: string; href: string };

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
      <span className="w-[18px] h-[1px] bg-turquoise inline-block" aria-hidden />
      {children}
    </div>
  );
}

export function TechHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
}) {
  return (
    <section
      className="relative overflow-hidden pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px] border-b border-stroke1"
      style={{
        background:
          "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1 className="text-[32px] lg:text-[48px] font-light leading-[1.3] tracking-[-0.02em] text-navy max-w-[36ch] m-0">
          {title}
        </h1>
        {lede && (
          <p className="mt-[20px] text-[17px] leading-[1.75] text-fg2 max-w-[60ch] m-0">{lede}</p>
        )}
      </div>
    </section>
  );
}

export function TechIntroBand({
  eyebrow,
  heading,
  paragraphs,
  pills,
  keywords,
  large = false,
}: {
  eyebrow?: string;
  heading: string;
  paragraphs: React.ReactNode[];
  pills?: TechIntroPill[];
  keywords?: string[];
  large?: boolean;
}) {
  const pillClassName =
    "inline-flex items-center px-[14px] py-[7px] rounded-full text-[13px] font-medium bg-white text-navy border border-stroke1";
  const pillLinkClassName = `${pillClassName} hover:border-navy/25 transition-colors`;

  const headingClass = large
    ? "text-[30px] font-light leading-[1.3] tracking-[-0.01em] text-navy m-0"
    : "text-[22px] lg:text-[26px] font-light leading-[1.3] tracking-[-0.01em] text-navy m-0";
  const paragraphClass = large
    ? "text-[20px] leading-[1.7] text-fg2 m-0"
    : "text-[15px] leading-[1.75] text-fg2 m-0";

  return (
    <section className="bg-bg2 py-[48px] lg:py-[56px] border-b border-stroke1">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px]">
          {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
          <h2 className={headingClass}>{heading}</h2>
          <div className="mt-[16px] flex flex-col gap-3">
            {paragraphs.map((p, i) => (
              <p key={i} className={paragraphClass}>
                {p}
              </p>
            ))}
          </div>
          {pills && pills.length > 0 && (
            <div role="list" className="flex flex-wrap gap-2 mt-[24px]">
              {pills.map((pill) => {
                const label = typeof pill === "string" ? pill : pill.label;
                const href = typeof pill === "string" ? undefined : pill.href;

                if (href) {
                  return (
                    <MarketingLink
                      key={label}
                      href={href}
                      role="listitem"
                      className={pillLinkClassName}
                    >
                      {label}
                    </MarketingLink>
                  );
                }

                return (
                  <span key={label} role="listitem" className={pillClassName}>
                    {label}
                  </span>
                );
              })}
            </div>
          )}
          {keywords && keywords.length > 0 && (
            <div role="list" className="flex flex-wrap gap-2 mt-[24px]">
              {keywords.map((kw) => (
                <span
                  key={kw}
                  role="listitem"
                  className="inline-flex items-center px-[14px] py-[7px] rounded-full text-[13px] font-semibold bg-white text-navy border border-stroke1"
                >
                  {kw}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function TechSection({
  id,
  eyebrow,
  heading,
  lede,
  altBg = false,
  large = false,
  noBorder = false,
  children,
}: {
  id?: string;
  eyebrow?: string;
  heading?: string;
  lede?: React.ReactNode;
  altBg?: boolean;
  large?: boolean;
  noBorder?: boolean;
  children?: React.ReactNode;
}) {
  const headingSizeClass = large ? "text-[30px]" : "text-[30px] lg:text-[40px]";
  const ledeWrapperClass = large
    ? "mt-[16px] text-[20px] leading-[1.7] text-fg2 max-w-[60ch]"
    : "mt-[16px] text-[15px] leading-[1.75] text-fg2 max-w-[60ch]";
  const borderClass = noBorder ? "" : "border-b border-stroke1";

  return (
    <section
      className={`py-[80px] lg:py-[96px] ${borderClass} ${altBg ? "bg-bg2" : "bg-white"}`}
      aria-labelledby={id}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        {(eyebrow || heading || lede) && (
          <div className="max-w-[760px]">
            {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
            {heading && (
              <h2
                id={id}
                className={`${headingSizeClass} font-light leading-[1.25] tracking-[-0.02em] text-navy m-0${id ? " scroll-mt-[88px]" : ""}`}
              >
                {heading}
              </h2>
            )}
            {lede && (
              <div className={ledeWrapperClass}>
                {typeof lede === "string" ? <p className="m-0">{lede}</p> : lede}
              </div>
            )}
          </div>
        )}
        {children && <div className="mt-[40px]">{children}</div>}
      </div>
    </section>
  );
}

export function TechSubheading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h3
      id={id}
      className="text-[11px] font-bold uppercase tracking-[0.12em] text-navy/70 mt-[48px] mb-[16px] first:mt-0"
    >
      {children}
    </h3>
  );
}

export function TechBodyParagraph({
  children,
  large = false,
}: {
  children: React.ReactNode;
  large?: boolean;
}) {
  const sizeClass = large ? "text-[20px] leading-[1.7]" : "text-[15px] leading-[1.75]";
  return (
    <p className={`${sizeClass} text-fg2 max-w-[60ch] m-0 mt-[16px] first:mt-0`}>{children}</p>
  );
}

export function TechBulletList({
  items,
  columns = 1,
  large = false,
}: {
  items: BulletItem[];
  columns?: 1 | 2;
  large?: boolean;
}) {
  const itemSizeClass = large ? "text-[20px] leading-[1.7]" : "text-[15px] leading-[1.75]";
  return (
    <ul
      className={`grid gap-x-6 gap-y-3 list-none m-0 p-0 ${
        columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
      }`}
    >
      {items.map((item, i) => (
        <li
          key={i}
          className={`${itemSizeClass} text-fg2 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-[6px] before:h-[6px] before:rounded-full before:bg-turquoise`}
        >
          {item.strong ? (
            <>
              <span className="font-semibold text-navy">{item.strong}:</span> {item.text}
            </>
          ) : (
            item.text
          )}
        </li>
      ))}
    </ul>
  );
}

export type TechCard = { icon?: string; title: string; body: React.ReactNode };

export function TechCardGrid({
  items,
  columns = 3,
  surface = "soft",
}: {
  items: TechCard[];
  columns?: 2 | 3;
  surface?: "soft" | "outline";
}) {
  const cardClass =
    surface === "outline"
      ? "bg-white border border-stroke1 rounded-xl p-[28px] flex flex-col gap-[14px] h-full"
      : "bg-bg2 rounded-xl p-[28px] flex flex-col gap-[14px] h-full";
  const iconWrap =
    surface === "outline"
      ? "w-10 h-10 rounded-[10px] bg-bg2 grid place-items-center text-navy"
      : "w-10 h-10 rounded-[10px] bg-white border border-navy/[0.08] grid place-items-center text-navy";
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${
        columns === 3 ? "lg:grid-cols-3" : ""
      } gap-[20px]`}
    >
      {items.map((item) => (
        <div key={item.title} className={cardClass}>
          {item.icon && (
            <div className={iconWrap}>
              <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
            </div>
          )}
          <h3 className="text-[17px] font-semibold leading-[1.4] tracking-[-0.01em] text-fg1 m-0 text-balance">
            {item.title}
          </h3>
          <p className="text-[14px] leading-[1.7] text-fg2 m-0">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export type IntegBlock = { title: string; body: React.ReactNode };

export function TechIntegGrid({
  items,
  columns = 4,
}: {
  items: IntegBlock[];
  columns?: 2 | 3 | 4;
}) {
  const colClass =
    columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : columns === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2";
  return (
    <div className={`grid gap-[16px] ${colClass}`}>
      {items.map((item) => (
        <div
          key={item.title}
          className="bg-white border border-stroke1 rounded-xl px-[22px] py-[20px] flex flex-col gap-[8px]"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-navy/70 m-0">
            {item.title}
          </p>
          <p className="text-[14px] leading-[1.65] text-fg2 m-0">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export type PrincipleCard = { icon: string; title: string; items: string[] };

export function TechPrincipleGrid({
  cards,
  surface = "soft",
}: {
  cards: PrincipleCard[];
  surface?: "soft" | "outline";
}) {
  const cardClass =
    surface === "outline"
      ? "bg-white border border-stroke1 rounded-xl p-[28px] flex flex-col gap-[16px]"
      : "bg-bg2 rounded-xl p-[28px] flex flex-col gap-[16px]";
  const iconWrap =
    surface === "outline"
      ? "w-10 h-10 rounded-[10px] bg-bg2 grid place-items-center text-navy shrink-0"
      : "w-10 h-10 rounded-[10px] bg-white border border-navy/[0.08] grid place-items-center text-navy shrink-0";

  const renderCard = (card: PrincipleCard) => (
    <article key={card.title} className={`${cardClass} last:grow`}>
      <div className="flex items-center gap-3">
        <div className={iconWrap}>
          <span className="material-symbols-outlined text-[22px]">{card.icon}</span>
        </div>
        <h3 className="text-[18px] font-semibold leading-[1.35] tracking-[-0.01em] text-fg1 m-0">
          {card.title}
        </h3>
      </div>
      <ul className="list-none m-0 p-0 flex flex-col gap-[8px]">
        {card.items.map((item, i) => (
          <li
            key={i}
            className="text-[14px] leading-[1.7] text-fg2 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-[5px] before:h-[5px] before:rounded-full before:bg-turquoise"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );

  const leftCol = cards.filter((_, i) => i % 2 === 0);
  const rightCol = cards.filter((_, i) => i % 2 === 1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
      <div className="flex flex-col gap-[20px]">{leftCol.map(renderCard)}</div>
      <div className="flex flex-col gap-[20px]">{rightCol.map(renderCard)}</div>
    </div>
  );
}

export function TechCTARow({
  buttons,
  align = "left",
}: {
  buttons: { label: string; href: string; variant?: "primary" | "secondary" }[];
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-wrap gap-3 mt-[32px] ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      {buttons.map((b) => (
        <MarketingLink
          key={b.label}
          href={b.href}
          className={
            b.variant === "secondary"
              ? "inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-transparent text-navy border border-stroke1 hover:bg-bg3 transition-all"
              : "inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all"
          }
        >
          {b.label}
          {b.variant !== "secondary" && (
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          )}
        </MarketingLink>
      ))}
    </div>
  );
}
