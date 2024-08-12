"use client"
import { lock, user } from '@/assets'
import { AuthContainer, CustomInput } from '@/components/common'
import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Formik, Form } from 'formik'
import { signinSchema } from '@/validation'
import Link from 'next/link'
import { LoadingButton } from '@mui/lab'

const SignIn = () => {
  const initialValues = {
    email: "",
    password: ""
  }

  const handleSubmit = (values) => {
    console.log(values?.email)
    console.log(values?.password)
  }

  return (
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
        <Typography variant='h3'
          sx={{
            lineHeight: "29px",
            textAlign: "center"
          }}>
          Securing the places where people <br /> live and thrive.
        </Typography>
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
                  name="email"
                  type="email"
                  placeholder="Username or email"
                  label="Username or email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                  startAdornment={<Image src={user} width={24} height={24} alt='User Icon' />}
                />
                <CustomInput
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
                  <Typography sx={{ color: "#6191FF", fontSize: "14px", cursor: "pointer" }}>Forgot Password?</Typography>
                </Link>
              </Box>
              <FormControlLabel control={<Checkbox name="rememberMe" />} label="Remember Me" sx={{ paddingLeft: "20px", marginBottom: "20px" }} />
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
                    color: "#FFFFFF",
                    fontSize: "14px"
                  }}>
                  Do not have an account? <span style={{ color: "#6191FF", cursor: "pointer " }}>Sign Up</span>
                </Typography>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </AuthContainer>
  )
}

export default SignIn
