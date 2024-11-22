"use client";

import React from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import { search } from "@/assets";
import { useSelector } from "react-redux";

const Searchbar = ({ placeholder, bgColor, value, handleSearch }) => {
  const { currentTheme } = useSelector(state => state.theme)
  return (
    <TextField
      variant="outlined"
      type="text"
      placeholder={placeholder}
      sx={{
        width: "100%",
        background: theme => !currentTheme ? bgColor ? theme.palette.gradientPrimary : "transparent" : "#FFF",
        input: {color: (theme) => !currentTheme ? theme.palette.primary.dark : "#000 !important" },
        borderRadius: "16px",
        ".MuiOutlinedInput-notchedOutline":
          {
            borderRadius: "16px",
            input: {
              padding: "10px 14px !important",
            },
          },
          img: {
            filter: theme => currentTheme ? "brightness(0) saturate(100%) invert(0%) sepia(99%) saturate(7495%) hue-rotate(269deg) brightness(129%) contrast(101%)" : theme.palette.filterImg
          }
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
