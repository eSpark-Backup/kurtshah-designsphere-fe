"use client"

import { DirectoryController, ProgressBar } from "@/components/common";
import { Box, Button, Stack, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filter, darkThemeFilter } from "@/assets";
import Image from "next/image";
import CreateReportInitialForm from "./CreateReportInitialForm";
import { projects } from "@/constants";
import CreateReportFinalForm from "./CreateReportFinalForm";


const CreateReport = () => {
    const { currentTheme } = useSelector(state => state.theme)
    const [formProceeds, setFormProceeds] = useState(1);
    const [directory, setDirectory] = useState({
        name: "",
        link: [],
    });

    const pathname = usePathname();
    const router = useRouter();

    const ProductId = pathname.split("/")[2];



    const handleInitialSubmit = (values) => {
        console.log(values)
        setFormProceeds(2);
    }

    const handleFinalSubmit = (values) => {
        console.log(values)
        router.push(`/projects/${ProductId}/reports/view-report`)
    }


    useEffect(() => {
        
        const { projectName } = projects.find((item) => item.id == ProductId);
        setDirectory({ name: projectName, link: ["Project", "/", projectName, , "/", "Reports"] });
    }, [ProductId]);

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

                <Typography variant="h2">Create Reports
                </Typography>

                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                }}>

                    <Box sx={{
                        cursor: "pointer",
                    }}>
                        <Image src={currentTheme ? darkThemeFilter : filter} alt="filter-icon" width={48} height={48}
                        />
                    </Box>

                    <Button
                        onClick={() => router.push(`/projects/${projectId}/reports/create-report`)}
                        sx={{
                            height: "44px",
                            width: "147px",
                        }} variant="primary">Create Project</Button>
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

            <Box>


                {
                    formProceeds === 1 ?
                        <>
                            <Header />
                            <CreateReportInitialForm handleForm={handleInitialSubmit} />
                        </>

                        : <CreateReportFinalForm handleForm={handleFinalSubmit} setFormProceeds={setFormProceeds} />
                }

            </Box>
        </Box>

    )
}

export default CreateReport