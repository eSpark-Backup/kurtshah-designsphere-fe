"use client"
import { checkVerified, lock, message } from '@/assets'
import { AuthContainer } from '@/components/common'
import { LoadingButton } from '@mui/lab'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VerifyEmail = () => {
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
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            rowGap: "25px"
                        }}
                    >
                        <Image
                            src={checkVerified}
                            width={64}
                            height={64}
                            alt='Verified Icon'
                        />
                        <Typography variant='h1'
                            sx={{
                                lineHeight: "40px",
                                textAlign: "center",
                            }}>
                            Email Verification <br /> Required
                        </Typography>
                        <Typography variant='h3'
                            sx={{
                                lineHeight: "29px",
                                textAlign: "center",
                                width: { xs: "100%", sm: "75%", md: "70%", lg: "60%", xl: "45%" },
                                fontSize: { xs: "15px", sm: "18px" }
                            }}>
                            A verification email was sent to yousha@esparkconsultants.com
                        </Typography>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            rowGap: "20px",
                            width: "100%",
                            marginTop: "25px"
                        }}>
                            <Button type="submit" variant='tertiary' sx={{ width: "95%", margin: "auto auto", height: "48px" }}>
                                <Image src={message} width={24} height={24} style={{ marginRight: "10px" }} />
                                Resend Email
                            </Button>
                            <Link href={"/email-verified"} style={{ width: "95%", margin: "auto auto" }}>
                                <LoadingButton
                                    loading={false}
                                    loadingPosition="end"
                                    variant="primary"
                                    sx={{ height: "48px" }}
                                    type='submit'
                                >
                                    Let’s Go
                                </LoadingButton>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </AuthContainer>
        </Box>
    )
}

export default VerifyEmail
