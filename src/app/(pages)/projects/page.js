"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Button, Stack } from "@mui/material";
import {
  DirectoryController,
  DynamicModal,
  DynamicTable,
} from "@/components/common";
import { projects } from "@/constants";
import { columns } from "@/columns/projects";
import { add } from "@/assets";

const Projects = () => {
  const router = useRouter();
  const [addProductModal, setAddProductModal] = useState(false);
  const [page, setPage] = useState(0);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleView = (item) => {
    router.push(`/projects/${item.id}`);
  };

  const handleCreateStage = () => {
    ///create stage functionality
    setAddProductModal(false);
  };
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        gap={2}
      >
        <DirectoryController
          title="All Projects"
          desc="View and manage your projects."
        />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <Button sx={{ width: "147px", height: "48px" }} variant="primary">
            Revit Plugin
          </Button>
          <Button
            onClick={() => setAddProductModal(true)}
            sx={{
              borderRadius: "50% !important",
              minWidth: "48px",
              width: "48px",
              height: "48px",
            }}
            variant="primary"
          >
            <Image src={add} alt="add" />
          </Button>
        </Stack>
      </Stack>
      <DynamicTable
        data={projects}
        columns={columns()}
        handleView={handleView}
        isLoading={false}
        total={projects.length}
        handlePageChange={handlePageChange}
        page={page}
      />
      <DynamicModal
        open={addProductModal}
        handleClose={() => setAddProductModal(false)}
        heading="Create New Project"
        cancelButtonText="Cancel"
        submitButtonText="Create Stage"
        onConfirm={handleCreateStage}
        showfooter
      />
    </Box>
  );
};

export default Projects;
