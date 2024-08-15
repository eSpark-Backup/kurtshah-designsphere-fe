"use client"

import { Box, Stack, Typography } from '@mui/material'

const Tabs = ({ tabOneContent, tabTwoContent, activeTab, TabHandler }) => {


    return (
        <Stack direction={{ xs: "column", sm: "row" }} rowGap={2}>
            <Box
                onClick={() => TabHandler(1)}
                sx={{
                    height: "28px",
                    width: { xs: "100%", sm: "50%" },
                    background: activeTab === 1 ? "linear-gradient(180deg, #547CD3 0%, #6191FD 100%)" : "linear-gradient(246.54deg, #36456A -19.2%, #2B3758 41.17%, #1A243D 101.55%)",
                    borderRadius: { xs: "16px", sm: "16px 0px 0px 16px" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    textTransform: "uppercase"
                }}

            >
                <Typography sx={{ fontSize: "12px", color: "white" }}>{tabOneContent}</Typography>
            </Box>
            <Box
                onClick={() => TabHandler(2)}
                sx={{
                    height: "28px",
                    width: { xs: "100%", sm: "50%" },
                    background: activeTab === 2 ? "linear-gradient(180deg, #547CD3 0%, #6191FD 100%)" : "linear-gradient(246.54deg, #36456A -19.2%, #2B3758 41.17%, #1A243D 101.55%)",
                    borderRadius: { xs: "16px", sm: "0px 16px 16px 0px" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    textTransform: "uppercase"
                }}

            >
                <Typography sx={{ fontSize: "12px", color: "white" }}>{tabTwoContent}</Typography>
            </Box>
        </Stack>
    )
}

export default Tabs