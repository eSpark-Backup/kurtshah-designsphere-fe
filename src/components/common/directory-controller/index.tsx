"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Stack, Typography } from "@mui/material";
import { backArrow } from "@/assets";
import { useSelector } from "react-redux";
import { getThemeVariant } from "@/utils";

const DirectoryController = ({ title, desc, links }) => {
  const router = useRouter();
  const { currentTheme } = useSelector(state => state.theme);
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      gap={2}
      sx={{ img: { filter: theme => getThemeVariant(currentTheme) === "default" ? "" : theme.palette.filterImg } }}
    >
      {!desc && (
        <Image onClick={() => router.back()} src={backArrow} alt="back" />
      )}
      <Stack direction="column" justifyContent="center" alignItems="flex-start" gap={0.9}>
        <Typography variant="h1">
          {title}
        </Typography>
        {desc ? (
          <Typography
            sx={{
              background: (theme) => theme.palette.headingColor,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight:"500"
            }}
            variant="h4"
          >
            {desc}
          </Typography>
        ) : (
          <Stack direction="row" justifyContent="center" alignItems="center">
            {links.map((link, ind) => {
              return (
                <Typography
                  key={ind}
                  sx={{
                    background: (theme) => theme.palette.headingColor,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor:
                      ind === links.length - 1 || ind === links.length - 2
                        ? "transparent"
                        : "#66718f",
                    marginLeft: ind !== 0 ? "7px" : 0,
                  }}
                  fontSize="14px"
                  fontWeight={ind === links.length - 1 || ind === links.length - 2 ?500:600}
                >
                  {link}
                </Typography>
              );
            })}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default DirectoryController;
