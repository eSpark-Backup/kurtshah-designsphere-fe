"use client";

import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { SidebarTab } from "@/components/common";
import Collaborators from "./collaborators";
import Email from "./email";
import Plans from "./plans";

const Preferences = () => {
  const [active, setActive] = useState(0);
  const preferencesTabs = [
    { title: "Collaborators", component: <Collaborators /> },
    { title: "Email Notifications", component: <Email /> },
    { title: "View Plans", component: <Plans /> },
  ];
  const tabsComponent = (preferencesTabs) => {
    return preferencesTabs[active].component;
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
            title="PREFERENCES"
            active={active}
            setActive={setActive}
            tabsArr={preferencesTabs}
          />
        </Grid>
        <Grid sx={{ minHeight: "100%" }} item xs={12} md={9}>
          <Box
            sx={{
              padding: "20px",
              border: "1px solid #E4E4E4",
              boxShadow: "0px 0px 10px 0px #00000040",
              borderRadius: "10px",
              height: "100%",
            }}
          >
            {tabsComponent(preferencesTabs)}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Preferences;
