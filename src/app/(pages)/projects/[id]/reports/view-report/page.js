'use client'

import theme from "@/app/theme";
import { demoReport, pencil, zoomIn, zoomOut } from "@/assets";
import { DirectoryController, ProgressBar } from "@/components/common";
import { projects } from "@/constants";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import EditReportModal from "./EditReportModal";

const ViewReport = () => {
    const [editReportModal, setEditReportModal] = useState(false);
    const [directory, setDirectory] = useState({
        name: "",
        link: [],
    });

    const pathname = usePathname();
    const onlessThanSm = useMediaQuery(theme.breakpoints.down("sm"));


    const handleEditReportFile = () => {
        setEditReportModal(false);
    }

    useEffect(() => {
        const ProductId = pathname.split("/")[2];
        const { projectName } = projects.find((item) => item.id == ProductId);
        setDirectory({ name: projectName, link: ["Project", "/", projectName] });
    }, [pathname]);



    const IconButton = ({ icon }) => {
        return (
            <Button
                sx={{
                    borderRadius: "10px !important",
                    minWidth: "32px",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                }}
                variant="primary"
            >
                <Image src={icon} alt="icon" />
            </Button>
        )
    }


    const Header = () => {
        return (
            <Stack
                sx={{ marginTop: 5 }}
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                gap={2}
                marginBottom={4}
            >

                <Typography variant="h2">Report Preview
                </Typography>

                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                }}>

                    <Box
                        sx={{
                            cursor: "pointer",

                        }}
                        onClick={() => setEditReportModal(true)}

                    >
                        <Image src={pencil} alt="pen" width={42} height={42}
                        />
                    </Box>

                    <Button
                        sx={{
                            height: "44px",
                            width: "180px",
                        }} variant="primary">Download Report</Button>
                </Box>

            </Stack>
        )
    }



    return (
        <Box>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                marginTop={1}
                gap={2}
            >
                <DirectoryController title={directory.name} links={directory.link} />
                <ProgressBar
                    title="Getting Started "
                    desc="Complete your project"
                    perc={28}
                />
            </Stack>

            <Header />


            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }
            }}>
                <Box sx={{
                    width: { xs: "100%", md: '256px' },
                    height: '65vh',
                    border: '1px solid #36405D',
                    borderRadius: '16px',
                    padding: '20px',
                    background: (theme) => theme.palette.gradientPrimary,
                    // display: { xs: 'none', md: 'flex' },
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>

                    <Typography
                        sx={{
                            background: (theme) => theme.palette.headingColor,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textAlign: "center",
                            height: "97px",
                            fontSize: "20px",
                            fontWeight: "500"
                        }}>
                        Page
                    </Typography>


                    <Image src={demoReport} alt="demo" width={166} height={215} />

                </Box>


                <Box sx={{
                    flex: 1,
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '10px',
                        marginTop: { xs: "40px", md: "0px" }
                    }}>

                        <IconButton icon={zoomIn} />
                        <IconButton icon={zoomOut} />

                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image src={demoReport} alt="demo" width={onlessThanSm ? 200 : 490} height={onlessThanSm ? 400 : 600} />
                    </Box>
                </Box>
            </Box>


            <EditReportModal
                open={editReportModal}
                handleClose={() => setEditReportModal(false)}
                onConfirm={handleEditReportFile}
                showfooter
            />
        </Box>
    )
}

export default ViewReport