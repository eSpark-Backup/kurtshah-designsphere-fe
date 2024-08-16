"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  DirectoryController,
  DynamicModal,
  DynamicTable,
  ProgressBar,
} from "@/components/common";
import { plansData, projects } from "@/constants";
import { columns } from "@/columns/plans";
import { filter } from "@/assets";

const Plans = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [deleteFileModal, setDeleteFileModal] = useState(false);
  const [page, setPage] = useState(0);
  const [directory, setDirectory] = useState({
    name: "",
    link: [],
  });

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleView = (item) => {
    const projectId = pathname.split("/")[2];
    router.push(`/projects/${projectId}/plans/${item.id}`);
  };

  const handleDeleteFile = () => {
    // DELETE OPERATINON ON CONFIRM
  };

  useEffect(() => {
    const id = pathname.split("/")[2];
    const { projectName } = projects.find((item) => item.id == id);
    setDirectory({
      name: projectName,
      link: ["Project", "/", projectName, , "/", "View Plans"],
    });
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
            fontSize: "24px",
          }}
        >
          Upload Schedule
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: { xs: "wrap", sm: "nowrap" },
            gap: "20px",
            width: { xs: "100%", sm: "max-content" },
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
            }}
          >
            <Image src={filter} alt width={48} height={48} />
          </Box>
          <Button
            sx={{
              height: "44px",
              width: { xs: "calc(100% - 68px)", sm: "200px" },
              textTransform: "none",
            }}
            variant="secondary"
          >
            Create Without Plans
          </Button>
          <Button
            sx={{
              height: "44px",
              width: { xs: "100%", sm: "147px" },
            }}
            variant="primary"
          >
            Upload New File
          </Button>
        </Box>
      </Stack>
    );
  };

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
        data={plansData}
        columns={columns()}
        isLoading={false}
        handleView={handleView}
        handleDelete={() => setDeleteFileModal(true)}
        total={plansData.length}
        handlePageChange={handlePageChange}
        page={page}
      />

      <DynamicModal
        open={deleteFileModal}
        handleClose={() => setDeleteFileModal(false)}
        children={deleteFileModalUI}
        heading="Delete File"
        cancelButtonText="Cancel"
        submitButtonText="Delete"
        onConfirm={handleDeleteFile}
        showfooter
      />
    </Box>
  );
};

export default Plans;
