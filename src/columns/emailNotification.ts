"use client";

import Image from "next/image";
import { edit } from "@/assets";
import { Checkbox, FormControlLabel, Typography, Stack } from "@mui/material";

export const columns = (handleOpenModal) => {
  return [
    { name: "EVENT DESCRIPTION", key: "eDesc", left: true },
    {
      name: "EMAIL",
      key: "email",
      left: true,
      component: (item) => {
        return (
          <FormControlLabel
            control={
              <Checkbox sx={{ color: (theme) => theme.palette.whiteE4 }} />
            }
            label={item.email}
          />
        );
      },
    },
    {
      name: "SCHEDULE NOTIFICATION",
      key: "scheduleNotification",
      left: true,
      component: (item) => {
        return (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            gap={1}
            sx={{ cursor: "pointer" }}
          >
            <Image
              onClick={handleOpenModal}
              src={edit}
              alt="edit"
              width={24}
              height={24}
            />
            <Typography
              variant="h5"
              sx={{
                textTransform: "initial",
                lineHeight: 2.1,
              }}
            >
              {item.scheduleNotification}
            </Typography>
          </Stack>
        );
      },
    },
  ];
};
