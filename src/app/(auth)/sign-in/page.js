"use client"
import theme from '@/app/theme'
import { lock, email, user } from '@/assets'
import { AuthContainer, CustomInput } from '@/components/common'
import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Formik, Form } from 'formik'
import { signinSchema } from '@/validation'
import Link from 'next/link'
import { LoadingButton } from '@mui/lab'
import { useDispatch } from "react-redux";
import { login } from "@/lib/store/slices/auth";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false
  }

  const handleSubmit = (values) => {
    dispatch(
      login({
        email: values?.email,
        password: values?.password,
        callback: () => router.push("/projects"),
      })
    );
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
            rowGap: "25px"
          }}>
          <Typography variant='h1'
            sx={{
              lineHeight: "40px",
              textAlign: "center"
            }}>
            Sign In to ARC ERP
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant='h3'
              sx={{
                lineHeight: "29px",
                textAlign: "center",
                width: { xs: "100%", md: "70%" },
              }}>
              Securing the places where people live and thrive.
            </Typography>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={signinSchema}
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
                    rowGap: "25px"
                  }}>
                  <CustomInput
                    variant="filled"
                    name="email"
                    type="text"
                    placeholder="Username or email"
                    label="Username or email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && errors.email}
                    helperText={touched.email && errors.email}
                    startAdornment={<Image src={user} width={24} height={24} alt='Email Icon' />}
                  />
                  <CustomInput
                    variant="filled"
                    name="password"
                    type="password"
                    placeholder="Password"
                    label="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={touched.password && errors.password}
                    helperText={touched.password && errors.password}
                    startAdornment={<Image src={lock} width={24} height={24} alt='Lock Icon' />}
                  />
                </Box>
                <Box
                  sx={{
                    width: "95%",
                    margin: "auto auto",
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "20px"
                  }}
                >
                  <Link href={"/forget-password"} style={{ textDecoration: "none" }}>
                    <Typography sx={{ color: (theme) => theme.palette.secondary.main, fontSize: "14px", cursor: "pointer", fontWeight: "600" }}>Forgot Password?</Typography>
                  </Link>
                </Box>
                {/* <FormControlLabel control={<Checkbox onChange={handleChange} name="rememberMe" />} label="Remember Me" sx={{ paddingLeft: "20px", marginBottom: "20px" }} /> */}
                <Box>
                  <FormControlLabel control={<Checkbox onChange={handleChange} sx={{ alignSelf: "flex-start", padding: "0px 10px" }} name="rememberMe" />} label={
                    <>
                      Remember Me
                    </>
                  } sx={{ paddingLeft: "20px", marginBottom: "20px" }} />
                  {touched.rememberMe && errors.rememberMe && (
                    <Typography sx={{ color: 'error.main', fontSize: '12px', paddingLeft: '50px', position: "relative", bottom: "20px" }}>
                      {errors.rememberMe}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: "25px" }}>
                  <LoadingButton
                    loading={false}
                    loadingPosition="end"
                    variant="primary"
                    sx={{ width: "95%", margin: "auto auto", height: "48px" }}
                    type='submit'
                  >
                    Log In
                  </LoadingButton>
                  <Typography
                    sx={{
                      lineHeight: "29px",
                      color: (theme) => theme.palette.white,
                      fontSize: "14px"
                    }}>
                    Do not have an account? <Link style={{ textDecoration: "none" }} href={"/sign-up"}>
                      <Typography component="span" sx={{ color: theme => theme.palette.secondary.main, cursor: "pointer " }}>Sign Up</Typography>
                    </Link>
                  </Typography>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </AuthContainer>
    </Box>
  )
}

export default SignIn
