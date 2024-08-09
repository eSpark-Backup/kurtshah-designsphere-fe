import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { logo } from "@/assets";

const Header = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #303D60 0%, #394971 100%)",
        width: "100%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 24px",
        borderBottom: "1px solid #FFFFFF14",
        boxShadow: "0px 4px 16.9px 0px #00000040 inset",
        position: "sticky",
        top: 0,
      }}
    >
      <Image src={logo} width={66} height={48} alt="logo" />
    </Box>
  );
};

export default Header;
