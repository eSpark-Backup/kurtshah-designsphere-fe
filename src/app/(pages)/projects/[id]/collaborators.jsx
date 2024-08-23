import Image from "next/image";
import { Button, Stack, Typography } from "@mui/material";
import { DynamicTable } from "@/components/common";
import { columns } from "@/columns/collaborators";
import { add } from "@/assets";

const Collaborators = ({ collaborators }) => {
  return (
    <>
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
        data={collaborators}
        columns={columns()}
        isLoading={false}
      />
    </>
  );
};
export default Collaborators;
