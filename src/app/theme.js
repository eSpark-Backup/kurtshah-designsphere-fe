'use client';

import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});


const theme = createTheme({
    typography: {
        fontFamily: poppins.style.fontFamily,
    },
    palette: {
        primary: {
            main: '#6191FF',
        },
        secondary: {
            main: '#dc004e',
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ff9800',
        },
        info: {
            main: '#2196f3',
        },
        success: {
            main: '#4caf50',
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'primary' },
                    style: {
                        background: 'linear-gradient(180deg, #6191FF 0%, #5B6BFF 100%)',
                        color: '#FFFFFF',
                        borderRadius: '12px',
                        position: 'relative',
                        fontWeight: "600",
                        width: "100%",
                        '&:hover': {
                            backgroundColor: '#001C63',
                            color: '#FFFFFF',
                        },
                    },
                },
                {
                    props: { variant: 'secondary' },
                    style: {
                        background: '#7A89BC',
                        color: '#FFFFFF',
                        borderRadius: '12px',
                        position: 'relative',
                        fontWeight: "600",
                        width: "100%",
                        '&:hover': {
                            backgroundColor: '#7A89BC',
                            color: '#FFFFFF',
                        },
                    },
                },

                {
                    props: { variant: 'tertiary' },
                    style: {
                        background: 'transparent',
                        color: '#FFFFFF',
                        borderRadius: '12px',
                        position: 'relative',
                        fontWeight: "600",
                        border: "1px solid #8B8B8B24",
                        width: "100%",
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#FFFFFF',
                        },
                    },
                },
            ],
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#7A89BCB8',
                    fontSize: '12px',
                    fontWeight: '600',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    "&::placeholder": {
                        color: "#7A89BC",
                        fontWeight: "500",
                        fontSize: "14px",
                        opacity: 1,
                        height: "200px",
                    },

                },

                root: {
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#000",
                    lineHeight: "160%",
                    height: "44px",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#8B8B8B24",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#8B8B8B24",
                    },
                },
                notchedOutline: {
                    borderColor: "#8B8B8B24",
                    borderRadius: "16px",
                },
            },


        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    "&::placeholder": {
                        color: "#7A89BC",
                        fontWeight: "500",
                        fontSize: "14px",
                        opacity: 1,
                        height: "200px",
                    },

                },

                root: {
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#000",
                    lineHeight: "160%",
                    height: "44px",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#8B8B8B24",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#8B8B8B24",
                    },
                },
                notchedOutline: {
                    borderColor: "#8B8B8B24",
                    borderRadius: "16px",
                },
            },
        },

    },
});


export default theme;

