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
        textAlign: "center",
    },
    palette: {
        primary: {
            main: '#7A89BCB8',
            dark: '#7A89BC',
            '900': '#212A46',
        },
        secondary: {
            main: '#6191FF',
        },
        tertiary: '#E4E4E4B8',
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
        white: "#FFFFFF",
        buttonPrimary: 'linear-gradient(180deg, #6191FF 0%, #5B6BFF 100%)',
        buttonSecondary: '#7A89BC',
        borderPrimary: "#8B8B8B24",
        headingColor: "linear-gradient(180deg, #E6EAF4 0%, #B7C6F9 100%)"
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'primary' },
                    style: ({ theme }) => ({

                        background: theme.palette.buttonPrimary,
                        color: theme.palette.white,
                        borderRadius: '12px',
                        position: 'relative',
                        fontWeight: "600",
                        width: "100%",
                        '&:hover': {
                            backgroundColor: theme.palette.buttonPrimary,
                            color: theme.palette.white,
                        },
                    })
                },
                {
                    props: { variant: 'secondary' },
                    style: ({ theme }) => ({
                        background: theme.palette.buttonSecondary,
                        color: theme.palette.white,
                        borderRadius: '12px',
                        position: 'relative',
                        fontWeight: "600",
                        width: "100%",
                        '&:hover': {
                            backgroundColor: theme.palette.buttonSecondary,
                            color: theme.palette.white,
                        },
                    })
                },

                {
                    props: { variant: 'tertiary' },
                    style: ({ theme }) => ({
                        background: 'transparent',
                        color: theme.palette.white,
                        borderRadius: '12px',
                        position: 'relative',
                        fontWeight: "600",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: theme.palette.borderPrimary,
                        width: "100%",
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: theme.palette.white,
                        },
                    })
                },
            ],
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                    fontSize: '12px',
                    fontWeight: '600',
                })
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: ({ theme }) => ({
                    "&::placeholder": {
                        color: theme.palette.buttonSecondary,
                        fontWeight: "500",
                        fontSize: "14px",
                        opacity: 1,
                        height: "200px",
                    },
                }),

                root: ({ theme }) => ({
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#000",
                    lineHeight: "160%",
                    height: "44px",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.borderPrimary,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.borderPrimary,
                    },

                }),
                notchedOutline: ({ theme }) => ({
                    borderColor: theme.palette.borderPrimary,
                    borderRadius: "16px",

                }),
            },


        },
        MuiInputBase: {
            styleOverrides: {
                input: ({ theme }) => ({
                    "&::placeholder": {
                        color: theme.palette.buttonSecondary,
                        fontWeight: "500",
                        fontSize: "14px",
                        opacity: 1,
                        height: "200px",
                    },
                }),

                root: ({ theme }) => ({
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#000",
                    lineHeight: "160%",
                    height: "44px",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.borderPrimary,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.borderPrimary,
                    },

                }),
                notchedOutline: ({ theme }) => ({
                    borderColor: theme.palette.borderPrimary,
                    borderRadius: "16px",
                }),
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: ({ theme }) => ({
                    fontSize: "32px",
                    fontWeight: "500",
                    background: theme.palette.headingColor,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }),
                h2: ({ theme }) => ({

                    fontSize: "24px",
                    fontWeight: "500",
                    background: theme.palette.headingColor,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",

                }),
                h3: ({ theme }) => ({
                    fontSize: "18px",
                    fontWeight: "400",
                    color: theme.palette.primary.main,

                }),
                h4: ({ theme }) => ({

                    fontSize: "14px",
                    fontWeight: "600",
                    color: theme.palette.primary.dark,

                })
            },
        },


    },
});


export default theme;

