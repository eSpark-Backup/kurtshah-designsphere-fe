"use client"
import { lock2, message } from '@/assets'
import { AuthContainer, CustomInput } from '@/components/common'
import { forgetPasswordSchema } from '@/validation'
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
    <AuthContainer>
      <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", rowGap: "25px" }}>
        {isSubmitted ? (
          <>
            <TextComp>
              <Typography variant='h1' sx={{ lineHeight: "40px", textAlign: "center", fontSize: "20px" }}>
                Recovery Email Sent!
              </Typography>
              <Typography variant='h3' sx={{ lineHeight: "29px", textAlign: "center", width: { xs: "90%", sm: "75%", md: "60%", lg: "60%", xl: "45%" } }}>
                Please check your email for next steps to reset your password.
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
              <Typography variant='h3' sx={{ lineHeight: "29px", textAlign: "center", width: { xs: "90%", sm: "75%", md: "60%", lg: "60%", xl: "45%" } }}>
                Please enter your email address. We will send you an email to reset your password.
              </Typography>
            </TextComp>
            <Formik initialValues={initialValues} validationSchema={forgetPasswordSchema} onSubmit={handleSubmit}>
              {({ values, handleChange, handleBlur, errors, touched }) => (
                <Form>
                  <Box sx={{ width: "95%", margin: "auto auto", display: "flex", flexDirection: "column", rowGap: "25px" }}>
                    <CustomInput
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      label="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={touched.email && errors.email}
                      helperText={touched.email && errors.email}
                      startAdornment={<Image src={message} width={24} height={24} alt='User Icon' />}
                    />
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: "25px", marginTop: "25px" }}>
                    <Button type="submit" variant='primary' sx={{ width: "95%", margin: "auto auto", height: "48px" }}>
                      Send Email
                    </Button>
                    <Typography sx={{ lineHeight: "29px", color: "#FFFFFF", fontSize: "14px" }}>
                      Do not have an account? <span style={{ color: "#6191FF", cursor: "pointer " }}>Sign Up</span>
                    </Typography>
                  </Box>
                </Form>
              )}
            </Formik>
          </>
        )}
      </Box>
    </AuthContainer>
  )
}

export default ForgetPassword
