import type { Metadata } from "next";
import Image from "next/image";
import { MarketingLink } from "@/components/marketing/marketing-link";
import { jpCtaPrimaryOnLightCompactClass } from "@/components/jp/cta-button-classes";
import { ExpandableServiceSection } from "@/components/services/expandable-service-section";

export const metadata: Metadata = {
  title: "\u30b5\u30fc\u30d3\u30b9",
  description:
    "\u5c0e\u5165\u30fb\u7d71\u5408\u652f\u63f4\u304b\u3089\u5e02\u5834\u62e1\u5927\u30fb\u6226\u7565\u30a2\u30c9\u30d0\u30a4\u30b6\u30ea\u30fc\u307e\u3067\u3001Tally\u306e\u30b5\u30fc\u30d3\u30b9\u306f\u5909\u5316\u3059\u308b\u30a8\u30cd\u30eb\u30ae\u30fc\u5e02\u5834\u306b\u304a\u3051\u308b\u4e8b\u696d\u63a8\u9032\u3092\u652f\u63f4\u3057\u307e\u3059\u3002",
};

function ServiceImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-stroke1 bg-bg2">
      <Image
        src={src}
        alt={alt}
        fill
        quality={95}
        sizes="(max-width: 768px) 100vw, 560px"
        className="object-cover object-center"
      />
    </div>
  );
}

