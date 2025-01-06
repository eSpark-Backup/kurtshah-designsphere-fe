"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Button, Stack } from "@mui/material";
import { DirectoryController, DynamicTable } from "@/components/common";
import AddProjectModal from "./addProjectModal";
import { columns } from "@/columns/projects";
import { add } from "@/assets";
import useGetAllProjects from "@/hooks/getAllProjects";
import { useSelector } from "react-redux";

const Projects = () => {
  const { getAllProjects, isLoading } = useGetAllProjects();
  const { allProjects, total } = useSelector((state) => state.projects);

  const router = useRouter();
  const [addProductModal, setAddProductModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    stage: "",
    type: "",
    needHelp: "",
    // contact: "",
    comment: "",
  });
  const [page, setPage] = useState(0);
  const [pageSize] = useState(10);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleView = (item) => {
    router.push(`/projects/${item.id}`);
  };

  useEffect(() => {
    getAllProjects(page + 1, pageSize);
  }, [page, pageSize]);
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
              img: { filter: (theme) => theme.palette.iconColor },
            }}
            variant="primary"
          >
            <Image src={add} alt="add" />
          </Button>
        </Stack>
      </Stack>
      <DynamicTable
        data={allProjects}
        columns={columns()}
        handleView={handleView}
        isLoading={isLoading}
        total={total}
        handlePageChange={handlePageChange}
        page={page}
        pageSize={pageSize}
        ordering
        pagination
      />
      <AddProjectModal
        form={form}
        setForm={setForm}
        open={addProductModal}
        handleClose={() => setAddProductModal(false)}
        onConfirm={() => {
          setAddProductModal(false);
          getAllProjects(page + 1, pageSize)
        }}
        showfooter
      />
    </Box>
  );
};

export default Projects;
