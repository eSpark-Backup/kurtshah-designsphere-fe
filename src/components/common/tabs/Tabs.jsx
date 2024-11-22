"use client"
import { TrackChangesTabs } from '@/constants'
import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const Tabs = ({ tabs, activeTab, TabHandler }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, rowGap: "10px" }}>
            {tabs?.map((item, index) => (
                <Box
                    key={index}
                    onClick={() => TabHandler(index)}
                    sx={{
                        height: "28px",
                        width: { xs: "100%", sm: "50%" },
                        background: theme => activeTab === index ? theme.palette.sidebarButtonBgActive : theme.palette.gradientSecondary,
                        borderRadius: {
                            xs: "16px",
                            sm: index === 0 ? "16px 0px 0px 16px" : index === tabs.length - 1 ? "0px 16px 16px 0px" : "0px"
                        },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        textTransform: "uppercase"
                    }}

                >
                    <Typography sx={{ fontSize: "12px", color: (theme) => theme.palette.white, fontWeight:"600" }}>{item?.TabContent}</Typography>
                </Box>
            ))}
        </Box>
    )
}

export default Tabs
