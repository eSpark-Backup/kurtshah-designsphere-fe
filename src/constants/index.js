import {
  clipboardTick,
  candle,
  mirror,
  clipboardText,
  plans,
  track,
  share,
  punch,
  back,
  grid,
  copy,
  reload,
  verticleDots,
  expand,
  maximize,
  square3,
  zoomIn,
  zoomOut,
  add,
  theme1,
  theme2,
  theme3,
  theme4,
  theme5,
  theme6,
  theme7,
  theme8,
  theme9,
  theme10,
  theme11,
  theme12,
  theme13,
  theme14,
  theme15,
  theme16,
  theme17,
  theme18,
  theme19,
  theme20,
  theme21,
  theme22,
} from "@/assets";
import { padZero } from "@/utils";

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

export const projectTabs = (planCount) => [
  {
    name: "View Plans",
    count: padZero(planCount),
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
    name: "ABC ProjectABC-1 Templates - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA-1",
    date: "27 Jan 2024",
  },

  {
    id: 2,
    name: "ABC ProjectABC-2 Templates - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA-2",
    date: "27 Jan 2024",
  },

  {
    id: 3,
    name: "ABC ProjectABC-3 Templates - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA-3",
    date: "27 Jan 2024",
  },

  {
    id: 4,
    name: "ABC ProjectABC-4 Templates - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA-4",
    date: "27 Jan 2024",
  },

  {
    id: 5,
    name: "ABC ProjectABC-5 Templates - DOOR SCHEDULE (1).xlsx",
    description: "kdhasbgdhhdjawjddsiYDGA-5",
    date: "27 Jan 2024",
  },
];

export const plansData = [
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
  }
]

export const ByOpeningsTableData = [
  {
    status: "Modified",
    door: "01",
    activeDeg: "Undefined",
    activeLeafWidth: "wall Undefined",
    area: "Undefined",
    building: "Undefined",
    doorType: "Undefined",
    frame: "Undefined",
    file: "Undefined",
    wall: "Undefined"
  },
  {
    status: "Modified",
    door: "01",
    activeDeg: "Undefined",
    activeLeafWidth: "wall Undefined",
    area: "Undefined",
    building: "Undefined",
    doorType: "Undefined",
    frame: "Undefined",
    file: "Undefined",
    wall: "Undefined"
  },
  {
    status: "Modified",
    door: "01",
    activeDeg: "Undefined",
    activeLeafWidth: "wall Undefined",
    area: "Undefined",
    building: "Undefined",
    doorType: "Undefined",
    frame: "Undefined",
    file: "Undefined",
    wall: "Undefined"
  },
  {
    status: "Modified",
    door: "01",
    activeDeg: "Undefined",
    activeLeafWidth: "wall Undefined",
    area: "Undefined",
    building: "Undefined",
    doorType: "Undefined",
    frame: "Undefined",
    file: "Undefined",
    wall: "Undefined"
  },
  {
    status: "Modified",
    door: "01",
    activeDeg: "Undefined",
    activeLeafWidth: "wall Undefined",
    area: "Undefined",
    building: "Undefined",
    doorType: "Undefined",
    frame: "Undefined",
    file: "Undefined",
    wall: "Undefined"
  },
  {
    status: "Modified",
    door: "01",
    activeDeg: "Undefined",
    activeLeafWidth: "wall Undefined",
    area: "Undefined",
    building: "Undefined",
    doorType: "Undefined",
    frame: "Undefined",
    file: "Undefined",
    wall: "Undefined"
  },
]


export const fontFamilyOptions = [
  { value: "", label: "Select" },
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
  { value: "", label: "Specific Openings" },
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
  { value: "", label: "Select" },
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
  { name: 'projectId', label: 'Include Project ID#, Allegion ID# & Version Number' },
  { name: 'excludeZero', label: 'Exclude Leading Zeros in Opngs and HWSets' },
  { name: 'projectName', label: 'Project Name' },
]
export const trackChangesDropDownOptions = [
  { value: "", label: "Earliest Version" },
  { value: "ver1", label: "version 1" },
  { value: "ver2", label: "version 2" },
  { value: "ver3", label: "version 3" },
]
export const trackChangesDropDownOptions2 = [
  { value: "", label: "Latest Version" },
  { value: "ver1", label: "version 1" },
  { value: "ver2", label: "version 2" },
  { value: "ver3", label: "version 3" },
]


export const TrackChangesTabs = [
  {
    // id: 1,
    TabContent: "View Changes by openings"
  },
  {
    // id: 2,
    TabContent: "view changes by hardware"
  },
]


