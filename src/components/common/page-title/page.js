import { Box, Typography } from '@mui/material'
import React from 'react'

const PageTitle = ({ content }) => {
    return (
        <Box
            sx={{
                height: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#1D2641",
                fontSize: "20px",
                color: (theme) => theme.palette.white,
                fontWeight: "500"
            }}
        >
            <Typography
                sx={{
                    fontSize: "20px",
                    color: (theme) => theme.palette.white,
                    fontWeight: "500"
                }}>
                {content}
            </Typography>
        </Box >
    )
}

export default PageTitle
