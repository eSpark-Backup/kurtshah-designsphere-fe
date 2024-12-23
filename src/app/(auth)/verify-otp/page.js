"use client";
import React from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";
import { AuthContainer, SuspenceContainer } from "@/components/common";
import { checkVerified } from "@/assets";
import { getLocalStorage } from "@/utils";

const EmailVerified = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router = useRouter();
  const google_mfa = getLocalStorage("google_mfa");
  const email_mfa = getLocalStorage("email_mfa");
  const mfa =
    !google_mfa ||
    !email_mfa ||
    google_mfa === "false" ||
    email_mfa === "false";
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
              rowGap: "25px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
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
                OTP Verified!
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
                  sx={{ width: "90%", margin: "auto auto", height: "48px" }}
                  onClick={() => router.push("/projects")}
                >
                  Redirect To Dashboard
                </Button>
              </Box>
              {mfa && (
                <Typography
                  onClick={() =>
                    router.push(`/multifactor?email=${email}&mfa=true`)
                  }
                  sx={{
                    fontSize: { xs: "10px", sm: "14px" },
                    fontWeight: 400,
                    color: (theme) => theme.palette.white,
                    textAlign: "center",
                    marginTop: "50px",
                    cursor: "pointer",
                  }}
                >
                  Configure another method
                </Typography>
              )}
            </Box>
          </Box>
        </AuthContainer>
      </Box>
    </SuspenceContainer>
  );
};

export default EmailVerified;
