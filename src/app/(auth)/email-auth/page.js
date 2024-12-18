"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, Stack, Typography } from "@mui/material";
import { AuthContainer, OtpInput } from "@/components/common";
import { timer } from "@/assets";
import { maskEmail } from "@/utils";

const EmailAuth = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [otp, setOtp] = useState("______");

  useEffect(() => {
    if (otp.length === 6 && !otp.includes("_")) {
      router.push("/verify-otp");
    }
  }, [otp, router]);

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
              Email Authenticator sent a unique login code to your registered
              email address for verification.<br></br>({maskEmail(email)} )
            </Typography>
          </Box>
          <OtpInput value={otp} onChange={(val) => setOtp(val)} numInputs={6} />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={1}
            sx={{ img: { filter: (theme) => theme.palette.filterImg } }}
          >
            <Image width={24} height={24} src={timer} alt="timer" />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                background: (theme) => theme.palette.headingColor,
                color: "transparent",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Time Left:{" "}
              <Typography
                component="span"
                sx={{
                  WebkitTextFillColor: (theme) => theme.palette.secondary.main,
                }}
              >
                01:05
              </Typography>
            </Typography>
          </Stack>
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
            Select another method
          </Typography>
        </Box>
      </AuthContainer>
    </Box>
  );
};

export default EmailAuth;
