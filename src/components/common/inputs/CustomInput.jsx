"use client";

import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { closeEye, openEye } from "@/assets";

const CustomInput = ({ customLabel, label, type, sx, value, limit, hideArrows, userHelpingText, ...rest }) => {
    const [showPass, setShowPass] = useState(false);

    // Determine input type based on password visibility state
    const inputType = type === "password" ? (showPass ? "text" : "password") : type;

    return (
        <Box sx={{ display: "flex", rowGap: "2px", flexDirection: "column", width: "100%" }}>
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
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px"
                }}
            >
                <TextField
                    value={value}
                    inputProps={{
                        maxLength: limit,
                        ...(hideArrows && {
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                        }),
                    }}
                    label={customLabel}
                    type={inputType}  // Use calculated input type here
                    sx={{ width: "100%", ...sx }}
                    InputProps={{
                        startAdornment: rest.startAdornment && (
                            <InputAdornment position="start" style={{ marginRight: "7px" }}>
                                {rest.startAdornment}
                            </InputAdornment>
                        ),
                        endAdornment: type === "password" && (
                            <InputAdornment position="end">
                                <Image
                                    src={showPass ? openEye : closeEye}
                                    onClick={() => setShowPass(!showPass)}
                                    width={20}
                                    height={20}
                                    alt="Toggle Password Visibility"
                                    style={{ cursor: "pointer" }}
                                />
                            </InputAdornment>
                        ),
                    }}
                    {...rest}
                />
                {userHelpingText && <Typography
                    variant="h1"
                    sx={{
                        fontSize: "10px",
                        fontWeight: "400"
                    }}
                >
                    {userHelpingText}
                </Typography>}
            </Box>
            { }
            {limit && (
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
                </Typography>
            )}
        </Box>
    );
};

export default CustomInput;
