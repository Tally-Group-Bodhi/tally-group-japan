"use client";

import { useState } from "react";
import Link from "next/link";

interface Position {
  title: string;
  department: string;
  location: string;
  type: string;
}

export function PositionFilter({
  positions,
  locations,
}: {
  positions: Position[];
  locations: string[];
}) {
  const [selectedLocation, setSelectedLocation] = useState("All locations");

  const filtered =
    selectedLocation === "All locations"
      ? positions
      : positions.filter((p) => p.location.includes(selectedLocation));

  return (
    <>
      <div className="mb-[32px] flex flex-wrap gap-2">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => setSelectedLocation(loc)}
            className={`px-4 py-[7px] rounded-lg text-[13px] font-medium transition-all border ${
              selectedLocation === loc
                ? "bg-navy text-white border-navy"
                : "bg-white text-fg2 border-stroke1 hover:bg-bg3"
            }`}
          >
            {loc}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-[12px]">
        {filtered.length > 0 ? (
          filtered.map((pos) => (
            <Link
              key={pos.title}
              href="#"
              className="group flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between bg-bg2 rounded-xl p-[20px] hover:bg-white hover:border-stroke1 border border-transparent hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all"
            >
              <div>
                <span className="text-xs font-medium text-turquoise">{pos.department}</span>
                <h3 className="mt-[4px] text-[15px] font-semibold text-fg1 group-hover:text-navy transition-colors">
                  {pos.title}
                </h3>
                <div className="mt-[6px] flex items-center gap-[14px] text-[13px] text-fg2">
                  <span className="inline-flex items-center gap-[5px]">
                    <span className="material-symbols-outlined text-[15px]">location_on</span>
                    {pos.location}
                  </span>
                  <span className="inline-flex items-center gap-[5px]">
                    <span className="material-symbols-outlined text-[15px]">schedule</span>
                    {pos.type}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-[13px] font-medium text-turquoise flex items-center gap-1 group-hover:gap-2 transition-all">
                  View role <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))
        ) : (
          <div className="bg-bg2 rounded-xl p-[32px] text-center">
            <p className="text-fg2 text-sm">No positions available in this location. Check back soon!</p>
          </div>
        )}
      </div>
    </>
  );
}
