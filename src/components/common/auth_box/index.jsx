import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Box, Typography, useMediaQuery } from "@mui/material";
import {
  authImageFull,
  authImageFull1,
  authImageFull7,
  authImageFull8,
  authImageFull9,
  authImageFull10,
  authImageFull11,
  authImageFull12,
  authImageFull13,
  authImageFull14,
  authImageFull15,
  authImageFull16,
  authImageFull17,
  authImageFull18,
  authImageFull19,
  authImageFull20,
  authImageFull21,
  authImageFull22,
} from "@/assets";

const AuthContainer = ({ img, title, desc, register, children }) => {
  const isLessthanXs = useMediaQuery("(max-width:600px)");
  const isLessthanSm = useMediaQuery("(max-width:900px)");
  const { currentTheme } = useSelector((state) => state.theme);
  const authImages = [
    { theme: 0, authImage: authImageFull },
    { theme: 1, authImage: authImageFull1 },
    { theme: 2, authImage: authImageFull1 },
    { theme: 3, authImage: authImageFull1 },
    { theme: 4, authImage: authImageFull1 },
    { theme: 5, authImage: authImageFull1 },
    { theme: 6, authImage: authImageFull1 },
    { theme: 7, authImage: authImageFull7 },
    { theme: 8, authImage: authImageFull8 },
    { theme: 9, authImage: authImageFull9 },
    { theme: 10, authImage: authImageFull10 },
    { theme: 11, authImage: authImageFull11 },
    { theme: 12, authImage: authImageFull12 },
    { theme: 13, authImage: authImageFull13 },
    { theme: 14, authImage: authImageFull14 },
    { theme: 15, authImage: authImageFull15 },
    { theme: 16, authImage: authImageFull16 },
    { theme: 17, authImage: authImageFull17 },
    { theme: 18, authImage: authImageFull18 },
    { theme: 19, authImage: authImageFull19 },
    { theme: 20, authImage: authImageFull20 },
    { theme: 21, authImage: authImageFull21 },
    { theme: 22, authImage: authImageFull22 },
  ];
  const getAuthImage = (currentTheme) => {
    const selectedAuthImage = authImages.find(
      (item) => item.theme == currentTheme
    );
    const currentAuthImage =
      selectedAuthImage || authImages[0];
    return currentAuthImage;
  };

  const [selectedAuthImage, setSelectedAuthImage] = useState(authImages[0])
  useEffect(() => {
    setSelectedAuthImage(getAuthImage(currentTheme))
  },[currentTheme])
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          margin: "30px 0",
          background: (theme) => selectedAuthImage?.theme ? "transparent" : theme.palette.gradientPrimary,
          borderRadius: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          height: { xs: "auto", md: "626px" },
          maxHeight: { xs: "auto", md: "626px" },
          width: { xs: "320px", sm: "432px", md: "904px" },
          border:  selectedAuthImage?.theme ? "1px solid #EEE" : "1px solid #FFFFFF1F",
          flex: 1,
        }}
      >
        <Image
          style={{
            borderRadius: isLessthanSm ? "16px 16px 0 0" : "16px 0 0 16px",
          }}
          width={isLessthanXs ? 320 : 432}
          height={isLessthanXs ? 463 : 626}
          src={selectedAuthImage?.authImage}
          alt="auth-image"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: "40px 10px", md: "0px 10px" },
            width: "100%",
            background: "transparent",
            minHeight: { xs: "auto", md: "566px" },
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {img && <Image src={img} width={64} height={64} alt="auth" />}
          {title && (
            <Typography
              variant="h1"
              sx={{
                marginTop: "10px",
              }}
            >
              {title}
            </Typography>
          )}
          {desc && (
            <Typography
              variant="h3"
              sx={{
                marginTop: "20px",
                marginBottom: "10px",
                width: { xs: "100%", md: "60%" },
              }}
            >
              {desc}
            </Typography>
          )}
          {children}
        </Box>
      </Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: "14px",
          textAlign: "center",
        }}
      >
        © 2024 Schlage Lock Company LLC, all rights reserved
      </Typography>
    </Box>
  );
};

export default AuthContainer;
