import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { authImage, authLogo } from "@/assets";

const AuthContainer = ({ img, title, desc, children }) => {
  return (
    <Box
      sx={{
        margin: "30px 0",
        background:
          "linear-gradient(180deg, rgba(51, 64, 100, 0.05) 0%, #38466B 100%)",
        border: "1px solid #FFFFFF1F",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        width: { xs: "100%", sm: "70%", md: "80%", lg: "70%" },
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(180deg, #547CD3 0%, #6191FD 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          padding: { md: "100px 0px", lg: "90px 0px", xl: "40px 0px" },
          borderRadius: { sm: "16px 16px 0 0", md: "16px 0 0 16px" },
          width: { xs: "100%", md: "45%" },
        }}
      >
        <Image src={authLogo} width={138} height={100} alt="auth-logo" />
        <Image
          style={{ width: "100%", height: "auto" }}
          src={authImage}
          alt="auth-logo"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 10px",
          width: { xs: "100%", md: "55%" },
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
  );
};

export default AuthContainer;
