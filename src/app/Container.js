"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Header, Sidebar } from "@/components/layout";
import { getAuthedRoute } from "@/utils";

const Container = ({ children }) => {
  const router = useRouter();
  const path = usePathname();
  const pathWithoutSlash = path.split("/")[1];
  const pathname = `/${pathWithoutSlash}`;
  const authedRoute = getAuthedRoute(pathname);
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSwitchPage = (link) => {
    router.push(link);
    if (openSidebar) {
      setOpenSidebar(false);
    }
  };
  return (
    <div style={{ width: "100%", height: "100vh", overflowX: "hidden" }}>
      <Header
        authedRoute={authedRoute}
        handleSwitchPage={handleSwitchPage}
        pathname={pathname}
        setOpenSidebar={setOpenSidebar}
      />
      <div
        className="no-scrollbar"
        style={{
          padding: "20px",
          height: "calc(100vh - 80px)",
          background:
            "linear-gradient(246.54deg, #36456A -19.2%, #2B3758 41.17%, #1A243D 101.55%)",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
      <Sidebar
        authedRoute={authedRoute}
        handleSwitchPage={handleSwitchPage}
        pathname={pathname}
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
    </div>
  );
};

export default Container;
