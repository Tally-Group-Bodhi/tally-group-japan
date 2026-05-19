import type { Metadata } from "next";
import {
  TechBodyParagraph,
  TechBulletList,
  TechCTARow,
  TechHero,
  TechIntegGrid,
  TechPrincipleGrid,
  TechSection,
  TechSubheading,
} from "@/components/jp/tech/tech-page";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "How we design the Tally+ platform: architecture principles and a reference target architecture for modular services, integrations, and channels.",
};

const principles = [
  {
    icon: "architecture",
    title: "Well-architected",
    items: [
      "As a foundation for all design adhere to well-architected principles (reliability, security, cost optimization, operational excellence, performance efficiency).",
    ],
  },
  {
    icon: "integration_instructions",
    title: "Integration enabled",
    items: [
      "Follow industry standard enterprise integration patterns for both internal integrations between modules and external integrations.",
      "Enable functionality through APIs for internal and potentially external use.",
      "Use events to notify components of changes and potentially expose them externally through webhooks.",
    ],
  },
  {
    icon: "verified_user",
    title: "Compliant",
    items: ["Any solution must be compliant for the domain in which it operates."],
  },
  {
    icon: "trending_up",
    title: "Incremental evolution",
    items: [
      "Prioritise incremental evolution to big-bang cutovers.",
      "Apply standard migration patterns when enhancing software (for example strangler fig, branch by abstraction, and parallel run).",
      "Deliver value early.",
      "Minimise risk.",
    ],
  },
  {
    icon: "view_module",
    title: "Modular",
    items: [
      "Build toward modular components.",
      "Low coupling and strong cohesion results in stable platforms.",
      "Reusable within the platform, and potentially across platforms.",
      "Increase flexibility within a module.",
      "Increase flexibility between modules.",
    ],
  },
  {
    icon: "stars",
    title: "Value-driven priorities",
    items: [
      "Key-value streams (for example billing, payments, market).",
      "Areas of competitive advantage.",
      "Innovation and growth.",
      "Compliance.",
      "Security.",
    ],
  },
  {
    icon: "group_work",
    title: "Consolidated",
    items: ["Consolidate common functionality in modules.", "Reduce compliance risks."],
  },
];

const foundationCore = [
  {
    title: "Common data layer",
    body: "Shared representation of customers, sites, products, and metering used consistently across operational domains.",
  },
  {
    title: "Billing",
    body: "Market‑leading breadth of invoiced products—including complex and new energy constructs suited to global retailers (including Japan‑relevant scenarios described in capability materials).",
  },
  {
    title: "Meter data management",
    body: "Ingestion, validation, and orchestration of interval and register data for billing and analytics.",
  },
  {
    title: "Market gateway",
    body: "Interfaces for market messages and workflows aligned to each jurisdiction's market operator.",
  },
  {
    title: "Docs & correspondence",
    body: "Automated management of customer and regulatory correspondence tied to lifecycle events.",
  },
];

const channelsAcquisition = [
  {
    title: "Sales & acquisition",
    body: "Agency and broker tooling, onboarding, and enrolment aligned with retailer acquisition journeys.",
  },
  {
    title: "Digital tools",
    body: "Customer and business portals, apps, and digitised journeys supporting acquisition and service.",
  },
];

const crossCutting = [
  {
    title: "Hosting & security",
    body: "Operational resilience and security posture appropriate to regulated retail and sensitive metering/billing data.",
  },
  {
    title: "Operational intelligence (AI / ML)",
    body: "Forecasting, insights, automation, and GenAI‑assisted operational tooling layered across retail processes.",
  },
];

const japanIntegrations = [
  {
    title: "Market / OCCTO",
    body: "Electricity market clearing and coordination flows aligned with OCCTO‑related operational expectations.",
  },
  {
    title: "Acquisition & switching",
    body: "Retail onboarding and switching workflows consistent with Japan retail‑market practice.",
  },
  {
    title: "Payments",
    body: "Payment gateway and settlement‑agent integration for invoicing and collections.",
  },
  {
    title: "Metering & delivery",
    body: "Confirmed usage (interval/register) acquisition paths feeding billing and MDM.",
  },
];

const auIntegrations = [
  { title: "Market", body: "AEMO, Software AG" },
  {
    title: "Concession validation",
    body: "Centrelink; Queensland Government; Government of South Australia; Victoria State Government",
  },
  {
    title: "Payments",
    body: "ANZ, Stripe, Westpac, Commonwealth Bank, NAB, Post Billpay, Centrepay",
  },
  { title: "Mail, comms and notifications", body: "Fuji Xerox, Twilio, SendGrid, Whispir" },
  { title: "Debt collection", body: "Probe, Milton Graham, RCL, ARMA" },
  { title: "CDR portal", body: "BIZA" },
  { title: "New connections", body: "CONNECT DEVELOP" },
  { title: "Contact centre", body: "Genesys, Google Cloud (CES), Amazon Connect" },
];

