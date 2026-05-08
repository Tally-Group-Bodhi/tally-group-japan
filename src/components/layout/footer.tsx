import Link from "next/link";
import Image from "next/image";

const productLinks = ["Tally+", "Tally Glass", "Tally CRM", "Sales & Acquisition", "Tally Digital", "Orion & Acquire"];
const companyLinks = ["About", "Careers", "Insights", "Press kit", "Contact"];
const resourceLinks = ["Platform", "Security & trust", "Status", "Developer docs", "Changelog"];
const legalLinks = ["Privacy policy", "Terms of service", "Acceptable use", "Responsible disclosure", "Modern slavery"];

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white pt-[72px] pb-6">
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-[48px] pb-[48px] border-b border-white/10">
          <div>
            <Image src="/logos/TallyOfficialLogo.svg" alt="Tally Group" width={140} height={27} className="h-[27px] w-auto brightness-0 invert" />
            <p className="mt-[16px] text-sm text-white/60 leading-relaxed max-w-[30ch]">
              The platform for Australian energy retailers. Built in Sydney, trusted across the NEM.
            </p>
          </div>
          <FooterCol title="Products" links={productLinks} />
          <FooterCol title="Company" links={companyLinks} />
          <FooterCol title="Resources" links={resourceLinks} />
          <FooterCol title="Legal" links={legalLinks} />
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-[28px] text-[13px] text-white/50 gap-4">
          <div>&copy; 2026 Tally Group Pty Ltd &middot; ABN 41 629 117 804</div>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-white transition-colors">Sydney</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors">Melbourne</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors">Auckland</Link>
          </div>
        </div>
        <p className="mt-[18px] text-xs text-white/55 leading-relaxed max-w-[60ch]">
          Tally Group acknowledges the Traditional Custodians of the lands on which we work, the Gadigal people of the Eora Nation, and pays respect to Elders past and present.
        </p>
      </div>
    </footer>
  );
}

const linkHrefs: Record<string, string> = {
  Insights: "/blog",
  Contact: "/contact",
  About: "/about",
  Careers: "/careers",
};

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h5 className="text-xs uppercase tracking-[0.1em] text-turquoise font-semibold mb-[16px]">{title}</h5>
      <ul className="flex flex-col gap-[10px]">
        {links.map((link) => (
          <li key={link}>
            <Link href={linkHrefs[link] ?? "#"} className="text-sm text-white/75 hover:text-white transition-colors">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
