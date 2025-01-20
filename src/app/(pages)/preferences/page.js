"use client";

import { useState } from "react";
import { Grid } from "@mui/material";
import { SidebarTab } from "@/components/common";
import Collaborators from "./collaborators";
import Email from "./email";
import Plans from "./plans";
import ThemeTab from "./theme";
import Card from "@/components/common/Card";

const Preferences = () => {
  const [active, setActive] = useState(0);
  const preferencesTabs = [
    { title: "Contacts", component: <Collaborators /> },
    { title: "Email Notifications", component: <Email /> },
    { title: "View Plans", component: <Plans /> },
    { title: "Themes", component: <ThemeTab /> },
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
          <Card
            variant={"outline"}
            sx={{
              padding: "20px",
              height: "100%",
            }}
          >
            {tabsComponent(preferencesTabs)}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Preferences;
