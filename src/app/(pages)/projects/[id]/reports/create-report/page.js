"use client"

import { DirectoryController, ProgressBar } from "@/components/common";
import { Box, Button, Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { filter } from "@/assets";
import Image from "next/image";
import CreateReportInitialForm from "./CreateReportInitialForm";
import { projects } from "@/constants";


const CreateReport = () => {

    const [directory, setDirectory] = useState({
        name: "",
        link: [],
    });

    const pathname = usePathname();



    const handleInitialSubmit = (values) => {
        console.log(values)
    }


    useEffect(() => {
        const id = pathname.split("/")[2];
        const { projectName } = projects.find((item) => item.id == id);
        setDirectory({ name: projectName, link: ["Project", "/", projectName, , "/", "Reports"] });
    }, [pathname]);

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

                <Typography
                    sx={{
                        background: (theme) => theme.palette.headingColor,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: 500,
                        fontSize: "24px"
                    }}
                >Create Reports
                </Typography>

                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                }}>

                    <Box sx={{
                        cursor: "pointer",
                    }}>
                        <Image src={filter} alt width={48} height={48}
                        />
                    </Box>

                    <Button
                        onClick={() => router.push(`/projects/${projectId}/reports/create-report`)}
                        sx={{
                            height: "44px",
                            width: "147px",
                        }} variant="primary">Create Reports</Button>
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
                gap={2}
            >
                <DirectoryController title={directory.name} links={directory.link} />
                <ProgressBar
                    title="Getting Started "
                    desc="Complete your project"
                    perc={28}
                />
            </Stack>

            <Box>
                <Header />
                <CreateReportInitialForm handleForm={handleInitialSubmit} />
            </Box>
        </Box>

    )
}

export default CreateReport