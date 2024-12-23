"use client";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import ProfileCard from "./Profile-Card";
import { useState } from "react";
import { DynamicModal } from "@/components/common";
import Card from "@/components/common/Card";
import GoogleAuthModal from "./google-auth-modal";
import EmailAuthModal from "./email-auth-modal";
import ResetPassword from "./resetPassword";
import { useDispatch, useSelector } from "react-redux";
import useUpdateUser from "@/hooks/updateProfile";
import { toast } from "react-toastify";
import { updateProfile } from "@/lib/store/slices/auth";
import { getLocalStorage } from "@/utils";

const Security = () => {
  const token = getLocalStorage("token");
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [resetPassword, setResetPassword] = useState(false);
  const [isGoogleAuth, setIsGoogleAuth] = useState(user?.isGoogleMFA);
  const [isEmailAuth, setIsEmailAuth] = useState(user?.isEmailMFA);
  const [disableAuth, setDisableAuth] = useState(false);
  const [isGoogleAuthModal, setIsGoogleAuthModal] = useState(false);
  const [isEmailAuthModal, setIsEmailAuthModal] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(
    user?.isNewsLetterSubscription
  );
  const [deleteAccountModal, setDeleteAccountModal] = useState(false);
  const { updateUserData } = useUpdateUser();

  const handleDisbleAuth = () => {
    if (disableAuth === 1) {
      updateUserData({ IsEmailMFA: false }, token, () => {
        dispatch(updateProfile({ ...user, isEmailMFA: false }));
        toast.success("Email MFA disabled");
        setIsEmailAuth(false);
        setDisableAuth(false);
      });
    } else if (disableAuth === 2) {
      updateUserData({ IsGoogleMFA: false }, token, () => {
        dispatch(updateProfile({ ...user, isGoogleMFA: false }));
        toast.success("Google MFA disabled");
        setIsGoogleAuth(false);
        setDisableAuth(false);
      });
    } else if (disableAuth === 3) {
      updateUserData(
        { IsEmailMFA: false, IsGoogleMFA: false },
        token,
        () => {
          dispatch(
            updateProfile({ ...user, isEmailMFA: false, isGoogleMFA: false })
          );
          toast.success("Both MFA disabled");
          setIsEmailAuth(false);
          setIsGoogleAuth(false);
          setDisableAuth(false);
        }
      );
    }
  };

  const handleSubmitTerms = () => {
    updateUserData({ NewsLetterSubscription: isTermsChecked }, token, () => {
      dispatch(
        updateProfile({ ...user, isNewsLetterSubscription: isTermsChecked })
      );
      toast.success("news-letter updated successfully");
    });
  };

  const handleReset = () => {
    setResetPassword(true);
  };

  const handleDeleteAccount = () => {
    console.log("Delete account confirmed");
  };

  const deleteAccountModalUI = (
    <Box
      sx={{
        padding: "30px 40px",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "21px",
          color: (theme) => theme.palette.white,
        }}
      >
        This will permanently delete your account. You have 24 hours to undo
        this action.
        <br />
        Are you sure?
      </Typography>
    </Box>
  );

  const disableAuthModalUI = (
    <Box
      sx={{
        padding: "30px 40px",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "21px",
          color: (theme) => theme.palette.white,
        }}
      >
        Are you sure you want to perform this action?
      </Typography>
    </Box>
  );

  const GeneralBox = ({
    title,
    description,
    buttonText,
    buttonColor,
    onClick,
  }) => (
    <Card
      variant={"outline"}
      sx={{
        marginTop: "30px",
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
          <Typography
            sx={{
              color: (theme) => theme.palette.whiteE4,
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.whiteE4,
              fontSize: "12px",
              fontWeight: 400,
            }}
          >
            {description}
          </Typography>
        </Box>
        <Button
          onClick={onClick}
          sx={{
            border: (theme) => theme.palette.borderPrimary,
            minWidth: "150px",
            height: "40px",
            borderRadius: "10px",
            backgroundColor: buttonColor,
            color: (theme) => theme.palette.white,
            "&:hover": {
              backgroundColor: buttonColor,
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Card>
  );

  if (resetPassword) {
    return <ResetPassword setResetPassword={setResetPassword} />;
  }

  return (
    <Box>
      <ProfileCard readOnly={true} />
      <Card
        variant={"outline"}
        sx={{
          marginTop: "30px",
          padding: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "20px",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography
              sx={{
                color: (theme) => theme.palette.whiteE4,
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Manage Multi-factor Authentication (MFA)
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  name="terms"
                  sx={{ alignSelf: "flex-start", padding: "0px 10px" }}
                />
              }
              onChange={() => {
                if (isEmailAuth) {
                  setDisableAuth(1);
                } else {
                  setIsEmailAuthModal(true);
                }
              }}
              checked={isEmailAuth}
              label={
                <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>
                  {"Email Authenticator"}
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="terms"
                  sx={{ alignSelf: "flex-start", padding: "0px 10px" }}
                />
              }
              onChange={() => {
                if (isGoogleAuth) {
                  setDisableAuth(2);
                } else {
                  setIsGoogleAuthModal(true);
                }
              }}
              checked={isGoogleAuth}
              label={
                <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>
                  {"Google Authenticator"}
                </Typography>
              }
            />
          </Box>
          <Button
            onClick={() => setDisableAuth(3)}
            sx={{
              marginTop: "12px",
              border: (theme) => theme.palette.borderPrimary,
              minWidth: "150px",
              height: "40px",
              borderRadius: "10px",
              color: (theme) => theme.palette.white,
              backgroundColor: (theme) => theme.palette.gray80,
              "&:hover": {
                backgroundColor: (theme) => theme.palette.gray80,
              },
            }}
          >
            Reset
          </Button>
        </Box>
      </Card>

      <GeneralBox
        title="Reset Your Password:"
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

      <Card
        variant={"outline"}
        sx={{
          marginTop: "30px",
          padding: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography
              sx={{
                color: (theme) => theme.palette.whiteE4,
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Terms
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  name="terms"
                  sx={{ alignSelf: "flex-start", padding: "0px 10px" }}
                />
              }
              onChange={() => setIsTermsChecked(!isTermsChecked)}
              checked={isTermsChecked}
              label={
                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                  {
                    "I agree to receive electronic and postal communications from the Allegion group of companies, including marketing, promotions, newsletters, surveys and other information regarding products and services. To opt-out at a later time, visit https://profile.allegion.com."
                  }
                </Typography>
              }
              sx={{ marginBottom: "20px" }}
            />
          </Box>
          <Button
            onClick={handleSubmitTerms}
            sx={{
              marginTop: "12px",
              border: (theme) => theme.palette.borderPrimary,
              minWidth: "150px",
              height: "40px",
              borderRadius: "10px",
              color: (theme) => theme.palette.white,
              backgroundColor: (theme) => theme.palette.gray80,
              "&:hover": {
                backgroundColor: (theme) => theme.palette.gray80,
              },
            }}
          >
            Save
          </Button>
        </Box>
      </Card>

      <DynamicModal
        open={deleteAccountModal}
        handleClose={() => setDeleteAccountModal(false)}
        heading="Delete File"
        cancelButtonText="Cancel"
        submitButtonText="Delete"
        onConfirm={handleDeleteAccount}
        showfooter
      >
        {deleteAccountModalUI}
      </DynamicModal>
      <DynamicModal
        open={disableAuth}
        handleClose={() => setDisableAuth(false)}
        heading="Disable Authenticator"
        cancelButtonText="Cancel"
        submitButtonText="Yes"
        onConfirm={handleDisbleAuth}
        showfooter
      >
        {disableAuthModalUI}
      </DynamicModal>
      <DynamicModal
        customHeader={<></>}
        open={isGoogleAuthModal}
        handleClose={() => setIsGoogleAuthModal(false)}
      >
        <GoogleAuthModal
          handleClose={() => setIsGoogleAuthModal(false)}
          onConfirm={() => setIsGoogleAuth(true)}
        />
      </DynamicModal>
      <DynamicModal
        customHeader={<></>}
        open={isEmailAuthModal}
        handleClose={() => setIsEmailAuthModal(false)}
      >
        <EmailAuthModal
          handleClose={() => setIsEmailAuthModal(false)}
          onConfirm={() => setIsEmailAuth(true)}
        />
      </DynamicModal>
    </Box>
  );
};

export default Security;
