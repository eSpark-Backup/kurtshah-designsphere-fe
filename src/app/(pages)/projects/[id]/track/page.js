"use client";
import { copy, filter, darkThemeFilter, light, iIcon, close } from "@/assets";
import { columns } from "@/columns/ByOpenings";
import {
  ByHardware,
  DirectoryController,
  Dropdown,
  DynamicTable,
  ProgressBar,
  Tabs,
} from "@/components/common";
import {
  ByOpeningsTableData,
  FieldsModalCheckboxes,
  hardwareCheckboxes,
  projects,
  trackChangesDropDownOptions,
  trackChangesDropDownOptions2,
  TrackChangesTabs,
} from "@/constants";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import FieldsModal from "./FieldsModal";
import { useSelector } from "react-redux";

const Track = () => {
  const { currentTheme } = useSelector(state => state.theme)
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const [openingsModal, setOpeningsModal] = useState(false);
  const [hardwareModal, setHardwareModal] = useState(false);

  const TabHandler = (tab) => {
    setActiveTab(tab);
  };

  const [directory, setDirectory] = useState({
    name: "",
    link: [],
  });

  const [dropDowns, setDropDowns] = useState({
    early: "",
    latest: "",
  });

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setDropDowns((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const id = pathname.split("/")[2];
    const { projectName } = projects.find((item) => item.id == id);
    setDirectory({
      name: projectName,
      link: ["Project", "/", projectName, "/", "Reports"],
    });
  }, [pathname]);

  const ModalHandler = () => {
    if (activeTab === 0) {
      setOpeningsModal(true)
    }
    else {
      setHardwareModal(true)
    }
  }

  const CloseModalHandler = () => {
    if (openingsModal) {
      setOpeningsModal(false)
    }
    else {
      setHardwareModal(false)
    }
  }


  const Popup = ({ open, handleClose }) => {
    return (
      <Stack
        sx={{
          position: "absolute",
          width: "max-content",
          right: "-30px",
          top: "-90px",
          display: open ? "flex" : "none",
          padding: "15px 10px",
          border: (theme) => `1px solid ${theme.palette.whiteE4}`,
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px #00000040",
          background: (theme) => theme.palette.gradientSecondary,
          img: { filter: theme => theme.palette.filterImg }
        }}
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap="12px"
      >
        <Image width={24} height={24} src={iIcon} alt="copy" />
        <Typography
          sx={{
            color: (theme) => theme.palette.whiteE4,
          }}
        >
          Data has been copied to the clipboard. Paste it into excel
        </Typography>
        <IconButton
          sx={{ padding: 0 }}
          aria-label="close"
          onClick={(e) => {
            e.stopPropagation()
            handleClose()
          }}
        >
          <Image src={close} width={24} height={24} alt="Close Icon" />
        </IconButton>
      </Stack>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "30px",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        marginTop={1}
        gap={2}
      >
        <DirectoryController title={directory.name} links={directory.link} />
        <ProgressBar
          title="Getting Started"
          desc="Complete your project"
          perc={28}
        />
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          rowGap: "10px",
          marginTop: "13px"
        }}
      >
        <Typography variant="h2">Track Changes</Typography>
        <Box
          sx={{
            display: "flex",
            columnGap: "10px",
            alignItems: { sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            rowGap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              columnGap: "15px",
            }}
          >
            <Image
              src={currentTheme ? darkThemeFilter : filter}
              width={32}
              height={32}
              alt="Filter"
            />
            <Box
              onClick={() => setOpenPopup(true)}
              sx={{
                width: "32px !important",
                height: "32px",
                borderRadius: "10px",
                background:
                  theme => theme.palette.buttonPrimary,
                border: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                ".filter": { filter: theme => theme.palette.secondaryImgColor },
                position: "relative",
              }}
            >
              <Popup open={openPopup} handleClose={() => setOpenPopup(false)} />
              <Image
                className="filter"
                src={copy}
                width={18}
                height={18}
                alt="Icon"
              />
            </Box>
            <Box
              sx={{
                width: "32px !important",
                height: "32px",
                borderRadius: "10px",
                background:
                  theme => theme.palette.buttonPrimary,
                border: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                img: { filter: theme => theme.palette.secondaryImgColor }
              }}
              onClick={ModalHandler}
            >
              <Image src={light} width={18} height={18} alt="Icon" />
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "45%", md: "200px" },
              background: theme => theme.palette.buttonPrimary,
              borderRadius: "12px",
            }}
          >
            <Dropdown
              white
              value={dropDowns.early}
              onChange={handleDropdownChange}
              options={trackChangesDropDownOptions}
              name="early"
              simple={true}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "45%", md: "200px" },
              background: theme => theme.palette.buttonPrimary,
              borderRadius: "12px",
            }}
          >
            <Dropdown
              white
              value={dropDowns.latest}
              onChange={handleDropdownChange}
              options={trackChangesDropDownOptions2}
              name="latest"
              simple={true}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Tabs
          tabs={TrackChangesTabs}
          TabHandler={TabHandler}
          activeTab={activeTab}
        />
        {activeTab === 0 ? <DynamicTable
          data={ByOpeningsTableData}
          columns={columns()}
          isLoading={false}
          total={ByOpeningsTableData.length}
          handlePageChange={handlePageChange}
          page={page}
          pagination
        /> : <ByHardware />}
      </Box>

      <FieldsModal
        open={activeTab === 0 ? openingsModal : hardwareModal}
        handleClose={CloseModalHandler}
        checkboxes={activeTab === 0 ? FieldsModalCheckboxes : hardwareCheckboxes}
      />
    </Box>
  );
};

export default Track;
