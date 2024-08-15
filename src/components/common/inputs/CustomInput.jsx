"use client"

import { Box, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import { closeEye, openEye } from '@/assets';

const CustomInput = ({ customLabel, label, type, sx, value, limit, ...rest }) => {
    const [showPass, setShowPass] = useState(false);

    return (
        <Box sx={{ display: "flex", rowGap: "10px", flexDirection:"column", width:"100%" }}>
            {label && <InputLabel>{label}</InputLabel>}
            <TextField
                value={value}
                inputProps={{ maxLength: limit }}
                label={customLabel}
                type={showPass ? "text" : type}
                sx={{width: "100%",  ...sx }}
                InputProps={{
                    startAdornment: rest.startAdornment && (
                        <InputAdornment position="start" style={{ marginRight: '7px' }}>
                            {rest.startAdornment}
                        </InputAdornment>
                    ),
                    endAdornment: type === "password" && (
                        <Image
                            src={showPass ? openEye : closeEye}
                            onClick={() => setShowPass(!showPass)}
                            width={20}
                            height={20}
                            alt="Toggle Password Visibility"
                            style={{ cursor: "pointer" }}
                        />
                    )
                }}
                {...rest}
            />
            {limit && 
            <Typography
                fontSize={10}
                fontWeight={400}
                sx={{
                    color: (theme) => theme.palette.whiteE4,
                    textAlign: "right",
                    marginTop: "5px",
                }}
            >
                {value?.length} / {limit}
            </Typography>}
        </Box>
    );
};

export default CustomInput;
