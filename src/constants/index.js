import {
  clipboardTick,
  candle,
  mirror,
  clipboardText,
  plans,
  track,
  share,
  punch,
} from "@/assets";

export const jobFunctionOptions = [
  { value: "", label: "Job function" },
  { value: "Design Team", label: "Design Team" },
  { value: "Distributor", label: "Distributor" },
  { value: "General Contractor", label: "General Contractor" },
  { value: "Hardware Consultant", label: "Hardware Consultant" },
  { value: "Integrator", label: "Integrator" },
  { value: "Locksmith", label: "Locksmith" },
  { value: "Owner", label: "Owner" },
  { value: "PACS", label: "PACS" },
];

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Caribbean Netherlands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Cote d'ivoire",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Réunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export const COUNTRIES_OPTIONS = COUNTRIES.map((country) => ({
  label: country,
  value: country.toLowerCase(),
}));

COUNTRIES_OPTIONS.unshift({ value: "", label: "Country" });

export const navLinks = [
  {
    name: "Projects",
    icon: clipboardTick,
    link: "/projects",
  },
  {
    name: "Preferences",
    icon: candle,
    link: "/preferences",
  },
  {
    name: "Legal",
    icon: mirror,
    link: "/legal",
  },
  {
    name: " Notice",
    icon: clipboardText,
    link: "/notice",
  },
];

export const projects = [
  {
    id: 1,
    projectName: "Alpha",
    architect: "Skyline Designs",
    publishedDate: "27 Jan 2024",
    buildingOwner: "John Smith Holdings",
    deliverableDate: "27 Jan 2024",
    projectOwner: "John Smith",
  },
  {
    id: 2,
    projectName: "Beta",
    architect: "Urban Architects",
    publishedDate: "27 Jan 2024",
    buildingOwner: "John Smith Holdings",
    deliverableDate: "27 Jan 2024",
    projectOwner: "John Smith",
  },
  {
    id: 3,
    projectName: "Gamma",
    architect: "Horizon Studios",
    publishedDate: "27 Jan 2024",
    buildingOwner: "John Smith Holdings",
    deliverableDate: "27 Jan 2024",
    projectOwner: "John Smith",
  },
  {
    id: 4,
    projectName: "Epsilon",
    architect: "Nexus Architectural Group",
    publishedDate: "27 Jan 2024",
    buildingOwner: "John Smith Holdings",
    deliverableDate: "27 Jan 2024",
    projectOwner: "John Smith",
  },
  {
    id: 5,
    projectName: "Theta",
    architect: "Elevation Architecture",
    publishedDate: "27 Jan 2024",
    buildingOwner: "John Smith Holdings",
    deliverableDate: "27 Jan 2024",
    projectOwner: "John Smith",
  },
  {
    id: 6,
    projectName: "Iota",
    architect: "Nexus Architectural ",
    publishedDate: "27 Jan 2024",
    buildingOwner: "John Smith Holdings",
    deliverableDate: "27 Jan 2024",
    projectOwner: "John Smith",
  },
  {
    id: 7,
    projectName: "Epsilon",
    architect: "Nexus Architectural Group",
    publishedDate: "27 Jan 2024",
    buildingOwner: "John Smith Holdings",
    deliverableDate: "27 Jan 2024",
    projectOwner: "John Smith",
  },
];

export const projectTabs = [
  {
    name: "View Plans",
    count: "04",
    icon: plans,
    trending: "up",
    link: "/plans",
  },
  {
    name: "Track Changes",
    count: "10",
    icon: track,
    trending: "down",
    link: "/track",
  },
  {
    name: "Share Files",
    count: "08",
    icon: share,
    trending: "down",
    link: "/share",
  },
  {
    name: "Run Reports",
    count: "04",
    icon: clipboardTick,
    trending: "up",
    link: "/reports",
  },
  {
    name: "Punch Door",
    count: "30",
    icon: punch,
    trending: "up",
    link: "/punch-door",
  },
];

export const files = [
  {
    id: 1,
    name: "ABC ProjectABC Project - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA",
    date: "27 Jan 2024",
  },

  {
    id: 2,
    name: "ABC ProjectABC Project - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA",
    date: "27 Jan 2024",
  },

  {
    id: 3,
    name: "ABC ProjectABC Project - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA",
    date: "27 Jan 2024",
  },

  {
    id: 4,
    name: "ABC ProjectABC Project - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA",
    date: "27 Jan 2024",
  },

  {
    id: 5,
    name: "ABC ProjectABC Project - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA",
    date: "27 Jan 2024",
  },
];


