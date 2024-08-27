"use client";

import { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DirectoryController, DynamicModal, DynamicTable, ProgressBar } from "@/components/common";
import { files, projects } from "@/constants";
import { usePathname } from "next/navigation";
import { filter } from "@/assets";
import Image from "next/image";
import { columns } from "@/columns/files";
import EditFileModal from "./EditFileModal";



const ShareFile = () => {
  const [deleteFileModal, setDeleteFileModal] = useState(false);
  const [editFileModal, setEditFileModal] = useState(false);
  const [page, setPage] = useState(0);
  const [form, setForm] = useState({
    description: "",
  });
  const [directory, setDirectory] = useState({
    name: "",
    link: [],
  });


  const pathname = usePathname();


  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleDeleteFile = () => {
    // DELETE OPERATINON ON CONFIRM
  };

  const handleEditFile = () => {
    console.log(form);
  };

  useEffect(() => {
    const id = pathname.split("/")[2];
    const { projectName } = projects.find((item) => item.id == id);
    setDirectory({ name: projectName, link: ["Project", "/", projectName, , "/", "Share Files"] });
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

        <Typography variant="h2">Files</Typography>

        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}>

          <Box sx={{
            cursor: "pointer",
          }}>
            <Image src={filter} alt="filter-icon" width={48} height={48}
            />
          </Box>

          <Button sx={{
            height: "44px",
            width: "147px",
          }} variant="primary">Upload New File</Button>
        </Box>

      </Stack>
    )
  }

  const deleteFileModalUI =
    <Box>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          lineHeight: "21px",
          color: (theme) => theme.palette.white,
        }}
      >
        Are you sure you want to delete this file?
      </Typography>
    </Box>

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
        data={files}
        columns={columns()}
        isLoading={false}
        handleDelete={() => setDeleteFileModal(true)}
        handleEdit={() => setEditFileModal(true)}
        total={files.length}
        handlePageChange={handlePageChange}
        page={page}
        pagination
      />


      <DynamicModal
        open={deleteFileModal}
        handleClose={() => setDeleteFileModal(false)}
        heading="Delete File"
        cancelButtonText="Cancel"
        submitButtonText="Delete"
        onConfirm={handleDeleteFile}
        showfooter
      >
        {deleteFileModalUI}
      </DynamicModal>

      <EditFileModal
        form={form}
        setForm={setForm}
        open={editFileModal}
        handleClose={() => setEditFileModal(false)}
        onConfirm={handleEditFile}
        showfooter
      />

    </Box>
  );
};

export default ShareFile;
