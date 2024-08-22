import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { trendingUp, trendingDown } from "@/assets";
import Card from "@/components/common/Card";

const TabBox = ({ name, count, icon, trending }) => {
  return (
    <Card
      variant={"gradient"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
        padding: "16px",
        borderRadius: "16px",
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
            sx={{
              background: (theme) => theme.palette.headingColor,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            fontSize="32px"
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
            fontSize="12px"
            fontWeight={600}
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
    </Card>
  );
};

export default TabBox;
