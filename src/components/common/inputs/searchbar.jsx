"use client";

import React from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import { search } from "@/assets";

const Searchbar = () => {
  return (
    <TextField
      variant="outlined"
      type="text"
      placeholder="Search"
      sx={{
        width: "100%",
        ".MuiInputBase-root": {
          borderRadius: "16px",
          border: "1px solid #8B8B8B24",
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
