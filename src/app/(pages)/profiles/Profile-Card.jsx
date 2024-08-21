import { location } from '@/assets'
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
    const isLessthanSm = useMediaQuery('(max-width:599px)');
    return (
        <Box
            sx={{
                width: "100%",
                border: "1px solid #E4E4E4",
                boxShadow: "0px 0px 10px 0px #00000040",
                borderRadius: "10px",
                padding: "55px 30px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row" },
                rowGap: "20px",
                height: isLessthanSm ? "auto" : "100px"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    columnGap: "30px",
                    alignItems: "center",
                    flexDirection: { xs: "column", sm: "row" },
                    rowGap: "20px"
                }}
            >
                <Box
                    sx={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background: "#FAFAFA",
                        border: "1px solid #E4E4E4",
                        boxShadow: "0px 0px 5px 0px #00000040",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "20px",
                            color: "#444444",
                            fontWeight: "700"
                        }}
                    >
                        AS
                    </Typography>

                </Box>
                <Stack direction={"column"} gap={1}>
                    <Typography
                        sx={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#FFFFFF"
                        }}
                    >
                        AREEBA SHAKEEL
                    </Typography>
                    <Stack direction={"row"} gap={1} sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
                        <Image
                            src={location}
                            width={24}
                            height={24}
                            alt='Location Icon'
                        />
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "#FFFFFF"
                            }}
                        >
                            Germany
                        </Typography>
                    </Stack>
                </Stack>

            </Box>

            <Box sx={{ width: { xs: "100%", sm: "80px" }, height: "40px" }}>
                <Button type='submit' variant='primary'>Save</Button>
            </Box>
        </Box>
    )
}

export default ProfileCard
