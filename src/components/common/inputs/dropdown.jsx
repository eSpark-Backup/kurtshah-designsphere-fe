import { arrowDownInput, downArrow2 } from "@/assets";
import {
  Box,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const CustomDropdownIcon = ({ simple }) => (
  <Image
    src={simple ? downArrow2 : arrowDownInput}
    width={simple ? 12 : 24}
    height={simple ? 6 : 24}
    alt="Dropdown Icon"
    style={{ marginRight: "10px", cursor: "pointer" }}
  />
);

const Dropdown = ({
  customLabel,
  label,
  value,
  onChange,
  options,
  startAdornment,
  error,
  helperText,
  simple,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      {label && (
        <Typography
          color="primary"
          sx={{
            fontSize: "12px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          {label}
        </Typography>
      )}
      <FormControl sx={{ width: "100%", margin: "auto auto" }}>
        {customLabel && <InputLabel>{customLabel}</InputLabel>}
        <Select
          label={customLabel}
          error={error}
          value={value === "" ? selectedValue : value}
          onChange={onChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ width: "100%" }}
          startAdornment={
            startAdornment && <InputAdornment>{startAdornment}</InputAdornment>
          }
          IconComponent={(props) => <CustomDropdownIcon simple={simple} {...props} />}
          {...props}
        >
          {options?.map((option, index) => (
            <MenuItem sx={{ display: index === 0 ? "none" : "block" }} key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>

        {helperText && (
          <FormHelperText
            sx={{
              color: "red",
            }}
          >
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};

export default Dropdown;