export const ByHardwareTable1Content = [
  {
    status: "Modified",
    quantity: "1",
    uom: "EA",
    description: "-",
    catalog: "-",
    finish: "630",
    mfr: "LOC"
  },
  {
    status: "Modified",
    quantity: "1",
    uom: "EA",
    description: "-",
    catalog: "-",
    finish: "630",
    mfr: "LOC"
  },
]

export const FieldsModalCheckboxes = [
  {
    name: "DoorNumber",
    label: "Door Number"
  },
  {
    name: "ActiveDegree",
    label: "Active Degree",
    bold: true
  },
  {
    name: "ActiveLeafWidth",
    label: "Active Leaf Width",
    bold: true
  },
  {
    name: "ActiveStopCondition",
    label: "Active Stop Condition"
  },
  {
    name: "Area",
    label: "Area",
    bold: true
  },
  {
    name: "Building",
    label: "Building",
    bold: true
  },
  {
    name: "DesignOption",
    label: "Design Option"
  },
  {
    name: "DoorBottomRail",
    label: "Door Bottom Rail"
  },
  {
    name: "DoorCare",
    label: "Door Care"
  },
  {
    name: "DoorEdge",
    label: "Door Edge"
  },
  {
    name: "DoorElevation",
    label: "Door Elevation"
  },
  {
    name: "DoorFace",
    label: "Door Face"
  },
  {
    name: "DoorGuage",
    label: "Door Guage"
  },
  {
    name: "DoorHingeStile",
    label: "Door Hinge Stile"
  },
  {
    name: "DoorLockStile",
    label: "Door Lock Stile"
  },
  {
    name: "DoorMaterial",
    label: "Door Material"
  },
  {
    name: "DoorMillRail",
    label: "Door Mill Rail"
  },
  {
    name: "DoorPanelType",
    label: "Door Panel Type"
  },
  {
    name: "DoorSeries",
    label: "Door Series"
  },
  {
    name: "DoorTopRail",
    label: "Door Top Rail"
  },
  {
    name: "DoorType",
    label: "Door Type"
  },
  {
    name: "DoorUndercut",
    label: "Door Undercut"
  },
  {
    name: "Facility",
    label: "Facility"
  },
  {
    name: "FrameAnchor",
    label: "Frame Anchor"
  },
  {
    name: "FrameConfiguration",
    label: "Frame Configuration"
  },
  {
    name: "FrameConstruction",
    label: "Frame Construction"
  },
  {
    name: "FrameDepth",
    label: "Frame Depth"
  },
  {
    name: "FrameElevation",
    label: "Frame Elevation"
  },
  {
    name: "FrameFace",
    label: "Frame Face"
  },
  {
    name: "FrameFace",
    label: "Frame Face"
  },
  {
    name: "FrameGauge",
    label: "Frame Gauge"
  },
  {
    name: "FrameMaterial",
    label: "Frame Material"
  },
  {
    name: "FrameHeadHeight",
    label: "Frame Head Height"
  },
  {
    name: "FrameSeries",
    label: "Frame Series"
  },
  {
    name: "FrameType",
    label: "Frame Type"
  },
  {
    name: "HardwareSetNumber",
    label: "Hardware Set Number"
  },
  {
    name: "HeadDetail",
    label: "Head Detail"
  },
  {
    name: "Height",
    label: "Height"
  },
  {
    name: "Hand",
    label: "Hand"
  },

  {
    name: "HingeJambDetail",
    label: "Hinge Jamb Detail"
  },
  {
    name: "InactiveDegree",
    label: "Inactive Degree"
  },
  {
    name: "InactiveLeafWidth",
    label: "Inactive Leaf Width"
  },

  {
    name: "InactiveStopCondition",
    label: "Inactive Stop Condition"
  },
  {
    name: "Information",
    label: "Information"
  },
  {
    name: "InsideRoomName",
    label: "Inside Room Name"
  },

  {
    name: "InsideRoomNumber",
    label: "Inside Room Number"
  },
  {
    name: "IsLeadLined",
    label: "Is Lead Lined"
  },
  {
    name: "IsTemperateRise",
    label: "Is Temperate Rise"
  },

  {
    name: "KeySetSymbol",
    label: "Key Set Symbol"
  },
  {
    name: "Level",
    label: "Level"
  },
  {
    name: "MarkNumber",
    label: "Mark Number"
  },

  {
    name: "Misc1",
    label: "Misc1"
  },
  {
    name: "Misc2",
    label: "Misc2"
  },
  {
    name: "Misc3",
    label: "Misc3"
  },

  {
    name: "Mode",
    label: "Mode"
  },
  {
    name: "OutsideRoomName",
    label: "Outside Room Name"
  },
  {
    name: "OutsideRoomNumber",
    label: "Outside Room Number"
  },
  {
    name: "Phase",
    label: "Phase"
  },
  {
    name: "Quantity",
    label: "Quantity"
  },
  {
    name: "Roting",
    label: "Roting"
  },
  {
    name: "Remarks",
    label: "Remarks"
  },
  {
    name: "RevisionTag",
    label: "Revision Tag"
  },
  {
    name: "RoomUsage",
    label: "Room Usage"
  },
  {
    name: "Scratch",
    label: "Scratch"
  },
  {
    name: "SillDetail",
    label: "Sill Detail"
  },
  {
    name: "SpaceType",
    label: "Space Type"
  },
  {
    name: "StcRating",
    label: "Stc Rating"
  },
  {
    name: "StormLabel",
    label: "Storm Label"
  },
  {
    name: "StrikeJambDetail",
    label: "Strike Jamb Detail"
  },
  {
    name: "SwingType",
    label: "Swing Type"
  },
  {
    name: "Thickness",
    label: "Thickness"
  },
  {
    name: "TransomBarFaceDimension",
    label: "Transom Bar Face Dimension"
  },
  {
    name: "TransomHeight",
    label: "Transom Height"
  },
  {
    name: "Transom",
    label: "Transom"
  },
  {
    name: "WallRating",
    label: "Wall Rating"
  },
  {
    name: "Width",
    label: "Width"
  }
]


