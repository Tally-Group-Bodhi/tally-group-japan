"use client";

import Image from "next/image";

const logos = [
  { src: "frontier.png", alt: "Frontier" },
  { src: "engie.png", alt: "Engie" },
  { src: "1stenergy.png", alt: "1st Energy" },
  { src: "active.png", alt: "Active" },
  { src: "dodo.png", alt: "Dodo" },
  { src: "energylocals.png", alt: "Energy Locals" },
  { src: "jacana.png", alt: "Jacana Energy" },
  { src: "momentum.png", alt: "Momentum Energy" },
  { src: "nextbusinessenergy.png", alt: "Next Business Energy" },
  { src: "nexteraenergy.png", alt: "Next Era Energy" },
  { src: "santanna.png", alt: "Santanna Energy Services" },
  { src: "simplyenergy.png", alt: "Simply Energy" },
  { src: "ssl.png", alt: "SSL" },
  { src: "meridian.png", alt: "Meridian" },
  { src: "snowyhydro.png", alt: "Snowy Hydro" },
  { src: "ampolenergy.png", alt: "Ampol Energy" },
  { src: "energyaustralia.png", alt: "EnergyAustralia" },
  { src: "cleanco.png", alt: "CleanCo Queensland" },
  { src: "csenergy.png", alt: "CS Energy" },
  { src: "iberdrola.png", alt: "Iberdrola" },
  { src: "enel.png", alt: "Enel" },
  { src: "gexaenergy.png", alt: "Gexa Energy" },
  { src: "marubeni.png", alt: "Marubeni" },
  { src: "pacificblue.png", alt: "Pacific Blue" },
  { src: "veolia.png", alt: "Veolia" },
  { src: "tesla.png", alt: "Tesla" },
  { src: "smartestenergy.png", alt: "Smartest Energy" },
  { src: "alintaenergy.png", alt: "Alinta Energy" },
  { src: "sonnen.png", alt: "sonnen" },
  { src: "sec.png", alt: "SEC" },
];

function LogoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex items-center gap-[clamp(2rem,5vw,3.5rem)] shrink-0 w-max pr-[clamp(2rem,5vw,3.5rem)] bg-white"
      aria-hidden={ariaHidden}
    >
      {logos.map((logo) => (
        <div
          key={logo.alt}
          className="flex-none flex items-center justify-center min-w-[4.5rem] h-12 bg-white"
        >
          <Image
            src={`/corporate/${logo.src}`}
            alt={logo.alt}
            width={140}
            height={44}
            className="max-h-[44px] max-w-[140px] w-auto h-auto object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export function CorporateLogoMarquee() {
  return (
    <section className="bg-white border-b border-stroke1 py-[24px] overflow-hidden">
      <div
        className="max-w-full mx-auto px-5 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex w-max bg-white animate-[logo-marquee_75s_linear_infinite] hover:[animation-play-state:paused]">
          <LogoTrack />
          <LogoTrack ariaHidden />
        </div>
      </div>
    </section>
  );
}
