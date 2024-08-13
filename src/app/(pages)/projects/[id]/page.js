"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Box, Grid, Stack } from "@mui/material";
import { DirectoryController, ProgressBar } from "@/components/common";
import TabBox from "./tab-box";
import Overview from "./overview";
import Feed from "./feed";
import Collaborators from "./collaborators";
import Notes from "./notes";
import {
  projects,
  projectTabs,
  collaborators,
  overview,
  activityFeed,
  notes,
} from "@/constants";

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
    router.push(`${pathname}${link}`);
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
      <Grid marginTop={2} container spacing={2}>
        <Grid item xs={12} md={8}>
          <Collaborators collaborators={collaborators} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Overview overview={overview} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Feed feed={activityFeed} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Notes notes={notes} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectDetails;
