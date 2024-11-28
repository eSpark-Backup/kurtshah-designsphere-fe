import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

const SearchableAutocomplete = ({ disabled, onChange, options, ...rest }) => {
  const [open, setOpen] = useState(false);
  const [mockOptions, setMockOptions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value) {
      const filteredOptions = options.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setMockOptions(filteredOptions);
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <Autocomplete
      sx={{ width: "100%" }}
      options={mockOptions}
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
            ".Mui-disabled": { WebkitTextFillColor: theme => `${theme.palette.white} !important` }
          }}
          {...rest}
          {...params}
          onChange={handleInputChange}
        />
      )}
    />
  );
};

export default SearchableAutocomplete;
