"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import { search } from "@/assets";
import { useSelector } from "react-redux";
import { getThemeVariant } from "@/utils";

const Searchbar = ({ placeholder, bgColor, value, handleSearch }) => {
  const { currentTheme } = useSelector(state => state.theme)
  const [activeState, setActiveState] = useState(0)
  useEffect(() => {
    setActiveState(currentTheme)
  },[currentTheme])
  return (
    <TextField
      variant="outlined"
      type="text"
      placeholder={placeholder}
      sx={{
        width: "100%",
        background: theme => activeState > 0 ? "#FFF" : bgColor ? theme.palette.gradientPrimary : "transparent",
        input: {color: (theme) => activeState > 0 ? "#000 !important" : theme.palette.primary.dark },
        borderRadius: "16px",
        ".MuiOutlinedInput-notchedOutline": 
          {
            borderRadius: "16px",
            input: {
              padding: "10px 14px !important",
            },
          },
          img: {
            filter: theme => getThemeVariant(activeState) === "dark" ? "brightness(0) saturate(100%) invert(0%) sepia(99%) saturate(7495%) hue-rotate(269deg) brightness(129%) contrast(101%)" : theme.palette.filterImg
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
