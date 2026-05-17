import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CorporateLogoMarquee } from "@/components/corporate/logo-marquee";

export const metadata: Metadata = {
  title: "Tally+ United States",
};

const stats = [
  { value: "55", suffix: "+", label: "Global clients" },
  { value: "4M", suffix: "+", label: "Meters" },
  { value: "350", suffix: "+", label: "Global staff" },
];

export default function USHomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-stroke1 pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px]"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1600px] mx-auto px-8">
          <h1 className="text-[30px] lg:text-[60px] font-light leading-[1.15] tracking-[-0.02em] text-navy max-w-[52rem]">
            We are a{" "}
            <span className="text-turquoise">global customer engagement and management solutions</span>{" "}
            company, serving{" "}
            <span className="text-turquoise">energy retailers</span>,{" "}
            <span className="text-turquoise">energy and water utilities</span>, and{" "}
            <span className="text-turquoise">energy transition services</span>{" "}
            providers.
          </h1>

          <div className="flex gap-3 mt-[32px]">
            <Link
              href="/corporate/us/contact"
              className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-navy text-white border border-navy hover:bg-navy-dark hover:border-navy-dark transition-all"
            >
              Request a Demo <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <a
              href="#"
              download
              className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-transparent text-navy border border-stroke1 hover:bg-bg3 transition-all"
            >
              Download Overview
            </a>
          </div>
        </div>
      </section>

      {/* Product Intro: Tally Glass & Tally+ */}
      <section className="py-[96px] border-b border-stroke1">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] mb-[14px] inline-flex items-center gap-2">
            <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
            Our platform
          </div>
          <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy mb-[48px]">
            Products built for&nbsp;energy.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <div className="bg-white border border-stroke1 rounded-xl p-[28px]">
              <h3 className="text-lg font-semibold text-navy mb-[16px]">Tally Glass</h3>
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-stroke1 bg-bg2 mb-[16px]">
                <Image
                  src="/us/Tally Glass.png"
                  alt="Tally Glass"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm leading-[1.55] text-fg2">
                Tally Glass is AI software that connects with Pods and Modules across the Tally+ suite, unlocking automation, smoother operations, a better customer experience, lower cost, and a growing set of capabilities as your business evolves.
              </p>
            </div>

            <div className="bg-white border border-stroke1 rounded-xl p-[28px]">
              <h3 className="text-lg font-semibold text-navy mb-[16px]">Tally+</h3>
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-stroke1 bg-bg2 mb-[16px]">
                <Image
                  src="/us/Pods v3.png"
                  alt="Tally+ Pods"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm leading-[1.55] text-fg2">
                Tally+ brings together Pods and Modules that span the full customer engagement and management lifecycle, from acquisition to cash. Mix and match them to configure the solution that fits how you operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-[96px] border-b border-stroke1">
        <div className="max-w-[1600px] mx-auto px-8 text-center">
          <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em] text-navy mb-[20px]">
            How It Works
          </h2>
          <p className="text-lg leading-[1.55] text-fg2 max-w-[60ch] mx-auto mb-[48px]">
            Tally+ is designed to be fully flexible giving each client the ability to select their solution framework (Pods) and specific modules (Mods) to meet their unique requirements.
          </p>
          <div className="aspect-[16/9] rounded-xl overflow-hidden border border-stroke1 mb-[32px]">
            <video
              src="/us/Stick Figure Animation v3.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-full object-cover"
            />
          </div>
          <Link
            href="/corporate/us/contact"
            className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover transition-all"
          >
            Request a Demo <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-[96px] border-b border-stroke1">
        <div className="max-w-[1600px] mx-auto px-8 flex flex-wrap items-center justify-center gap-[64px]">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center min-w-[11rem]">
              <span className="block text-[64px] font-bold tracking-[-0.04em] text-navy leading-none">
                <span className="text-turquoise">{stat.value}</span>
                <span className="text-navy font-bold">{stat.suffix}</span>
              </span>
              <span className="block mt-[10px] text-sm font-bold tracking-[0.06em] uppercase text-fg2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Logos */}
      <CorporateLogoMarquee />

      {/* CTA */}
      <section className="py-[96px] bg-navy text-white">
        <div className="max-w-[1600px] mx-auto px-8 text-center">
          <h2 className="text-[30px] lg:text-[60px] font-light leading-[1.1] tracking-[-0.02em]">
            Ready to see the platform?
          </h2>
          <p className="mt-[16px] text-lg leading-[1.55] text-white/70 max-w-[50ch] mx-auto">
            A 30-minute walkthrough tailored to your retail footprint. No slides, just the product.
          </p>
          <div className="flex gap-3 mt-[32px] justify-center">
            <Link
              href="/corporate/us/contact"
              className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-turquoise text-navy border border-turquoise hover:bg-turquoise-hover transition-all"
            >
              Book a demo <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <Link
              href="/corporate/us/us-leadership"
              className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-transparent text-white border border-white/20 hover:bg-white/10 transition-all"
            >
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
