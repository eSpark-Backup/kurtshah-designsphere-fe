"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Box, CircularProgress, Typography } from "@mui/material";
import { OtpInput } from "@/components/common";
import { authApiVaraibles } from "@/constants";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import useGenerateMfaOtp from "@/hooks/generateOtpForMfa";
import useVerifyMfaOtp from "@/hooks/verifyOtpForMfa";

const GoogleAuthModal = ({ onConfirm, handleClose }) => {
  const { user } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("______");
  const [qrcode, setQrcode] = useState(null);
  const { generateOtp, isLoading } = useGenerateMfaOtp();
  const { verifyOtp } = useVerifyMfaOtp();

  useEffect(() => {
    if (otp.length === 6 && !otp.includes("_")) {
      const objToSend = {
        ...authApiVaraibles,
        email: user?.email,
        devicecode: "testdevice",
        googletwofactor: 1,
        otp,
      };
      verifyOtp(objToSend, () => {
        toast.success("Google MFA has been configured");
        handleClose();
        onConfirm();
      });
    }
  }, [otp]);

  useEffect(() => {
    const objToSend = {
      ...authApiVaraibles,
      email: user?.email,
      devicecode: "testdevice",
      googletwofactor: 1,
    };
    generateOtp(objToSend, (res) =>
      setQrcode(res?.error?.data?.Result?.QrCodeUrl)
    );
  }, []);
  return (
    <Box
      sx={{
        padding: "20px 0",
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
          For enhanced security, we strongly recommend setting up multi-factor
          authentication (MFA) on your account. MFA is a security process that
          requires users to verify their identity using multiple independent
          credentials, enhancing protection against unauthorized access.
          <br></br>
          <Typography
            component="span"
            sx={{ color: (theme) => theme.palette.secondary.main }}
          >
            Scan Code Using Google Authenticator App
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
      <OtpInput value={otp} onChange={(val) => setOtp(val)} numInputs={6} />
      <Typography
        onClick={handleClose}
        sx={{
          fontSize: { xs: "10px", sm: "14px" },
          fontWeight: 400,
          color: (theme) => theme.palette.white,
          textAlign: "center",
          marginTop: "50px",
          cursor: "pointer",
        }}
      >
        Cancel
      </Typography>
    </Box>
  );
};

export default GoogleAuthModal;
