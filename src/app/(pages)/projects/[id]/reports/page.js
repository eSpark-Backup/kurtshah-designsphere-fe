"use client";

import { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DirectoryController, DynamicModal, DynamicTable, ProgressBar, Tabs } from "@/components/common";
import { usePathname, useRouter } from "next/navigation";
import { filter } from "@/assets";
import Image from "next/image";
import { projectReports, projects, ReportPageTabs, reportTemplates } from "@/constants";
import { columns as templateColumns } from "@/columns/reports/templates";
import { columns as projectReportColumns } from "@/columns/reports/projectsReports";




const Reports = () => {
  const [templatePage, setTemplatePage] = useState(0);
  const [projectPage, setProjectPage] = useState(0);
  const [deleteTemplateModal, setDeleteTemplateModal] = useState(false);
  const [deleteProjectReportModal, setDeleteProjectReportModal] = useState(false);

  const [activeTab, setActiveTab] = useState(0);
  const [directory, setDirectory] = useState({
    name: "",
    link: [],
  });

  const pathname = usePathname();
  const projectId = pathname.split("/")[2];
  const router = useRouter();

  const handlePageChange = (page) => {
    if (activeTab === 1) {
      setTemplatePage(page);
    } else {
      setProjectPage(page);
    }
  };


  const handleDeleteFile = () => {
    if (activeTab === 1) {
      // DELETE OPERATINON ON CONFIRM
    } else {
      // DELETE OPERATINON ON CONFIRM
    }
  };

  const TabHandler = (tab) => {
    setActiveTab(tab)
  }


  const deleteFileModalUI = (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "21px",
          color: (theme) => theme.palette.white,
        }}
      >
        Are you sure you want to delete this file?
      </Typography>
    </Box>
  );



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
        marginBottom={4}
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

          <Button
            onClick={() => router.push(`/projects/${projectId}/reports/create-report`)}
            sx={{
              height: "44px",
              width: "147px",
            }} variant="primary">Create Reports</Button>
        </Box>

      </Stack>
    )
  }

  const isTemplate = activeTab === 0;

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

      <Tabs
        tabs={ReportPageTabs}
        TabHandler={TabHandler}
        activeTab={activeTab}
      />


      <DynamicTable
        data={isTemplate ? reportTemplates : projectReports}
        columns={isTemplate ? templateColumns() : projectReportColumns()}
        isLoading={false}
        total={isTemplate ? reportTemplates.length : projectReports.length}
        handlePageChange={handlePageChange}
        page={isTemplate ? templatePage : projectPage}
        handleDelete={() => isTemplate ? setDeleteTemplateModal(true) : setDeleteProjectReportModal(true)}
        pagination
      />

      <DynamicModal
        open={isTemplate ? deleteTemplateModal : deleteProjectReportModal}
        handleClose={() => isTemplate ? setDeleteTemplateModal(false) : setDeleteProjectReportModal(false)}

        heading="Delete File"
        cancelButtonText="Cancel"
        submitButtonText="Delete"
        onConfirm={handleDeleteFile}
        showfooter
      >
        {deleteFileModalUI}
      </DynamicModal>

    </Box>
  )
};

export default Reports;
