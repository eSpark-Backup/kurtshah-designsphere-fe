"use client";
import { email, lock2 } from "@/assets";
import { AuthContainer, CustomInput } from "@/components/common";
import { authApiVaraibles } from "@/constants";
import useForgotPassword from "@/hooks/forgotPassword";
import { forgetPasswordSchema } from "@/validation";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { forgotPassword, isLoading } = useForgotPassword();
  const initialValues = { email: "" };

  const handleSubmit = (values) => {
    const objToSend = {
      ...authApiVaraibles,
      email: values.email,
      otpType: "Generate",
      forgotpassword: 1,
    };
    forgotPassword(objToSend, () => toast.success("Check your email"));
  };

  const TextComp = ({ children }) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "15px",
        img: { filter: (theme) => theme.palette.filterImg },
      }}
    >
      <Image src={lock2} width={57} height={57} alt="Lock Icon" />
      <Typography variant="h1" sx={{ lineHeight: "40px", textAlign: "center" }}>
        Reset Password
      </Typography>
      {children}
    </Box>
  );

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
            rowGap: "25px",
          }}
        >
          <>
            <TextComp>
              <Typography
                variant="h3"
                sx={{
                  lineHeight: "29px",
                  textAlign: "center",
                  width: { xs: "90%", sm: "75%", md: "70%", xl: "70%" },
                }}
              >
                Please enter your email address. We will send you an email to
                reset your password.
              </Typography>
            </TextComp>
            <Formik
              initialValues={initialValues}
              validationSchema={forgetPasswordSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, handleBlur, errors, touched }) => (
                <Form>
                  <Box
                    sx={{
                      width: "95%",
                      margin: "auto auto",
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "25px",
                    }}
                  >
                    <CustomInput
                      variant="filled"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      label="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={touched.email && errors.email}
                      helperText={touched.email && errors.email}
                      startAdornment={
                        <Image
                          src={email}
                          width={24}
                          height={24}
                          alt="User Icon"
                        />
                      }
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      rowGap: "25px",
                      marginTop: "25px",
                    }}
                  >
                    <LoadingButton
                      loading={isLoading}
                      disabled={isLoading}
                      loadingPosition="end"
                      variant="primary"
                      sx={{
                        width: "95%",
                        margin: "auto auto",
                        height: "48px",
                      }}
                      type="submit"
                    >
                      Send Email
                    </LoadingButton>
                    <Typography
                      sx={{
                        lineHeight: "29px",
                        color: (theme) => theme.palette.white,
                        fontSize: "14px",
                      }}
                    >
                      Do not have an account?{" "}
                      <Link
                        style={{ textDecoration: "none" }}
                        href={"/sign-up"}
                      >
                        <Typography
                          component="span"
                          sx={{
                            color: (theme) => theme.palette.secondary.main,
                            cursor: "pointer ",
                          }}
                        >
                          Sign Up
                        </Typography>
                      </Link>
                    </Typography>
                  </Box>
                </Form>
              )}
            </Formik>
          </>
        </Box>
      </AuthContainer>
    </Box>
  );
};

export default ForgetPassword;
