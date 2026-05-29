"use client";

import Image from "next/image";

type Partner = {
  src: string;
  alt: string;
  scale?: number;
};

const partners: Partner[] = [
  { src: "1stenergy.png", alt: "1st Energy", scale: 1.25 },
  { src: "active.png", alt: "Active" },
  { src: "amber.jpeg", alt: "Amber", scale: 1.1 },
  { src: "ampolenergy.png", alt: "Ampol Energy" },
  { src: "cleanco.png", alt: "CleanCo Queensland" },
  { src: "contact.jpeg", alt: "Contact Energy", scale: 1.4 },
  { src: "csenergy.jpeg", alt: "CS Energy", scale: 1.4 },
  { src: "dodo.png", alt: "Dodo" },
  { src: "enel.jpeg", alt: "Enel" },
  { src: "energyaustralia.png", alt: "EnergyAustralia" },
  { src: "energylocals.png", alt: "Energy Locals" },
  { src: "engie.png", alt: "Engie", scale: 0.85 },
  { src: "frontier.png", alt: "Frontier Utilities" },
  { src: "gexaenergy.jpeg", alt: "Gexa Energy", scale: 1.2 },
  { src: "iberdrola.jpeg", alt: "Iberdrola" },
  { src: "jacana.png", alt: "Jacana Energy", scale: 1.4 },
  { src: "meridian.jpeg", alt: "Meridian", scale: 1.5 },
  { src: "momentum.png", alt: "Momentum Energy", scale: 1.2 },
  { src: "nextbusinessenergy.png", alt: "Next Business Energy", scale: 1.4 },
  { src: "nexteraenergy.png", alt: "NextEra Energy", scale: 1.4 },
  { src: "pacificblue.png", alt: "Pacific Blue" },
  { src: "rakuten.jpeg", alt: "Rakuten", scale: 1.3 },
  { src: "santanna.jpeg", alt: "Santanna Energy Services", scale: 1.2 },
  { src: "smartestenergy.png", alt: "Smartest Energy" },
  { src: "snowyhydro.png", alt: "Snowy Hydro" },
];

const BASE_MAX_H = 48;
const BASE_MAX_W = 140;

function LogoItem({ p }: { p: Partner }) {
  const scale = p.scale ?? 1;
  return (
    <div className="shrink-0 h-[96px] flex items-center justify-center px-[36px]">
      <Image
        src={`/logos/clients/${p.src}`}
        alt={p.alt}
        width={160}
        height={64}
        className="w-auto h-auto object-contain"
        style={{
          maxHeight: `${BASE_MAX_H * scale}px`,
          maxWidth: `${BASE_MAX_W * scale}px`,
        }}
        loading="lazy"
      />
    </div>
  );
}

export function LogoMarqueeJP() {
  return (
    <section className="py-[64px] lg:py-[80px] overflow-hidden">
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-jp-logo-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
              {partners.map((p) => (
                <LogoItem key={`${dup}-${p.alt}`} p={p} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes jp-logo-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-jp-logo-marquee {
          animation: jp-logo-marquee 60s linear infinite;
        }
        .animate-jp-logo-marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-jp-logo-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
