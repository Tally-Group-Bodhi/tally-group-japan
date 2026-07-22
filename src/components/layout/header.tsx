"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useMarketingHref } from "@/contexts/marketing-region";

type NavChild = { href: string; label: string };
type NavChildSection = { title: string; items: NavChild[] };
type NavLink = {
  href?: string;
  label: string;
  hasMenu?: boolean;
  children?: NavChild[];
  childSections?: NavChildSection[];
};

function buildJPNavLinks(href: (path: string) => string): NavLink[] {
  return [
    {
      label: "ソリューション",
      hasMenu: true,
      childSections: [
        {
          title: "プラットフォーム",
          items: [{ href: href("/solutions/tally-plus"), label: "Tally+" }],
        },
      ],
    },
    { href: href("/services-beta"), label: "サービス" },
    {
      label: "テクノロジー",
      hasMenu: true,
      children: [
        { href: href("/technology/architecture"), label: "アーキテクチャ" },
        { href: href("/technology/security"), label: "セキュリティ" },
      ],
    },
    { href: href("/insights/resources"), label: "インサイト" },
    {
      label: "ニュース",
      hasMenu: true,
      children: [
        { href: href("/news/press-releases"), label: "プレスリリース" },
        { href: href("/news/events"), label: "イベント" },
      ],
    },
    {
      href: href("/about"),
      label: "会社情報",
      hasMenu: true,
      children: [
        { href: href("/about"), label: "会社情報" },
        { href: href("/about#company-overview"), label: "会社概要" },
        { href: href("/about#japan-leadership"), label: "日本チーム" },
        { href: href("/about#mission-values"), label: "企業理念" },
      ],
    },
    { href: href("/contact"), label: "お問い合わせ" },
  ];
}

function navLinkClassName(isActive: boolean) {
  return `text-[15px] font-normal leading-none inline-flex items-center gap-[3px] transition-colors ${
    isActive ? "text-turquoise" : "text-[#2A2E3A] hover:text-navy"
  }`;
}

