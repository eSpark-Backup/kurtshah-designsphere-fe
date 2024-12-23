"use client";
import { AuthContainer, FileInput } from "@/components/common";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useUpdateUser from "@/hooks/updateProfile";
import { getLocalStorage } from "@/utils";

const LetsStart = () => {
  const { updateUserData, isLoading } = useUpdateUser();
  const [image, setImage] = useState(null);
  const [img, setImg] = useState(null);
  const [newsLetter, setNewsLetter] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    const token = getLocalStorage("token");
    updateUserData(
      { NewsLetterSubscription: newsLetter },
      token,
      () => router.push(`/projects`),
      img
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AuthContainer>
        <Box
          sx={{
            width: "100%",
            // height: "100%",
            display: "flex",
            flexDirection: "column",
            rowGap: "25px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              lineHeight: "40px",
              textAlign: "center",
            }}
          >
            Let’s Start
          </Typography>
          <Typography
            variant="h3"
            sx={{
              lineHeight: "40px",
              textAlign: "center",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            Profile picture
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              rowGap: "20px",
            }}
          >
            <FileInput setImg={setImg} image={image} setImage={setImage} />
          </Box>
          <Box
            sx={{
              paddingLeft: { sm: "10px", md: "10px", lg: "16px" },
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={newsLetter}
                  onChange={(_, val) => setNewsLetter(val)}
                  sx={{ alignSelf: "flex-start", padding: "0px 5px" }}
                  name="recievedEmail"
                />
              }
              label="It is ok to contact me with newsletters, new product announcements, etc"
              sx={{ marginBottom: "0px" }}
            />
          </Box>
          <LoadingButton
            loading={isLoading}
            disabled={isLoading}
            loadingPosition="end"
            variant="primary"
            sx={{ width: "95%", margin: "auto auto", height: "48px" }}
            onClick={handleSubmit}
          >
            Done
          </LoadingButton>
        </Box>
      </AuthContainer>
    </Box>
  );
};

export default LetsStart;
