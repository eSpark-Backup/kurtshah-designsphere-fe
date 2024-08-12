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
