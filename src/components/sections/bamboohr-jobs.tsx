"use client";

import { useEffect, useRef, useState } from "react";

const BAMBOOHR_DOMAIN = "tallygroup.bamboohr.com";
const EMBED_URL = `https://${BAMBOOHR_DOMAIN}/jobs/embed2.php?version=1.0.0`;
const CAREERS_URL = `https://${BAMBOOHR_DOMAIN}/careers`;

type LoadState = "loading" | "ready" | "error";

export function BambooHrJobs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<LoadState>("loading");

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    setState("loading");

    fetch(EMBED_URL, { credentials: "omit", signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((html) => {
        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML = html;
        setState("ready");
      })
      .catch((err) => {
        if (cancelled || err?.name === "AbortError") return;
        setState("error");
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  return (
    <div className="bamboohr-embed bg-white rounded-xl border border-stroke1 p-[24px] sm:p-[32px] lg:p-[40px]">
      {state === "loading" && (
        <div className="flex items-center gap-[10px] text-sm text-fg2">
          <span
            aria-hidden
            className="inline-block w-[14px] h-[14px] rounded-full border-2 border-stroke1 border-t-turquoise animate-spin"
          />
          Loading open positions...
        </div>
      )}

      {state === "error" && (
        <div className="text-sm text-fg2">
          We couldn&apos;t load roles right now.{" "}
          <a
            href={CAREERS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-turquoise font-medium hover:underline"
          >
            View all open roles on BambooHR
          </a>
          .
        </div>
      )}

      <div
        ref={containerRef}
        aria-live="polite"
        aria-busy={state === "loading"}
      />

      <div className="mt-[24px] pt-[16px] border-t border-stroke1 flex flex-wrap items-center justify-between gap-[12px] text-[12px] text-fg2">
        <span>Job listings powered by BambooHR</span>
        <a
          href={CAREERS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-turquoise font-medium hover:underline inline-flex items-center gap-[4px]"
        >
          View all roles on BambooHR
          <span className="material-symbols-outlined text-[14px]" aria-hidden>
            open_in_new
          </span>
        </a>
      </div>
    </div>
  );
}
