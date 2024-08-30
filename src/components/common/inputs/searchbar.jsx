"use client";

import React from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import { search } from "@/assets";

const Searchbar = ({ placeholder, bgColor, value, handleSearch }) => {
  return (
    <TextField
      variant="outlined"
      type="text"
      placeholder={placeholder}
      sx={{
        width: "100%",
        background: bgColor || "transparent",
        borderRadius: "16px",
        ".MuiOutlinedInput-notchedOutline":
          {
            borderRadius: "16px",
            color: (theme) => theme.palette.primary.dark,
            input: {
              padding: "10px 14px !important",
            },
          },
      }}
      InputProps={{
        endAdornment: (
          <Image
            src={search}
            width={24}
            height={25}
            alt="search"
            style={{ cursor: "pointer" }}
          />
        ),
      }}
    />
  );
};

export default Searchbar;
