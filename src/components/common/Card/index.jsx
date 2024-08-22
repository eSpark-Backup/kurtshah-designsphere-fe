import { Box } from "@mui/material"

const Card = ({ children, sx, variant, ...rest }) => {

    const outline = {
        border: (theme) => theme.palette.borderPrimary,
        boxShadow: (theme) => `0px 0px 10px 0px ${theme.palette.shadowSecondary}`,
        borderRadius: "10px",
    }

    const gradient = {
        background: (theme) => theme.palette.gradientPrimary,
        border: (theme) => `1px solid ${theme.palette.grey}`,
        boxShadow: (theme) => `0px 14px 79.3px -12px ${theme.palette.shadowPrimary}`,
        borderRadius: "16px",
    }

    return (
        <Box
            sx={{
                ...(variant === "outline" && outline),
                ...(variant === "gradient" && gradient),
                ...sx
            }}
            {...rest}
        >
            {children}
        </Box>
    )
}

export default Card