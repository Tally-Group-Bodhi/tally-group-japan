import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticles } from "@/components/sections/blog-articles";
import { insightPosts } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "The latest industry news, interviews, technologies, and resources from Tally Group.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px]"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <span className="inline-flex items-center gap-2 px-3 py-[5px] bg-white border border-stroke1 rounded-full text-xs font-medium text-fg2 uppercase tracking-[0.08em]">
            <span className="w-[6px] h-[6px] rounded-full bg-turquoise" />
            Insights
          </span>

          <h1 className="mt-[24px] text-[44px] lg:text-[64px] font-light leading-[1.04] tracking-[-0.025em] text-navy">
            News &amp; insights.
          </h1>

          <p className="mt-[20px] text-[19px] leading-[1.55] text-fg2 max-w-[60ch]">
            The latest industry news, whitepapers, case studies and resources from the Tally Group team.
          </p>

          <div className="flex gap-3 mt-[32px]">
            <Link
              href="#articles"
              className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all"
            >
              Browse articles{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <BlogArticles posts={insightPosts} />

      {/* CTA */}
      <section className="relative overflow-hidden py-[96px] bg-navy text-white">
        <div
          className="absolute -left-[100px] -bottom-[100px] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,210,162,0.18), transparent 60%)",
          }}
        />
        <div className="relative max-w-[1240px] mx-auto px-8 text-center">
          <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-white">
            Want to learn more about Tally Group?
          </h2>
          <p className="mt-[16px] text-lg text-white/75 max-w-[50ch] mx-auto leading-[1.55]">
            Book a demo, ask a question, or explore our platform.
          </p>
          <div className="mt-[32px]">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-[12px] rounded-lg text-sm font-semibold bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover hover:border-turquoise-hover transition-all shadow-sm"
            >
              Request a demo{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
