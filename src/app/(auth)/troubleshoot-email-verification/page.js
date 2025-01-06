"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { AuthContainer, Loader } from "@/components/common";
import { maskEmail } from "@/utils";
import { LoadingButton } from "@mui/lab";
import useResend from "@/hooks/resend";
import { authApiVaraibles } from "@/constants";
import { toast } from "react-toastify";

const TroubleshootEmailVerificationContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const myEmail = searchParams.get("email");

  const { reSend, isLoading } = useResend();

  const handleResend = () => {
    const objToSend = {
      ...authApiVaraibles,
      email: myEmail,
      reverifyemail: 1,
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
            Email Address Verification
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
              Authenticate your account by verifying the <br></br> email
              address. You will receive an email at <br></br>{" "}
              {maskEmail(myEmail)}, which will include instructions to verify
              your identity.
            </Typography>
          </Box>
          <LoadingButton
            onClick={handleResend}
            loading={isLoading}
            disabled={isLoading}
            loadingPosition="end"
            variant="primary"
            sx={{ width: "95%", margin: "0 auto", height: "48px" }}
            type="submit"
          >
            Send Verification Email
          </LoadingButton>
          <Typography
            onClick={() => router.push(`/troubleshoot-mfa?email=${myEmail}`)}
            sx={{ color: (theme) => theme.palette.white, cursor: "pointer" }}
            fontSize={14}
            fontWeight={400}
          >
            Cancel
          </Typography>
        </Box>
      </AuthContainer>
    </Box>
  );
};

const TroubleshootEmailVerification = () => {
  return (
    <Suspense fallback={<Loader />}>
      <TroubleshootEmailVerificationContent />
    </Suspense>
  );
};

export default TroubleshootEmailVerification;
