"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";
import { OtpInput } from "@/components/common";
import { maskEmail } from "@/utils";
import { timer } from "@/assets";
import { authApiVaraibles } from "@/constants";
import { toast } from "react-toastify";
import useCountdownTimer from "@/hooks/countdownTimer";
import useGenerateMfaOtp from "@/hooks/generateOtpForMfa";
import useVerifyMfaOtp from "@/hooks/verifyOtpForMfa";

const EmailAuthModal = ({ onConfirm, handleClose }) => {
  const { timerFinished, formattedTime } = useCountdownTimer(5 * 60);

  const { user } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("______");
  const [protecttoken, setProtectToken] = useState(null);
  const { generateOtp } = useGenerateMfaOtp();
  const { verifyOtp } = useVerifyMfaOtp();

  useEffect(() => {
    if (otp.length === 6 && !otp.includes("_")) {
      const objToSend = {
        ...authApiVaraibles,
        email: user?.email,
        devicecode: "testdevice",
        emailtwofactor: 1,
        otp,
        protecttoken,
      };
      verifyOtp(objToSend, () => {
        handleClose();
        onConfirm();
        toast.success("Email MFA has been configured");
      });
    }
  }, [otp]);

  useEffect(() => {
    const objToSend = {
      ...authApiVaraibles,
      email: user.email,
      devicecode: "testdevice",
      emailtwofactor: 1,
    };
    generateOtp(objToSend, (res) =>
      setProtectToken(res?.error?.data?.Result?.ProtectToken)
    );
  }, []);
  return (
    <Box
      sx={{
        padding: "10px 0",
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
            OTP code sent to your registered email<br></br>
          </Typography>
          ({maskEmail(user?.email)} )
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
              WebkitTextFillColor: (theme) => theme.palette.secondary.main,
            }}
          >
            {timerFinished ? "" : formattedTime}
          </Typography>
        </Typography>
      </Stack>
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

export default EmailAuthModal;
