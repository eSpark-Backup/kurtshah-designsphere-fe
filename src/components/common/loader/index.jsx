import { CircularProgress, Stack } from "@mui/material";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100wh",
        height: "100vh",
        background: (theme) => theme.palette.gradientPrimary,
      }}
    >
      <CircularProgress />
    </Stack>
  );
};

export default Loader;
