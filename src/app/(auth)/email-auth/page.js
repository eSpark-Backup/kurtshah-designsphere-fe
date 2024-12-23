"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, Stack, Typography } from "@mui/material";
import {
  AuthContainer,
  OtpInput,
  SuspenceContainer,
} from "@/components/common";
import { timer } from "@/assets";
import { getLocalStorage, maskEmail, setLocalStorage } from "@/utils";
import { authApiVaraibles } from "@/constants";
import useGenerateMfaOtp from "@/hooks/generateOtpForMfa";
import useVerifyMfaOtp from "@/hooks/verifyOtpForMfa";
import useCountdownTimer from "@/hooks/countdownTimer";

const EmailAuth = () => {
  const { timerFinished, formattedTime } = useCountdownTimer(5 * 60);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [otp, setOtp] = useState("______");

  const email_mfa = getLocalStorage("email_mfa");
  const google_mfa = getLocalStorage("google_mfa");
  const show =
    (email_mfa === "true" && google_mfa === "true") ||
    (email_mfa === "false" && google_mfa === "false");

  const [protecttoken, setProtectToken] = useState(null);
  const { generateOtp } = useGenerateMfaOtp();
  const { verifyOtp } = useVerifyMfaOtp();

  useEffect(() => {
    if (otp.length === 6 && !otp.includes("_")) {
      const objToSend = {
        ...authApiVaraibles,
        email,
        devicecode: "testdevice",
        emailtwofactor: 1,
        otp,
        protecttoken,
      };
      verifyOtp(objToSend, () => {
        router.push(`/verify-otp?email=${email}`);
        setLocalStorage("email_mfa", true);
        setLocalStorage("authed", true);
      });
    }
  }, [otp]);

  useEffect(() => {
    const objToSend = {
      ...authApiVaraibles,
      email,
      devicecode: "testdevice",
      emailtwofactor: 1,
    };
    generateOtp(objToSend, (res) =>
      setProtectToken(res?.error?.data?.Result?.ProtectToken)
    );
  }, []);

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
                Email Authenticator sent a unique login code to your registered
                email address for verification.<br></br>({maskEmail(email)} )
              </Typography>
            </Box>
            <OtpInput
              value={otp}
              onChange={(val) => setOtp(val)}
              numInputs={6}
            />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              gap={1}
              sx={{ img: { filter: (theme) => theme.palette.filterImg } }}
            >
              {!timerFinished && (
                <Image width={24} height={24} src={timer} alt="timer" />
              )}
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
                {timerFinished ? "Your otp has expired" : "Time Left: "}
                <Typography
                  component="span"
                  sx={{
                    WebkitTextFillColor: (theme) =>
                      theme.palette.secondary.main,
                  }}
                >
                  {timerFinished ? "" : formattedTime}
                </Typography>
              </Typography>
            </Stack>
            {show && (
              <Typography
                onClick={() => router.push(`/multifactor?email=${email}`)}
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
            )}
          </Box>
        </AuthContainer>
      </Box>
    </SuspenceContainer>
  );
};

export default EmailAuth;
