import { Suspense } from "react";
import { CircularProgress, Stack } from "@mui/material";

const SuspenceContainer = ({ children }) => {
  return (
    <Suspense
      fallback={
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
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenceContainer;