export const hardwareCheckboxes = [
  {
    name: "Status",
    label: "Status"
  },
  {
    name: "Comments",
    label: "Comments"
  },
  {
    name: "Mode",
    label: "Mode"
  },
  {
    name: "Electrified",
    label: "Electrified"
  },
  {
    name: "Remarks",
    label: "Remarks"
  },
]
export const planDetails = [
  {
    id: 1,
    door: "DOOR",
    hwSet: "HW SET",
    rating: "RATING",
    wallRating: "WALL RATING",
    insideRoom: "INSIDE ROOM",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
  },
  {
    id: 2,
    door: "DOOR",
    hwSet: "HW SET",
    rating: "RATING",
    wallRating: "WALL RATING",
    insideRoom: "INSIDE ROOM",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
  },
  {
    id: 3,
    door: "DOOR",
    hwSet: "HW SET",
    rating: "RATING",
    wallRating: "WALL RATING",
    insideRoom: "INSIDE ROOM",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
  },
  {
    id: 4,
    door: "DOOR",
    hwSet: "HW SET",
    rating: "RATING",
    wallRating: "WALL RATING",
    insideRoom: "INSIDE ROOM",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
  },
  {
    id: 5,
    door: "DOOR",
    hwSet: "HW SET",
    rating: "RATING",
    wallRating: "WALL RATING",
    insideRoom: "INSIDE ROOM",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
  },
  {
    id: 6,
    door: "DOOR",
    hwSet: "HW SET",
    rating: "RATING",
    wallRating: "WALL RATING",
    insideRoom: "INSIDE ROOM",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
  },
  {
    id: 7,
    door: "DOOR",
    hwSet: "HW SET",
    rating: "RATING",
    wallRating: "WALL RATING",
    insideRoom: "INSIDE ROOM",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
  },
  {
    id: 8,
    door: "DOOR",
    hwSet: "HW SET",
    rating: "RATING",
    wallRating: "WALL RATING",
    insideRoom: "INSIDE ROOM",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
  },
  {
    id: 9,
    door: "DOOR",
    hwSet: "HW SET",
    rating: "RATING",
    wallRating: "WALL RATING",
    insideRoom: "INSIDE ROOM",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
  },
  {
    id: 10,
    door: "DOOR",
    hwSet: "HW SET",
    rating: "RATING",
    wallRating: "WALL RATING",
    insideRoom: "INSIDE ROOM",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
    wallRating: "WALL RATING",
  },
];

export const noPlanData = [
  {
    door: 1,
    hwSet: "OSETA",
    rating: "-",
    wallRating: "-",
    insideRoom: "",
    outsideRoom: "",
    width: "36",
    height: "84",
    doorMalt: "HMF",
    frameMalt: "SGL",
    remarks: "",
    note: "",
    doorType: "",
    frameType: "",
    mode: "HMF",
  },
  {
    door: 2,
    hwSet: "OSETA",
    rating: "-",
    wallRating: "-",
    insideRoom: "",
    outsideRoom: "",
    width: "36",
    height: "84",
    doorMalt: "HMF",
    frameMalt: "SGL",
    remarks: "",
    note: "",
    doorType: "",
    frameType: "",
    mode: "HMF",
  },
  {
    door: 3,
    hwSet: "OSETA",
    rating: "-",
    wallRating: "-",
    insideRoom: "",
    outsideRoom: "",
    width: "36",
    height: "84",
    doorMalt: "HMF",
    frameMalt: "SGL",
    remarks: "",
    note: "",
    doorType: "",
    frameType: "",
    mode: "HMF",
  },
];

