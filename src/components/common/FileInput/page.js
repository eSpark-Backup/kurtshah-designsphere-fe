import { gallery } from '@/assets'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const FileInput = () => {
    return (
        <Box>
            <input
                accept="image/*" // Change this to accept different file types
                style={{ display: 'none' }}
                id="raised-button-file"
                type="file"
            />
            <label htmlFor="raised-button-file">
                <Box
                    sx={{
                        width: "100px",
                        height: "100px",
                        border: "1px solid white",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        rowGap: "4px",
                        cursor: "pointer",
                        background: "linear-gradient(180deg, rgba(51, 64, 100, 0.05) 0%, #38466B 100%)"

                    }}
                >
                    <Image
                        src={gallery}
                        width={24}
                        height={24}
                        alt='Upload Icon'
                    />
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: "white",
                            fontWeight: "400"
                        }}
                    >
                        Upload
                    </Typography>
                </Box>
            </label>
        </Box>
    )
}

export default FileInput
