import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { trendingUp, trendingDown } from "@/assets";

const TabBox = ({ name, count, icon, trending }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={1}
      sx={{
        padding: "16px",
        borderRadius: "16px",
        border: "1px solid #FFFFFF1F",
        boxShadow: "0px 14px 79.3px -12px #00000030",
        background:
          "linear-gradient(180deg, rgba(51, 64, 100, 0.05) 0%, #38466B 100%)",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        <Image width={40} height={40} src={icon} alt="icon" />
        <Stack>
          <Typography
            variant="h1"
            fontWeight={600}
          >
            {count}
          </Typography>
          <Typography
            sx={{
              background: (theme) => theme.palette.headingColor,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            variant="h5"
          >
            {name}
          </Typography>
        </Stack>
      </Stack>
      <Image
        width={24}
        height={24}
        src={trending === "up" ? trendingUp : trendingDown}
        alt={trending}
      />
    </Stack>
  );
};

export default TabBox;
