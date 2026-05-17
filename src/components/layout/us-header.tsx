"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const solutionsLinks = [
  { label: "Tally+ Customer Mgmt", href: "#" },
  { label: "Tally Glass AI", href: "#" },
];

const solutionsFocusAreas = [
  { label: "Electricity", href: "#" },
  { label: "Gas", href: "#" },
  { label: "Renewables", href: "#" },
  { label: "EV", href: "#" },
  { label: "BESS", href: "#" },
  { label: "Demand Response", href: "#" },
];

const technologyLinks = [
  { label: "Architecture", href: "#" },
  { label: "Security", href: "#" },
  { label: "Audit", href: "#" },
  { label: "API Library", href: "#" },
];

const aboutLinks = [
  { label: "Company", href: "/corporate/us/company" },
  { label: "U.S. Leadership", href: "/corporate/us/us-leadership" },
  { label: "Tally Group Leadership", href: "/corporate/us/tally-group-leadership" },
  { label: "Mission and Values", href: "/corporate/us/mission-values" },
];

const insightsLinks = [
  { label: "Case Studies", href: "/corporate/us/case-studies" },
  { label: "Resources", href: "/corporate/us/resources" },
];

const newsLinks = [
  { label: "Press Releases", href: "/corporate/us/press-releases" },
  { label: "Events", href: "/corporate/us/events" },
];

const regions = [
  { key: "us", label: "United States", shortLabel: "United States", abbr: "US" },
  { key: "au-nz", label: "Australia & New Zealand", shortLabel: "Australia", abbr: "AU" },
  { key: "jp", label: "Japan", shortLabel: "Japan", abbr: "JP" },
  { key: "uae", label: "United Arab Emirates", shortLabel: "UAE", abbr: "UAE" },
];

