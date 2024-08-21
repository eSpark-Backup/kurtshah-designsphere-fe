import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { navLinks } from "@/constants";
import { close, logo } from "@/assets";

const Sidebar = ({
  authedRoute,
  handleSwitchPage,
  pathname,
  openSidebar,
  setOpenSidebar,
}) => {
  return (
    <>
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
                    key={index}
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
    </>
  );
};

export default Sidebar;
