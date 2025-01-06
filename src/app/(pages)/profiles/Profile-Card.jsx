import { location } from "@/assets";
import Card from "@/components/common/Card";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProfileCard = ({ handleSave, readOnly }) => {
  const isLessthanSm = useMediaQuery("(max-width:599px)");
  const { user } = useSelector((state) => state.auth);
  const [img, setImg] = useState(null);
  const [image, setImage] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const imageUrl = URL.createObjectURL(file);
      setImg(imageUrl);
    }
  };
  return (
    <Card
      variant={"outline"}
      sx={{
        width: "100%",
        padding: "55px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        rowGap: "20px",
        height: isLessthanSm ? "auto" : "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          columnGap: "30px",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          rowGap: "20px",
        }}
      >
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="raised-button-file"
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="raised-button-file">
          <Box
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: (theme) => theme.palette.whiteFa,
              border: (theme) => theme.palette.borderPrimary,
              boxShadow: (theme) =>
                `0px 0px 5px 0px ${theme.palette.shadowSecondary}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {user && user?.profilePicture?.fileName ? (
              <Avatar
                sx={{ width: "80px", height: "80px" }}
                alt={user?.firstName}
                src={
                  img ||
                  `data:${user?.profilePicture?.file?.contentType};base64,${user?.profilePicture?.bytes}`
                }
              />
            ) : (
              <Typography
                sx={{
                  fontSize: "20px",
                  color: (theme) => theme.palette.gray4,
                  fontWeight: "700",
                }}
              >
                {`${user?.firstName[0]}${user?.lastName[0]}`}
              </Typography>
            )}
          </Box>
        </label>
        <Stack direction={"column"} gap={1}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              color: (theme) => theme.palette.white,
            }}
          >
            {`${user?.firstName} ${user?.lastName}`}
          </Typography>
          <Stack
            direction={"row"}
            gap={1}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Image src={location} width={24} height={24} alt="Location Icon" />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                color: (theme) => theme.palette.white,
              }}
            >
              {user?.country}
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {!readOnly && (
        <Box sx={{ width: { xs: "100%", sm: "80px" }, height: "40px" }}>
          <Button
            onClick={() => handleSave(image)}
            type="submit"
            variant="primary"
          >
            Save
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default ProfileCard;