export function USHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [locationOpen, setLocationOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  const closeAll = useCallback(() => {
    setLocationOpen(false);
    setMobileOpen(false);
    setMobileDropdown(null);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (locationRef.current && !locationRef.current.contains(e.target as Node)) {
        setLocationOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeAll();
    }
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [closeAll]);

  function toggleMobileDropdown(key: string) {
    setMobileDropdown((prev) => (prev === key ? null : key));
  }

  const isAboutPage = aboutLinks.some((l) => pathname === l.href);
  const isInsightsPage = insightsLinks.some((l) => pathname === l.href) || pathname.startsWith("/corporate/us/case-studies");
  const isNewsPage = newsLinks.some((l) => pathname === l.href) || pathname.startsWith("/corporate/us/press-releases");

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <header className="max-w-[1280px] mx-auto bg-white/60 backdrop-blur-xl backdrop-saturate-[180%] border border-white/40 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06),_0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="px-6 sm:px-8 flex items-center h-14">
        <Link href="/corporate/us" className="shrink-0">
          <Image
            src="/us/tally-plus.svg"
            alt="Tally+ United States"
            width={123}
            height={45}
            className="h-[36px] w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-[28px] ml-8" aria-label="US Primary">
          {/* Solutions mega dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="bg-transparent border-0 text-sm font-medium cursor-pointer leading-none inline-flex items-center gap-[3px] text-fg1 hover:text-navy transition-colors"
            >
              Solutions
              <span className="material-symbols-outlined text-[16px] opacity-70">expand_more</span>
            </button>
            <div className="absolute left-0 top-full mt-1 opacity-0 invisible translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 z-50">
              <div className="w-[420px] bg-white border border-stroke1 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.1em] text-turquoise font-semibold mb-3">Overviews</h4>
                    <ul className="flex flex-col gap-1 list-none m-0 p-0">
                      {solutionsLinks.map((item) => (
                        <li key={item.label}>
                          <Link href={item.href} className="block px-3 py-2 text-sm text-fg1 font-medium hover:bg-bg3 rounded-lg transition-colors">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.1em] text-turquoise font-semibold mb-3">By Focus Area</h4>
                    <ul className="flex flex-col gap-1 list-none m-0 p-0">
                      {solutionsFocusAreas.map((item) => (
                        <li key={item.label}>
                          <Link href={item.href} className="block px-3 py-2 text-sm text-fg1 font-medium hover:bg-bg3 rounded-lg transition-colors">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/corporate/us/services"
            className={`text-sm font-medium leading-none no-underline transition-colors ${pathname === "/corporate/us/services" ? "text-navy" : "text-fg1 hover:text-navy"}`}
          >
            Services
          </Link>

          {/* Technology dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="bg-transparent border-0 text-sm font-medium cursor-pointer leading-none inline-flex items-center gap-[3px] text-fg1 hover:text-navy transition-colors"
            >
              Technology
              <span className="material-symbols-outlined text-[16px] opacity-70">expand_more</span>
            </button>
            <ul className="absolute left-0 top-full mt-1 min-w-[220px] py-2 m-0 list-none bg-white border border-stroke1 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] opacity-0 invisible translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
              {technologyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block px-4 py-2 text-sm no-underline text-fg1 font-medium hover:bg-bg3 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights dropdown */}
          <div className="relative group">
            <button
              type="button"
              className={`bg-transparent border-0 text-sm font-medium cursor-pointer leading-none inline-flex items-center gap-[3px] transition-colors ${isInsightsPage ? "text-navy" : "text-fg1 hover:text-navy"}`}
            >
              Insights
              <span className="material-symbols-outlined text-[16px] opacity-70">expand_more</span>
            </button>
            <ul className="absolute left-0 top-full mt-1 min-w-[220px] py-2 m-0 list-none bg-white border border-stroke1 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] opacity-0 invisible translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
              {insightsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-2 text-sm no-underline hover:bg-bg3 transition-colors ${pathname === link.href ? "text-navy font-semibold" : "text-fg1 font-medium"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* News dropdown */}
          <div className="relative group">
            <button
              type="button"
              className={`bg-transparent border-0 text-sm font-medium cursor-pointer leading-none inline-flex items-center gap-[3px] transition-colors ${isNewsPage ? "text-navy" : "text-fg1 hover:text-navy"}`}
            >
              News
              <span className="material-symbols-outlined text-[16px] opacity-70">expand_more</span>
            </button>
            <ul className="absolute left-0 top-full mt-1 min-w-[220px] py-2 m-0 list-none bg-white border border-stroke1 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] opacity-0 invisible translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
              {newsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-2 text-sm no-underline hover:bg-bg3 transition-colors ${pathname === link.href ? "text-navy font-semibold" : "text-fg1 font-medium"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About dropdown */}
          <div className="relative group">
            <button
              type="button"
              className={`bg-transparent border-0 text-sm font-medium cursor-pointer leading-none inline-flex items-center gap-[3px] transition-colors ${isAboutPage ? "text-navy" : "text-fg1 hover:text-navy"}`}
            >
              About
              <span className="material-symbols-outlined text-[16px] opacity-70">expand_more</span>
            </button>
            <ul className="absolute left-0 top-full mt-1 min-w-[220px] py-2 m-0 list-none bg-white border border-stroke1 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] opacity-0 invisible translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-2 text-sm no-underline hover:bg-bg3 transition-colors ${pathname === link.href ? "text-navy font-semibold" : "text-fg1 font-medium"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/corporate/us/contact"
            className={`text-sm font-medium leading-none no-underline transition-colors ${pathname === "/corporate/us/contact" ? "text-navy" : "text-fg1 hover:text-navy"}`}
          >
            Contact Us
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-[12px]">
          {/* Location selector */}
          <div className="relative" ref={locationRef}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLocationOpen(!locationOpen);
              }}
              className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full border border-stroke1 bg-white text-sm font-medium text-fg1 cursor-pointer transition-all hover:border-navy/30 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
              aria-expanded={locationOpen}
              aria-haspopup="listbox"
              aria-label="Location: United States. Click to change."
            >
              <span>{regions[0].abbr}</span>
              <span className="material-symbols-outlined text-[14px] text-fg3">expand_more</span>
            </button>

            {locationOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-[320px] bg-white border border-stroke1 rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.14)] z-[60] overflow-hidden">
                <div className="px-[20px] pt-[20px] pb-[12px] border-b border-stroke1">
                  <h3 className="m-0 text-base font-bold text-navy tracking-tight">Select Your Location</h3>
                  <p className="m-0 mt-[4px] text-xs text-fg2">Choose the region closest to you.</p>
                </div>
                <ul className="m-0 p-[8px] list-none" role="listbox" aria-label="Select region">
                  {regions.map((region) => {
                    const isActive = region.key === "us";
                    return (
                      <li key={region.key} role="option" aria-selected={isActive}>
                        <button
                          type="button"
                          className={`w-full text-left px-[12px] py-[10px] rounded-lg text-sm font-medium cursor-pointer border-0 transition-all flex items-center justify-between gap-[8px] ${
                            isActive
                              ? "bg-navy text-white"
                              : "bg-transparent text-fg1 hover:bg-bg3"
                          }`}
                          onClick={() => {
                            if (region.key !== "us") {
                              setLocationOpen(false);
                              router.push("/corporate");
                              return;
                            }
                            setLocationOpen(false);
                          }}
                        >
                          <span className="flex items-center gap-[8px]">
                            <span className={`material-symbols-outlined text-[18px] ${isActive ? "text-turquoise" : "text-fg3"}`}>location_on</span>
                            {region.label}
                          </span>
                          {isActive && (
                            <span className="material-symbols-outlined text-[18px] text-turquoise">check</span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/corporate/us/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-[9px] rounded-full text-[13px] font-medium leading-none bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all shadow-sm"
          >
            Get in touch
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden inline-flex flex-col justify-center items-center w-9 h-9 gap-[5px] bg-transparent border-0 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block w-5 h-[2px] bg-navy rounded-full transition-transform ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-navy rounded-full transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-navy rounded-full transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
        </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-white/50 max-h-[calc(100vh-6rem)] overflow-y-auto" aria-label="Mobile navigation">
          <div className="px-6 py-4 flex flex-col gap-1">
            <MobileAccordion
              label="Solutions"
              open={mobileDropdown === "solutions"}
              onToggle={() => toggleMobileDropdown("solutions")}
            >
              <p className="text-xs uppercase tracking-[0.1em] text-turquoise font-semibold mb-2 mt-1">Overviews</p>
              {solutionsLinks.map((item) => (
                <Link key={item.label} href={item.href} onClick={closeAll} className="block py-2 text-sm text-fg1 hover:text-navy transition-colors">
                  {item.label}
                </Link>
              ))}
              <p className="text-xs uppercase tracking-[0.1em] text-turquoise font-semibold mb-2 mt-3">By Focus Area</p>
              {solutionsFocusAreas.map((item) => (
                <Link key={item.label} href={item.href} onClick={closeAll} className="block py-2 text-sm text-fg1 hover:text-navy transition-colors">
                  {item.label}
                </Link>
              ))}
            </MobileAccordion>

            <Link href="/corporate/us/services" onClick={closeAll} className="py-3 text-sm font-medium text-fg1 hover:text-navy transition-colors">
              Services
            </Link>

            <MobileAccordion label="Technology" open={mobileDropdown === "technology"} onToggle={() => toggleMobileDropdown("technology")}>
              {technologyLinks.map((item) => (
                <Link key={item.label} href={item.href} onClick={closeAll} className="block py-2 text-sm text-fg1 hover:text-navy transition-colors">
                  {item.label}
                </Link>
              ))}
            </MobileAccordion>

            <MobileAccordion label="Insights" open={mobileDropdown === "insights"} onToggle={() => toggleMobileDropdown("insights")}>
              {insightsLinks.map((item) => (
                <Link key={item.label} href={item.href} onClick={closeAll} className="block py-2 text-sm text-fg1 hover:text-navy transition-colors">
                  {item.label}
                </Link>
              ))}
            </MobileAccordion>

            <MobileAccordion label="News" open={mobileDropdown === "news"} onToggle={() => toggleMobileDropdown("news")}>
              {newsLinks.map((item) => (
                <Link key={item.label} href={item.href} onClick={closeAll} className="block py-2 text-sm text-fg1 hover:text-navy transition-colors">
                  {item.label}
                </Link>
              ))}
            </MobileAccordion>

            <MobileAccordion
              label="About"
              open={mobileDropdown === "about"}
              onToggle={() => toggleMobileDropdown("about")}
            >
              {aboutLinks.map((item) => (
                <Link key={item.label} href={item.href} onClick={closeAll} className="block py-2 text-sm text-fg1 hover:text-navy transition-colors">
                  {item.label}
                </Link>
              ))}
            </MobileAccordion>

            <Link href="/corporate/us/contact" onClick={closeAll} className="py-3 text-sm font-medium text-fg1 hover:text-navy transition-colors">
              Contact Us
            </Link>

            <div className="border-t border-stroke1 mt-2 pt-3 flex flex-col gap-1">
              <Link href="/corporate" onClick={closeAll} className="py-2 text-sm text-fg2 hover:text-navy transition-colors">
                Tally Group (Global)
              </Link>
              <Link href="/corporate/offices" onClick={closeAll} className="py-2 text-sm text-fg2 hover:text-navy transition-colors">
                Locations
              </Link>
            </div>

            <Link
              href="/corporate/us/contact"
              onClick={closeAll}
              className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[14px] font-medium bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all shadow-sm"
            >
              Get in touch
            </Link>
          </div>
        </nav>
      )}
    </header>
    </div>
  );
}

function MobileAccordion({
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
        className="w-full flex items-center justify-between py-3 text-sm font-medium text-fg1 bg-transparent border-0 cursor-pointer hover:text-navy transition-colors"
      >
        {label}
        <span className={`material-symbols-outlined text-[16px] opacity-70 transition-transform ${open ? "rotate-180" : ""}`}>expand_more</span>
      </button>
      {open && <div className="pl-4 pb-2">{children}</div>}
    </div>
  );
}
