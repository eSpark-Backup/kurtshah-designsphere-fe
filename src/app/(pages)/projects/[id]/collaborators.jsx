import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DynamicTable } from "@/components/common";
import { columns } from "@/columns/collaborators";
import { add } from "@/assets";
import AddCollaboratorModal from "./addCollaboratorModal";
import useGetAllProjectCollaborator from "@/hooks/getAllCollaborators";

const Collaborators = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const { getProjectCollaboratorById, isLoading } =
    useGetAllProjectCollaborator();
  const [collaborators, setCollaborators] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchCollab = () => {
    if (id) {
      getProjectCollaboratorById(1, 5, id, (res) => {
        setCollaborators(res?.data);
      });
    }
  };
  useEffect(() => {
    fetchCollab();
  }, [id]);
  return (
    <Box sx={{ ".MuiTableCell-root": { padding: "20px 25px !important" } }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        gap={1}
      >
        <Typography variant="h2">Collaborators</Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <Button sx={{ width: "147px", height: "48px" }} variant="primary">
            Email All
          </Button>
          <Button
            onClick={() => setOpen(id)}
            sx={{
              borderRadius: "50% !important",
              minWidth: "48px",
              width: "48px",
              height: "48px",
              img: { filter : theme => theme.palette.iconColor }
            }}
            variant="primary"
          >
            <Image src={add} alt="add" />
          </Button>
        </Stack>
      </Stack>
      <DynamicTable
        data={collaborators}
        columns={columns()}
        isLoading={isLoading}
      />
      <AddCollaboratorModal
        open={open}
        handleClose={() => setOpen(false)}
        onConfirm={fetchCollab}
      />
    </Box>
  );
};
export default Collaborators;
