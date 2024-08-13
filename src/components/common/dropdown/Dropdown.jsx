import { downArrow } from '@/assets';
import { Box, FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';


const CustomDropdownIcon = () => (
    <Image src={downArrow} width={24} height={24} alt="Dropdown Icon" style={{ marginRight: "10px", cursor: "pointer" }} />
);

const Dropdown = ({ label, value, onChange, options, startAdornment, error, helperText, ...props }) => {
    const [selectedValue, setSelectedValue] = useState(options[0].value);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px"
            }}
        >
            <InputLabel>{label}</InputLabel>
            <FormControl sx={{ width: "100%", margin: "auto auto" }}>
                <Select
                    error={error}
                    value={value === "" ? selectedValue : value}
                    onChange={onChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{ width: "100%" }}
                    startAdornment={startAdornment && (
                        <InputAdornment>
                            {startAdornment}
                        </InputAdornment>
                    )}
                    IconComponent={CustomDropdownIcon}
                    {...props}
                >
                    {options?.map((option, index) => (
                        <MenuItem key={index} value={option.value} disabled={index === 0}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>

                {helperText && <FormHelperText sx={{
                    color: "red"
                }}>
                    {helperText}
                </FormHelperText>}
            </FormControl>
        </Box>
    );
}

export default Dropdown;
