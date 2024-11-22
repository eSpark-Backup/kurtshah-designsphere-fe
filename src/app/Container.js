"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { Header, Sidebar } from "@/components/layout";
import { getAuthedRoute } from "@/utils";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { themePalette } from "@/constants/themesData";
import { Box } from "@mui/material";

const Container = ({ children }) => {
  const router = useRouter();
  const path = usePathname();
  const pathWithoutSlash = path.split("/")[1];
  const pathname = `/${pathWithoutSlash}`;
  const authedRoute = getAuthedRoute(pathname);
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSwitchPage = (link) => {
    router.push(link);
    if (openSidebar) {
      setOpenSidebar(false);
    }
  };
  const { currentTheme } = useSelector((state) => state.theme);
  const thisTheme = themePalette.find((theme) => theme.id == currentTheme);
  const myTheme = thisTheme || themePalette[0];

  const user = localStorage.getItem("token");
  useEffect(() => {
    if (!user && authedRoute) {
      router.push("/sign-in");
    } else if (user && !authedRoute) {
      router.push("/projects");
    }
  }, [user, router]);

  return (
    <ThemeProvider theme={theme(myTheme.palette)}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          overflowX: "hidden",
          ".custom-scroll::-webkit-scrollbar": {
            width: "12px",
          },
          ".custom-scroll::-webkit-scrollbar-track": {
            background: theme => theme.palette.scrollBg,
            borderRadius: "20px",
          },
          ".custom-scroll::-webkit-scrollbar-thumb": {
            backgroundColor: theme => theme.palette.scrollThumb,
            borderRadius: "20px",
            border: theme => `2px solid ${theme.palette.scrollBg}`,
          },
        }}
      >
        <Header
          authedRoute={authedRoute}
          handleSwitchPage={handleSwitchPage}
          pathname={pathname}
          setOpenSidebar={setOpenSidebar}
        />
        <div
          className="no-scrollbar"
          style={{
            padding: "20px",
            height: "calc(100vh - 80px)",
            background: myTheme.palette.gradientSecondary,
            overflowY: "auto",
          }}
        >
          {children}
        </div>
        <Sidebar
          authedRoute={authedRoute}
          handleSwitchPage={handleSwitchPage}
          pathname={pathname}
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
      </Box>
    </ThemeProvider>
  );
};

export default Container;
