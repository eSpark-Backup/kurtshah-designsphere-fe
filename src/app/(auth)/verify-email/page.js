"use client";
import { checkVerified, email } from "@/assets";
import { AuthContainer, Loader } from "@/components/common";
import { authApiVaraibles } from "@/constants";
import useResend from "@/hooks/resend";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { toast } from "react-toastify";

const VerifyEmailContent = () => {
  const { reSend, isLoading } = useResend();
  const searchParams = useSearchParams();
  const myEmail = searchParams.get("email");

  const handleResend = () => {
    const objToSend = {
      ...authApiVaraibles,
      email: myEmail,
      otpType: "Generate",
      devicecode: "testdevice",
    };
    reSend(objToSend, () => toast.success("Check your email"));
  };
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
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              rowGap: "25px",
              width: "100%",
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
              Email Verification <br /> Required
            </Typography>
            <Typography
              variant="h3"
              sx={{
                lineHeight: "29px",
                textAlign: "center",
                fontSize: { xs: "15px", sm: "18px" },
              }}
            >
              A verification email was sent to <br /> {myEmail}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
                width: "100%",
                marginTop: "25px",
              }}
            >
              <LoadingButton
                loading={isLoading}
                disabled={isLoading}
                onClick={handleResend}
                loadingPosition="end"
                variant="tertiary"
                sx={{
                  width: "95%",
                  margin: "auto auto",
                  height: "48px",
                  img: { filter: (theme) => theme.palette.filterImg },
                }}
              >
                <Image
                  src={email}
                  width={24}
                  height={24}
                  style={{ marginRight: "10px" }}
                  alt="Email Icon"
                />
                Resend Email
              </LoadingButton>
            </Box>
          </Box>
        </Box>
      </AuthContainer>
    </Box>
  );
};

const VerifyEmail = () => {
  return (
    <Suspense fallback={<Loader />}>
      <VerifyEmailContent />
    </Suspense>
  );
};

export default VerifyEmail;
