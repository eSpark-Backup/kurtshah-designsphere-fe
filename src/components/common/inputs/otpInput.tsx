"use client";

import { useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import { Stack } from "@mui/material";

const OtpInput = ({ numInputs, value, onChange }) => {
  const { currentTheme } = useSelector((state) => state.theme);

  const handleOtpChange = (val) => {
    const paddedOtp = val.padEnd(6, "_").slice(0, 6);
    onChange(paddedOtp);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: { xs: "100%", md: "90%" },
        background: (theme) => theme.palette.gradientPrimary,
        borderRadius: "16px",
        border: currentTheme > 0 ? "1px solid #EEE" : "1px solid #FFFFFF1F",
        div: {
          gap: "8px",
          height: "44px",
        },
        input: {
          fontSize: "22px",
          fontWeight: 600,
          border: "none",
          outline: "none",
          background: (theme) => theme.palette.headingColor,
          color: "transparent",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      }}
    >
      <OTPInput
        value={value}
        onChange={handleOtpChange}
        numInputs={numInputs}
        renderInput={(props) => <input {...props} />}
      />
    </Stack>
  );
};

export default OtpInput;
