import { gallery } from '@/assets'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const FileInput = ({ image, setImage }) => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file)
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    return (
        <Box>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                type="file"
                onChange={handleFileChange}
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
                        background: (theme)=> theme.palette.gradientPrimary,

                    }}
                >
                    {image ? (
                        <img
                            src={image}
                            alt="Uploaded"
                            style={{
                                width: "70%",
                                height: "70%",
                            }}
                        />
                    ) : (
                        <>
                            <Image
                                src={gallery}
                                width={24}
                                height={24}
                                alt='Upload Icon'
                            />
                            <Typography
                                variant="h4"
                                sx={{
                                    color: (theme) => theme.palette.white,
                                    fontWeight: "400 !important"
                                }}
                            >
                                Upload
                            </Typography>
                        </>
                    )}
                </Box>
            </label>
        </Box>
    )
}

export default FileInput
