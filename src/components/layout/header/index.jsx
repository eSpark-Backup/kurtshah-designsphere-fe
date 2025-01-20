"use client";

import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { Searchbar } from "@/components/common";
import { navLinks } from "@/constants";
import {
  avatar,
  book,
  hamburger,
  logo,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  message,
  notification,
} from "@/assets";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { getThemeVariant } from "@/utils";
import { useEffect, useState } from "react";

const Header = ({
  authedRoute,
  handleSwitchPage,
  pathname,
  setOpenSidebar,
}) => {
  const router = useRouter();
  const notifications = true;
  const { currentTheme } = useSelector((state) => state.theme);
  const logos = [
    {theme: 0, logo: logo},
    {theme: 7, logo: logo3},
    {theme: 8, logo: logo2},
    {theme: 9, logo: logo3},
    {theme: 10, logo: logo3},
    {theme: 11, logo: logo3},
    {theme: 12, logo: logo3},
    {theme: 13, logo: logo3},
    {theme: 14, logo: logo5},
    {theme: 15, logo: logo4},
    {theme: 16, logo: logo6},
    {theme: 17, logo: logo7},
    {theme: 18, logo: logo5},
    {theme: 19, logo: logo8},
    {theme: 20, logo: logo9},
    {theme: 21, logo: logo10},
    {theme: 22, logo: logo11},
    {theme: 1, logo: logo12},
    {theme: 2, logo: logo13},
    {theme: 3, logo: logo14},
    {theme: 4, logo: logo15},
    {theme: 5, logo: logo16},
    {theme: 6, logo: logo17},
  ];
  const [activeLogo, setActiveLogo] = useState(logos[0].logo)
  useEffect(() => {
    const getLogo = (currentTheme) => {
      const selectedLogo = logos.find(item => item.theme == currentTheme)
      const currentLogo = selectedLogo?.logo || logos[0].logo
      return currentLogo
    };
    setActiveLogo(getLogo(currentTheme))
  },[currentTheme])

  return (
    <Box
      sx={{
        background: (theme) => theme.palette.navGradient,
        width: "100%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 0 0 24px",
        borderBottom: (theme) => `1px solid ${theme.palette.grey}`,
        boxShadow: (theme) =>
          `0px 4px 16.9px 0px ${theme.palette.shadowSecondary} inset`,
        position: "sticky",
        top: 0,
      }}
    >
      <Image src={activeLogo} width={92} height={59} alt="logo" />
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
                key={index}
                onClick={() => handleSwitchPage(navItem.link)}
                sx={{
                  cursor: "pointer",
                  position: "relative",
                  width: "90px",
                  height: "53px",
                  img: {
                    filter: (theme) =>
                      pathname === navItem.link
                        ? theme.palette.filterImgActive
                        : theme.palette.filterImg,
                  },
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
                  src={navItem.icon}
                  with={24}
                  height={24}
                  alt="icon"
                />
                <Typography
                  color={pathname === navItem.link ? "secondary" : "primary"}
                  variant="h4"
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
          gap={{ xs: 2, sm: 3, md: 3, lg: 5 }}
          sx={{
            ".img-filter": {
              filter: (theme) => theme.palette.filterImg,
            },
          }}
        >
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Searchbar placeholder="Search" />
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
                background: theme => getThemeVariant(currentTheme) === "default" ? "linear-gradient(180deg, #D1A6BE 0%, #FF94C8 100%)" : theme.palette.secondary.main,
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
              className="img-filter"
            />
          </Box>
          <Image
            className="img-filter"
            width={24}
            height={24}
            src={book}
            alt="book"
          />
          <Image
            width={24}
            height={24}
            src={message}
            alt="message"
            className="img-filter"
            onClick={() => router.push("/support")}
            style={{ cursor: "pointer" }}
          />
          <Box
            sx={{
              minWidth: { xs: "40px", sm: "80px" },
              height: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // Using code here because the theme doesn't apply correctly when conditions are used.
              background: (theme) => ({
                xs: "none",
                sm: theme.palette.primary[900],
              }),
            }}
          >
            <Image
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/profiles")}
              width={40}
              height={40}
              src={avatar}
              alt="avatar"
            />
          </Box>
          <Box
            onClick={() => setOpenSidebar(true)}
            sx={{
              display: { xs: "block", sm: "none" },
              paddingRight: "10px",
              img: { filter: theme => getThemeVariant(currentTheme) === "default" ? "" : theme.palette.filterImg }
            }}
          >
            <Image width={24} height={24} src={hamburger} alt="menu" />
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default Header;
