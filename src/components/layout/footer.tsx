"use client";

import Link from "next/link";
import Image from "next/image";
import { useMarketingHref } from "@/contexts/marketing-region";

type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };

const jpLegalLinks: FooterLink[] = [
  { label: "プライバシーポリシー", href: "/privacy" },
];

function buildJPColumns(href: (path: string) => string): FooterColumn[] {
  return [
    {
      title: "テクノロジー",
      links: [
        { label: "サービス", href: href("/services-beta") },
        { label: "アーキテクチャ", href: href("/technology/architecture") },
        { label: "セキュリティ", href: href("/technology/security") },
        { label: "監査", href: href("/technology/audit") },
        { label: "APIライブラリ", href: href("/technology/api-library") },
      ],
    },
    {
      title: "インサイト",
      links: [
        { label: "資料", href: href("/insights/resources") },
        { label: "導入事例", href: href("/insights/case-studies") },
      ],
    },
    {
      title: "ニュース",
      links: [
        { label: "プレスリリース", href: href("/news/press-releases") },
        { label: "イベント", href: href("/news/events") },
      ],
    },
    {
      title: "会社情報",
      links: [
        { label: "会社情報", href: href("/about") },
        { label: "会社概要", href: href("/about#company-overview") },
        { label: "日本チーム", href: href("/about#japan-leadership") },
        { label: "企業理念", href: href("/about#mission-values") },
        { label: "お問い合わせ", href: href("/contact") },
      ],
    },
  ];
}

export function Footer() {
  const href = useMarketingHref();
  const columns = buildJPColumns(href);

  return (
    <footer className="bg-navy-dark text-white pt-[72px] pb-6">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-x-[32px] gap-y-[40px] lg:gap-[48px] pb-[48px] border-b border-white/10">
          <div className="col-span-2 lg:col-span-1">
            <Image
              src="/logos/TallyOfficialLogo.svg"
              alt="Tally Group"
              width={140}
              height={27}
              className="h-[27px] w-auto brightness-0 invert"
            />
            <p className="mt-[16px] text-sm text-white/60 leading-relaxed max-w-[30ch]">
              The platform for energy retailers in Japan. Proudly built in Australia.
            </p>
          </div>
          {columns.map((column) => (
            <FooterCol key={column.title} column={column} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-[28px] text-[13px] text-white/50 gap-4">
          <div>{"\u00a9 2026 Tally Group Pty Ltd"}</div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {jpLegalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={href(link.href)}
                  className="text-white/55 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ column }: { column: FooterColumn }) {
  return (
    <div>
      <h5 className="text-xs uppercase tracking-[0.1em] text-turquoise font-semibold mb-[16px]">
        {column.title}
      </h5>
      <ul className="flex flex-col gap-[10px]">
        {column.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/75 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
