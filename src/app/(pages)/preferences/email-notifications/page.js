"use client";

import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { SidebarTab } from "@/components/common";
import EmailNotificationTab from "./EmailNotificationTab";

const EmailNotification = () => {
  const [active, setActive] = useState(0);
  const emailNotificationTabs = [
    { title: "Collaborators", component: <EmailNotificationTab /> },
    { title: "Projects", component: <EmailNotificationTab /> },
    { title: "Files", component: <EmailNotificationTab /> },
    { title: "Revit", component: <EmailNotificationTab /> },
    { title: "Notes", component: <EmailNotificationTab /> },
  ];
  const tabsComponent = (emailNotificationTabs) => {
    return emailNotificationTabs[active].component;
  };
  return (
    <>
      <Grid
        sx={{ padding: { xs: 0, sm: "25px" }, minHeight: "100%" }}
        container
        spacing={2}
      >
        <Grid sx={{ minHeight: "100%" }} item xs={12} sm={3}>
          <SidebarTab
            title="Category"
            active={active}
            setActive={setActive}
            tabsArr={emailNotificationTabs}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box
            sx={{
              padding: "20px",
              border: "1px solid #E4E4E4",
              boxShadow: "0px 0px 10px 0px #00000040",
              borderRadius: "10px",
              height: "100%",
            }}
          >
            {tabsComponent(emailNotificationTabs)}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default EmailNotification;
