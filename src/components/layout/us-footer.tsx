import Link from "next/link";
import Image from "next/image";

const aboutLinks = ["Company", "U.S. Leadership", "Tally Group Leadership", "Mission and Values"];
const aboutPaths = ["/corporate/us/company", "/corporate/us/us-leadership", "/corporate/us/tally-group-leadership", "/corporate/us/mission-values"];
const insightsLinks = ["Case Studies", "Resources"];
const insightsPaths = ["/corporate/us/case-studies", "/corporate/us/resources"];
const newsLinks = ["Press Releases", "Events"];
const newsPaths = ["/corporate/us/press-releases", "/corporate/us/events"];
const legalLinks = ["Privacy policy", "Terms of service"];

export function USFooter() {
  return (
    <footer className="bg-navy-dark text-white pt-[72px] pb-6">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-[48px] pb-[48px] border-b border-white/10">
          <div>
            <Image src="/us/tally-plus.svg" alt="Tally+ United States" width={123} height={45} className="h-[27px] w-auto brightness-0 invert" />
            <p className="mt-[16px] text-sm text-white/60 leading-relaxed max-w-[30ch]">
              Global customer engagement and management solutions for energy retailers and utilities.
            </p>
          </div>
          <FooterCol title="About" links={aboutLinks} paths={aboutPaths} />
          <FooterCol title="Insights" links={insightsLinks} paths={insightsPaths} />
          <FooterCol title="News" links={newsLinks} paths={newsPaths} />
          <FooterCol title="Legal" links={legalLinks} />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-[28px] text-[13px] text-white/50 gap-4">
          <div>&copy; {new Date().getFullYear()} Tally Group. Tally+ United States.</div>
          <div className="flex gap-6">
            <Link href="/corporate" className="text-white/50 hover:text-white transition-colors">Global site</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, paths }: { title: string; links: string[]; paths?: string[] }) {
  return (
    <div>
      <h5 className="text-xs uppercase tracking-[0.1em] text-turquoise font-semibold mb-[16px]">{title}</h5>
      <ul className="flex flex-col gap-[10px]">
        {links.map((link, i) => (
          <li key={link}>
            <Link
              href={paths?.[i] ?? "#"}
              className="text-sm text-white/75 hover:text-white transition-colors"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
