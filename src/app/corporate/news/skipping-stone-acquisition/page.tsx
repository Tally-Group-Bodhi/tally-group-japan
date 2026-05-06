import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tally Group Expands Global Footprint with Acquisition Of Skipping Stone",
};

export default function SkippingStoneAcquisitionPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-stroke1 pt-[64px] pb-[48px] lg:pt-[96px] lg:pb-[64px]"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <p className="text-xs text-fg2 mb-[10px]">
            <Link href="/corporate" className="text-fg2 no-underline hover:text-navy transition-colors">Home</Link>
            <span className="mx-1 text-fg3">/</span>
            <Link href="/corporate/news" className="text-fg2 no-underline hover:text-navy transition-colors">News</Link>
            <span className="mx-1 text-fg3">/</span>
            <span className="text-fg1 font-medium">Press release</span>
          </p>

          <h1 className="mt-[10px] text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy max-w-[18ch]">
            Tally Group Expands Global Footprint with Acquisition Of Skipping Stone
          </h1>
          <p className="mt-[12px] font-mono text-sm font-semibold text-turquoise">
            <time dateTime="2026-03-04">March 4, 2026</time>
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="py-[96px]">
        <div className="max-w-[720px] mx-auto px-8">
          <figure className="m-0 mb-[48px] rounded-xl overflow-hidden border border-stroke1">
            <Image
              src="/corporate/SS Acquisition PR Image.png"
              alt="Tally Group acquisition of Skipping Stone announcement"
              width={840}
              height={630}
              className="w-full h-auto"
            />
          </figure>

          <div className="space-y-[16px]">
            <p className="text-lg leading-[1.55] text-fg2">
              Tally Group announced today the acquisition of Skipping Stone, a global energy strategy and implementation consulting firm.
            </p>
            <p className="text-lg leading-[1.55] text-fg2">
              Skipping Stone will continue operations under its own brand as a wholly owned subsidiary. The companies will combine their strengths to expand the Group&rsquo;s global go to market reach and strategic energy market solutions.
            </p>

            <blockquote className="my-[32px] py-[24px] px-[28px] rounded-xl bg-bg2 border-l-[3px] border-turquoise space-y-[12px]">
              <p className="text-sm leading-[1.55] text-fg1">
                &ldquo;The acquisition of Skipping Stone is a decisive step in Tally&rsquo;s next phase of global growth,&rdquo; said Tally Group CEO, Andrew Duncan.
              </p>
              <p className="text-sm leading-[1.55] text-fg1">
                &ldquo;It strengthens our end-to-end capability immediately &mdash; combining Skipping Stone&rsquo;s frontline market insight and advisory expertise with Tally&rsquo;s market-leading platform so we can help clients move faster from strategy to execution.&rdquo;
              </p>
              <p className="text-sm leading-[1.55] text-fg1">
                &ldquo;Importantly, it dramatically uplifts our presence in key global markets including the US and Japan. Japan in particular is a key growth market for us due to its scale &mdash; 10 times the Australian market &mdash; and accelerating pace of de-regulation.&rdquo;
              </p>
              <p className="text-sm leading-[1.55] text-fg1">
                &ldquo;Tally went live in Japan last year with a Tier 1 retailer, delivering the market&rsquo;s first cloud-native, AI-enabled billing platform, and Peter and the team will help us capitalise on this early-mover position.&rdquo;
              </p>
              <p className="text-sm leading-[1.55] text-fg1">
                &ldquo;This acquisition sharpens our competitive edge and accelerates our ability to scale globally as a leading provider of technology solutions to the utility sector. We are confident and bullish about the future growth opportunities this creates.&rdquo;
              </p>
            </blockquote>

            <blockquote className="my-[32px] py-[24px] px-[28px] rounded-xl bg-bg2 border-l-[3px] border-turquoise space-y-[12px]">
              <p className="text-sm leading-[1.55] text-fg1">
                Peter Weigand, Skipping Stone Founder and CEO, commented, &ldquo;Global energy markets are shifting rapidly, with providers needing to offer far more than traditional commodity services.&rdquo;
              </p>
              <p className="text-sm leading-[1.55] text-fg1">
                &ldquo;Through our work with clients, it became clear that legacy back office systems could not support this complexity at scale. After reviewing energy platforms globally, Tally Group stood out for the strength and flexibility of its technology, which made it an easy decision on whom to team up with.&rdquo;
              </p>
            </blockquote>

            <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mt-[48px] mb-[14px] inline-flex items-center gap-2">
              <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
              About
            </div>
            <h2 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-navy mb-[12px]">
              About Skipping Stone
            </h2>
            <p className="text-lg leading-[1.55] text-fg2">
              Skipping Stone is an award-winning global energy markets strategy consulting and implementation services firm.
            </p>
          </div>

          <div className="mt-[64px] pt-[28px] border-t border-stroke1">
            <Link href="/corporate/news" className="inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-turquoise transition-colors">
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Back to News
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
