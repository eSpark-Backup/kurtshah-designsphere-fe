export const columns = () => {
  return [
    { name: "Project Name", key: "name", left: true },
    { name: "Architect (Firm)", key: "companyName", left: true },
    { name: "Published Date", key: "publishDate", left: true, date: true },
    { name: "Building Owner", key: "buildingOwner", left: true },
    { name: "Deliverable Date", key: "deviverableDate", chip: true, date: true },
    { name: "Project Owner", key: "ownerName", left: true },
    {
      name: "",
      key: "action",
      right: true,
      hideDownload: true,
      hideEdit: true,
      hideDelete: true,
    },
  ];
};
