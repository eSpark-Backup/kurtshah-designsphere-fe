"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import {
  DirectoryController,
  DynamicTable,
  ProgressBar,
  Searchbar,
} from "@/components/common";
import {
  planDetails,
  projects,
  plansDetailsTableTabs,
  tableNav,
  canvasNav,
} from "@/constants";
import { columns } from "@/columns/planDetails";
import { rightArrow, leftArrow, map } from "@/assets";

const PlansDetails = () => {
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState(0);
  const [expandTab, setExpandTab] = useState(false);
  const [expandCanvas, setExpandCanvas] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(0);
  const [directory, setDirectory] = useState({
    name: "",
    link: [],
  });

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const id = pathname.split("/")[2];
    const { projectName } = projects.find((item) => item.id == id);
    setDirectory({ name: projectName, link: ["Project", "/", projectName] });
  }, [pathname]);

  const handleExpandTable = () => setExpandTab(!expandTab);
  const handleExpandCanvas = () => setExpandCanvas(!expandCanvas);

  const handleSearch = (val) => {
    setSearchValue(val);
  };

  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        marginTop={1}
        gap={2}
      >
        <DirectoryController title={directory.name} links={directory.link} />
        <ProgressBar
          title="Getting Started "
          desc="Complete your project"
          perc={28}
        />
      </Stack>

      <Grid mt={2} container spacing={2}>
        <Grid
          sx={{ display: expandCanvas ? "none" : "block" }}
          container
          item
          xs={12}
          md={expandTab ? 12 : 4}
        >
          <Grid item xs={12} md={expandTab ? 4 : 12}>
            <Stack
              direction="row"
              justifyContent={{ xs: "space-between", sm: "center" }}
              alignItems="center"
              gap={2}
              flexWrap={{ xs: "wrap", sm: "nowrap" }}
            >
              {tableNav(handleExpandTable, searchValue, handleSearch).map(
                (item, index) => {
                  return item?.input ? (
                    <Searchbar
                      key={index}
                      value={item.value}
                      handleSearch={item.handleSearch}
                    />
                  ) : (
                    <Button
                      key={index}
                      onClick={item.onClick}
                      sx={{
                        borderRadius: "10px !important",
                        minWidth: "32px",
                        width: "32px",
                        height: "32px",
                        order: { xs: 1, sm: 0 },
                      }}
                      variant="primary"
                    >
                      <Image src={item.icon} alt="expand" />
                    </Button>
                  );
                }
              )}
            </Stack>
            <Stack
              mt={2}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={1}
              sx={{
                overflowX: "auto",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {plansDetailsTableTabs.map((tab, index) => {
                return (
                  <Box
                    onClick={() => setActiveTab(index)}
                    sx={{
                      minWidth: "max-content",
                      cursor: "pointer",
                      padding: "10px 24px",
                      borderRadius: "12px",
                      border:
                        activeTab === index
                          ? "1px solid transparent"
                          : "1px solid #8B8B8B24",
                      background:
                        activeTab === index
                          ? "linear-gradient(180deg, #547CD3 0%, #6191FD 100%)"
                          : "transparent",
                    }}
                    key={tab}
                  >
                    <Typography variant="h5" color="#fff">
                      {tab}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <DynamicTable
              data={planDetails}
              columns={columns()}
              isLoading={false}
              total={planDetails.length}
              handlePageChange={handlePageChange}
              page={page}
              pagination
              paginationCenter
            />
          </Grid>
        </Grid>
        <Grid
          sx={{ display: expandTab ? "none" : "block" }}
          item
          xs={12}
          md={expandCanvas ? 12 : 8}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            <Stack
              direction="row"
              justifyContent={{ xs: "center", sm: "space-between" }}
              alignItems="center"
              flexWrap={{ xs: "wrap", sm: "nowrap" }}
              gap={1}
            >
              <Button
                sx={{
                  borderRadius: "12px !important",
                  minWidth: "40px",
                  width: "40px",
                  height: "40px",
                }}
                variant="primary"
              >
                <Image src={leftArrow} alt="arrow" />
              </Button>
              <Button
                sx={{
                  borderRadius: "12px !important",
                  minWidth: "max-content",
                  width: "max-content",
                  height: "40px",
                }}
                variant="primary"
              >
                1 Model (1 of 1)
              </Button>
              <Button
                sx={{
                  borderRadius: "12px !important",
                  minWidth: "40px",
                  width: "40px",
                  height: "40px",
                }}
                variant="primary"
              >
                <Image src={rightArrow} alt="arrow" />
              </Button>
              <Button
                sx={{
                  borderRadius: "12px !important",
                  minWidth: "max-content",
                  width: "max-content",
                  height: "40px",
                }}
                variant="primary"
              >
                Plan Tools
              </Button>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              {canvasNav(handleExpandCanvas).map((item, index) => {
                return (
                  <Button
                    key={index + 1}
                    onClick={item.onClick}
                    sx={{
                      borderRadius: "10px !important",
                      minWidth: "32px",
                      width: "32px",
                      height: "32px",
                    }}
                    variant="primary"
                  >
                    <Image src={item.icon} alt="expand" />
                  </Button>
                );
              })}
            </Stack>
          </Stack>
          <Typography
            variant="h5"
            sx={{ fontSize: "16px !important", mt: 1 }}
          >
            Aprial 25 2024
          </Typography>
          <Box sx={{ padding: "30px", width: "80%", margin: "8px auto 0" }}>
            <Image
              width={0}
              height={0}
              style={{ width: "100% !important", height: "auto !important" }}
              src={map}
              alt="map"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlansDetails;
