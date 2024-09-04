"use client";

import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { SidebarTab } from "@/components/common";
import EmailNotificationTab from "./EmailNotificationTab";
import Card from "@/components/common/Card";

const EmailNotification = () => {
  const [active, setActive] = useState(0);
  const emailNotificationTabs = [
    { title: "Collaborators", component: <EmailNotificationTab description={"Collaborator removed - This email is sent when a you are removed from a project"} /> },
    { title: "Projects", component: <EmailNotificationTab description={"This email is sent when a new project is created in ARC."} /> },
    { title: "Files", component: <EmailNotificationTab description={"This email is sent when a file is uploaded to the external project folder."} /> },
    { title: "Revit", component: <EmailNotificationTab description={"This email is sent when Revit hardware sets are available."} /> },
    { title: "Notes", component: <EmailNotificationTab description={"Note was assigned to user - this email is sent when a note is assigned to a user and prompts that the note sender is awaiting a response."} /> },
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
          <Card
            variant={"outline"}
            sx={{
              padding: "20px",
              height: "fit-content",
            }}
          >
            {tabsComponent(emailNotificationTabs)}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default EmailNotification;
