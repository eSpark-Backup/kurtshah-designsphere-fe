"use client";

import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { SidebarTab } from "@/components/common";
import ProfileGeneral from "./ProfileGeneral";
import ProfileCompany from "./ProfileCompany";
import Security from "./Security";

const Profile = () => {
  const [active, setActive] = useState(0);
  const profileTabs = [
    { title: "General", component: <ProfileGeneral /> },
    { title: "Company", component: <ProfileCompany /> },
    { title: "Security & Privacy", component: <Security /> },
  ];
  const tabsComponent = (profileTabs) => {
    return profileTabs[active].component;
  };
  return (
    <>
      <Grid
        sx={{ padding: { xs: 0, sm: "25px" }, minHeight: "100%" }}
        container
        spacing={2}
      >
        <Grid sx={{ minHeight: "100%" }} item xs={12} md={3}>
          <SidebarTab
            title="PROFILE"
            active={active}
            setActive={setActive}
            tabsArr={profileTabs}
          />
        </Grid>
        <Grid sx={{ minHeight: "100%" }} item xs={12} md={9}>
          <Box
            sx={{
              height: "100%",
            }}
          >
            {tabsComponent(profileTabs)}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
