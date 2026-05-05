"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Post {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
  cta: string;
  image?: string;
  thumb?: string;
}

const categories = ["All", "Insights", "Case study", "Whitepaper", "Guide", "Product Updates", "Company News"];

export function BlogArticles({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <section id="articles" className="py-[96px] border-b border-stroke1">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="mb-[48px]">
          <div className="mb-[48px] max-w-[720px]">
            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[12px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              All articles
            </div>
            <h2 className="text-[30px] lg:text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-navy">
              Latest from the team
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-3 py-[6px] rounded-full text-[13px] font-medium cursor-pointer transition-all ${
                  active === cat
                    ? "bg-navy text-white"
                    : "bg-bg2 text-fg2 border border-stroke1 hover:bg-bg3"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-stroke1 rounded-xl overflow-hidden flex flex-col transition-all hover:border-navy hover:shadow-[0_2px_2px_-1px_rgba(10,13,18,0.04),0_4px_6px_-2px_rgba(10,13,18,0.03)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  post.thumb && <InsightThumb variant={post.thumb} />
                )}
                <span className="absolute top-[14px] left-[14px] z-10 bg-white/95 text-navy px-[10px] py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em]">
                  {post.category}
                </span>
                <span className="absolute bottom-[14px] left-[14px] z-10 text-white text-xs font-mono">
                  {post.date}
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-navy/30" />
              </div>
              <div className="p-[20px_22px_24px] flex flex-col gap-[10px] flex-1">
                <h3 className="text-[17px] font-semibold text-fg1 leading-[1.35] tracking-[-0.005em]">
                  {post.title}
                </h3>
                <p className="text-sm text-fg2 leading-[1.5] m-0">{post.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-[13px] font-semibold text-navy">
                  {post.cta}{" "}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-[64px]">
            <p className="text-fg2 text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function InsightThumb({ variant }: { variant: string }) {
  if (variant === "css-grid") {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,210,162,0.25) 1px, transparent 1px) 0 0 / 30px 30px, linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px) 0 0 / 30px 30px",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full blur-[4px]"
          style={{
            background: "radial-gradient(circle, rgba(0,210,162,0.45), transparent 65%)",
          }}
        />
      </div>
    );
  }
  if (variant === "css-agent") {
    return (
      <div className="absolute inset-0 bg-bg2">
        <div className="absolute inset-6 inset-b-auto h-[70%] bg-white border border-stroke1 rounded-[10px] p-[12px_14px]">
          <div className="h-2 w-[40%] bg-navy rounded-sm" />
          <div className="h-[6px] bg-stroke1 rounded-sm mt-2" />
          <div className="h-[6px] bg-stroke1 rounded-sm mt-2 w-3/4" />
          <div className="h-[6px] bg-stroke1 rounded-sm mt-2" />
          <div className="h-[6px] bg-stroke1 rounded-sm mt-2 w-3/4" />
          <div className="flex gap-[6px] mt-[10px]">
            <div className="h-[14px] bg-turquoise/20 rounded flex-1" />
            <div className="h-[14px] bg-navy/10 rounded flex-1" />
            <div className="h-[14px] bg-amber-400/20 rounded flex-1" />
          </div>
          <div className="h-[6px] bg-stroke1 rounded-sm mt-[10px]" />
          <div className="h-[6px] bg-stroke1 rounded-sm mt-2 w-3/4" />
        </div>
      </div>
    );
  }
  return (
    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #F0F9FF, #fff)" }}>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[120px] bg-navy text-white grid place-items-center"
        style={{
          clipPath: "polygon(50% 0, 100% 20%, 100% 70%, 50% 100%, 0 70%, 0 20%)",
        }}
      >
        <div className="w-[30px] h-4 border-l-[3px] border-b-[3px] border-turquoise -rotate-45 -translate-y-[5px]" />
      </div>
    </div>
  );
}
