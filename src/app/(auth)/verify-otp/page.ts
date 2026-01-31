"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";
import { AuthContainer } from "@/components/common";
import { checkVerified } from "@/assets";

const EmailVerified = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AuthContainer>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            rowGap: "25px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              rowGap: "25px",
              img: { filter: (theme) => theme.palette.filterImg }
            }}
          >
            <Image
              src={checkVerified}
              width={64}
              height={64}
              alt="Verified Icon"
            />
            <Typography
              variant="h1"
              sx={{
                lineHeight: "40px",
                textAlign: "center",
              }}
            >
              OTP Verified!
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
                width: "100%",
                marginTop: "65px",
              }}
            >
              <Button
                type="submit"
                variant="primary"
                sx={{ width: "90%", margin: "auto auto", height: "48px" }}
                onClick={() => router.push("/projects")}
              >
                Redirect To Dashboard
              </Button>
            </Box>
            <Typography
              onClick={() => router.push("/multifactor")}
              sx={{
                fontSize: { xs: "10px", sm: "14px" },
                fontWeight: 400,
                color: (theme) => theme.palette.white,
                textAlign: "center",
                marginTop: "50px",
                cursor: "pointer",
              }}
            >
              Configure another method
            </Typography>
          </Box>
        </Box>
      </AuthContainer>
    </Box>
  );
};

export default EmailVerified;
