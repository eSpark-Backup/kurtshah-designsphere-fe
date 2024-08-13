import { AuthContainer, FileInput } from '@/components/common'
import { LoadingButton } from '@mui/lab'
import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import React from 'react'

const LetsStart = () => {
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
                    <FileInput />
                    <FormControlLabel control={<Checkbox sx={{ alignSelf: "flex-start", padding: "0px 10px" }} name="recievedEmail" />} label="It is ok to contact me with newsletters, new product announcements, etc" sx={{ marginBottom: "20px" }} />
                    <Button
                        loading={false}
                        loadingPosition="end"
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
