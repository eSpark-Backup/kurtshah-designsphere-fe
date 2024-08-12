"use client";

import { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { DirectoryController, ProgressBar } from "@/components/common";
import { projects, projectTabs } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { trendingDown, trendingUp } from "@/assets";
import Image from "next/image";

const ProjectDetails = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [directory, setDirectory] = useState({
    name: "",
    link: [],
  });
  useEffect(() => {
    const id = pathname.split("/")[2];
    const { projectName } = projects.find((item) => item.id == id);
    setDirectory({ name: projectName, link: ["Project", "/", projectName] });
  }, [pathname]);

  const handleViewSubPages = (link) => {
    router.push(`${pathname}${link}`)
  };

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
      <Grid marginTop={3} container spacing={2}>
        {projectTabs.map((tab) => {
          return (
            <Grid
              onClick={() => handleViewSubPages(tab.link)}
              sx={{ cursor: "pointer" }}
              key={tab.name}
              item
              xs={12}
              sm={6}
              md={4}
              lg={2.4}
            >
              <TabBox {...tab} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

const TabBox = ({ name, count, icon, trending }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={1}
      sx={{
        padding: "16px",
        // width: "256px",
        // height: "134px",
        borderRadius: "16px",
        border: "1px solid #FFFFFF1F",
        boxShadow: "0px 14px 79.3px -12px #00000030",
        background:
          "linear-gradient(180deg, rgba(51, 64, 100, 0.05) 0%, #38466B 100%)",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        <Image width={40} height={40} src={icon} alt="icon" />
        <Stack>
          <Typography
            sx={{
              background: (theme) => theme.palette.headingColor,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            fontSize="32px"
            fontWeight={600}
          >
            {count}
          </Typography>
          <Typography
            sx={{
              background: (theme) => theme.palette.headingColor,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            fontSize="12px"
            fontWeight={600}
          >
            {name}
          </Typography>
        </Stack>
      </Stack>
      <Image
        width={24}
        height={24}
        src={trending === "up" ? trendingUp : trendingDown}
        alt={trending}
      />
    </Stack>
  );
};

export default ProjectDetails;
