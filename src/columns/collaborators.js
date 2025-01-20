import Image from "next/image";
import { mail } from "@/assets";
import { Box, Chip } from "@mui/material";

export const columns = (handleEmail) => {
  return [
    { name: "Name", key: "contactName", left: true },
    { name: "Role", key: "projectRoleName", left: true },
    {
      name: "Status",
      key: "status",
      left: true,
      component: () => {
        return <Chip label="Editor" />;
      },
    },
    {
      name: "Action",
      key: "function",
      hideDownload: true,
      hideEdit: true,
      hideDelete: true,
      hideView: true,
      component: () => {
        return (
          <Box
            onClick={(e) => {
              e.stopPropagation();
              handleEmail(item);
            }}
            sx={{
              width: "47px",
              height: "24px",
              img: { filter: (theme) => theme.palette.filterImg },
            }}
          >
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
