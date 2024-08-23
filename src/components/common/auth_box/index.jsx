import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { authImage, authLogo, checking } from "@/assets";

const AuthContainer = ({ img, title, desc, register, children }) => {
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
          width: { xs: "100%", sm: "70%", md: "80%", lg: "70%" },
          flex: 1
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(180deg, #547CD3 0%, #6191FD 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: { xs: "25px 0px", md: register ? "220px 0px" : "160px 0px", lg: register ? "180px 0px" : "140px 0px", xl: register ? "165px 0px" : "120px 0px" },
            borderRadius: { xs: "9px 9px 0 0", sm: "16px 16px 0 0", md: "16px 0 0 16px" },
            width: { xs: "100%", md: "45%" },
          }}
        >
          <Image src={authLogo} width={138} height={100} alt="auth-logo" className="auth-logo" />
          <Image
            style={{ width: "100%", height: "auto" }}
            src={checking}
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
