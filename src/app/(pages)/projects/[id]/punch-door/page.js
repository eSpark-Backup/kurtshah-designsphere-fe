"use client";

import { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DirectoryController, DynamicModal, DynamicTable, ProgressBar } from "@/components/common";
import { files, projects } from "@/constants";
import { usePathname } from "next/navigation";
import { filter } from "@/assets";
import Image from "next/image";
import { columns } from "@/columns/punchdoors";



const PunchDoor = () => {
  const [deletePunchModal, setDeletePunchModal] = useState(false);
  const [page, setPage] = useState(0);
  const [directory, setDirectory] = useState({
    name: "",
    link: [],
  });


  const pathname = usePathname();


  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleDeletePunch = () => {
    // DELETE OPERATINON ON CONFIRM
  };

  useEffect(() => {
    const id = pathname.split("/")[2];
    const { projectName } = projects.find((item) => item.id == id);
    setDirectory({ name: projectName, link: ["Project", "/", projectName, , "/", "Punch Door"] });
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

        <Typography variant="h2">Punch List</Typography>

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
          }} variant="primary">Export Data</Button>
        </Box>

      </Stack>
    )
  }

  const deletePunchModalUI = 
    <Box>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          lineHeight: "21px",
          color: (theme) => theme.palette.white,
        }}
      >
        Are you sure you want to delete this Punch File?
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
        handleDelete={() => setDeletePunchModal(true)}
        total={files.length}
        handlePageChange={handlePageChange}
        page={page}
        pagination
      />


      <DynamicModal
        open={deletePunchModal}
        handleClose={() => setDeletePunchModal(false)}
        heading="Delete File"
        cancelButtonText="Cancel"
        submitButtonText="Delete"
        onConfirm={handleDeletePunch}
        showfooter
      >
        {deletePunchModalUI}
      </DynamicModal>

    </Box>
  );
};

export default PunchDoor;
