"use client";
import { lock, lock2 } from "@/assets";
import {
  AuthContainer,
  CustomInput,
  SuspenceContainer,
} from "@/components/common";
import { authApiVaraibles } from "@/constants";
import useForgotPassword from "@/hooks/forgotPassword";
import { forgetPasswordSchema2 } from "@/validation";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const TextComp = ({ title, children }) => (
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
      {title}
    </Typography>
    {children}
  </Box>
);

const ResetPassword = () => {
  const { forgotPassword, isLoading } = useForgotPassword();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const initialValues = { password: "", confirmPassword: "" };
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const handleSubmit = (values) => {
    const objToSend = {
      ...authApiVaraibles,
      email,
      token: encodeURIComponent(token),
      password: values.password,
      otpType: "Verify",
      forgotpassword: 1,
    };
    forgotPassword(objToSend, () => setIsSubmitted(1));
  };
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
            }}
          >
            {!isSubmitted ? (
              <>
                <TextComp title="Password Updated!">
                  <Typography
                    variant="h3"
                    sx={{ lineHeight: "29px", textAlign: "center" }}
                  >
                    Your password has been reset <br /> successfully. Please use
                    your new <br /> password to Sign in.
                  </Typography>
                </TextComp>
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
                  <Button
                    type="submit"
                    variant="tertiary"
                    sx={{
                      width: "95%",
                      margin: "auto auto",
                      height: "48px",
                      textTransform: "capitalize",
                    }}
                  >
                    Contact Support
                  </Button>
                  <Link
                    href={"/sign-in"}
                    style={{ width: "95%", margin: "auto auto" }}
                  >
                    <Button
                      type="submit"
                      variant="primary"
                      sx={{ height: "48px" }}
                    >
                      Back to sign-in
                    </Button>
                  </Link>
                </Box>
              </>
            ) : (
              <>
                <TextComp title="Reset Password">
                  <Typography
                    variant="h3"
                    sx={{
                      lineHeight: "29px",
                      textAlign: "center",
                      width: { xs: "90%", sm: "75%", md: "70%", xl: "70%" },
                    }}
                  >
                    Please enter your password.
                  </Typography>
                </TextComp>
                <Formik
                  initialValues={initialValues}
                  validationSchema={forgetPasswordSchema2}
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
                          name="password"
                          type="password"
                          placeholder="Enter new password"
                          label="New Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          error={touched.password && errors.password}
                          helperText={touched.password && errors.password}
                          startAdornment={
                            <Image
                              src={lock}
                              width={24}
                              height={24}
                              alt="User Icon"
                            />
                          }
                        />
                      </Box>
                      <Box
                        sx={{
                          width: "95%",
                          margin: "auto auto",
                          marginTop: "20px",
                          display: "flex",
                          flexDirection: "column",
                          rowGap: "25px",
                        }}
                      >
                        <CustomInput
                          variant="filled"
                          name="confirmPassword"
                          type="password"
                          placeholder="Re-type password"
                          label="Confirm password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                          error={
                            touched.confirmPassword && errors.confirmPassword
                          }
                          helperText={
                            touched.confirmPassword && errors.confirmPassword
                          }
                          startAdornment={
                            <Image
                              src={lock}
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
                          Reset
                        </LoadingButton>
                      </Box>
                    </Form>
                  )}
                </Formik>
              </>
            )}
          </Box>
        </AuthContainer>
      </Box>
    </SuspenceContainer>
  );
};

export default ResetPassword;
