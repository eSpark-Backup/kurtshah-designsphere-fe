import { Box } from "@mui/material"

const Card = ({ children, sx, variant, ...rest }) => {

    const outline = {
        border: "1px solid #E4E4E4",
        boxShadow: "0px 0px 10px 0px #00000040",
        borderRadius: "10px",
    }

    const gradient = {
        background:
            "linear-gradient(180deg, rgba(51, 64, 100, 0.05) 0%, #38466B 100%)",
        border: "1px solid #FFFFFF1F",
        boxShadow: "0px 14px 79.3px -12px #00000030",
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