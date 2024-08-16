"use client";
import { filter, light } from "@/assets";
import { columns } from "@/columns/ByOpenings";
import {
  ByHardware,
  DirectoryController,
  Dropdown,
  DynamicTable,
  ProgressBar,
  Tabs,
} from "@/components/common";
import {
  ByOpeningsTableData,
  projects,
  trackChangesDropDownOptions,
  trackChangesDropDownOptions2,
  TrackChangesTabs,
} from "@/constants";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Track = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(0);

  const TabHandler = (tab) => {
    setActiveTab(tab);
  };

  const [directory, setDirectory] = useState({
    name: "",
    link: [],
  });

  const [dropDowns, setDropDowns] = useState({
    early: "",
    latest: "",
  });

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setDropDowns((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const id = pathname.split("/")[2];
    const { projectName } = projects.find((item) => item.id == id);
    setDirectory({
      name: projectName,
      link: ["Project", "/", projectName, "/", "Reports"],
    });
  }, [pathname]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "30px",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        gap={2}
      >
        <DirectoryController title={directory.name} links={directory.link} />
        <ProgressBar
          title="Getting Started"
          desc="Complete your project"
          perc={28}
        />
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          rowGap: "10px",
        }}
      >
        <Typography variant="h2">Track Changes</Typography>
        <Box
          sx={{
            display: "flex",
            columnGap: "10px",
            alignItems: { sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            rowGap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              columnGap: "4px",
            }}
          >
            <Image src={filter} width={32} height={32} alt="Filter" />
            <Box
              sx={{
                width: "32px !important",
                height: "32px",
                borderRadius: "10px",
                background:
                  "linear-gradient(180deg, #547CD3 0%, #6191FD 100%)",
                border: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={light} width={18} height={18} alt="Icon" />
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "45%", md: "200px" },
              background: "linear-gradient(180deg, #547CD3 0%, #6191FD 100%)",
              borderRadius: "12px",
            }}
          >
            <Dropdown
              value={dropDowns.early}
              onChange={handleDropdownChange}
              options={trackChangesDropDownOptions}
              name="early"
              simple={true}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "45%", md: "200px" },
              background: "linear-gradient(180deg, #547CD3 0%, #6191FD 100%)",
              borderRadius: "12px",
            }}
          >
            <Dropdown
              value={dropDowns.latest}
              onChange={handleDropdownChange}
              options={trackChangesDropDownOptions2}
              name="latest"
              simple={true}
            />
          </Box>
        </Box>
      </Box>
      <Tabs
        tabs={TrackChangesTabs}
        TabHandler={TabHandler}
        activeTab={activeTab}
      />
      {activeTab === 0 ? <DynamicTable
        data={ByOpeningsTableData}
        columns={columns()}
        isLoading={false}
        total={ByOpeningsTableData.length}
        handlePageChange={handlePageChange}
        page={page}
        pagination
      /> : <ByHardware />}
    </Box>
  );
};

export default Track;
