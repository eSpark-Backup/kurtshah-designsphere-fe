import { arrowDownInput, downArrow2 } from "@/assets";
import { getThemeVariant } from "@/utils";
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
import { useSelector } from "react-redux";

const CustomDropdownIcon = ({ simple }) => {
  const { currentTheme } = useSelector((state) => state.theme);
  return (
    <Box
      sx={{
        width: simple ? 12 : 24,
        height: simple ? 6 : 24,
        img: {
          filter: (theme) =>
            getThemeVariant(currentTheme) === "default"
              ? ""
              : theme.palette.filterImg,
        },
      }}
    >
      <Image
        src={simple ? downArrow2 : arrowDownInput}
        width={simple ? 12 : 24}
        height={simple ? 6 : 24}
        alt="Dropdown Icon"
        style={{ marginRight: "10px", cursor: "pointer" }}
      />
    </Box>
  );
};

const Dropdown = ({
  white,
  customLabel,
  label,
  value,
  onChange,
  options,
  startAdornment,
  error,
  helperText,
  simple,
  shrink,
  modal,
  disabled,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const [open, setOpen] = useState(false);

  const handleIconClick = () => {
    if (!disabled) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        {customLabel && <InputLabel shrink={shrink}>{customLabel}</InputLabel>}
        <Select
          disabled={disabled}
          open={open}
          onClose={handleClose}
          onOpen={() => setOpen(true)}
          label={customLabel}
          error={error}
          value={value === "" ? selectedValue : value}
          onChange={(event) => {
            onChange(event);
            setSelectedValue(event.target.value);
            handleClose();
          }}
          displayEmpty
          IconComponent={() => null}
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            width: "100%",
            color: (theme) =>
              white ? "#FFF" : `${theme.palette.white} !important`,
          }}
          startAdornment={
            startAdornment && (
              <InputAdornment
                sx={{ img: { filter: (theme) => theme.palette.filterImg } }}
                position="start"
              >
                {startAdornment}
              </InputAdornment>
            )
          }
          {...props}
        >
          {options?.map((option, index) => (
            <MenuItem
              sx={{ display: index === 0 ? "none" : "block" }}
              key={index}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <Box
          onClick={handleIconClick}
          sx={{
            width: "24px",
            height: "24px",
            position: "absolute",
            top: modal ? "50%" : "17px",
            right: modal ? "0px" : "8px",
            transform: modal ? "translateY(-50%)" : "none",
          }}
        >
          <CustomDropdownIcon simple={simple} {...props} />
        </Box>

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
