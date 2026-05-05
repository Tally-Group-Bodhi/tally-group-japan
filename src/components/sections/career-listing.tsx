import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight } from "lucide-react";

interface CareerListingProps {
  title: string;
  department: string;
  location: string;
  type: string;
  slug?: string;
}

export function CareerListing({ title, department, location, type, slug = "#" }: CareerListingProps) {
  return (
    <Link
      href={slug}
      className="group flex flex-col gap-4 rounded-lg border border-border p-5 transition-all hover:border-tally-green/30 hover:shadow-sm sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <p className="text-xs font-medium text-tally-green">{department}</p>
        <h3 className="mt-1 text-base font-semibold text-tally-navy group-hover:text-tally-green transition-colors">
          {title}
        </h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-tally-gray">
          <MapPin className="h-3.5 w-3.5" />
          <span>{location}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Badge variant="secondary">{type}</Badge>
        <span className="text-sm font-medium text-tally-green flex items-center gap-1 group-hover:gap-2 transition-all">
          View job <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
