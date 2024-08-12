"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Box, Stack, Typography } from "@mui/material";
import { Searchbar } from "@/components/common";
import { getAuthedRoute } from "@/utils";
import { navLinks } from "@/constants";
import { avatar, book, close, logo, message, notification } from "@/assets";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const authedRoute = getAuthedRoute(pathname);
  const notifications = true;
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSwitchPage = (link) => {
    router.push(link);
    if (openSidebar) {
      setOpenSidebar(false);
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #303D60 0%, #394971 100%)",
        width: "100%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 0 0 24px",
        borderBottom: "1px solid #FFFFFF14",
        boxShadow: "0px 4px 16.9px 0px #00000040 inset",
        position: "sticky",
        top: 0,
      }}
    >
      <Image src={logo} width={66} height={48} alt="logo" />
      {authedRoute && (
        <Stack
          sx={{ display: { xs: "none", md: "flex" } }}
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          {navLinks.map((navItem, index) => {
            return (
              <Stack
                onClick={() => handleSwitchPage(navItem.link)}
                sx={{
                  cursor: "pointer",
                  position: "relative",
                  width: "90px",
                  height: "53px",
                  "&:after": {
                    content: "''",
                    display: pathname === navItem.link ? "block" : "none",
                    background: (theme) => theme.palette.secondary.main,
                    width: "100%",
                    height: "2px",
                    position: "absolute",
                    bottom: "-13px",
                  },
                }}
                gap={1}
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  style={
                    pathname === navItem.link
                      ? {
                          filter:
                            "brightness(0) saturate(100%) invert(65%) sepia(34%) saturate(7262%) hue-rotate(201deg) brightness(101%) contrast(101%)",
                        }
                      : {}
                  }
                  src={navItem.icon}
                  with={24}
                  height={24}
                  alt="icon"
                />
                <Typography
                  color={pathname === navItem.link ? "secondary" : "primary"}
                  variant="h4"
                  fontSize={"14px"}
                  fontWeight={600}
                >
                  {navItem.name}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      )}
      {authedRoute && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Searchbar />
          </Box>
          <Box
            sx={{
              position: "relative",
              height: "24px",
              "&:after": {
                content: "''",
                display: notifications ? "block" : "none",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "linear-gradient(180deg, #D1A6BE 0%, #FF94C8 100%)",
                position: "absolute",
                top: "-2px",
                right: "-2px",
              },
            }}
          >
            <Image
              width={24}
              height={24}
              src={notification}
              alt="notification"
            />
          </Box>
          <Image width={24} height={24} src={book} alt="book" />
          <Image width={24} height={24} src={message} alt="message" />
          <Box
            sx={{
              minWidth: "80px",
              height: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: (theme) => theme.palette.primary["900"],
            }}
          >
            <Image
              style={{ cursor: "pointer" }}
              onClick={() => setOpenSidebar(true)}
              width={40}
              height={40}
              src={avatar}
              alt="avatar"
            />
          </Box>
        </Stack>
      )}
      {authedRoute && (
        <Box
          sx={{
            position: "fixed",
            transition: "0.5s ease-in-out",
            top: 0,
            right: { xs: openSidebar ? "0px" : "-320px", md: "-320px" },
            width: "320px",
            height: "100vh",
            background: "#161d33e8",
            zIndex: 99999,
          }}
        >
          <Image
            onClick={() => setOpenSidebar(false)}
            src={close}
            width={40}
            height={40}
            style={{ cursor: "pointer" }}
            alt="close"
          />
          <Stack direction="row" width="100%" justifyContent="center">
            <Image src={logo} alt="logo" />
          </Stack>
          {authedRoute && (
            <Stack
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
              gap={2}
              sx={{ marginTop: "20px" }}
            >
              {navLinks.map((navItem, index) => {
                return (
                  <Stack
                    onClick={() => handleSwitchPage(navItem.link)}
                    sx={{
                      cursor: "pointer",
                      position: "relative",
                      width: "100%",
                      height: "53px",
                      marginLeft: "15px",
                      "&:after": {
                        content: "''",
                        display: pathname === navItem.link ? "block" : "none",
                        background: (theme) => theme.palette.secondary.main,
                        width: "2px",
                        height: "53px",
                        position: "absolute",
                        bottom: "0px",
                        left: "-15px",
                      },
                    }}
                    gap={1}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Image
                      style={
                        pathname === navItem.link
                          ? {
                              filter:
                                "brightness(0) saturate(100%) invert(65%) sepia(34%) saturate(7262%) hue-rotate(201deg) brightness(101%) contrast(101%)",
                            }
                          : {}
                      }
                      src={navItem.icon}
                      with={24}
                      height={24}
                      alt="icon"
                    />
                    <Typography
                      color={
                        pathname === navItem.link ? "secondary" : "primary"
                      }
                      variant="h4"
                      fontSize={"14px"}
                      fontWeight={600}
                    >
                      {navItem.name}
                    </Typography>
                  </Stack>
                );
              })}
            </Stack>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Header;
