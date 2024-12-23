"use client";

import React from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";
import { AuthContainer, SuspenceContainer } from "@/components/common";
import { mobile, email } from "@/assets";
import { getLocalStorage } from "@/utils";

const MultiFactorAuth = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const myEmail = searchParams.get("email");
  const mfa = searchParams.get("mfa");
  const { currentTheme } = useSelector((state) => state.theme);

  const emailMfa = getLocalStorage("email_mfa");
  const googleMfa = getLocalStorage("google_mfa");

  const showEmail = mfa
    ? emailMfa === "false"
    : emailMfa === "false" && googleMfa === "false"
    ? true
    : emailMfa === "true";
  const showGoogle = mfa
    ? googleMfa === "false"
    : googleMfa === "false" && emailMfa === "false"
    ? true
    : googleMfa === "true";

  return (
    <SuspenceContainer>
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
                Choose the method you want to use for multi-factor
                authentication.
              </Typography>
            </Box>
            {showGoogle && (
              <Stack
                onClick={() => router.push(`/google-auth?email=${myEmail}`)}
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
                  <Image width={24} height={24} src={mobile} alt="icon" />
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
                    Receive OTP via Google Authentication
                  </Typography>
                </Stack>
              </Stack>
            )}
            {showEmail && (
              <Stack
                onClick={() => router.push(`/email-auth?email=${myEmail}`)}
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
                  <Image width={24} height={24} src={email} alt="icon" />
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
                    Receive OTP via email
                  </Typography>
                </Stack>
              </Stack>
            )}
            {((mfa && mfa === "true") ||
              (emailMfa === "false" && googleMfa === "false")) && (
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
            )}
          </Box>
        </AuthContainer>
      </Box>
    </SuspenceContainer>
  );
};

export default MultiFactorAuth;
