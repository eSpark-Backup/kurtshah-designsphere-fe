"use client";

import { useRouter } from "next/navigation";
import { Typography, Button } from "@mui/material";

const Email = () => {
  const router = useRouter();
  return (
    <>
      <Typography fontSize={20} fontWeight={700} sx={{ color: (theme) => theme.palette.white, }}>
        Email Notifications
      </Typography>
      <Typography mt={2} fontSize={16} fontWeight={500} sx={{ color: (theme) => theme.palette.white, }}>
        Click here to manage your email notifications within the ARC platform.
      </Typography>
      <Button
        onClick={() => router.push("/preferences/email-notifications")}
        sx={{ mt: 2, width: "163px", height: "40px" }}
        variant="primary"
      >
        Email Notifications
      </Button>
    </>
  );
};

export default Email;
