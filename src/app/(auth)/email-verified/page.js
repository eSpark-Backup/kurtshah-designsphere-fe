"use client";
import { checkVerified } from "@/assets";
import { AuthContainer, Loader } from "@/components/common";
import { authApiVaraibles } from "@/constants";
import useVerifyEmail from "@/hooks/verifyEmail";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const EmailVerifiedContent = () => {
  const [token, setToken] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { verifyEmail, loading } = useVerifyEmail();
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("Email");
  const otp = searchParams.get("Otp");
  const protecttoken = searchParams.get("ProtectToken");
  useEffect(() => {
    const objToSend = {
      ...authApiVaraibles,
      otp,
      protecttoken,
      email,
      otpType: "Verify",
      devicecode: "testdevice",
    };
    verifyEmail(objToSend, (res) => {
      setToken(res?.data?.access_token);
      setIsSuccess(true);
    });
  }, []);
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
          {loading ? (
            <CircularProgress />
          ) : isSuccess ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                rowGap: "25px",
                img: { filter: (theme) => theme.palette.filterImg },
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
                Email Verified!
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  lineHeight: "29px",
                  textAlign: "center",
                  width: {
                    xs: "100%",
                    sm: "75%",
                    md: "60%",
                    lg: "75%",
                    xl: "85%",
                  },
                }}
              >
                Your email {email} is successfully verified!
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
                  sx={{ width: "95%", margin: "auto auto", height: "48px" }}
                  onClick={() =>
                    router.push(`/profile-details?access_token=${token}`)
                  }
                >
                  Next
                </Button>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
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
                Email Verification Failed!
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  lineHeight: "29px",
                  textAlign: "center",
                  width: {
                    xs: "100%",
                    sm: "75%",
                    md: "60%",
                    lg: "75%",
                    xl: "85%",
                  },
                }}
              >
                Your email {email} verification failed!
              </Typography>
            </Box>
          )}
        </Box>
      </AuthContainer>
    </Box>
  );
};

const EmailVerified = () => {
  return (
    <Suspense fallback={<Loader />}>
      <EmailVerifiedContent />
    </Suspense>
  );
};

export default EmailVerified;
