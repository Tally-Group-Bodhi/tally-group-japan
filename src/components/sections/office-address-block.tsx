import type { Office } from "@/data/office-regions";

type OfficeAddressBlockProps = {
  office: Office;
  language?: "en" | "ja";
};

export function OfficeAddressBlock({ office, language = "en" }: OfficeAddressBlockProps) {
  const cityLabel = language === "ja" && office.cityJa ? office.cityJa : office.city;
  return (
    <>
      <h3 className="text-base font-semibold text-navy">{cityLabel}</h3>
      <address className="mt-4 block not-italic text-sm leading-[1.6] text-fg2">
        {office.building && <span className="block">{office.building}</span>}
        <span className="block">{office.street}</span>
        <span className="block">{office.suburb}</span>
        <span className="block">{office.statePostcode}</span>
      </address>
    </>
  );
}
