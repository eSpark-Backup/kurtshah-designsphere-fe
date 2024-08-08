import { InputAdornment, InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image';
import { closeEye, openEye } from '@/assets/icons';

const CustomInput = ({ label, placeholder, type, sx, name, onChange = () => { }, startAdornment, variant }) => {
    const [showPass, setShowPass] = useState(false);
    return (
        <>
            <InputLabel>{label}</InputLabel>
            <TextField
                variant={"outlined"}
                name={name}
                type={type === "password" && showPass ? "text" : type === "password" && !showPass ? "password" : type}
                id="filled-hidden-label-normal"
                placeholder={placeholder}
                sx={{ ...sx, width: "100%", }}
                onChange={(e) => onChange(e)}
                InputProps={{
                    startAdornment: startAdornment && (
                        <InputAdornment position="start" style={{ marginRight: '7px' }}>
                            {startAdornment}
                        </InputAdornment>
                    ),
                    endAdornment: type === "password" && (
                        <Image
                            src={showPass ? openEye : closeEye}
                            onClick={() => setShowPass(!showPass)}
                            width={20}
                            height={20}
                            alt="End Icon"
                            style={{ cursor: "pointer" }}
                        />
                    )
                }}
            />
        </>
    )
}

export default CustomInput
