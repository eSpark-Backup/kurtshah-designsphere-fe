export const columns = () => {
  return [
    { name: "Project Name", key: "projectName", left: true },
    { name: "Architect (Firm)", key: "architect", left: true },
    { name: "Published Date", key: "publishedDate", left: true },
    { name: "Building Owner", key: "buildingOwner", left: true },
    { name: "Deliverable Date", key: "deliverableDate", chip: true },
    { name: "Project Owner", key: "projectOwner", left: true },
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
