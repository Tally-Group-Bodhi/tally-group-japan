"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const defaultStats: Stat[] = [
  { value: 110, suffix: "+", label: "Clients Worldwide" },
  { value: 450, suffix: "+", label: "Global Staff" },
  { value: 4, suffix: " mil +", label: "Meter Points" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl font-bold text-tally-navy sm:text-5xl lg:text-6xl">
      {count}
      <span className="text-tally-green">{suffix}</span>
    </div>
  );
}

export function StatsCounter({ stats = defaultStats }: { stats?: Stat[] }) {
  return (
    <section className="bg-tally-gray-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-tally-green">
            Tally Group
          </span>
          <h2 className="mt-2 text-3xl font-bold text-tally-navy sm:text-4xl">By the numbers</h2>
          <p className="mt-4 text-lg text-tally-gray">
            Everything you need to convert, engage, and retain more users.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-medium text-tally-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
