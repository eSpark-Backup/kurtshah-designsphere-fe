import { useRouter } from "next/navigation";
import { Box, Button, Stack, Typography } from "@mui/material";
import Card from "../Card";
import Image from "next/image";
import { backIcon } from "@/assets";
import { useState } from "react";
import LogoutModal from "./logoutModal";
import { logout } from "@/lib/store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { getThemeVariant } from "@/utils";

const SidebarTab = ({ back, title, active, setActive, tabsArr }) => {
  const { currentTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const router = useRouter();
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/sign-in");
  };
  return (
    <Card
      variant={"outline"}
      sx={{
        background: (theme) => theme.palette.card,
        borderRadius: "10px",
        height: "100%",
        padding: "10px 10px 0px 10px",
        paddingBottom: { xs: "20px", md: "20px" },
        minHeight: { xs: "400px", sm: "auto" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative"
      }}
    >
      {back && (
        <Stack
          onClick={() => router.back()}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap="2px"
          sx={{ cursor: "pointer", position: "absolute", top: "20px", left: "20px",
            img : {
              filter: getThemeVariant(currentTheme) === "light" && "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(7457%) hue-rotate(166deg) brightness(89%) contrast(100%)"
            }
           }}
        >
          <Image width={10} height={10} src={backIcon} alt="back" />
          <Typography
            fontSize={16}
            fontWeight={500}
            sx={{ color: (theme) => theme.palette.whiteE4 }}
          >
            {"Back"}
          </Typography>
        </Stack>
      )}
      <Box sx={{ width: "100%" }}>
        <Typography
          textAlign="center"
          fontSize={20}
          fontWeight={700}
          sx={{ color: (theme) => theme.palette.whiteE4, margin: "60px 0" }}
        >
          {title}
        </Typography>
        <Box sx={{ width: "100%" }}>
          {tabsArr.map((tab, ind) => {
            return (
              <Box
                sx={{
                  marginTop: ind !== 0 ? "20px" : 0,
                  width: "100%",
                  height: "50px",
                  padding: "13px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  background: (theme) =>
                    ind === active
                      ? theme.palette.sidebarButtonBgActive
                      : theme.palette.sidebarButtonBg,
                  boxshadow: (theme) =>
                    `0px 0px 5px 0px ${theme.palette.shadowSecondary}`,
                }}
                key={tab}
                onClick={() => setActive(ind)}
              >
                <Typography
                  textAlign="center"
                  fontSize={16}
                  fontWeight={500}
                  sx={{ color: (theme) => getThemeVariant(currentTheme) === "light" && ind === active ? theme.palette.sidebarButtonBg : theme.palette.sidebarButton }}
                >
                  {tab.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      {title === "PROFILE" && (
        <Button
          onClick={() => setOpenLogoutModal(true)}
          sx={{
            border: (theme) => theme.palette.borderPrimary,
            minWidth: "150px",
            height: "40px",
            borderRadius: "10px",
            backgroundColor: "#808080",
            color: "#FFF",
            "&:hover": {
              backgroundColor: "#808080",
            },
          }}
        >
          Logout
        </Button>
      )}
      <LogoutModal
        open={openLogoutModal}
        handleClose={() => setOpenLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </Card>
  );
};

export default SidebarTab;
