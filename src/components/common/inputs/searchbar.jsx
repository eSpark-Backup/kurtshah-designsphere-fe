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
      sx={{ width: "100%" }}
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
