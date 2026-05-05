import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  breadcrumbs: Crumb[];
  title: string;
  lede?: string;
  ledeAccent?: { text: string; accent: string }[];
  children?: React.ReactNode;
}

export function CorporatePageHero({ breadcrumbs, title, lede, ledeAccent, children }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden border-b border-stroke1 pt-[64px] pb-[48px] lg:pt-[96px] lg:pb-[64px]"
      style={{
        background:
          "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <p className="text-xs text-fg2 mb-[10px]">
          {breadcrumbs.map((crumb, i) => (
            <span key={i}>
              {i > 0 && <span className="mx-1 text-fg3">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="text-fg2 no-underline hover:text-navy transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-fg1 font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </p>

        <h1 className="mt-[10px] text-[44px] lg:text-[64px] font-extrabold leading-[1.04] tracking-[-0.025em] text-navy max-w-[18ch]">
          {title}
        </h1>

        {ledeAccent && ledeAccent.length > 0 && (
          <p className="mt-[20px] text-[19px] leading-[1.55] text-fg2 max-w-[60ch]">
            {ledeAccent.map((part, i) => (
              <span key={i}>
                {part.accent ? (
                  <span className="text-turquoise font-semibold">{part.text}</span>
                ) : (
                  <span>{part.text}</span>
                )}
              </span>
            ))}
          </p>
        )}
        {lede && !ledeAccent && (
          <p className="mt-[20px] text-[19px] leading-[1.55] text-fg2 max-w-[60ch]">
            {lede}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
