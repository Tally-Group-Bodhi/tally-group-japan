const clients = [
  "Snowy Hydro", "Ampol Energy", "Alinta Energy", "Momentum Energy",
  "CleanCo", "Engie", "Diamond Energy", "Contact Energy",
  "Pioneer Energy", "CS Energy", "Discover Energy", "Enel",
  "Energy Locals", "Frontier Utilities", "Smartest Energy",
  "Sydney Airport", "Iberdrola", "Yes Energy", "Origin Energy",
  "Arrow Energy", "Dodo Energy", "Energy Australia", "Kiwi Energy",
  "Pogo Energy", "Meridian Energy", "1st Energy", "Real Utilities",
  "BHP", "CovaU Energy", "NAMA Energy",
];

export function ClientLogos() {
  return (
    <section className="border-y bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-wider text-tally-gray">
          Join our 110+ global clients
        </p>
        <div className="relative overflow-hidden">
          <div className="logo-scroll flex gap-12">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex h-12 shrink-0 items-center justify-center rounded-lg bg-tally-gray-light px-6"
              >
                <span className="whitespace-nowrap text-sm font-medium text-tally-gray">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
