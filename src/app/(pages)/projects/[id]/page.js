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
  projectTabs,
  activityFeed,
  notes,
} from "@/constants";
import useGetAllProjectPlans from "@/hooks/getProjectPlans";

const ProjectDetails = () => {
  const { getProjectPlans } = useGetAllProjectPlans();
  const [plansCount, setPlansCount] = useState(0)
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const router = useRouter();
  const [directory] = useState({
    name: "Alpha",
    link: ["Project", "/", "Alpha"],
  });

  const handleViewSubPages = (link) => {
    router.push(`${pathname}${link}`);
  };

  useEffect(() => {
    getProjectPlans(1, 1, id, (res) => {
      setPlansCount(res?.data?.result?.totalRecords)
    })
  },[])

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
      <Grid marginTop={3} container spacing={2}>
        {projectTabs(plansCount).map((tab) => {
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
          <Collaborators />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Overview />
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
