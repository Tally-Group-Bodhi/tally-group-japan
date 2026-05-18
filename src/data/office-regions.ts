export type Office = {
  city: string;
  building?: string;
  street: string;
  suburb: string;
  statePostcode: string;
  email: string;
};

export type OfficeRegion = {
  id: string;
  name: string;
  offices: Office[];
};

export const officeRegions: OfficeRegion[] = [
  {
    id: "australia",
    name: "Australia",
    offices: [
      {
        city: "Melbourne",
        street: "11-13 Cubitt St",
        suburb: "Cremorne",
        statePostcode: "VIC 3121",
        email: "enquiries@tally-group.com",
      },
      {
        city: "Brisbane",
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
    offices: [
      {
        city: "Auckland",
        building: "Level 11",
        street: "56 Cawley Street",
        suburb: "Ellerslie",
        statePostcode: "Auckland 1051",
        email: "enquiries@tally-group.com",
      },
      {
        city: "Christchurch",
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
    offices: [
      {
        city: "Houston",
        street: "1450 Lake Robbins Drive, Suite 160",
        suburb: "The Woodlands",
        statePostcode: "TX 77380",
        email: "retailenergy@tally-group.com",
      },
      {
        city: "Atlanta",
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
    offices: [
      {
        city: "Tokyo",
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
    offices: [
      {
        city: "Dubai",
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
    offices: [
      {
        city: "Hyderabad",
        building: "Block 1, Cyber Pearl",
        street: "Hitech City, Madhapur",
        suburb: "Hyderabad",
        statePostcode: "Telangana 500081",
        email: "enquiries@tally-group.com",
      },
      {
        city: "Bangalore",
        building: 'No.112, 2nd Floor, "B" Block, AKR Tech Park',
        street: "7th Mile Hosur Rd, Kudlu Gate",
        suburb: "Bengaluru",
        statePostcode: "Karnataka 560068",
        email: "enquiries@tally-group.com",
      },
    ],
  },
];
