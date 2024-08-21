"use client";

import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import ProfileCard from './Profile-Card';
import { useState } from 'react';
import { DynamicModal } from '@/components/common';

const Security = () => {
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [deleteAccountModal, setDeleteAccountModal] = useState(false);

  const handleSubmitTerms = () => {
    console.log("Terms and conditions submitted");
  }

  const handleReset = () => {
    console.log("Reset password")
  }



  const handleDeleteAccount = () => {
    console.log("Delete account confirmed")
  }

  const deleteAccountModalUI = (
    <Box sx={{
      padding: "30px 40px",
    }}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "21px",
          color: (theme) => theme.palette.white,
        }}
      >
        This will permanently delete your account. You have 24 hours to undo this action.
        <br/>
        Are you sure?
      </Typography>
    </Box>
  );


  const GeneralBox = ({ title, description, buttonText, buttonColor, onClick }) => (
    <Box
      sx={{
        border: (theme) => `1px solid ${theme.palette.whiteE4}`,
        marginTop: "30px",
        boxShadow: "0px 0px 10px 0px #00000040",
        borderRadius: "10px",
        padding: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography sx={{ color: (theme) => theme.palette.whiteE4, fontSize: "16px", fontWeight: 500 }}>
            {title}
          </Typography>
          <Typography sx={{ color: (theme) => theme.palette.whiteE4, fontSize: "12px", fontWeight: 400 }}>
            {description}
          </Typography>
        </Box>
        <Button
          onClick={onClick}
          sx={{
            border: (theme) => `1px solid ${theme.palette.whiteE4}`,
            width: "150px",
            borderRadius: "10px",
            backgroundColor: buttonColor,
            '&:hover': {
              backgroundColor: buttonColor,
            },
          }}
          variant="contained"
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box>
      <ProfileCard readOnly={true} />

      <GeneralBox
        title="Security & Privacy"
        description="If you want to reset your password, click on the reset button, we will send you an email."
        buttonText="Reset"
        buttonColor="#808080"
        onClick={handleReset}
      />

      <GeneralBox
        title="Delete Account?"
        description="If you want to delete your account, click on the delete button."
        buttonText="Delete"
        buttonColor="#D0375B"
        onClick={() => setDeleteAccountModal(true)}
      />

      <Box
        sx={{
          border: (theme) => `1px solid ${theme.palette.whiteE4}`,
          marginTop: "30px",
          boxShadow: "0px 0px 10px 0px #00000040",
          borderRadius: "10px",
          padding: "30px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: "20px", alignItems: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography sx={{ color: (theme) => theme.palette.whiteE4, fontSize: "16px", fontWeight: 500 }}>
              Terms
            </Typography>
            <FormControlLabel
              control={<Checkbox name="terms" sx={{ alignSelf: "flex-start", padding: "0px 10px" }} />}
              onChange={() => setIsTermsChecked(!isTermsChecked)}
              checked={isTermsChecked}
              label={
                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                  {"I agree to receive electronic and postal communications from the Allegion group of companies, including marketing, promotions, newsletters, surveys and other information regarding products and services. To opt-out at a later time, visit https://profile.allegion.com."}
                </Typography>
              }
              sx={{ marginBottom: "20px", paddingLeft: { xs: "10px", sm: "20px" } }}
            />
          </Box>
          <Button
            onClick={handleSubmitTerms}
            sx={{
              border: (theme) => `1px solid ${theme.palette.whiteE4}`,
              width: "150px",
              borderRadius: "10px",
              backgroundColor: '#808080',
              '&:hover': {
                backgroundColor: '#808080',
              },
            }}
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </Box>


      <DynamicModal
        open={deleteAccountModal}
        handleClose={() => setDeleteAccountModal(false)}
        children={deleteAccountModalUI}
        heading="Delete File"
        cancelButtonText="Cancel"
        submitButtonText="Delete"
        onConfirm={handleDeleteAccount}
        showfooter
      />
    </Box>
  );
};



export default Security;
