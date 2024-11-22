import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Card from "@/components/common/Card";
import Configurator from "./configurator";
import GetsCut from "./get-cuts";

const HardwareSet = () => {
  const tabs = [
    { title: "Open Configurator", component: <Configurator /> },
    { title: "Edit", component: <></> },
    { title: "Update", component: <></> },
    {
      title: "Get Cuts",
      component: <GetsCut />,
    },
    { title: "Print Door(s)", component: <></> },
    { title: "Print  Frame", component: <></> },
    { title: "New Job", component: <></> },
    { title: "New Opening", component: <></> },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <>
      <Card sx={{ marginTop: 2 }} variant="gradient">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          sx={{
            overflowX: "auto",
            padding: "21px 12px",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {tabs.map((tab) => {
            const active = activeTab.title === tab.title;
            return (
              <Box
                onClick={() => setActiveTab(tab)}
                sx={{
                  minWidth: "max-content",
                  cursor: "pointer",
                  padding: "10px 24px",
                  borderRadius: "12px",
                  border: (theme) =>
                    active
                      ? "1px solid transparent"
                      : `1px solid ${theme.palette.borderColorPrimary}`,
                  background: (theme) =>
                    active ? theme.palette.buttonPrimary : "transparent",
                }}
                key={tab.title}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: (theme) =>
                      active ? theme.palette.btnColor : "#fff",
                  }}
                >
                  {tab.title}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Card>
      <Box mt={2}>{activeTab.component}</Box>
    </>
  );
};

export default HardwareSet;
