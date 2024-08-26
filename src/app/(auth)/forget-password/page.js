"use client"
import theme from '@/app/theme'
import { email, lock2, message } from '@/assets'
import { AuthContainer, CustomInput } from '@/components/common'
import { forgetPasswordSchema } from '@/validation'
import { LoadingButton } from '@mui/lab'
import { Box, Button, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const ForgetPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = { email: "" }

  const handleSubmit = (values) => {
    console.log(values?.email)
    setIsSubmitted(true);
  }

  const TextComp = ({ children }) => (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: "15px" }}>
      <Image src={lock2} width={57} height={57} alt='Lock Icon' />
      <Typography variant='h1' sx={{ lineHeight: "40px", textAlign: "center" }}>
        Reset Password
      </Typography>
      {children}
    </Box>
  )

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
        <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", rowGap: "25px" }}>
          {isSubmitted ? (
            <>
              <TextComp>
                <Typography variant='h1' sx={{ lineHeight: "40px", textAlign: "center", fontSize: "20px", fontWeight: "600" }}>
                  Recovery Email Sent!
                </Typography>
                <Typography variant='h3' sx={{ lineHeight: "29px", textAlign: "center" }}>
                  Please check your email for next <br /> steps to reset your password.
                </Typography>
              </TextComp>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: "25px", marginTop: "25px" }}>
                <Button type="submit" variant='tertiary' sx={{ width: "95%", margin: "auto auto", height: "48px" }}>
                  Contact Support
                </Button>
                <Link href={"/sign-in"} style={{ width: "95%", margin: "auto auto" }}>
                  <Button type="submit" variant='primary' sx={{ height: "48px" }}>
                    Back to sign-in
                  </Button>
                </Link>
              </Box>
            </>
          ) : (
            <>
              <TextComp>
                <Typography variant='h3' sx={{ lineHeight: "29px", textAlign: "center", width: { xs: "90%", sm: "75%", md: "70%", xl: "70%" } }}>
                  Please enter your email address. We will send you an email to reset your password.
                </Typography>
              </TextComp>
              <Formik initialValues={initialValues} validationSchema={forgetPasswordSchema} onSubmit={handleSubmit}>
                {({ values, handleChange, handleBlur, errors, touched }) => (
                  <Form>
                    <Box sx={{ width: "95%", margin: "auto auto", display: "flex", flexDirection: "column", rowGap: "25px" }}>
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
                        startAdornment={<Image src={email} width={24} height={24} alt='User Icon' />}
                      />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: "25px", marginTop: "25px" }}>
                      <LoadingButton
                        loading={false}
                        loadingPosition="end"
                        variant="primary"
                        sx={{ width: "95%", margin: "auto auto", height: "48px" }}
                        type='submit'
                      >
                        Send Email
                      </LoadingButton>
                      <Typography sx={{ lineHeight: "29px", color: (theme) => theme.palette.white, fontSize: "14px" }}>
                        Do not have an account? <Link style={{ textDecoration: "none" }} href={"/sign-up"}>
                          <span style={{ color: theme.palette.secondary.main, cursor: "pointer " }}>Sign Up</span>
                        </Link>
                      </Typography>
                    </Box>
                  </Form>
                )}
              </Formik>
            </>
          )}
        </Box>
      </AuthContainer>
    </Box>
  )
}

export default ForgetPassword
