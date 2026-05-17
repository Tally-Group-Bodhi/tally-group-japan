"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  regionalPathForSwitch,
  US_MARKETING_BASE,
  useMarketingHref,
  useMarketingBasePath,
} from "@/contexts/marketing-region";

const regions = [
  { id: "au", label: "Australia", abbr: "AU", flag: "🇦🇺" },
  { id: "nz", label: "New Zealand", abbr: "NZ", flag: "🇳🇿" },
  { id: "jp", label: "Japan", abbr: "JP", flag: "🇯🇵" },
  { id: "us", label: "United States", abbr: "US", flag: "🇺🇸" },
  { id: "ae", label: "UAE", abbr: "UAE", flag: "🇦🇪" },
];

type NavChild = { href: string; label: string };
type NavMegaSection = { title: string; items: NavChild[] };
type NavLink = {
  href?: string;
  label: string;
  hasMenu?: boolean;
  children?: NavChild[];
  megaSections?: NavMegaSection[];
};

function buildNavLinks(href: (path: string) => string): NavLink[] {
  return [
    { href: href("/"), label: "Home" },
    { href: href("/#platform"), label: "Products", hasMenu: true },
    {
      href: href("/about"),
      label: "About",
      hasMenu: true,
      children: [
        { href: href("/about#who-we-are"), label: "Who we are" },
        { href: href("/about#history"), label: "Our history" },
        { href: href("/about#leadership"), label: "Leadership" },
        { href: href("/about#mission-values"), label: "Mission and values" },
      ],
    },
    { href: href("/careers"), label: "Careers" },
    { href: href("/blog"), label: "Insights" },
    { href: href("/contact"), label: "Contact" },
    { href: href("/corporate"), label: "Corporate" },
  ];
}

function buildUSNavLinks(href: (path: string) => string): NavLink[] {
  return [
    {
      label: "Solutions",
      hasMenu: true,
      megaSections: [
        {
          title: "Overviews",
          items: [
            { href: href("/products/customer"), label: "Tally+ Customer Mgmt" },
            { href: "#", label: "Tally Glass AI" },
          ],
        },
        {
          title: "By Focus Area",
          items: [
            { href: "#", label: "Electricity" },
            { href: "#", label: "Gas" },
            { href: "#", label: "Renewables" },
            { href: "#", label: "EV" },
            { href: "#", label: "BESS" },
            { href: "#", label: "Demand Response" },
          ],
        },
      ],
    },
    { href: href("/services"), label: "Services" },
    {
      label: "Technology",
      hasMenu: true,
      children: [
        { href: "#", label: "Architecture" },
        { href: "#", label: "Security" },
        { href: "#", label: "Audit" },
        { href: "#", label: "API Library" },
      ],
    },
    {
      href: href("/about"),
      label: "About",
      hasMenu: true,
      children: [
        { href: href("/about#who-we-are"), label: "Who we are" },
        { href: href("/about#history"), label: "Our history" },
        { href: href("/about#us-leadership"), label: "U.S. Leadership" },
        { href: href("/about#global-leadership"), label: "Global Leadership" },
        { href: href("/about#mission-values"), label: "Mission and values" },
      ],
    },
    { href: href("/careers"), label: "Careers" },
    {
      label: "Insights",
      hasMenu: true,
      children: [
        { href: "#", label: "Case Studies" },
        { href: "#", label: "Resources" },
      ],
    },
    { href: href("/blog"), label: "News" },
    { href: href("/contact"), label: "Contact" },
  ];
}