function SubListHeading({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-navy/70 m-0">
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-2 list-none m-0 p-0 mt-[14px] grid-cols-1 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="text-[20px] leading-[1.7] text-fg2 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-[6px] before:h-[6px] before:rounded-full before:bg-turquoise"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

type ServiceBlock = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFirst: boolean;
  altBg?: boolean;
  compact?: boolean;
  capabilities?: string[];
  outcomes?: string[];
  expandableDetails?: {
    title: string;
    intro: string;
    capabilitiesHeading: string;
    capabilities: string[];
    outcomesHeading: string;
    outcomes: string[];
    secondaryGroups?: { heading: string; items: string[] }[];
  };
};

const serviceSections: ServiceBlock[] = [
  {
    id: "svc-implementation",
    title: "\u5c0e\u5165",
    description:
      "Tally+\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u5186\u6ed1\u304b\u3064\u52b9\u7387\u7684\u306b\u5c0e\u5165\u3059\u308b\u305f\u3081\u306e\u652f\u63f4\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002",
    image: "/us/Implementation.jpg",
    imageAlt: "\u5c0e\u5165\u652f\u63f4\u30b5\u30fc\u30d3\u30b9",
    imageFirst: false,
    expandableDetails: {
      title: "\u5c0e\u5165\u652f\u63f4\u30b5\u30fc\u30d3\u30b9",
      intro:
        "\u304a\u5ba2\u69d8\u306e IT \u90e8\u9580\u304a\u3088\u3073\u696d\u52d9\u90e8\u9580\u3068\u9023\u643a\u3057\u3001Tally+\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u5186\u6ed1\u306a\u5c0e\u5165\u3068\u5c0e\u5165\u5f8c\u306e\u6d3b\u7528\u3092\u652f\u63f4\u3057\u307e\u3059\u3002",
      capabilitiesHeading: "\u4e3b\u306a\u652f\u63f4\u5185\u5bb9",
      capabilities: [
        "\u696d\u52d9\u30d7\u30ed\u30bb\u30b9\u30fb\u8981\u4ef6\u306e\u6574\u7406",
        "\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u30fb\u30ec\u30dd\u30fc\u30c8\u8981\u4ef6\u3078\u306e\u5bfe\u5fdc",
        "\u6a29\u9650\u30fb\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u8a2d\u8a08",
        "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30fb\u30a2\u30af\u30bb\u30b9\u7ba1\u7406\u8a2d\u8a08",
        "\u696d\u52d9\u30eb\u30fc\u30eb\u30fb\u6a29\u9650\u8a2d\u8a08",
        "\u30c7\u30fc\u30bf\u79fb\u884c\u30fb\u5909\u63db\u8a2d\u8a08",
        "\u30c6\u30b9\u30c8\u30fb\u691c\u8a3c\u652f\u63f4",
        "\u30e6\u30fc\u30b6\u30fc\u7814\u4fee\u30fb\u5c0e\u5165\u652f\u63f4",
        "\u904b\u7528\u6539\u5584\u652f\u63f4",
      ],
      outcomesHeading: "\u4e3b\u306a\u6210\u679c",
      outcomes: [
        "\u696d\u52d9\u52b9\u7387\u5316",
        "\u65e9\u671f\u904b\u7528\u7acb\u3061\u4e0a\u3052",
        "\u30b7\u30b9\u30c6\u30e0\u5b9a\u7740\u7387\u5411\u4e0a",
        "\u5c0e\u5165\u30ea\u30b9\u30af\u4f4e\u6e1b",
      ],
    },
  },
  {
    id: "svc-integration",
    title: "\u30b7\u30b9\u30c6\u30e0\u9023\u643a",
    description:
      "\u65e2\u5b58\u30b7\u30b9\u30c6\u30e0\u3084\u696d\u52d9\u30d7\u30ed\u30bb\u30b9\u3068\u306e\u9023\u643a\u3092\u5186\u6ed1\u306b\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002",
    image: "/us/Integration.jpg",
    imageAlt: "\u30b7\u30b9\u30c6\u30e0\u9023\u643a\u30b5\u30fc\u30d3\u30b9",
    imageFirst: true,
    altBg: true,
    expandableDetails: {
      title: "\u30b7\u30b9\u30c6\u30e0\u9023\u643a\u30b5\u30fc\u30d3\u30b9",
      intro:
        "Tally+\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3068\u65e2\u5b58\u30b7\u30b9\u30c6\u30e0\u30fb\u5916\u90e8\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3068\u306e\u30c7\u30fc\u30bf\u9023\u643a\u30fb\u696d\u52d9\u9023\u643a\u3092\u652f\u63f4\u3057\u307e\u3059\u3002",
      capabilitiesHeading: "\u4e3b\u306a\u652f\u63f4\u5185\u5bb9",
      capabilities: [
        "\u30b7\u30b9\u30c6\u30e0\u9593\u306e\u6a5f\u80fd\u6574\u7406\u30fb\u8981\u4ef6\u5b9a\u7fa9",
        "\u696d\u52d9\u30d7\u30ed\u30bb\u30b9\u306e\u9023\u643a\u8a2d\u8a08",
        "\u30c7\u30fc\u30bf\u9023\u643a\u30fb\u540c\u671f\u5bfe\u5fdc",
        "\u30af\u30e9\u30a6\u30c9\u9023\u643a\u306e\u30b5\u30dd\u30fc\u30c8",
        "API \u958b\u767a\u30fb\u63a5\u7d9a\u306e\u30b5\u30dd\u30fc\u30c8",
        "API \u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6d3b\u7528\u652f\u63f4",
        "\u9023\u643a\u30ac\u30d0\u30ca\u30f3\u30b9\u306e\u7ba1\u7406",
        "\u5916\u90e8\u30d9\u30f3\u30c0\u30fc\u30fb\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3068\u306e\u8abf\u6574",
      ],
      outcomesHeading: "\u4e3b\u306a\u6210\u679c",
      outcomes: [
        "\u624b\u4f5c\u696d\u306e\u524a\u6e1b",
        "\u696d\u52d9\u306e\u53ef\u8996\u5316\u5411\u4e0a",
        "\u696d\u52d9\u52b9\u7387\u306e\u6539\u5584",
        "\u67d4\u8edf\u3067\u62e1\u5f35\u6027\u306e\u9ad8\u3044\u30b7\u30b9\u30c6\u30e0\u9023\u643a\u306e\u5b9f\u73fe",
      ],
    },
  },
  {
    id: "svc-market",
    title: "\u4e8b\u696d\u5c55\u958b",
    description:
      "\u56fd\u5185\u5916\u306e\u30a8\u30cd\u30eb\u30ae\u30fc\u5e02\u5834\u3067\u4e8b\u696d\u5c55\u958b\u3092\u691c\u8a0e\u3059\u308b\u4f01\u696d\u306b\u5bfe\u3057\u3001\u5e02\u5834\u5206\u6790\u3068\u6226\u7565\u7acb\u6848\u3092\u652f\u63f4\u3057\u307e\u3059\u3002",
    image: "/us/Market-Expansion.jpg",
    imageAlt: "\u4e8b\u696d\u5c55\u958b\u30b5\u30fc\u30d3\u30b9",
    imageFirst: false,
    compact: true,
    expandableDetails: {
      title: "\u4e8b\u696d\u5c55\u958b\u30b5\u30fc\u30d3\u30b9",
      intro:
        "\u30b9\u30ad\u30c3\u30d4\u30f3\u30b0\u30b9\u30c8\u30fc\u30f3\u306f\u3001\u5e02\u5834\u6a5f\u4f1a\u306e\u5206\u6790\u304b\u3089\u5b9f\u884c\u53ef\u80fd\u306a\u4e8b\u696d\u6226\u7565\u306e\u7b56\u5b9a\u307e\u3067\u4e00\u8cab\u3057\u3066\u652f\u63f4\u3057\u307e\u3059\u3002",
      capabilitiesHeading: "\u4e3b\u306a\u652f\u63f4\u5185\u5bb9",
      capabilities: [
        "\u5e02\u5834\u6226\u7565\u306e\u7acb\u6848\u30fb\u30bb\u30b0\u30e1\u30f3\u30c8\u5206\u6790",
        "\u4e8b\u696d\u8a08\u753b\u306e\u7b56\u5b9a",
        "\u53ce\u76ca\u69cb\u9020\u306e\u5206\u6790",
        "\u9867\u5ba2\u7372\u5f97\u6226\u7565\u306e\u7acb\u6848",
        "\u9867\u5ba2\u53d7\u5bb9\u6027\u306e\u8abf\u67fb",
        "\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u8981\u4ef6\u306e\u6574\u7406",
      ],
      outcomesHeading: "\u4e3b\u306a\u6210\u679c",
      outcomes: [
        "\u660e\u78ba\u306a\u4e8b\u696d\u5c55\u958b\u30ed\u30fc\u30c9\u30de\u30c3\u30d7\u306e\u7b56\u5b9a",
        "\u6295\u8cc7\u5224\u65ad\u306e\u53ef\u8996\u5316",
        "\u5e02\u5834\u53c2\u5165\u30ea\u30b9\u30af\u306e\u4f4e\u6e1b",
        "\u6226\u7565\u7acb\u6848\u306e\u9ad8\u5ea6\u5316",
      ],
      secondaryGroups: [
        {
          heading: "\u65e5\u672c\u5e02\u5834\u306b\u304a\u3051\u308b\u652f\u63f4\u5b9f\u7e3e",
          items: [
            "\u96fb\u529b\u5c0f\u58f2\u306b\u304a\u3051\u308b\u30ea\u30b9\u30af\u7ba1\u7406",
            "\u96fb\u529b\u5c0f\u58f2\u5206\u91ce\u306e M&A",
            "\u30c8\u30ec\u30fc\u30c7\u30a3\u30f3\u30b0\u6226\u7565\u30fb\u30ea\u30b9\u30af\u7ba1\u7406",
            "\u518d\u751f\u53ef\u80fd\u30a8\u30cd\u30eb\u30ae\u30fc\u5206\u91ce",
            "\u84c4\u96fb\u6c60\uff08BESS\uff09\u5206\u91ce",
            "\u30c7\u30de\u30f3\u30c9\u30ec\u30b9\u30dd\u30f3\u30b9\u5206\u91ce",
          ],
        },
        {
          heading: "\u6d77\u5916\u5e02\u5834\u306b\u304a\u3051\u308b\u652f\u63f4\u5b9f\u7e3e",
          items: [
            "\u5929\u7136\u30ac\u30b9\u306e\u73fe\u7269\u5e02\u5834\u30fb\u91d1\u878d\u5e02\u5834",
            "\u5c0f\u58f2\u30fb\u5378\u58f2\u5e02\u5834",
            "\u767a\u96fb\u30fb\u518d\u751f\u53ef\u80fd\u30a8\u30cd\u30eb\u30ae\u30fc\u5206\u91ce",
            "\u30a8\u30cd\u30eb\u30ae\u30fc\u30de\u30cd\u30b8\u30e1\u30f3\u30c8\u5206\u91ce",
            "\u84c4\u96fb\u6c60\uff08BESS\uff09\u5206\u91ce",
            "\u30ea\u30b9\u30af\u7ba1\u7406",
            "M&A\u30fb\u6295\u8cc7\u652f\u63f4",
          ],
        },
      ],
    },
  },
  {
    id: "svc-product",
    title: "\u88fd\u54c1\u30fb\u30b5\u30fc\u30d3\u30b9\u4f01\u753b",
    description:
      "\u5e02\u5834\u3084\u9867\u5ba2\u30cb\u30fc\u30ba\u3092\u8e0f\u307e\u3048\u305f\u88fd\u54c1\u30fb\u30b5\u30fc\u30d3\u30b9\u4f01\u753b\u3092\u652f\u63f4\u3057\u307e\u3059\u3002",
    image: "/us/Products-Services.jpg",
    imageAlt: "\u88fd\u54c1\u30fb\u30b5\u30fc\u30d3\u30b9\u4f01\u753b\u30b5\u30fc\u30d3\u30b9",
    imageFirst: true,
    altBg: true,
    compact: true,
    expandableDetails: {
      title: "\u88fd\u54c1\u30fb\u30b5\u30fc\u30d3\u30b9\u4f01\u753b\u30b5\u30fc\u30d3\u30b9",
      intro:
        "\u9867\u5ba2\u30cb\u30fc\u30ba\u3001\u696d\u52d9\u8981\u4ef6\u3001\u5e02\u5834\u6a5f\u4f1a\u3092\u8e0f\u307e\u3048\u305f\u88fd\u54c1\u30fb\u30b5\u30fc\u30d3\u30b9\u306e\u4f01\u753b\u30fb\u6539\u5584\u3092\u652f\u63f4\u3057\u307e\u3059\u3002",
      capabilitiesHeading: "\u4e3b\u306a\u652f\u63f4\u5185\u5bb9",
      capabilities: [
        "\u88fd\u54c1\u30fb\u30b5\u30fc\u30d3\u30b9\u6226\u7565\u306e\u7acb\u6848",
        "\u9867\u5ba2\u4f53\u9a13\u306e\u8a2d\u8a08",
        "\u6599\u91d1\u30fb\u30d1\u30c3\u30b1\u30fc\u30b8\u6226\u7565\u306e\u8a2d\u8a08",
        "\u30ab\u30b9\u30bf\u30de\u30fc\u30b8\u30e3\u30fc\u30cb\u30fc\u306e\u5206\u6790",
        "\u30c7\u30b8\u30bf\u30eb\u30b5\u30fc\u30d3\u30b9\u306e\u4f01\u753b",
        "\u5e02\u5834\u3067\u306e\u5dee\u5225\u5316\u6226\u7565\u306e\u7b56\u5b9a",
        "\u696d\u52d9\u8a2d\u8a08\u306e\u652f\u63f4",
        "\u898f\u5236\u5bfe\u5fdc\u306e\u652f\u63f4",
      ],
      outcomesHeading: "\u4e3b\u306a\u6210\u679c",
      outcomes: [
        "\u9867\u5ba2\u30a8\u30f3\u30b2\u30fc\u30b8\u30e1\u30f3\u30c8\u306e\u5411\u4e0a",
        "\u5e02\u5834\u7af6\u4e89\u529b\u306e\u5f37\u5316",
        "\u5e02\u5834\u6295\u5165\u306e\u8fc5\u901f\u5316",
        "\u696d\u52d9\u8981\u4ef6\u3068\u9867\u5ba2\u30cb\u30fc\u30ba\u306e\u6574\u5408\u6027\u5411\u4e0a",
      ],
    },
  },
  {
    id: "svc-growth",
    title: "\u4e8b\u696d\u6210\u9577\u6226\u7565",
    description:
      "\u4e8b\u696d\u62e1\u5927\u3084\u30d1\u30fc\u30c8\u30ca\u30fc\u6226\u7565\u3001\u65b0\u898f\u5e02\u5834\u6a5f\u4f1a\u306e\u691c\u8a0e\u3092\u652f\u63f4\u3059\u308b\u30a2\u30c9\u30d0\u30a4\u30b6\u30ea\u30fc\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002",
    image: "/us/Growth.jpg",
    imageAlt: "\u4e8b\u696d\u6210\u9577\u652f\u63f4\u30b5\u30fc\u30d3\u30b9",
    imageFirst: false,
    compact: true,
    expandableDetails: {
      title: "\u4e8b\u696d\u6210\u9577\u652f\u63f4\u30b5\u30fc\u30d3\u30b9",
      intro:
        "\u5909\u5316\u3059\u308b\u30a8\u30cd\u30eb\u30ae\u30fc\u5e02\u5834\u306b\u5bfe\u5fdc\u3057\u305f\u6301\u7d9a\u7684\u306a\u6210\u9577\u6226\u7565\u306e\u7acb\u6848\u30fb\u5b9f\u884c\u3092\u652f\u63f4\u3057\u307e\u3059\u3002",
      capabilitiesHeading: "\u4e3b\u306a\u652f\u63f4\u5185\u5bb9",
      capabilities: [
        "\u65b0\u898f\u5e02\u5834\u6a5f\u4f1a\u306e\u5206\u6790",
        "\u4e8b\u696d\u62e1\u5927\u6226\u7565\u306e\u7acb\u6848",
        "\u5e02\u5834\u958b\u62d3\u6226\u7565\uff08Go-to-Market\uff09",
        "\u30d1\u30fc\u30c8\u30ca\u30fc\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u8a55\u4fa1",
        "\u53ce\u76ca\u6a5f\u4f1a\u306e\u5206\u6790",
        "\u696d\u52d9\u62e1\u5f35\u6027\u306e\u8a55\u4fa1",
        "\u6226\u7565\u7684\u30d1\u30fc\u30c8\u30ca\u30fc\u30b7\u30c3\u30d7\u306e\u69cb\u7bc9\u652f\u63f4",
      ],
      outcomesHeading: "\u4e3b\u306a\u6210\u679c",
      outcomes: [
        "\u5e02\u5834\u6a5f\u4f1a\u306e\u62e1\u5927",
        "\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u5f37\u5316",
        "\u4e2d\u9577\u671f\u7684\u306a\u4e8b\u696d\u6210\u9577\u306e\u652f\u63f4",
        "\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30ca\u30eb\u30ea\u30b9\u30af\u306e\u4f4e\u6e1b",
      ],
      secondaryGroups: [
        {
          heading: "\u30d1\u30fc\u30c8\u30ca\u30fc\u30fb\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u652f\u63f4",
          items: [
            "\u6226\u7565\u7684\u30d1\u30fc\u30c8\u30ca\u30fc\u5019\u88dc\u306e\u9078\u5b9a",
            "\u5e02\u5834\u958b\u62d3\uff08Go-to-Market\uff09\u9023\u643a\u306e\u652f\u63f4",
            "\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u9023\u643a\u6226\u7565\u306e\u7b56\u5b9a",
            "\u696d\u52d9\u30fb\u6280\u8853\u8981\u4ef6\u306e\u6574\u5408\u6027\u78ba\u4fdd\u306e\u652f\u63f4",
          ],
        },
      ],
    },
  },
];

function ServiceContent({
  service,
  showDefaultLists = true,
}: {
  service: ServiceBlock;
  showDefaultLists?: boolean;
}) {
  return (
    <div>
      <h2
        id={service.id}
        className="text-[30px] font-light leading-[1.25] tracking-[-0.02em] text-navy m-0"
      >
        {service.title}
      </h2>
      <p className="mt-[16px] text-[20px] leading-[1.7] text-fg2 m-0 max-w-[52ch]">
        {service.description}
      </p>
      {showDefaultLists && (
        <>
          <div className="mt-[28px]">
            <SubListHeading>{"\u4e3b\u306a\u652f\u63f4\u9818\u57df"}</SubListHeading>
            <BulletList items={service.capabilities ?? []} />
          </div>
          <div className="mt-[24px]">
            <SubListHeading>{"\u60f3\u5b9a\u3055\u308c\u308b\u6210\u679c"}</SubListHeading>
            <BulletList items={service.outcomes ?? []} />
          </div>
        </>
      )}
    </div>
  );
}

function ServiceSection({ service }: { service: ServiceBlock }) {
  return (
    <section
      className={`py-[96px] border-b border-stroke1 ${service.altBg ? "bg-bg2" : ""}`}
      aria-labelledby={service.id}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[72px] items-start">
          {service.imageFirst ? (
            <>
              <div className="order-first lg:order-none lg:sticky lg:top-[120px]">
                <ServiceImage src={service.image} alt={service.imageAlt} />
              </div>
              <ServiceContent service={service} />
            </>
          ) : (
            <>
              <ServiceContent service={service} />
              <div className="order-first lg:order-none lg:sticky lg:top-[120px]">
                <ServiceImage src={service.image} alt={service.imageAlt} />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

const frameworkSteps = [
  "\u8a08\u753b",
  "\u5c0e\u5165",
  "\u7d71\u5408",
  "\u6700\u9069\u5316",
  "\u6210\u9577",
];

const expertiseItems = [
  {
    icon: "temple_buddhist",
    title: "\u65e5\u672c\u5e02\u5834\u306b\u304a\u3051\u308b\u5b9f\u7e3e",
    description:
      "\u65e5\u672c\u306e\u30a8\u30cd\u30eb\u30ae\u30fc\u5e02\u5834\u306b\u304a\u3044\u3066\u300110\u5e74\u4ee5\u4e0a\u306b\u308f\u305f\u308a\u4e8b\u696d\u8005\u652f\u63f4\u3092\u884c\u3063\u3066\u304d\u307e\u3057\u305f\u3002",
  },
  {
    icon: "public",
    title: "\u6d77\u5916\u5e02\u5834\u306b\u304a\u3051\u308b\u5b9f\u7e3e",
    description:
      "\u65e5\u672c\u306b\u52a0\u3048\u3001\u7c73\u56fd\u3092\u542b\u3080\u6d77\u5916\u5e02\u5834\u3067\u3082\u652f\u63f4\u5b9f\u7e3e\u304c\u3042\u308a\u307e\u3059\u3002",
  },
  {
    icon: "settings_suggest",
    title: "\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u30fb\u696d\u52d9\u77e5\u898b",
    description:
      "\u5c0e\u5165\u652f\u63f4\u304b\u3089\u30b7\u30b9\u30c6\u30e0\u9023\u643a\u3001\u696d\u52d9\u8a2d\u8a08\u3001\u4e8b\u696d\u6210\u9577\u652f\u63f4\u307e\u3067\u4e00\u8cab\u3057\u3066\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002",
  },
];

const faqs = [
  {
    q: "\u65e2\u5b58\u306e Sler \u3068\u9023\u643a\u3067\u304d\u307e\u3059\u304b\uff1f",
    a: "\u306f\u3044\u3002\u304a\u5ba2\u69d8\u304c\u6307\u5b9a\u3059\u308b Sler \u3084\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u30d1\u30fc\u30c8\u30ca\u30fc\u3068\u9023\u643a\u53ef\u80fd\u3067\u3059\u3002",
  },
  {
    q: "\u65e5\u672c\u56fd\u5916\u306e\u4f01\u696d\u306b\u3082\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u304b\uff1f",
    a: "\u306f\u3044\u3002\u65e5\u672c\u306b\u52a0\u3048\u3001\u6d77\u5916\u5e02\u5834\u3067\u4e8b\u696d\u3092\u5c55\u958b\u3059\u308b\u4f01\u696d\u3082\u652f\u63f4\u3057\u3066\u3044\u307e\u3059\u3002",
  },
  {
    q: "\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4ee5\u5916\u306e\u30a2\u30c9\u30d0\u30a4\u30b6\u30ea\u30fc\u30b5\u30fc\u30d3\u30b9\u3082\u3042\u308a\u307e\u3059\u304b\uff1f",
    a: "\u306f\u3044\u3002\u696d\u52d9\u6700\u9069\u5316\u3084\u4e8b\u696d\u6210\u9577\u3092\u652f\u63f4\u3059\u308b\u30a2\u30c9\u30d0\u30a4\u30b6\u30ea\u30fc\u30b5\u30fc\u30d3\u30b9\u3082\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",
  },
];

export default function JPServicesBetaPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] pb-[48px] lg:pt-[160px] lg:pb-[64px] border-b border-stroke1"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(0,210,162,0.06), transparent 60%), linear-gradient(to bottom, #F9F9FB 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8">
          <h1 className="text-[32px] lg:text-[48px] font-light leading-[1.3] tracking-[-0.02em] text-navy max-w-[36ch]">
            {"\u30b5\u30fc\u30d3\u30b9"}
          </h1>
          <p className="mt-[20px] text-[17px] leading-[1.75] text-fg2 max-w-[60ch]">
            {
              "\u5c0e\u5165\u30fb\u7d71\u5408\u652f\u63f4\u304b\u3089\u5e02\u5834\u62e1\u5927\u3001\u6226\u7565\u30a2\u30c9\u30d0\u30a4\u30b6\u30ea\u30fc\u307e\u3067\u3002\u30bf\u30ea\u30fc\u306f\u3001\u5909\u5316\u3059\u308b\u30a8\u30cd\u30eb\u30ae\u30fc\u5e02\u5834\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u306e\u4e8b\u696d\u6210\u9577\u3068\u696d\u52d9\u5909\u9769\u3092\u652f\u63f4\u3057\u307e\u3059\u3002"
            }
          </p>

          <div className="flex flex-wrap gap-3 mt-[32px]">
            <MarketingLink
              href="/contact"
              className={jpCtaPrimaryOnLightCompactClass}
            >
              {"\u304a\u554f\u3044\u5408\u308f\u305b"}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </MarketingLink>
          </div>
        </div>
      </section>

      {/* Support framework section */}
      <section className="bg-bg2 py-[80px] border-b border-stroke1" aria-labelledby="framework-heading">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="max-w-[720px]">
            <h2
              id="framework-heading"
              className="text-[30px] font-light leading-[1.25] tracking-[-0.02em] text-navy m-0"
            >
              {"\u304a\u5ba2\u69d8\u3078\u306e\u30b5\u30dd\u30fc\u30c8\u4f53\u5236"}
            </h2>
            <p className="mt-[16px] text-[20px] leading-[1.7] text-fg2 m-0 max-w-[52ch]">
              {
                "\u5f53\u793e\u306f\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u5c0e\u5165\u304b\u3089\u904b\u7528\u6539\u5584\u3001\u4e8b\u696d\u62e1\u5927\u307e\u3067\u3001\u304a\u5ba2\u69d8\u306e\u53d6\u308a\u7d44\u307f\u3092\u5e45\u5e83\u304f\u652f\u63f4\u3057\u307e\u3059\u3002"
              }
            </p>
          </div>

          <ol
            className="mt-[40px] flex flex-wrap items-stretch gap-[10px] list-none m-0 p-0"
            aria-label="\u8a08\u753b\u3001\u5c0e\u5165\u3001\u7d71\u5408\u3001\u6700\u9069\u5316\u3001\u6210\u9577"
          >
            {frameworkSteps.map((step, i) => (
              <li
                key={step}
                className="flex items-center gap-[10px] flex-1 min-w-[140px]"
              >
                <div className="flex-1 bg-white border border-stroke1 rounded-xl px-[18px] py-[16px] flex items-center gap-[12px] shadow-[0_2px_12px_rgba(44,54,93,0.04)]">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-turquoise/15 text-navy text-[13px] font-semibold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-semibold text-navy">{step}</span>
                </div>
                {i < frameworkSteps.length - 1 && (
                  <span
                    className="material-symbols-outlined text-fg2/60 text-[20px] hidden sm:inline"
                    aria-hidden
                  >
                    arrow_forward
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-[80px] border-b border-stroke1" aria-labelledby="section-2-heading">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="max-w-[980px]">
            <h2
              id="section-2-heading"
              className="text-[30px] font-light leading-[1.25] tracking-[-0.02em] text-navy m-0"
            >
              {"\u30b5\u30fc\u30d3\u30b9"}
            </h2>
            <p className="mt-[20px] text-[20px] leading-[1.7] text-fg2 m-0 max-w-[56ch]">
              {
                "\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u5c0e\u5165\u304b\u3089\u30b7\u30b9\u30c6\u30e0\u9023\u643a\u3001\u5e02\u5834\u5c55\u958b\u307e\u3067\u3001\u30a8\u30cd\u30eb\u30ae\u30fc\u4e8b\u696d\u8005\u306e\u6210\u9577\u3092\u652f\u63f4\u3059\u308b\u5404\u7a2e\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"
              }
            </p>
          </div>
        </div>
      </section>

      {serviceSections.map((service) =>
        service.expandableDetails ? (
          <ExpandableServiceSection
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
            imageAlt={service.imageAlt}
            imageFirst={service.imageFirst}
            altBg={service.altBg}
            compact={service.compact}
            details={service.expandableDetails}
          />
        ) : (
          <ServiceSection key={service.id} service={service} />
        ),
      )}

      <section className="py-[96px] border-b border-stroke1" aria-labelledby="experience-heading">
        <div className="max-w-[1240px] mx-auto px-8">
          <h2
            id="experience-heading"
            className="text-[30px] font-light leading-[1.25] tracking-[-0.02em] text-navy m-0"
          >
            {"\u5b9f\u7e3e\u30fb\u5c02\u9580\u6027"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[40px]">
            {expertiseItems.map((item) => (
              <div
                key={item.title}
                className="bg-bg2 border border-stroke1 rounded-xl p-[28px] flex flex-col gap-[14px] h-full"
              >
                <div className="w-10 h-10 rounded-[10px] bg-[#F0F9FF] border border-navy/[0.08] grid place-items-center text-navy">
                  <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                </div>
                <h3 className="text-[20px] font-bold leading-[1.4] text-navy m-0">
                  {item.title}
                </h3>
                <p className="text-[20px] leading-[1.7] text-fg2 m-0">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg2 py-[96px] border-b border-stroke1" aria-labelledby="faq-heading">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="mb-[40px]">
            <h2
              id="faq-heading"
              className="text-[30px] font-light leading-[1.25] tracking-[-0.02em] text-navy m-0"
            >
              {"\u3088\u304f\u3042\u308b\u3054\u8cea\u554f"}
            </h2>
          </div>

          <div className="bg-white border border-stroke1 rounded-2xl divide-y divide-stroke1">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group px-[24px] py-[20px] [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-start justify-between gap-[16px] cursor-pointer list-none text-[20px] font-semibold text-navy leading-[1.5]">
                  <span>{faq.q}</span>
                  <span
                    className="material-symbols-outlined text-[22px] text-turquoise shrink-0 transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    add
                  </span>
                </summary>
                <div className="mt-[12px] text-[20px] leading-[1.7] text-fg2">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
