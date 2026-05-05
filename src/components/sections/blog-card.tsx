import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category?: string;
}

export function BlogCard({ title, excerpt, date, slug, category }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="group h-full overflow-hidden border-0 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-[16/9] bg-gradient-to-br from-tally-gray-light to-tally-green/5" />
        <CardContent className="p-6">
          <div className="flex items-center gap-3 text-xs text-tally-gray">
            <time>{date}</time>
            {category && (
              <>
                <span>&middot;</span>
                <span>{category}</span>
              </>
            )}
          </div>
          <h3 className="mt-3 text-lg font-semibold text-tally-navy group-hover:text-tally-green transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="mt-2 text-sm text-tally-gray line-clamp-3">{excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
