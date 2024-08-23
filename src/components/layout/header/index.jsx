import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { Searchbar } from "@/components/common";
import { navLinks } from "@/constants";
import { avatar, book, hamburger, logo, message, notification } from "@/assets";

const Header = ({
  authedRoute,
  handleSwitchPage,
  pathname,
  setOpenSidebar,
}) => {
  const notifications = true;

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
                key={index}
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
          <Image width={24} height={24} src={message} alt="message" onClick={() => router.push("/support")} style={{ cursor: "pointer" }} />
          <Box
            sx={{
              minWidth: { xs: "40px", sm: "80px" },
              height: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // Using code here because the theme doesn't apply correctly when conditions are used.
              background: { xs: "none", sm: "#212A46" },
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
              paddingRight: "10px"
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
