"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { AuthContainer, OtpInput } from "@/components/common";
import { qrcode } from "@/assets";

const GoogleAuth = () => {
  const router = useRouter();
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
              For enhanced security, use Google Authenticator and scan the QR
              code. This trusted app generates unique login codes, safeguarding
              your account. 
              <Typography
                component="span"
                sx={{ color: (theme) => theme.palette.secondary.main }}
              >
                Get Google Authenticator
              </Typography>
            </Typography>
          </Box>
          <Image
            style={{ border: "2px solid #7A89BC", borderRadius: "5px" }}
            width={181}
            height={171}
            src={qrcode}
            alt="qrcode"
          />
          <OtpInput value={otp} onChange={(val) => setOtp(val)} numInputs={6} />
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

export default GoogleAuth;
