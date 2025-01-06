"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { Header, Sidebar } from "@/components/layout";
import { getAuthedRoute, getLocalStorage } from "@/utils";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { themePalette } from "@/constants/themesData";
import { Box, CircularProgress } from "@mui/material";
import { changeTheme } from "@/lib/store/slices/theme";
import { login, logout } from "@/lib/store/slices/auth";
import useGetCountryAndJobOptions from "@/hooks/jobsAndCountriesOption";
import useGetUserInfo from "@/hooks/getUserInfo";

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
  const [myTheme, setMyTheme] = useState(themePalette[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    const thisTheme = themePalette.find((theme) => theme.id == currentTheme);
    setMyTheme(thisTheme || themePalette[0]);
    dispatch(changeTheme(currentTheme));
  }, [currentTheme]);

  const token = getLocalStorage("token");
  const authed = getLocalStorage("authed");
  useEffect(() => {
    if ((authed === "false" || !token) && authedRoute) {
      router.push("/sign-in");
      dispatch(logout());
    } else if (
      token &&
      !authedRoute &&
      authed === "true" &&
      pathname !== "/multifactor" &&
      pathname !== "/google-auth" &&
      pathname !== "/email-auth" &&
      pathname !== "/verify-otp" &&
      pathname !== "/lets-start"
    ) {
      router.push("/projects");
    }
  }, [token, router, authedRoute, pathname]);

  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const { getUserInfo } = useGetUserInfo();
  const { getCountryAndJobOptions } = useGetCountryAndJobOptions();

  useEffect(() => {
    if (authedRoute && !user && token) {
      setIsLoading(true);
      getUserInfo(
        token,
        (res) => {
          const data = res?.data?.result;
          getCountryAndJobOptions(token, (jobOptions, countryOptions) => {
            const user = {
              ...data,
              jobFunctionOptions: jobOptions,
              countriesOptions: countryOptions,
            };
            dispatch(login(user));
            setIsLoading(false);
          });
        },
        () => {
          dispatch(logout());
          router.push("/sign-in");
        }
      );
    }
  }, [user, token, authedRoute]);

  return (
    <ThemeProvider theme={theme(myTheme.palette)}>
      {authedRoute && isLoading ? (
        <Box
          sx={{
            background: (theme) => theme.palette.gradientSecondary,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            overflowX: "hidden",
            ".custom-scroll::-webkit-scrollbar": {
              width: "12px",
            },
            ".custom-scroll::-webkit-scrollbar-track": {
              background: (theme) => theme.palette.scrollBg,
              borderRadius: "20px",
            },
            ".custom-scroll::-webkit-scrollbar-thumb": {
              backgroundColor: (theme) => theme.palette.scrollThumb,
              borderRadius: "20px",
              border: (theme) => `2px solid ${theme.palette.scrollBg}`,
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
      )}
    </ThemeProvider>
  );
};

export default Container;
