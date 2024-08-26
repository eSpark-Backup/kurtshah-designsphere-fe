import React from "react";
import Image from "next/image";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { authImageFull } from "@/assets";

const AuthContainer = ({ img, title, desc, register, children }) => {
  const isLessthanXs = useMediaQuery("(max-width:600px)");
  const isLessthanSm = useMediaQuery("(max-width:900px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          margin: "30px 0",
          background: (theme) => theme.palette.gradientPrimary,
          border: "1px solid #FFFFFF1F",
          borderRadius: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          height: { xs: "auto", md: "626px" },
          width: { xs: "320px", sm: "432px", md: "904px"},
          flex: 1,
        }}
      >
        <Image
          style={{ borderRadius: isLessthanSm ? "16px 16px 0 0" : "16px 0 0 16px" }}
          width={isLessthanXs ? 320 : 432}
          height={isLessthanXs ? 463 : 626}
          src={authImageFull}
          alt="auth-image"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 10px",
            width: "100%",
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
      <Typography variant="h1"
        sx={{
          fontSize: "14px",
          textAlign: "center"
        }}>
        © 2024 Schlage Lock Company LLC, all rights reserved
      </Typography>
    </Box>
  );
};

export default AuthContainer;
