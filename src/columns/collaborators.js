import Image from "next/image";
import { mail } from "@/assets";

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
          <Image
            sx={{ cursor: "pointer" }}
            src={mail}
            alt="mail"
            width={47}
            height={24}
          />
        );
      },
    },
  ];
};