export const plansDetailsTableTabs = ["Openings", "Hardware Set", "Notes", "Products"];

export const tableNav = (handleExpandTable, searchValue, handleSearch) => [
  {
    icon: back,
    onClick: null,
  },
  {
    icon: grid,
    onClick: null,
  },
  {
    icon: copy,
    onClick: null,
  },
  {
    input: true,
    value: searchValue,
    handleSearch,
  },
  {
    icon: reload,
    onClick: null,
  },
  {
    icon: verticleDots,
    onClick: null,
  },
  {
    icon: expand,
    onClick: handleExpandTable,
  },
];

export const canvasNav = (handleExpandCanvas) => [
  {
    icon: maximize,
    onClick: handleExpandCanvas,
  },
  {
    icon: square3,
    onClick: null,
  },
  {
    icon: zoomIn,
    onClick: null,
  },
  {
    icon: zoomOut,
    onClick: null,
  },
  {
    icon: add,
    onClick: null,
  },
];


export const legalPageContent = [
  {
    heading: "Terms Of Use",

  }, {
    heading: "Privacy Policy"
  }
]

export const collaboratorsData = [
  {
    id: 1,
    name: "John Smith",
    email: "Johnsmith@gmail.com"
  },
  {
    id: 1,
    name: "John Smith",
    email: "Johnsmith@gmail.com"
  },
  {
    id: 1,
    name: "John Smith",
    email: "Johnsmith@gmail.com"
  },
  {
    id: 2,
    name: "John Smith",
    email: "Johnsmith@gmail.com"
  },
  {
    id: 3,
    name: "John Smith",
    email: "Johnsmith@gmail.com"
  },
  {
    id: 4,
    name: "John Smith",
    email: "Johnsmith@gmail.com"
  },
  {
    id: 5,
    name: "John Smith",
    email: "Johnsmith@gmail.com"
  },
]


export const fontFamiliesRichEditor = [
  {
    value: 'Arial',
    label: 'Arial',
  },
  {

    value: 'Courier New',
    label: 'Courier New',
  },
  {

    value: 'Georgia',
    label: 'Georgia',

  },
  {

    value: 'Times New Roman',
    label: 'Times New Roman',
  },
  {

    value: 'Verdana',
    label: 'Verdana',
  }
];

export const themes = [
  {
    id: 1,
    name: "theme-1",
    icon: theme1,
    mode: "light",
  },
  {
    id: 2,
    name: "theme-2",
    icon: theme2,
    mode: "light",
  },
  {
    id: 3,
    name: "theme-3",
    icon: theme3,
    mode: "light",
  },
  {
    id: 4,
    name: "theme-4",
    icon: theme4,
    mode: "light",
  },
  {
    id: 5,
    name: "theme-5",
    icon: theme5,
    mode: "light",
  },
  {
    id: 6,
    name: "theme-6",
    icon: theme6,
    mode: "light",
  },
  {
    id: 7,
    name: "theme-7",
    icon: theme7,
    mode: "dark",
  },
  {
    id: 8,
    name: "theme-8",
    icon: theme8,
    mode: "dark",
  },
  {
    id: 9,
    name: "theme-9",
    icon: theme9,
    mode: "dark",
  },
  {
    id: 10,
    name: "theme-10",
    icon: theme10,
    mode: "dark",
  },
  {
    id: 11,
    name: "theme-11",
    icon: theme11,
    mode: "dark",
  },
  {
    id: 12,
    name: "theme-12",
    icon: theme12,
    mode: "dark",
  },
  {
    id: 13,
    name: "theme-13",
    icon: theme13,
    mode: "dark",
  },
  {
    id: 14,
    name: "theme-14",
    icon: theme14,
    mode: "dark",
  },
  {
    id: 15,
    name: "theme-15",
    icon: theme15,
    mode: "dark",
  },
  {
    id: 16,
    name: "theme-16",
    icon: theme16,
    mode: "dark",
  },
  {
    id: 17,
    name: "theme-17",
    icon: theme17,
    mode: "dark",
  },
  {
    id: 18,
    name: "theme-18",
    icon: theme18,
    mode: "dark",
  },
  {
    id: 19,
    name: "theme-19",
    icon: theme19,
    mode: "dark",
  },
  {
    id: 20,
    name: "theme-20",
    icon: theme20,
    mode: "dark",
  },
  {
    id: 21,
    name: "theme-21",
    icon: theme21,
    mode: "dark",
  },
  {
    id: 22,
    name: "theme-22",
    icon: theme22,
    mode: "dark",
  },
];

export const authApiVaraibles = {
  grant_type: "emailpassword",
  client_id: "designsphereapp",
  client_secret: "mysecret",
  scope: "openid profile offline_access ds_mainapiscope IdentityServerApi"
};