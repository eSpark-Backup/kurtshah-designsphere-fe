"use client";

import { useState } from "react";
import { Box, Stack } from "@mui/material";
import { DynamicTable, Searchbar } from "@/components/common";
import { columns } from "@/columns/emailNotification";
import EmailNotificationModal from "./emailNotificationModal";

const EmailNotificationTab = ({ description }) => {
  const emailNotificationData = [
    {
      id: 1,
      eDesc: description,
      email: "",
      scheduleNotification: "Immediate",
    },
  ];
  const [openModal, setOpenModal] = useState(false);
  const [form, setForm] = useState({
    deliveryFrequency: "",
  });
  const handleSuccess = () => {
    //success logic
    console.log(form, "<=form");
  };
  return (
    <>
      <Stack
        mb={2}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box sx={{ width: { xs: "100%", md: "239px" } }}>
          <Searchbar
            bgColor="linear-gradient(180deg, rgba(51, 64, 100, 0.05) 0%, #38466B 100%)"
            placeholder="Search"
          />
        </Box>
      </Stack>
      <DynamicTable
        data={emailNotificationData}
        columns={columns(() => setOpenModal(true))}
        isLoading={false}
        total={0}
      />
      <EmailNotificationModal
        form={form}
        setForm={setForm}
        open={openModal}
        handleClose={() => setOpenModal(false)}
        onConfirm={handleSuccess}
      />
    </>
  );
};

export default EmailNotificationTab;
