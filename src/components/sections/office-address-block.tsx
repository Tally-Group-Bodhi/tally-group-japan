import type { Office } from "@/data/office-regions";

type OfficeAddressBlockProps = {
  office: Office;
  language?: "en" | "ja" | "ar";
};

export function OfficeAddressBlock({ office, language = "en" }: OfficeAddressBlockProps) {
  const cityLabel =
    language === "ar" && office.cityAr
      ? office.cityAr
      : language === "ja" && office.cityJa
      ? office.cityJa
      : office.city;

  const isAr = language === "ar";
  const building = isAr && office.buildingAr ? office.buildingAr : office.building;
  const street = isAr && office.streetAr ? office.streetAr : office.street;
  const suburb = isAr && office.suburbAr ? office.suburbAr : office.suburb;
  const statePostcode =
    isAr && office.statePostcodeAr ? office.statePostcodeAr : office.statePostcode;

  return (
    <>
      <h3 className="text-base font-semibold text-navy">{cityLabel}</h3>
      <address className="mt-4 block not-italic text-sm leading-[1.6] text-fg2">
        {building && <span className="block">{building}</span>}
        <span className="block">{street}</span>
        <span className="block">{suburb}</span>
        <span className="block">{statePostcode}</span>
      </address>
    </>
  );
}
