"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const regions = [
  { id: "au", label: "Australia", flag: "🇦🇺" },
  { id: "nz", label: "New Zealand", flag: "🇳🇿" },
  { id: "jp", label: "Japan", flag: "🇯🇵" },
  { id: "us", label: "United States", flag: "🇺🇸" },
  { id: "ae", label: "UAE", flag: "🇦🇪" },
];

const navLinks: { href: string; label: string; hasMenu?: boolean }[] = [
  { href: "/", label: "Home" },
  { href: "/#platform", label: "Products", hasMenu: true },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
  { href: "/corporate", label: "Corporate" },
];

export function Header() {
  const [region, setRegion] = useState(regions[0]);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <header className="max-w-[1600px] mx-auto bg-white/60 backdrop-blur-xl backdrop-saturate-[180%] border border-white/40 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06),_0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="px-6 sm:px-8 flex items-center h-14">
          <Link href="/" className="shrink-0" onClick={closeMobile}>
            <Image src="/logos/TallyPlus.svg" alt="Tally+" width={130} height={25} className="h-[25px] w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 ml-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-normal text-[#2A2E3A] hover:text-navy transition-colors leading-none inline-flex items-center gap-[3px]"
              >
                {link.label}
                {link.hasMenu && (
                  <span className="material-symbols-outlined text-[15px] opacity-60">expand_more</span>
                )}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden lg:flex items-center gap-3">
            <div className="relative" ref={ref}>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-1.5 px-3 py-[7px] rounded-full text-[12px] font-medium text-fg1 border border-stroke1 hover:bg-bg3 transition-all leading-none"
                aria-label="Change region"
                aria-expanded={open}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>location_on</span>
                {region.label}
                <span className="material-symbols-outlined text-[12px] opacity-50">expand_more</span>
              </button>

              {open && (
                <div className="absolute top-full right-0 mt-2 w-[180px] bg-white border border-stroke1 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] py-1 z-50">
                  {regions.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => { setRegion(r); setOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] text-left transition-colors ${
                        r.id === region.id
                          ? "font-semibold text-navy bg-bg2"
                          : "text-fg1 hover:bg-bg2"
                      }`}
                    >
                      <span className="text-[15px]">{r.flag}</span>
                      {r.label}
                      {r.id === region.id && (
                        <span className="material-symbols-outlined text-[14px] ml-auto text-turquoise">check</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-[9px] rounded-full text-[13px] font-medium leading-none bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all shadow-sm">
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
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMobile}
                  className="py-2.5 text-[15px] font-normal text-[#2A2E3A] hover:text-navy transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/50 flex flex-col gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.1em] text-fg2 font-semibold mb-2">Region</p>
                <div className="flex flex-wrap gap-1.5">
                  {regions.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRegion(r)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[12px] font-medium leading-none transition-all ${
                        r.id === region.id
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
                href="/contact"
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
