export type Office = {
  city: string;
  cityJa?: string;
  building?: string;
  street: string;
  suburb: string;
  statePostcode: string;
  email: string;
};

export type OfficeRegion = {
  id: string;
  name: string;
  nameJa?: string;
  offices: Office[];
};

export const officeRegions: OfficeRegion[] = [
  {
    id: "australia",
    name: "Australia",
    nameJa: "オーストラリア",
    offices: [
      {
        city: "Melbourne",
        cityJa: "メルボルン",
        street: "11-13 Cubitt St",
        suburb: "Cremorne",
        statePostcode: "VIC 3121",
        email: "enquiries@tally-group.com",
      },
      {
        city: "Brisbane",
        cityJa: "ブリスベン",
        building: "Level 1, North Tower",
        street: "527 Gregory Terrace",
        suburb: "Fortitude Valley",
        statePostcode: "Queensland 4006",
        email: "enquiries@tally-group.com",
      },
    ],
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    nameJa: "ニュージーランド",
    offices: [
      {
        city: "Auckland",
        cityJa: "オークランド",
        building: "Level 11",
        street: "56 Cawley Street",
        suburb: "Ellerslie",
        statePostcode: "Auckland 1051",
        email: "enquiries@tally-group.com",
      },
      {
        city: "Christchurch",
        cityJa: "クライストチャーチ",
        street: "146A Lichfield Street",
        suburb: "Christchurch Central City",
        statePostcode: "Christchurch 8011",
        email: "enquiries@tally-group.com",
      },
    ],
  },
  {
    id: "north-america",
    name: "North America",
    nameJa: "北米",
    offices: [
      {
        city: "Houston",
        cityJa: "ヒューストン",
        street: "1450 Lake Robbins Drive, Suite 160",
        suburb: "The Woodlands",
        statePostcode: "TX 77380",
        email: "retailenergy@tally-group.com",
      },
      {
        city: "Atlanta",
        cityJa: "アトランタ",
        street: "5815 Windward Pkwy, Suite 302",
        suburb: "Alpharetta",
        statePostcode: "GA 30005",
        email: "retailenergy@tally-group.com",
      },
    ],
  },
  {
    id: "japan",
    name: "Japan",
    nameJa: "日本",
    offices: [
      {
        city: "Tokyo",
        cityJa: "東京",
        building: "Marunouchi Nijubashi Building, 2nd Floor",
        street: "3-2-2 Marunouchi, Chiyoda-ku",
        suburb: "Tokyo",
        statePostcode: "100-0005",
        email: "energy.zn@tally-group.com",
      },
    ],
  },
  {
    id: "uae",
    name: "UAE",
    nameJa: "アラブ首長国連邦",
    offices: [
      {
        city: "Dubai",
        cityJa: "ドバイ",
        building: "Office 2402A, Tower A",
        street: "Business Central Towers",
        suburb: "Dubai",
        statePostcode: "UAE",
        email: "anuj.sahrawat@tally-group.com",
      },
    ],
  },
  {
    id: "india",
    name: "India",
    nameJa: "インド",
    offices: [
      {
        city: "Hyderabad",
        cityJa: "ハイデラバード",
        building: "Block 1, Cyber Pearl",
        street: "Hitech City, Madhapur",
        suburb: "Hyderabad",
        statePostcode: "Telangana 500081",
        email: "enquiries@tally-group.com",
      },
      {
        city: "Bangalore",
        cityJa: "バンガロール",
        building: 'No.112, 2nd Floor, "B" Block, AKR Tech Park',
        street: "7th Mile Hosur Rd, Kudlu Gate",
        suburb: "Bengaluru",
        statePostcode: "Karnataka 560068",
        email: "enquiries@tally-group.com",
      },
    ],
  },
];
