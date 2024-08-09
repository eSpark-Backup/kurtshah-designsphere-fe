"use client"

import { Box, InputAdornment, InputLabel, TextField } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import { closeEye, openEye } from '@/assets';

const CustomInput = ({ label, type, sx, ...rest }) => {
    const [showPass, setShowPass] = useState(false);

    return (
        <Box sx={{ display: "flex", rowGap: "10px", flexDirection:"column" }}>
            <InputLabel>{label}</InputLabel>
            <TextField
                type={showPass ? "text" : type}
                sx={{ ...sx, width: "100%" }}
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
        </Box>
    );
};

export default CustomInput;
