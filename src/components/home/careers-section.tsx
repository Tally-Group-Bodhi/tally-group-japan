import Link from "next/link";

const jobs = [
  { title: "Senior Backend Engineer, Billing", team: "PLATFORM", loc: "Sydney · Hybrid", type: "Full-time" },
  { title: "Product Designer, Tally Glass", team: "DESIGN", loc: "Melbourne · Hybrid", type: "Full-time" },
  { title: "Engineering Manager, Customer Experience", team: "ENGINEERING", loc: "Sydney · Hybrid", type: "Full-time" },
  { title: "Implementation Consultant", team: "PROFESSIONAL SERVICES", loc: "Remote AU/NZ", type: "Full-time" },
  { title: "Senior Data Engineer, Meter Data", team: "PLATFORM", loc: "Auckland · Hybrid", type: "Full-time" },
];

export function CareersSection() {
  return (
    <section id="careers" className="py-[96px] border-b border-stroke1" style={{
      background: "linear-gradient(135deg, #F9F9FB 0%, #F0F9FF 100%)"
    }}>
      <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-center">
        {/* Left */}
        <div>
          <div className="text-xs font-medium text-fg2 uppercase tracking-[0.1em] inline-flex items-center gap-2">
            <span className="w-[18px] h-[1px] bg-turquoise inline-block" />
            Careers
          </div>
          <h2 className="mt-[12px] text-[30px] lg:text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-navy">
            Come build the boring, important stuff.
          </h2>
          <p className="mt-[16px] text-lg leading-[1.55] text-fg2 max-w-[60ch]">
            We&apos;re a team of ~140 in Sydney, Melbourne and Auckland, mostly working on software that nobody writes tweets about but millions of Australians rely on. If that sounds good, we&apos;d love to talk.
          </p>
          <div className="flex gap-3 mt-[28px]">
            <Link href="#" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-navy text-white border border-navy hover:bg-navy-dark transition-all">
              See all roles <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <Link href="#" className="inline-flex items-center gap-2 px-5 py-[11px] rounded-lg text-sm font-medium bg-transparent text-navy border border-stroke1 hover:bg-bg3 transition-all">
              Life at Tally
            </Link>
          </div>
        </div>

        {/* Right: job list */}
        <div className="bg-white border border-stroke1 rounded-xl shadow-[0_2px_2px_-1px_rgba(10,13,18,0.04),0_4px_6px_-2px_rgba(10,13,18,0.03)]">
          {jobs.map((job, i) => (
            <Link
              key={job.title}
              href="#"
              className={`grid grid-cols-[1fr_auto_auto_auto] gap-[20px] px-[24px] py-[20px] items-center hover:bg-bg2 transition-colors ${
                i < jobs.length - 1 ? "border-b border-stroke1" : ""
              }`}
            >
              <div>
                <div className="text-[15px] font-semibold text-fg1">{job.title}</div>
                <div className="text-xs text-fg2 mt-[2px] font-mono uppercase tracking-[0.06em]">{job.team}</div>
              </div>
              <span className="text-xs font-medium text-fg2 px-[10px] py-1 rounded-full bg-bg3 hidden sm:inline">{job.loc}</span>
              <span className="text-xs font-medium text-fg2 px-[10px] py-1 rounded-full bg-bg3 hidden sm:inline">{job.type}</span>
              <span className="material-symbols-outlined text-fg2 text-[18px]">arrow_forward</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
