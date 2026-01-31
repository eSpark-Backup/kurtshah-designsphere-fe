"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { AuthContainer } from "@/components/common";
import { mobile, email } from "@/assets";

const MultiFactorAuthContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const myEmail = searchParams.get("email");
  const { currentTheme } = useSelector((state) => state.theme);

  const buttons = [
    {
      title: "Receive OTP via Google Authentication",
      icon: mobile,
      link: "/google-auth",
    },
    {
      title: "Receive OTP via  email",
      icon: email,
      link: `/email-auth?email=${myEmail}`,
    },
  ];

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
            alignItems: "center",
            rowGap: "25px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              lineHeight: "40px",
              textAlign: "center",
            }}
          >
            Multi-factor <br></br> Authentication
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                lineHeight: "29px",
                textAlign: "center",
                width: { xs: "100%", md: "90%" },
              }}
            >
              Choose the method you want to use for multi-factor authentication.
            </Typography>
          </Box>
          {buttons.map((item) => {
            return (
              <Stack
                onClick={() => router.push(item.link)}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: { xs: "100%", md: "90%" },
                  cursor: "pointer",
                  background: (theme) => theme.palette.gradientPrimary,
                  height: "44px",
                  borderRadius: "16px",
                  border:
                    currentTheme > 0 ? "1px solid #EEE" : "1px solid #FFFFFF1F",
                }}
                key={item.title}
              >
                <Stack
                  sx={{
                    width: "80%",
                    img: { filter: (theme) => theme.palette.filterImg },
                  }}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  gap={1}
                >
                  <Image width={24} height={24} src={item.icon} alt="icon" />
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", sm: "14px" },
                      fontWeight: 400,
                      background: (theme) => theme.palette.headingColor,
                      color: "transparent",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Stack>
              </Stack>
            );
          })}
          <Typography
            onClick={() => router.push("/projects")}
            sx={{
              fontSize: { xs: "10px", sm: "14px" },
              fontWeight: 400,
              color: (theme) => theme.palette.white,
              textAlign: "center",
              marginTop: "50px",
              cursor: "pointer",
            }}
          >
            Skip for now
          </Typography>
        </Box>
      </AuthContainer>
    </Box>
  );
};

const MultiFactorAuth = () => {
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
      <MultiFactorAuthContent />
    </Suspense>
  );
};

export default MultiFactorAuth;
