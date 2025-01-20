"use client"

import { lock, email, user, userTick } from '@/assets'
import { AuthContainer, CustomInput } from '@/components/common'
import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Formik, Form } from 'formik'
import { signupSchema } from '@/validation'
import { LoadingButton } from '@mui/lab'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const router = useRouter();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    recievedEmail: false
  }

  const handleSubmit = (values) => {
    console.log(values)
    router.push("/verify-email")
  }

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
      <AuthContainer register={true}>
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
            Sign Up to ARC ERP
          </Typography>


          <Formik
            initialValues={initialValues}
            validationSchema={signupSchema}
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
                    marginBottom: "30px"
                  }}>

                  <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    flexDirection: { xs: "column", sm: "row" }

                  }}>
                    <CustomInput
                      variant="filled"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      label="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      error={touched.firstName && errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                      startAdornment={<Image src={userTick} width={24} height={24} alt='User Tick Icon' />}
                    />
                    <CustomInput
                      variant="filled"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      label="Last Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      error={touched.lastName && errors.lastName}
                      helperText={touched.lastName && errors.lastName}
                      startAdornment={<Image src={user} width={24} height={24} alt='User Icon' />}
                    />
                  </Box>


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
                    startAdornment={<Image src={email} width={24} height={24} alt='Email Icon' />}
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
                    userHelpingText={"Minimum length is 8 characters."}
                  />
                </Box>

                <Box>
                  <FormControlLabel control={<Checkbox onChange={handleChange} sx={{ alignSelf: "flex-start", padding: "0px 10px" }} name="recievedEmail" />} label={
                    <>
                      By creating an account, you agree to the<span style={{ textDecoration: "underline" }}> Terms of Service</span>.  We&apos;ll occasionally send you account-related emails.
                    </>
                  } sx={{ paddingLeft: "20px", marginBottom: "20px" }} />
                  {touched.recievedEmail && errors.recievedEmail && (
                    <Typography sx={{ color: 'error.main', fontSize: '12px', paddingLeft: '50px', position: "relative", bottom: "20px" }}>
                      {errors.recievedEmail}
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
                    Sign Up
                  </LoadingButton>
                  <Typography
                    sx={{
                      lineHeight: "29px",
                      color: (theme) => theme.palette.white,
                      fontSize: "14px"
                    }}>
                    Already have an account? <Link href={"/sign-in"} style={{ textDecoration: "none" }}>
                      <Typography component="span" sx={{ color: (theme) => theme.palette.secondary.main, cursor: "pointer" }}>Sign In</Typography>
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

export default SignUp
