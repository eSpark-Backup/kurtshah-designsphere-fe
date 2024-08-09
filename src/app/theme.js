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
                        color: '#fff',
                        borderRadius: '5px',
                        position: 'relative',
                        '&:hover': {
                            backgroundColor: '#001C63',
                            color: '#fff',
                        },
                    },
                },
            ],
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    borderCollapse: "separate",
                    borderSpacing: "0 15px",

                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    "& .MuiTableCell-root": {
                        borderBottom: "none",
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: "18px",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        padding: "15px 25px",
                    },
                },
            },
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-root": {
                        lineHeight: 1.57,
                        fontSize: "14px",
                        border: "none",
                        background: "linear-gradient(180deg, #E6EAF4 0%, #B7C6F9 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        padding: "26px 25px",
                    },
                    "& .MuiTableRow-root": {
                        background: "linear-gradient(180deg, rgba(51, 64, 100, 0.05) 15%, #38466B 100%)",

                    },
                    "& .MuiTableRow-root td:first-child": {
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",

                    },
                    "& .MuiTableRow-root td:last-child": {
                        borderTopRightRadius: "20px",
                        borderBottomRightRadius: "20px",

                    }
                },
            },
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    "& .MuiTablePagination-toolbar": {
                        color: "#E4E4E4",
                    },
                    "& .MuiTablePagination-actions": {
                        "& .MuiButtonBase-root": {
                            color: "#E4E4E4",
                        },
                        "& .Mui-disabled": {
                            color: "#E4E4E4",
                            opacity: 0.5,
                        },
                    },
                }
            },
        },
    },
});


export default theme;

