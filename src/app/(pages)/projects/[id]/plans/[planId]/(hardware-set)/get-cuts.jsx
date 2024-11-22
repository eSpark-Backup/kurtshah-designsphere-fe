import { Button, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components/common";

const GetsCut = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={2}
      >
        <Typography
          sx={{
            marginTop: "10px",
            minWidth: "83px",
            color: (theme) => theme.palette.whiteE4,
          }}
          fontSize={10}
          fontWeight={400}
        >
          Paste cut sheet
        </Typography>
        <CustomInput
          multiline
          minRows={8}
          placeholder="Paste you cut-sheet here"
          type="text"
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-start"
        gap={2}
        mt={2}
      >
        <Button
          sx={{
            fontSize: "11px",
            fontWeight: 500,
            width: "115px",
          }}
          variant="primary"
        >
          Submit
        </Button>
      </Stack>
    </>
  );
};

export default GetsCut;
