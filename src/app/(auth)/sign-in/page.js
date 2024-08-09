"use client"
import { lock, user } from '@/assets'
import { AuthContainer, CustomInput } from '@/components/common'
import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const HandleSubmit = () => {
    console.log(formData?.email)
    console.log(formData?.password)
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
            lineHeight: "40px"
          }}>
          Sign In to ARC ERP
        </Typography>
        <Typography variant='h3'
          sx={{
            lineHeight: "29px"
          }}>
          Securing the places where people <br /> live and thrive.
        </Typography>
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
            type={"email"}
            placeholder={"Username or email"}
            label={"Username or email"}
            onChange={(e) => HandleChange(e)}
            startAdornment={<Image src={user} width={24} height={24} alt='User Icon' />}
          />
          <CustomInput
            name="password"
            type={"password"}
            placeholder={"Password"}
            label={"Password"}
            onChange={(e) => HandleChange(e)}
            startAdornment={<Image src={lock} width={24} height={24} alt='Lock Icon' />}
          />
        </Box>
        <Box
          sx={{
            width: "95%",
            margin: "auto auto",
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <Typography sx={{ color: "#6191FF", fontSize: "14px", cursor: "pointer" }}>Forgot Password?</Typography>
        </Box>
        <FormControlLabel control={<Checkbox />} label="Remember Me" sx={{ paddingLeft: "20px" }} />
        <Button variant='primary' sx={{ width: "95%", margin: "auto auto", height: "48px" }} onClick={HandleSubmit}>
          Log In
        </Button>
        <Typography
          sx={{
            lineHeight: "29px",
            color: "#FFFFFF",
            fontSize: "14px"
          }}>
          Do not have an account? <span style={{ color: "#6191FF", cursor: "pointer " }}>Sign Up</span>
        </Typography>
      </Box>
    </AuthContainer>
  )
}

export default SignIn