export const reportTemplates = [
  {
    id: 1,
    name: "ABC ProjectABC Project - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA",
    date: "27 Jan 2024",
  },

  {
    id: 2,
    name: "ABC ProjectABC Project - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA",
    date: "27 Jan 2024",
  },

  {
    id: 3,
    name: "ABC ProjectABC Project - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA",
    date: "27 Jan 2024",
  },

  {
    id: 4,
    name: "ABC ProjectABC Project - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA",
    date: "27 Jan 2024",
  },

  {
    id: 5,
    name: "ABC ProjectABC Project - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA",
    date: "27 Jan 2024",
  },
];

export const projectReports = [
  {
    id: 1,
    name: "ABC ProjectABC-1 Project - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA-1",
    date: "27 Jan 2024",
  },

  {
    id: 2,
    name: "ABC ProjectABC-2 Project - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA-2",
    date: "27 Jan 2024",
  },

  {
    id: 3,
    name: "ABC ProjectABC-3 Project - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA-3",
    date: "27 Jan 2024",
  },

  {
    id: 4,
    name: "ABC ProjectABC-4 Project - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA-4",
    date: "27 Jan 2024",
  },

  {
    id: 5,
    name: "ABC ProjectABC-5 Project - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA-5",
    date: "27 Jan 2024",
  },
];



export const collaborators = [
  {
    id: 1,
    name: "John Smith",
    role: "Hardware",
    status: "Editor",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Hardware",
    status: "Editor",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Hardware",
    status: "Editor",
  },
  {
    id: 4,
    name: "John Smith",
    role: "Hardware",
    status: "Editor",
  },
  {
    id: 5,
    name: "John Smith",
    role: "Hardware",
    status: "Editor",
  },
];

export const overview = [
  {
    id: 1,
    title: "ABC Project",
    role: "Create Project",
    unit: "03",
    detail: "NUMBER OF Openings",
  },
  {
    id: 2,
    title: "ABC Company",
    role: "Architectural Firm",
    unit: "03",
    detail: "Bim Data - Revit?",
  },
  {
    id: 3,
    title: "ABC Project",
    role: "Create Project",
    unit: "03",
    detail: "NUMBER OF Openings",
  },
  {
    id: 4,
    title: "ABC Company",
    role: "Architectural Firm",
    unit: "03",
    detail: "Bim Data - Revit?",
  },
];

export const activityFeed = [
  {
    id: 1,
    name: "John Smith",
    date: "27 Jan 2024",
    text: "Uploaded Excel file [ABC Project - DOOR SCHEDULE (1).xlsx].",
  },
  {
    id: 2,
    name: "John Smith",
    date: "27 Jan 2024",
    text: "Uploaded Excel file [ABC Project - DOOR SCHEDULE (1).xlsx].",
  },
  {
    id: 3,
    name: "John Smith",
    date: "27 Jan 2024",
    text: "Uploaded Excel file [ABC Project - DOOR SCHEDULE (1).xlsx].",
  },
];

export const notes = [
  {
    id: 1,
    date: "APRIL 25 2024",
    note: "John Smith",
    assigned: "-",
    createdBy: "John Smith",
    createdAt: "6:40 PM",
  },
  {
    id: 2,
    date: "APRIL 25 2024",
    note: "John Smith",
    assigned: "-",
    createdBy: "John Smith",
    createdAt: "6:40 PM",
  },
  {
    id: 3,
    date: "APRIL 25 2024",
    note: "John Smith",
    assigned: "-",
    createdBy: "John Smith",
    createdAt: "6:40 PM",
  },
  {
    id: 4,
    date: "APRIL 24 2024",
    note: "John Smith",
    assigned: "-",
    createdBy: "John Smith",
    createdAt: "6:40 PM",
  },
];

export const ReportPageTabs = [
  {
    TabContent: "My report Templates"
  },
  {
    TabContent: "Project Reports"
  },
]


