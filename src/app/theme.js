"use client";

import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const theme = currentTheme => createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
    textAlign: "center",
  },
  palette: currentTheme,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: ({ theme }) => ({
            background: theme.palette.buttonPrimary,
            color: theme.palette.btnColor,
            borderRadius: "12px",
            position: "relative",
            fontWeight: "600",
            textTransform: "none",
            width: "100%",
            "&:hover": {
              backgroundColor: theme.palette.buttonPrimary,
              color: theme.palette.btnColor,
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
            borderColor: theme.palette.borderColorPrimary,
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
        },
      ],
    },
    MuiInputAdornment: {
      styleOverrides: {
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
        root: ({ theme }) => ({
          backgroundColor: "transparent",
          "& .MuiTableCell-root": {
            borderBottom: "none",
            fontSize: "12px",
            fontWeight: 600,
            lineHeight: "18px",
            textTransform: "uppercase",
            color: theme.palette.whiteE4,
            padding: "15px 25px",
          },
        }),
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiTableCell-root": {
            lineHeight: 1.57,
            fontSize: "14px",
            border: "none",
            background: theme.palette.headingColor,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            padding: "26px 25px",
            textTransform: "capitalize",
            fontWeight: 500,
            borderTop: `1px solid ${theme.palette.grey}`,
            borderBottom: `1px solid ${theme.palette.grey}`,
          },
          "& .MuiTableRow-root": {
            background: theme.palette.gradientPrimary,
          },
          "& .MuiTableRow-root td:first-child": {
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            borderLeft: `1px solid ${theme.palette.grey}`,
          },
          "& .MuiTableRow-root td:last-child": {
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            borderRight: `1px solid ${theme.palette.grey}`,
          },
        }),
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          gap: "10px",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiTablePagination-toolbar": {
            color: theme.palette.whiteE4,
          },
          "& .MuiTablePagination-actions": {
            "& .MuiButtonBase-root": {
              color: theme.palette.whiteE4,
            },
            "& .Mui-disabled": {
              color: theme.palette.whiteE4,
              opacity: 0.5,
            },
          },
          wordSpacing: "10px",
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.headingColor,
          backgroundColor: "transparent !important",
          WebkitTextFillColor: theme.palette.primaryChip,
          height: "26px",
          fontSize: "12px",
          color: theme.palette.primaryChip,
          fontWeight: 500,
        }),
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.whiteE4,
          background: theme.palette.gradientSecondary,
          minWidth: "85px",
          padding: "3px 10px",
          marginLeft: "-5px",
          fontSize: "12px",
          fontWeight: 400,
          "&.Mui-focused": {
            color: theme.palette.whiteE4,
            background: theme.palette.gradientSecondary,
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
        root: ({ theme }) => ({
          color: theme.palette.whiteE4,
        }),
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
        root: ({ theme }) => ({
          "& .MuiCircularProgress-root": {
            color: theme.palette.white,
            width: "24px !important",
            height: "24px !important",
            position: "relative",
            marginRight: "100px",
          },
        }),
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
          color: theme.palette.white,
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
            "&:-webkit-autofill": {
              borderRadius: "0px !important",
              padding: "16.5px 14px",
              backgroundColor: "transparent !important",
              WebkitTextFillColor: `${theme.palette.white} !important`,
              transition:
                "background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s, color 5000s ease-in-out 0s !important",
            },
          },
          fieldset: {
            legend: {
              width: "0px",
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
          color: theme.palette.white,
          lineHeight: "160%",
          height: "44px",
          borderRadius: "16px",
          background: theme.palette.gradientPrimary,
          border: `1px solid ${theme.palette.borderColorPrimary}`,
          "&:before": {
            display: "none",
          },
          "&:after": {
            display: "none",
          },
          input: {
            padding: "16.5px 14px",
            "&:-webkit-autofill": {
              borderRadius: "0px !important",
              padding: "16.5px 14px",
              backgroundColor: "transparent !important",
              WebkitTextFillColor: `${theme.palette.white} !important`,
              transition:
                "background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s, color 5000s ease-in-out 0s !important",
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
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: "transparent",
          boxShadow: "none",
          border: "none",
        },
      },
    },
    MuiSwitch: ({ theme }) => ({
      styleOverrides: {
        root: {
          width: 50,
          height: 26,
          padding: 0,
          display: "flex",
        },
        switchBase: {
          padding: 2,
          "&.Mui-checked": {
            transform: "translateX(22px)",
            color: theme.palette.white,
            "& + .MuiSwitch-track": {
              opacity: 1,
              backgroundColor: theme.palette.gray8,
            },
          },
        },
        thumb: {
          width: 22,
          height: 22,
          boxShadow: "none",
          backgroundColor: theme.palette.whiteD9,
          "&:before": {
            content: '""',
            position: "absolute",
            width: "12px",
            height: "2px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: theme.palette.gradientSecondary,
            borderRadius: "1px",
          },
        },
        track: {
          borderRadius: 13,
          opacity: 1,
          backgroundColor: theme.palette.gray8,
          boxSizing: "border-box",
        },
      },
    }),
    MuiRadio: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.white,
          "&.Mui-checked": {
            color: theme.palette.white,
          },
        }),
      },
    },
  },
});

export default theme;
