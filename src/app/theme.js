"use client";

import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
    textAlign: "center",
  },
  palette: {
    primary: {
      main: "#7A89BCB8",
      dark: "#7A89BC",
      900: "#212A46",
    },
    secondary: {
      main: "#6191FF",
    },
    tertiary: "#E4E4E4B8",
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
    white: "#FFFFFF",
    whiteE4: "#E4E4E4",
    grey: "#FFFFFF1F",
    buttonPrimary: "linear-gradient(180deg, #6191FF 0%, #5B6BFF 100%)",
    buttonSecondary: "#7A89BC",
    borderColorPrimary: "#8B8B8B24",
    headingColor: "linear-gradient(180deg, #E6EAF4 0%, #B7C6F9 100%)",
    textPrimaryGradient: "linear-gradient(180deg, #547CD3 0%, #6191FD 100%)",
    gradientPrimary: "linear-gradient(180deg, rgba(51, 64, 100, 0.05) 0%, #38466B 100%)",
    shadowPrimary: "#00000030",
    shadowSecondary: "#00000040",
    borderPrimary: "1px solid #E4E4E4",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: ({ theme }) => ({
            background: theme.palette.buttonPrimary,
            color: theme.palette.white,
            borderRadius: "12px",
            position: "relative",
            fontWeight: "600",
            textTransform: "none",
            width: "100%",
            "&:hover": {
              backgroundColor: theme.palette.buttonPrimary,
              color: theme.palette.white,
            },
          }),
        },
        {
          props: { variant: "secondary" },
          style: ({ theme }) => ({
            background: theme.palette.buttonSecondary,
            color: theme.palette.white,
            borderRadius: "12px",
            position: "relative",
            fontWeight: "600",
            width: "100%",
            "&:hover": {
              backgroundColor: theme.palette.buttonSecondary,
              color: theme.palette.white,
            },
          }),
        },

        {
          props: { variant: "tertiary" },
          style: ({ theme }) => ({
            background: theme.palette.headingColor,
            color: "transparent", // Text color should be transparent
            backgroundClip: "text",
            WebkitBackgroundClip: "text", // For Safari support
            WebkitTextFillColor: "transparent", // For Safari support
            borderRadius: "12px",
            position: "relative",
            fontWeight: "400",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#8B8B8B24",
            width: "100%",
            fontsize: "14px",
            "&:hover": {
              background: theme.palette.headingColor,
              color: "transparent", // Ensure it remains consistent
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            },
          }),
        }

      ],
    },
    MuiInputAdornment : {
      styleOverrides : {
        root: {
          marginTop: "0px !important",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: "separate",
          borderSpacing: "0 15px",
        },
      },
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
            textTransform: "uppercase",
          },
          "& .MuiTableRow-root": {
            background:
              "linear-gradient(180deg, rgba(51, 64, 100, 0.05) 15%, #38466B 100%)",
          },
          "& .MuiTableRow-root td:first-child": {
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          },
          "& .MuiTableRow-root td:last-child": {
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          },
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
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.headingColor,
          backgroundColor: "transparent !important",
          WebkitTextFillColor: "#2D3A5C",
        }),
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.whiteE4,
          background:
            "linear-gradient(246.54deg, #36456A -19.2%, #2B3758 41.17%, #1A243D 101.55%)",
          minWidth: "85px",
          padding: "3px 10px",
          marginLeft: "-5px",
          fontSize: "12px",
          fontWeight: 400,
          "&.Mui-focused": {
            color: theme.palette.whiteE4,
            background:
              "linear-gradient(246.54deg, #36456A -19.2%, #2B3758 41.17%, #1A243D 101.55%)",
            minWidth: "85px",
            padding: "3px 10px",
            marginLeft: "-5px",
            fontSize: "12px",
            fontWeight: 400,
          },
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#E4E4E4",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.whiteE4,
        }),
        label: {
          fontSize: "14px",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          maxHeight: "300px",
        },
      },
    },
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          "& .MuiCircularProgress-root": {
            color: "#fff",
            width: "24px !important",
            height: "24px !important",
            position: "relative",
            marginRight: "100px",
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "12px",
          "&.Mui-disabled": {
            color: theme.palette.whiteE4,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "14px",
          fontWeight: 500,
          color: "#ffffff",
          lineHeight: "160%",
          height: "auto",
          borderRadius: "5px",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.borderColorPrimary,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.borderColorPrimary,
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.borderColorPrimary, // Keeps the border color consistent when disabled
          },
          "& textarea": {
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
          },
          "& textarea::-webkit-scrollbar": {
            display: "none",
          },
          input: {
            '&:-webkit-autofill': {
              borderRadius: '0px !important',
              padding: "16.5px 14px",
              backgroundColor: 'transparent !important',
              WebkitTextFillColor: '#fff !important',
              transition: 'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s, color 5000s ease-in-out 0s !important',
            },
          },
        }),
        notchedOutline: ({ theme }) => ({
          borderColor: theme.palette.borderColorPrimary,
          borderRadius: "5px",
        }),
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "14px",
          fontWeight: 500,
          color: "#ffffff",
          lineHeight: "160%",
          height: "44px",
          borderRadius: "16px",
          background:
            "linear-gradient(180deg, rgba(51, 64, 100, 0.05) 0%, #38466B 100%)",
          border: "1px solid #8B8B8B24",
          "&:before": {
            display: "none",
          },
          "&:after": {
            display: "none",
          },
          input: {
            padding: "16.5px 14px",
            '&:-webkit-autofill': {
              borderRadius: '0px !important',
              padding: "16.5px 14px",
              backgroundColor: 'transparent !important',
              WebkitTextFillColor: '#fff !important',
              transition: 'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s, color 5000s ease-in-out 0s !important',
            },
          },
          "&:hover .MuiFilledInput-notchedOutline": {
            borderColor: theme.palette.borderColorPrimary,
          },
          "&.Mui-focused .MuiFilledInput-notchedOutline": {
            borderColor: theme.palette.borderColorPrimary,
          },
          "&.Mui-disabled .MuiFilledInput-notchedOutline": {
            borderColor: theme.palette.borderColorPrimary, // Keeps the border color consistent when disabled
          },
        }),
        notchedFilled: ({ theme }) => ({
          borderColor: theme.palette.borderColorPrimary,
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
        }),
        h5: ({ theme }) => ({
          fontSize: "12px",
          fontWeight: "600",
          color: theme.palette.tertiary,
        }),
      },
    },
    MuiAccordion:{
      styleOverrides: {
        root: {
          background: "transparent",
          boxShadow: "none",
          border: "none",
        },
      },
    },
  },
});

export default theme;
