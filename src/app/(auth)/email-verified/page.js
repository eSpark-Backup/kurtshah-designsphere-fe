"use client"
import { checkVerified } from '@/assets'
import { AuthContainer } from '@/components/common'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const EmailVerified = () => {
    const router = useRouter();
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
                            Email Verified!
                        </Typography>
                        <Typography variant='h3'
                            sx={{
                                lineHeight: "29px",
                                textAlign: "center",
                                width: { xs: "100%", sm: "75%", md: "60%", lg: "60%", xl: "45%" }
                            }}>
                            Your email yousha@esparkconsultants.com is successfully verified!
                        </Typography>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            rowGap: "20px",
                            width: "100%",
                            marginTop: "45px"
                        }}>
                            <Button type="submit" variant='primary' sx={{ width: "95%", margin: "auto auto", height: "48px" }} onClick={() => router.push("/profile-details")}>
                                Next
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </AuthContainer>
        </Box>
    )
}

export default EmailVerified
