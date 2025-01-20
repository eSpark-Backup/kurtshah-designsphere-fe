import React, { useState, useCallback } from "react";
import {
  Autocomplete,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { arrowDownInput } from "@/assets";

const SearchableAutocomplete = ({
  name,
  setName,
  label,
  disabled,
  onChange,
  options,
  endAdornment,
  ...rest
}) => {
  const [open, setOpen] = useState(false);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const handleInputChange = useCallback(
    debounce((event) => {
      const value = event.target.value;
      if (setName) {
        setName(value);
        setOpen(true);
      }
    }, 500),
    [options]
  );

  return (
    <>
      {label && (
        <Typography
          color="primary"
          sx={{
            fontSize: "12px",
            fontWeight: "600",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          {label}
        </Typography>
      )}
      <Autocomplete
        sx={{ width: "100%" }}
        options={options}
        open={open}
        onClose={() => setOpen(false)}
        filterOptions={(x) => x}
        onChange={(e, val) => onChange(val)}
        disabled={disabled}
        renderInput={(params) => (
          <TextField
            sx={{
              borderRadius: "4px",
              border: (theme) => `1px solid ${theme.palette.whiteE4}`,
              height: "24px",
              ".MuiInputBase-root": { height: "24px" },
              ".MuiSvgIcon-root": { display: "none" },
              ".Mui-disabled": {
                WebkitTextFillColor: (theme) =>
                  `${theme.palette.white} !important`,
              },
            }}
            {...rest}
            {...params}
            value={name}
            onChange={handleInputChange}
            InputProps={{
              ...params.InputProps,
              endAdornment: endAdornment ? (
                <InputAdornment
                  onClick={() => setOpen(!open)}
                  sx={{
                    cursor: "pointer",
                    img: { filter: (theme) => theme.palette.filterImg },
                  }}
                  position="end"
                >
                  <Image src={arrowDownInput} alt="down" />
                </InputAdornment>
              ) : null,
            }}
          />
        )}
      />
    </>
  );
};

export default SearchableAutocomplete;
