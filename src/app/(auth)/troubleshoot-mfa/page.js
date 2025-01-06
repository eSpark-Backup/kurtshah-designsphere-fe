"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";
import { AuthContainer, Loader } from "@/components/common";
import { mobile, email } from "@/assets";

const TroubleshootMfaContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const myEmail = searchParams.get("email");
  const { currentTheme } = useSelector((state) => state.theme);

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
              justifyContent : "center",
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
              Troubleshoot Your Device
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
                Choose the method you want to use <br></br> for troubleshoot.
              </Typography>
            </Box>
              <Stack
                onClick={() => router.push(`/mfa-resync?email=${myEmail}`)}
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
                    Re-sync with server
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                onClick={() => router.push(`/troubleshoot-email-verification?email=${myEmail}`)}
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
                    Sign in by verifying Email
                  </Typography>
                </Stack>
              </Stack>
          </Box>
        </AuthContainer>
      </Box>
  );
};

const TroubleshootMfa = () => {
  return (
    <Suspense fallback={<Loader />}>
      <TroubleshootMfaContent />
    </Suspense>
  );
};

export default TroubleshootMfa;
