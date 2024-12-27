"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { AuthContainer, CustomInput, Loader } from "@/components/common";
import { LoadingButton } from "@mui/lab";
import useReSync from "@/hooks/reSync";
import { Form, Formik } from "formik";
import { reSyncSchema } from "@/validation";
import { getLocalStorage } from "@/utils";

const MfaResyncContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = getLocalStorage("token");

  const myEmail = searchParams.get("email");
  const { resync, isLoading } = useReSync();

  const initialValues = {
    code1: "",
    code2: "",
  };

  const handleResync = (values) => {
    const objToSend = {
      Code1: values?.code1,
      Code2: values?.code2,
    };
    resync(objToSend, token, () => {
      router.push(`/verify-otp?email=${myEmail}`);
    });
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
        <Formik
          initialValues={initialValues}
          validationSchema={reSyncSchema}
          onSubmit={handleResync}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
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
                  Re-sync your device
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
                    if you are multi-factor authentication(MFA) device appears
                    to be functioning properly and you are not able to sign in,
                    then the device might be out of Sync. First try to resync
                    your device using the following instructions.
                  </Typography>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "90%" } }}>
                  <Typography
                    sx={{
                      width: "300px",
                      mb: 2,
                      textTransform: "uppercase",
                      width: "100%",
                    }}
                    variant="h5"
                  >
                    Type the first authentication code you see on your device
                  </Typography>
                  <CustomInput
                    sx={{
                      width: "300px",
                      input: {
                        borderRadius: "5px",
                        border: (theme) => theme.palette.borderPrimary,
                      },
                    }}
                    type="number"
                    name="code1"
                    variant="outlined"
                    placeholder="Enter Code#1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.code1}
                    error={touched.code1 && errors.code1}
                    helperText={touched.code1 && errors.code1}
                  />
                </Box>
                <Box sx={{ width: { xs: "100%", md: "90%" } }}>
                  <Typography
                    sx={{
                      width: "300px",
                      mb: 2,
                      textTransform: "uppercase",
                      width: "100%",
                    }}
                    variant="h5"
                  >
                    Wait until the code gets updated or the display turns off.
                    then turn on or type the second code you see on your device
                  </Typography>
                  <CustomInput
                    sx={{
                      width: "300px",
                      input: {
                        borderRadius: "5px",
                        border: (theme) => theme.palette.borderPrimary,
                      },
                    }}
                    name="code2"
                    type="number"
                    variant="outlined"
                    placeholder="Enter Code#2"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.code2}
                    error={touched.code2 && errors.code2}
                    helperText={touched.code2 && errors.code2}
                  />
                </Box>
                <LoadingButton
                  loading={isLoading}
                  disabled={isLoading}
                  loadingPosition="end"
                  variant="primary"
                  sx={{ width: "95%", margin: "0 auto", minHeight: "48px" }}
                  type="submit"
                >
                  Re-sync MFA Device
                </LoadingButton>
                <Typography
                  onClick={() =>
                    router.push(`/troubleshoot-mfa?email=${myEmail}`)
                  }
                  sx={{
                    color: (theme) => theme.palette.white,
                    cursor: "pointer",
                  }}
                  fontSize={14}
                  fontWeight={400}
                >
                  Cancel
                </Typography>
              </Box>
            </Form>
          )}
        </Formik>
      </AuthContainer>
    </Box>
  );
};

const MfaResync = () => {
  return (
    <Suspense fallback={<Loader />}>
      <MfaResyncContent />
    </Suspense>
  );
};

export default MfaResync;