export function Header() {
  const pathname = usePathname();
  const href = useMarketingHref();
  const navLinks = useMemo(() => buildJPNavLinks(href), [href]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
        setMobileDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <header className="max-w-[1280px] mx-auto bg-white/60 backdrop-blur-xl backdrop-saturate-[180%] border border-white/40 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06),_0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="px-6 sm:px-8 flex items-center h-14">
          <Link
            href={href("/")}
            className="shrink-0"
            onClick={closeMobile}
            aria-label="Tally+"
          >
            <Image src="/logos/TallyPlus.svg" alt="Tally+" width={130} height={25} className="h-[25px] w-auto" />
          </Link>

          <nav ref={navRef} className="hidden lg:flex items-center gap-6 ml-8">
            {navLinks.map((link) => {
              const isOpen = openMenu === link.label;
              const isActive = Boolean(link.href && pathname === link.href);

              if (link.children || link.childSections) {
                const triggerClass = `${navLinkClassName(isActive)} py-[18px]`;
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(link.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    {link.href ? (
                      <Link
                        href={link.href}
                        className={triggerClass}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                      >
                        {link.label}
                        <span
                          className={`material-symbols-outlined text-[15px] opacity-60 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          expand_more
                        </span>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className={`${triggerClass} bg-transparent border-0 cursor-pointer`}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                      >
                        {link.label}
                        <span
                          className={`material-symbols-outlined text-[15px] opacity-60 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          expand_more
                        </span>
                      </button>
                    )}
                    {isOpen && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div
                          className={`bg-white border border-stroke1 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] ${
                            link.childSections
                              ? link.childSections.length > 1
                                ? "w-[420px] p-4"
                                : "w-[240px] py-1.5"
                              : "w-[240px] py-1.5"
                          }`}
                          role="menu"
                        >
                          <NavDropdownItems
                            children={link.children}
                            childSections={link.childSections}
                            onNavigate={() => setOpenMenu(null)}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href ?? "#"}
                  className={navLinkClassName(isActive)}
                >
                  {link.label}
                  {link.hasMenu && (
                    <span className="material-symbols-outlined text-[15px] opacity-60">expand_more</span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden lg:flex items-center gap-3">
            <Link
              href={href("/contact")}
              className="inline-flex items-center gap-2 px-5 py-[9px] rounded-full text-[13px] font-medium leading-none bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all shadow-sm"
            >
              デモのご相談
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden ml-auto inline-flex flex-col justify-center items-center w-9 h-9 gap-[5px] bg-transparent border-0 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span className={`block w-5 h-[2px] bg-navy rounded-full transition-transform ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-navy rounded-full transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-navy rounded-full transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {mobileOpen && (
          <nav
            id="mobile-nav"
            className="lg:hidden border-t border-white/50 px-6 py-4 max-h-[calc(100vh-6rem)] overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const isActive = Boolean(link.href && pathname === link.href);
                const hasSubnav = Boolean(link.children?.length || link.childSections?.length);

                if (hasSubnav) {
                  return (
                    <MobileNavAccordion
                      key={link.label}
                      label={link.label}
                      open={mobileDropdown === link.label}
                      onToggle={() =>
                        setMobileDropdown((prev) => (prev === link.label ? null : link.label))
                      }
                    >
                      <NavDropdownItems
                        children={link.children}
                        childSections={link.childSections}
                        onNavigate={closeMobile}
                        variant="mobile"
                      />
                    </MobileNavAccordion>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href ?? "#"}
                    onClick={closeMobile}
                    className={`block py-2.5 text-[15px] font-normal transition-colors ${
                      isActive ? "text-turquoise" : "text-[#2A2E3A] hover:text-navy"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-white/50 flex flex-col gap-3">
              <Link
                href={href("/contact")}
                onClick={closeMobile}
                className="mt-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[14px] font-medium bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all shadow-sm"
              >
                デモのご相談
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}

function NavDropdownItems({
  children,
  childSections,
  onNavigate,
  variant = "desktop",
}: {
  children?: NavChild[];
  childSections?: NavChildSection[];
  onNavigate: () => void;
  variant?: "desktop" | "mobile";
}) {
  const linkClassName =
    variant === "mobile"
      ? "block py-2 text-[13px] font-normal text-fg2 hover:text-navy transition-colors"
      : "block px-4 py-2.5 text-[14px] text-fg1 hover:bg-bg2 hover:text-navy transition-colors";

  const sectionTitleClassName =
    variant === "mobile"
      ? "text-[11px] uppercase tracking-[0.1em] text-turquoise font-semibold mb-2 mt-2 first:mt-0"
      : "px-4 pt-2.5 pb-1 text-[11px] font-normal uppercase tracking-[0.1em] text-fg2/55";

  if (childSections) {
    if (variant === "desktop") {
      const multiColumn = childSections.length > 1;
      return (
        <div className={multiColumn ? "grid grid-cols-2 gap-6" : undefined}>
          {childSections.map((section) => (
            <div key={section.title}>
              <p className={sectionTitleClassName}>{section.title}</p>
              {section.items.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  role="menuitem"
                  onClick={onNavigate}
                  className={linkClassName}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      );
    }

    return (
      <>
        {childSections.map((section, index) => (
          <div key={section.title}>
            {index > 0 && (
              <div className="mx-3 my-1 border-t border-stroke1" role="separator" />
            )}
            <p className={sectionTitleClassName}>{section.title}</p>
            {section.items.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                role="menuitem"
                onClick={onNavigate}
                className={linkClassName}
              >
                {child.label}
              </Link>
            ))}
          </div>
        ))}
      </>
    );
  }

  return (children ?? []).map((child) => (
    <Link
      key={child.label}
      href={child.href}
      role="menuitem"
      onClick={onNavigate}
      className={linkClassName}
    >
      {child.label}
    </Link>
  ));
}

function MobileNavAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-2.5 text-[15px] font-normal text-[#2A2E3A] bg-transparent border-0 cursor-pointer hover:text-navy transition-colors"
      >
        {label}
        <span
          className={`material-symbols-outlined text-[16px] opacity-70 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>
      {open && <div className="pl-4 pb-2 flex flex-col border-l border-stroke1 ml-1">{children}</div>}
    </div>
  );
}
