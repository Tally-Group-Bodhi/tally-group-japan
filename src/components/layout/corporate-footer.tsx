import Link from "next/link";
import Image from "next/image";

const aboutLinks = ["Company", "Leadership", "Mission and Values"];
const officeLinks = ["Melbourne", "Auckland", "Houston", "Tokyo", "Dubai"];
const resourceLinks = ["News", "Careers", "Disclaimers"];
const legalLinks = ["Privacy policy", "Terms of service"];

export function CorporateFooter() {
  return (
    <footer className="bg-navy-dark text-white pt-[72px] pb-6">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-[48px] pb-[48px] border-b border-white/10">
          <div>
            <Image src="/logos/TallyOfficialLogo.svg" alt="Tally Group" width={140} height={27} className="h-[27px] w-auto brightness-0 invert" />
            <p className="mt-[16px] text-sm text-white/60 leading-relaxed max-w-[30ch]">
              Global customer engagement and management solutions for energy retailers and utilities.
            </p>
          </div>
          <FooterCol title="About" links={aboutLinks} basePath="/corporate" paths={["/corporate/company", "/corporate/leadership", "/corporate/mission-values"]} />
          <FooterCol title="Offices" links={officeLinks} basePath="/corporate/offices" />
          <FooterCol title="Resources" links={resourceLinks} basePath="/corporate" paths={["/corporate/news", "/corporate#careers", "/corporate#disclaimers"]} />
          <FooterCol title="Legal" links={legalLinks} />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-[28px] text-[13px] text-white/50 gap-4">
          <div>&copy; {new Date().getFullYear()} Tally Group. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, basePath, paths }: { title: string; links: string[]; basePath?: string; paths?: string[] }) {
  return (
    <div>
      <h5 className="text-xs uppercase tracking-[0.1em] text-turquoise font-semibold mb-[16px]">{title}</h5>
      <ul className="flex flex-col gap-[10px]">
        {links.map((link, i) => (
          <li key={link}>
            <Link
              href={paths?.[i] ?? basePath ?? "#"}
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
