"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { Box, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { CustomInput } from "@/components/common";
import Card from "@/components/common/Card";
import { resetPasswordSchema } from "@/validation";
import { getLocalStorage, getThemeVariant } from "@/utils";
import { backIcon } from "@/assets";
import useResetPassword from "@/hooks/resetPassword";
import { toast } from "react-toastify";

const ResetPassword = ({ setResetPassword }) => {
  const { currentTheme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.auth);
  const token = getLocalStorage("token");
  const { resetPassword, isLoading } = useResetPassword();

  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    const objectToSend = {
      Email: user?.email,
      NewPassword: values?.newPassword,
      OldPassword: values?.oldPassword,
    };
    resetPassword(objectToSend, token, () => toast.success("Your Password has reset successfully"));
  };
  return (
    <Card
      variant={"outline"}
      sx={{
        padding: "20px",
        minHeight: "100%",
      }}
    >
      <Stack
        onClick={() => setResetPassword(false)}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap="2px"
        sx={{
          cursor: "pointer",
          img: {
            filter:
              getThemeVariant(currentTheme) === "light" &&
              "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(7457%) hue-rotate(166deg) brightness(89%) contrast(100%)",
          },
        }}
      >
        <Image width={10} height={10} src={backIcon} alt="back" />
        <Typography
          fontSize={16}
          fontWeight={500}
          sx={{ color: (theme) => theme.palette.whiteE4 }}
        >
          {"Back"}
        </Typography>
      </Stack>
      <Card
        variant={"outline"}
        sx={{
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Typography
          fontSize={16}
          fontWeight={500}
          sx={{ color: (theme) => theme.palette.white }}
        >
          Reset Password
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={resetPasswordSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <Box
                sx={{
                  width: "300px",
                  marginTop: "20px",
                  marginLeft: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                  ".MuiInputBase-root": {
                    height: "40px ",
                  },
                  fieldset: {
                    borderRadius: "5px",
                    border: (theme) => theme.palette.borderPrimary,
                  },
                  ".MuiTypography-root": {
                    marginBottom: "10px !important",
                    color: theme => theme.palette.whiteE4
                  }
                }}
              >
                <CustomInput
                  variant="outlined"
                  name="oldPassword"
                  type="password"
                  placeholder="Enter"
                  label="old Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.oldPassword}
                  error={touched.oldPassword && errors.oldPassword}
                  helperText={touched.oldPassword && errors.oldPassword}
                />
                <CustomInput
                  variant="outlined"
                  name="newPassword"
                  type="password"
                  placeholder="Enter"
                  label="new Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPassword}
                  error={touched.newPassword && errors.newPassword}
                  helperText={touched.newPassword && errors.newPassword}
                />
                <CustomInput
                  variant="outlined"
                  name="confirmPassword"
                  type="password"
                  placeholder="Enter"
                  label="retype new password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  error={touched.confirmPassword && errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flexDirection: "rpw",
                  marginTop: "20px",
                }}
              >
                <LoadingButton
                  loading={isLoading}
                  disabled={isLoading}
                  loadingPosition="end"
                  variant="primary"
                  sx={{ width: "150px", height: "40px" }}
                  type="submit"
                >
                  Reset
                </LoadingButton>
              </Box>
            </Form>
          )}
        </Formik>
      </Card>
    </Card>
  );
};

export default ResetPassword;