export default function JPArchitecturePage() {
  return (
    <>
      <TechHero
        eyebrow="テクノロジー / アーキテクチャ"
        title="Tally+ ecosystem architecture"
        lede="How we design the Tally+ platform: architecture principles and a reference target architecture for modular services, integrations, and channels."
      />

      <TechSection
        id="principles-heading"
        eyebrow="アーキテクチャ原則"
        heading="Tally+ ecosystem — architecture principles"
      >
        <TechPrincipleGrid cards={principles} />
      </TechSection>

      <TechSection
        id="ecosystem-heading"
        eyebrow="エコシステム"
        heading="Tally+ ecosystem"
        altBg
        lede={
          <p className="m-0">
            Tally&rsquo;s energy retail ecosystem comprises a suite of standalone products that
            integrate natively to provide a comprehensive platform for retailers&mdash;from Retail OS
            (EOS), pricing and quoting, and revenue assurance through digital customer experience,
            new energy services, sales &amp; acquisition, and operational intelligence (AI/ML).
            Deployments can be packaged end‑to‑end or consumed as individual capabilities.
          </p>
        }
      />

      <TechSection
        id="topology-heading"
        eyebrow="トポロジー"
        heading="Tally+ topology"
        lede={
          <p className="m-0">
            The reference topology below reflects how capabilities cluster around a common data
            layer and core retail services&mdash;including billing, meter data management, market
            gateway interfaces, documentation &amp; correspondence, acquisition channels, and
            digital tools&mdash;with <strong>hosting and security</strong> and{" "}
            <strong>operational intelligence (AI/ML)</strong> spanning the stack. Capability
            clusters such as pricing &amp; quoting, the broader service library (for example load
            disaggregation, DER analytics, demand management, carbon reporting, tariff
            optimisation), customer management, workflows, simulation, and payment gateway
            interoperate through modular integration patterns.
          </p>
        }
      >
        <TechSubheading>Foundation &amp; core services</TechSubheading>
        <TechIntegGrid items={foundationCore} columns={3} />

        <TechSubheading>Channels &amp; acquisition</TechSubheading>
        <TechIntegGrid items={channelsAcquisition} columns={2} />

        <TechSubheading>Cross‑cutting layers</TechSubheading>
        <TechIntegGrid items={crossCutting} columns={2} />

        <TechSubheading>Capability clusters (service library)</TechSubheading>
        <TechBodyParagraph>
          Representative capabilities often positioned alongside core retail—deployable as full
          packages or selectively:
        </TechBodyParagraph>
        <div className="mt-[16px]">
          <TechBulletList
            items={[
              { text: "Pricing & quoting; goal setting and scenario testing" },
              {
                text: "Service library components—for example load disaggregation, demand management, carbon reporting, insight and analytics, tariff optimisation, progressive purchasing",
              },
              { text: "Customer management; user workflows; simulation" },
              { text: "Payment gateway integration" },
            ]}
          />
        </div>
      </TechSection>

      <TechSection
        id="target-heading"
        eyebrow="ターゲットアーキテクチャ"
        heading="Tally+ ecosystem — target architecture"
        altBg
        lede={
          <p className="m-0">
            Tally+ is modular‑by‑design and integrates with an energy retailer&rsquo;s enterprise
            ecosystem, providing native integrations for strategic platforms (for example SAP IS‑U,
            Salesforce) while exposing modular APIs and events for internal and partner
            integrations.
          </p>
        }
      >
        <figure
          aria-label="Reference architecture diagram"
          className="max-w-[1000px] rounded-xl overflow-hidden border border-stroke1 bg-navy aspect-[16/9] grid place-items-center text-white/60 text-sm text-center px-8"
        >
          <span>
            Tally+ EOS reference architecture diagram: retailers, portals, core operating functions,
            OCCTO and market interfaces, and payment agency flows.
          </span>
        </figure>
        <p className="mt-3 max-w-[60ch] text-[13px] text-fg2/70 leading-[1.6]">
          Reference diagram — illustrative partners and systems; regional deployments vary.
        </p>

        <TechSubheading>Inside the Tally+ core</TechSubheading>
        <TechBodyParagraph>
          Access and experience layers sit above the modular service stack; integration and events
          support connectivity.
        </TechBodyParagraph>
        <div className="mt-[16px]">
          <TechBulletList
            items={[
              { strong: "Unauthenticated", text: "website, social, sales portal." },
              { strong: "Authenticated", text: "B2B portal, B2C portal, B2C native app." },
              {
                text: "Integration (generic and custom) and events for module-to-module and enterprise connectivity.",
              },
              {
                strong: "Services",
                text: "sales and acquisitions; small market; large market; services.",
              },
            ]}
          />
        </div>

        <TechSubheading>Enterprise context (reference)</TechSubheading>
        <TechBodyParagraph>Typical client-side systems that connect into Tally+:</TechBodyParagraph>
        <div className="mt-[16px]">
          <TechBulletList
            columns={2}
            items={[
              { text: "Enterprise data platform" },
              { text: "Client ecosystem" },
              { text: "Customer IDAM (identity and access management)" },
              { text: "Marketing; ERP for people and finance" },
            ]}
          />
        </div>

        <TechSubheading>Native integrations — Japan (reference)</TechSubheading>
        <TechBodyParagraph>
          Tally&rsquo;s Retail Operating System is described as integrated with the Japanese energy
          market for appropriate deployments—with OCCTO‑aligned clearing/market flows, interfaces
          between retailer operations and broader industry actors (including transmission &amp;
          distribution where applicable), and payment‑gateway / settlement patterns suited to local
          schemes. Exact adapters depend on your brands and operating model; partner names are
          indicative.
        </TechBodyParagraph>
        <div className="mt-[24px]">
          <TechIntegGrid items={japanIntegrations} columns={4} />
        </div>

        <TechSubheading>Native integrations — Australia (reference examples)</TechSubheading>
        <TechBodyParagraph>
          Illustrative categories from Australian deployments—substitute for your market footprint.
        </TechBodyParagraph>
        <div className="mt-[24px]">
          <TechIntegGrid items={auIntegrations} columns={4} />
        </div>
      </TechSection>

      <TechSection eyebrow="次のステップ" heading="Tally+ をもっと知る">
        <TechCTARow
          buttons={[
            { label: "Request a demo", href: "/contact", variant: "primary" },
            { label: "Talk to sales", href: "/contact", variant: "secondary" },
          ]}
        />
      </TechSection>
    </>
  );
}
