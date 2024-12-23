"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, CircularProgress, Typography } from "@mui/material";
import {
  AuthContainer,
  OtpInput,
  SuspenceContainer,
} from "@/components/common";
import { authApiVaraibles } from "@/constants";
import { getLocalStorage, setLocalStorage } from "@/utils";
import useGenerateMfaOtp from "@/hooks/generateOtpForMfa";
import useVerifyMfaOtp from "@/hooks/verifyOtpForMfa";

const GoogleAuth = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [otp, setOtp] = useState("______");
  const [qrcode, setQrcode] = useState(null);
  const email_mfa = getLocalStorage("email_mfa");
  const google_mfa = getLocalStorage("google_mfa");

  const show =
    (email_mfa === "true" && google_mfa === "true") ||
    (email_mfa === "false" && google_mfa === "false");
  const { generateOtp, isLoading } = useGenerateMfaOtp();
  const { verifyOtp } = useVerifyMfaOtp();

  useEffect(() => {
    if (otp.length === 6 && !otp.includes("_")) {
      const objToSend = {
        ...authApiVaraibles,
        email,
        devicecode: "testdevice",
        googletwofactor: 1,
        otp,
      };
      verifyOtp(objToSend, () => {
        router.push(`/verify-otp?email=${email}`);
        setLocalStorage("google_mfa", true);
        setLocalStorage("authed", true);
      });
      const formData = new URLSearchParams();
      Object.keys(objToSend).forEach((key) => {
        formData.append(key, objToSend[key]);
      });
    }
  }, [otp]);

  useEffect(() => {
    if (google_mfa && google_mfa === "true") return;
    const objToSend = {
      ...authApiVaraibles,
      email,
      devicecode: "testdevice",
      googletwofactor: 1,
    };
    generateOtp(objToSend, (res) =>
      setQrcode(res?.error?.data?.Result?.QrCodeUrl)
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
                For enhanced security, use Google Authenticator and scan the QR
                code. This trusted app generates unique login codes,
                safeguarding your account. 
                <Typography
                  component="span"
                  sx={{ color: (theme) => theme.palette.secondary.main }}
                >
                  Get Google Authenticator
                </Typography>
              </Typography>
            </Box>
            {isLoading ? (
              <CircularProgress />
            ) : qrcode ? (
              <Image
                style={{ border: "2px solid #7A89BC", borderRadius: "5px" }}
                width={181}
                height={171}
                src={qrcode}
                alt="qrcode"
              />
            ) : null}
            <OtpInput
              value={otp}
              onChange={(val) => setOtp(val)}
              numInputs={6}
            />
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

export default GoogleAuth;
