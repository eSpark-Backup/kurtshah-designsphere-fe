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
                        background: activeTab === index ? "linear-gradient(180deg, #547CD3 0%, #6191FD 100%)" : "linear-gradient(246.54deg, #36456A -19.2%, #2B3758 41.17%, #1A243D 101.55%)",
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
                    <Typography sx={{ fontSize: "12px", color: "white" }}>{item?.TabContent}</Typography>
                </Box>
            ))}
        </Box>
    )
}

export default Tabs