export const fontFamilyOptions = [
  { value: "", label: "Font Family" },
  { value: "Arial", label: "Arial" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Courier New", label: "Courier New" },
  { value: "Georgia", label: "Georgia" },
  { value: "Palatino Linotype", label: "Palatino Linotype" },
  { value: "Comic Sans MS", label: "Comic Sans MS" },
  { value: "Lucida Sans Unicode", label: "Lucida Sans Unicode" },
  { value: "Tahoma", label: "Tahoma" },
  { value: "Trebuchet MS", label: "Trebuchet MS" },
  { value: "Verdana", label: "Verdana" },
  { value: "Courier New", label: "Courier New" },
  { value: "Lucida Console", label: "Lucida Console" },
];

export const fontSizeOptions = [
  { value: "", label: "Font Size" },
  ...Array.from({ length: 100 }, (_, i) => i + 1).map((i) => ({
    value: i.toString(),
    label: i.toString(),
  })),
];

export const specificOpeningsOptions = [
  { value: "", label: "Specific Opennings" },
  ...Array.from({ length: 100 }, (_, i) => i + 1).map((i) => ({
    value: i.toString(),
    label: i.toString(),
  })),
];

export const specificProductsOptions = [
  { value: "", label: "Specific Products" },
  ...Array.from({ length: 100 }, (_, i) => i + 1).map((i) => ({
    value: i.toString(),
    label: i.toString(),
  })),
];


export const documentTypeOptions = [
  { value: "specsHardwareSets", label: "Specifications and Hardware Sets (Word, PDF)" },
  { value: "californiaDsaSpec", label: "California DSA Specification (Word, PDF)" },
  { value: "canadianHardwareSchedule", label: "Canadian Hardware Schedule (Word, PDF)" },
  { value: "catalogCuts", label: "Catalog Cuts (PDF)" },
  { value: "doorByDoorSchedule", label: "Door by Door Schedule (Word)" },
  { value: "doorHardwareInstallEstimate", label: "Door Hardware Installation Estimate (Excel)" },
  { value: "doorScheduleExcel", label: "Door Schedule (Excel)" },
  { value: "doorScheduleWordPdf", label: "Door Schedule (Word, PDF)" },
  { value: "doorHardwareSetIndex", label: "Door/Hardware Set Index (Word, PDF)" },
  { value: "doorHardwareSetIndexRevRecap", label: "Door/Hardware Set Index Revision Recap (Word, PDF)" },
  { value: "electronicDataSummary", label: "Electronic Data Summary (Excel)" },
  { value: "hardwareScheduleWithPricingExcel", label: "Hardware Schedule with Pricing (Excel)" },
  { value: "hardwareScheduleWithPricingWordPdf", label: "Hardware Schedule with Pricing (Word, PDF)" },
  { value: "hardwareSetsRevRecap", label: "Hardware Sets Revision Recap (Word, PDF)" },
  { value: "horizontalSchedule", label: "Horizontal Schedule (Excel)" },
  { value: "installationSession", label: "Installation Session (Word)" },
  { value: "notes", label: "Notes (Excel)" },
  { value: "preConstructionQuantity", label: "Pre-construction Quantity (Excel)" },
  { value: "pricingRecapByProduct", label: "Pricing Recap by Product (Excel)" },
  { value: "productSummary", label: "Product Summary (Word)" },
  { value: "promasterExportDoorHardwareList", label: "Promaster Export - Door Hardware List (Excel)" },
  { value: "promasterExportDoorList", label: "Promaster Export - Door List (Excel)" },
  { value: "promasterExportQuoteProductsList", label: "Promaster Export - Quote Products List (Excel)" },
  { value: "punchList", label: "Punch List (Word)" },
  { value: "quantitySummary", label: "Quantity Summary (Excel)" },
  { value: "siteSurvey", label: "Site Survey (Word)" }
];


export const reportHardwareSets = [
  { name: 'showQuantity', label: 'Show Quantity' },
  { name: 'hardwareLabel', label: 'HardwareSet Number Label' },
  { name: 'showUoM', label: 'show UoM' },
  { name: 'showDescription', label: 'Show Description' },
  { name: 'showCatalogNumber', label: 'Show Catalog Number' },
  { name: 'userDescription', label: 'User Description' },
  { name: 'showCoordinateId', label: 'Show CoordinateId' },
  { name: 'ShowFinish', label: 'Show Finish' },
  { name: 'showManufacturer', label: 'Show Manufacturer' },
  { name: 'comments', label: 'Comments' },
  { name: 'includeCutSheetLink', label: 'Include Cut Sheet Link' },
  { name: 'includeOperation', label: 'Include Operation' },
  { name: 'endSchedule', label: 'End of Schedule' },
  { name: 'remarks', label: 'Remarks' },
  { name: 'userCatalogNumber', label: 'User Catalog Number' },
  { name: 'includeManufacturers', label: 'Include Table of Manufacturers' },
]

export const reportHeaderFooterSets = [
  { name: 'pageHeader', label: 'Page header' },
  { name: 'pageFooter', label: 'Page footer' },
  { name: 'tableHeader', label: 'Table header' },
]

export const reportSpecificationsSets = [
  { name: 'pageHeader', label: 'Page header' },
  { name: 'pageFooter', label: 'Page footer' },
  { name: 'tableHeader', label: 'Table header' },
]