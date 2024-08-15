"use client";

import { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DirectoryController, DynamicModal, DynamicTable, ProgressBar } from "@/components/common";
import { usePathname } from "next/navigation";
import { filter } from "@/assets";
import Image from "next/image";
import { projects, reportTemplates } from "@/constants";
import { columns } from "@/columns/reports/templates";

const Reports = () => {
  const [page, setPage] = useState(0);
  const [directory, setDirectory] = useState({
    name: "",
    link: [],
  });

  const pathname = usePathname();

  const handlePageChange = (page) => {
    setPage(page);
  };


  useEffect(() => {
    const id = pathname.split("/")[2];
    const { projectName } = projects.find((item) => item.id == id);
    setDirectory({ name: projectName, link: ["Project", "/", projectName, , "/", "Reports"] });
  }, [pathname]);


  const Header = () => {
    return (
      <Stack
        sx={{ marginTop: 5 }}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        gap={2}
      >

        <Typography
          sx={{
            background: (theme) => theme.palette.headingColor,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 500,
            fontSize: "24px"
          }}
        >Reports</Typography>

        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}>

          <Box sx={{
            cursor: "pointer",
          }}>
            <Image src={filter} alt width={48} height={48}
            />
          </Box>

          <Button sx={{
            height: "44px",
            width: "147px",
          }} variant="primary">Create Reports</Button>
        </Box>

      </Stack>
    )
  }

  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        gap={2}
      >
        <DirectoryController title={directory.name} links={directory.link} />
        <ProgressBar
          title="Getting Started "
          desc="Complete your project"
          perc={28}
        />
      </Stack>

      <Header />


      <DynamicTable
        data={reportTemplates}
        columns={columns()}
        isLoading={false}
        total={reportTemplates.length}
        handlePageChange={handlePageChange}
        page={page}
        pagination
        
      />
    </Box>
  )
};

export default Reports;
