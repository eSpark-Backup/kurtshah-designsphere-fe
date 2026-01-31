import Image from "next/image";
import { mail } from "@/assets";
import { Box } from "@mui/material";

export const columns = () => {
  return [
    { name: "Name", key: "name", left: true },
    { name: "Role", key: "role", left: true },
    { name: "Status", key: "status", left: true, chip: true },
    {
      name: "Action",
      key: "function",
      hideDownload: true,
      hideEdit: true,
      hideDelete: true,
      hideView: true,
      component: () => {
        return (
          <Box sx={{ width: "47px", height: "24px", img: { filter: (theme) => theme.palette.filterImg } }}>
            <Image
              sx={{ cursor: "pointer" }}
              src={mail}
              alt="mail"
              width={47}
              height={24}
            />
          </Box>
        );
      },
    },
  ];
};