function navLinkClassName(isActive: boolean) {
  return `text-[15px] font-normal leading-none inline-flex items-center gap-[3px] transition-colors ${
    isActive ? "text-turquoise" : "text-[#2A2E3A] hover:text-navy"
  }`;
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const href = useMarketingHref();
  const basePath = useMarketingBasePath();
  const isUS = basePath === US_MARKETING_BASE;
  const navLinks = useMemo(() => (isUS ? buildUSNavLinks(href) : buildNavLinks(href)), [href, isUS]);

  const activeRegionId = isUS ? "us" : "au";
  const region = regions.find((r) => r.id === activeRegionId) ?? regions[0];
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
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

  function selectRegion(regionId: string) {
    setOpen(false);
    closeMobile();

    if (regionId === "us") {
      router.push(regionalPathForSwitch(US_MARKETING_BASE, pathname, basePath));
      return;
    }

    if (regionId === "au") {
      router.push(regionalPathForSwitch("", pathname, basePath));
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <header className="max-w-[1280px] mx-auto bg-white/60 backdrop-blur-xl backdrop-saturate-[180%] border border-white/40 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06),_0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="px-6 sm:px-8 flex items-center h-14">
          <Link href={href("/")} className="shrink-0" onClick={closeMobile}>
            <Image src="/logos/TallyPlus.svg" alt="Tally+" width={130} height={25} className="h-[25px] w-auto" />
          </Link>

          <nav ref={navRef} className="hidden lg:flex items-center gap-6 ml-8">
            {navLinks.map((link) => {
              const isOpen = openMenu === link.label;
              const isActive = Boolean(link.href && pathname === link.href);

              if (link.megaSections) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(link.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button
                      type="button"
                      className={`${navLinkClassName(false)} py-[18px] bg-transparent border-0 cursor-pointer`}
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
                    {isOpen && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div
                          className="w-[420px] bg-white border border-stroke1 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] p-6"
                          role="menu"
                        >
                          <div className="grid grid-cols-2 gap-6">
                            {link.megaSections.map((section) => (
                              <div key={section.title}>
                                <h4 className="text-xs uppercase tracking-[0.1em] text-turquoise font-semibold mb-3">
                                  {section.title}
                                </h4>
                                <ul className="flex flex-col gap-1 list-none m-0 p-0">
                                  {section.items.map((item) => (
                                    <li key={item.label}>
                                      <Link
                                        href={item.href}
                                        role="menuitem"
                                        onClick={() => setOpenMenu(null)}
                                        className="block px-3 py-2 text-[14px] text-fg1 font-medium hover:bg-bg2 hover:text-navy rounded-lg transition-colors"
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.children) {
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
                          className="w-[240px] bg-white border border-stroke1 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] py-1.5"
                          role="menu"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              role="menuitem"
                              onClick={() => setOpenMenu(null)}
                              className="block px-4 py-2.5 text-[14px] text-fg1 hover:bg-bg2 hover:text-navy transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
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
            <div className="relative" ref={ref}>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-1.5 px-5 py-[9px] rounded-full text-[13px] font-medium text-fg1 bg-white hover:bg-bg3 transition-all leading-none"
                aria-label={`Change region: ${region.label}`}
                aria-expanded={open}
              >
                <span>{region.abbr}</span>
                <span className="material-symbols-outlined text-[13px] opacity-50">expand_more</span>
              </button>

              {open && (
                <div className="absolute top-full right-0 mt-2 w-[180px] bg-white border border-stroke1 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] py-1 z-50">
                  {regions.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => selectRegion(r.id)}
                      className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] text-left transition-colors ${
                        r.id === activeRegionId
                          ? "font-semibold text-navy bg-bg2"
                          : "text-fg1 hover:bg-bg2"
                      }`}
                    >
                      <span className="text-[15px]">{r.flag}</span>
                      {r.label}
                      {r.id === activeRegionId && (
                        <span className="material-symbols-outlined text-[14px] ml-auto text-turquoise">check</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link href={href("/contact")} className="inline-flex items-center gap-2 px-5 py-[9px] rounded-full text-[13px] font-medium leading-none bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all shadow-sm">
              Book a demo
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
                const hasSubnav = Boolean(link.megaSections || link.children);

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
                      {link.megaSections?.map((section) => (
                        <div key={section.title}>
                          <p className="text-[11px] uppercase tracking-[0.1em] text-turquoise font-semibold mb-2 mt-2 first:mt-0">
                            {section.title}
                          </p>
                          {section.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={closeMobile}
                              className="block py-2 text-[13px] font-normal text-fg2 hover:text-navy transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      {link.children?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeMobile}
                          className="block py-2 text-[13px] font-normal text-fg2 hover:text-navy transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
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
              <div>
                <p className="text-[11px] uppercase tracking-[0.1em] text-fg2 font-semibold mb-2">Region</p>
                <div className="flex flex-wrap gap-1.5">
                  {regions.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => selectRegion(r.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[12px] font-medium leading-none transition-all ${
                        r.id === activeRegionId
                          ? "border-navy bg-navy text-white"
                          : "border-stroke1 bg-white/70 text-fg1 hover:bg-bg3"
                      }`}
                    >
                      <span className="text-[14px]">{r.flag}</span>
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                href={href("/contact")}
                onClick={closeMobile}
                className="mt-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[14px] font-medium bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all shadow-sm"
              >
                Book a demo
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
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
