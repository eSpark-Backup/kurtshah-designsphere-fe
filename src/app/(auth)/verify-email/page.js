import { checkVerified, lock } from '@/assets'
import { AuthContainer } from '@/components/common'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VerifyEmail = () => {
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
                            width: { xs: "100%", sm: "75%", md: "60%", lg: "60%", xl: "45%" }
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
                            <Image src={lock} width={24} height={24} style={{ marginRight: "10px" }} />
                            Resend Email
                        </Button>
                        <Link href={"/email-verified"} style={{ width: "95%", margin: "auto auto" }}>
                            <Button type="submit" variant='primary' sx={{ height: "48px" }}>
                                Let’s Go
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </AuthContainer>
    )
}

export default VerifyEmail
