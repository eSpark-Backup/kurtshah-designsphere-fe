"use client"
import { AuthContainer, FileInput } from '@/components/common'
import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useState } from 'react'

const LetsStart = () => {
    const [image, setImage] = useState(null);

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
                    Let’s Start
                </Typography>
                <Typography variant='h3'
                    sx={{
                        lineHeight: "40px",
                        textAlign: "center",
                    }}>
                    Profile picture
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        rowGap: "20px"
                    }}
                >
                    <FileInput image={image} setImage={setImage} />
                    <FormControlLabel control={<Checkbox sx={{ alignSelf: "flex-start", padding: "0px 10px" }} name="recievedEmail" />} label="It is ok to contact me with newsletters, new product announcements, etc" sx={{ marginBottom: "20px" }} />
                    <Button
                        variant="primary"
                        sx={{ width: "95%", margin: "auto auto", height: "48px" }}
                        type='submit'
                    >
                        Done
                    </Button>
                </Box>
            </Box>
        </AuthContainer>
    )
}

export default LetsStart
