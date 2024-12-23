import { Form, Formik } from "formik";
import React, { useRef } from "react";
import ProfileCard from "./Profile-Card";
import { Box, Grid } from "@mui/material";
import { CustomInput, Dropdown } from "@/components/common";
import { profileCompanySchema } from "@/validation";
import Card from "@/components/common/Card";
import { useDispatch, useSelector } from "react-redux";
import useUpdateUser from "@/hooks/updateProfile";
import { toast } from "react-toastify";
import { updateProfile } from "@/lib/store/slices/auth";
import { getLocalStorage } from "@/utils";

const ProfileCompany = () => {
  const dispatch = useDispatch();
  const token = getLocalStorage("token");
  const { user } = useSelector((state) => state.auth);
  const { updateUserData } = useUpdateUser();
  const formikRef = useRef(null);

  const initialValues = {
    companyName: user?.companyName || "",
    jobFunction:
      user?.jobFunctionOptions?.find((opt) => opt.label === user?.jobFunction)
        ?.value || "",
    img: null,
  };

  const handleSave = (img) => {
    if (formikRef.current) {
      formikRef.current.setFieldValue("img", img, false);
      formikRef.current.submitForm();
    }
  };

  const onSubmit = (values) => {
    let bodyToSend;
    if (values?.img) {
      bodyToSend = {
        CompanyName: values?.companyName,
        JobRoleId: values?.jobFunction,
        ProfilePicture: values?.img,
      };
    } else {
      bodyToSend = {
        CompanyName: values?.companyName,
        JobRoleId: values?.jobFunction,
      };
    }
    updateUserData(
      bodyToSend,
      token,
      () => {
        dispatch(updateProfile({ ...user, bodyToSend }));
        toast.success("Profile updated Successfully");
      },
      values?.img
    );
  };
  return (
    <>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={profileCompanySchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          handleChange,
          touched,
          errors,
          handleBlur,
          setFieldValue,
        }) => (
          <Form>
            <ProfileCard handleSave={handleSave} />
            <Card
              variant={"outline"}
              sx={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "60px 50px",
                columnGap: "30px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      width: { xs: "100%", md: "300px" },
                    }}
                  >
                    <CustomInput
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{
                        input: {
                          borderRadius: "5px",
                          border: (theme) => theme.palette.borderPrimary,
                        },
                      }}
                      placeholder="Type here"
                      customLabel="Company Name *"
                      variant="outlined"
                      name="companyName"
                      type={"text"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.companyName}
                      error={touched.companyName && errors.companyName}
                      helperText={touched.companyName && errors.companyName}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      width: { xs: "100%", md: "300px" },
                    }}
                  >
                    <Dropdown
                      shrink={true}
                      customLabel="Job Function *"
                      options={user?.jobFunctionOptions}
                      name="jobFunction"
                      onChange={(e) =>
                        setFieldValue("jobFunction", e.target.value)
                      }
                      onBlur={handleBlur}
                      value={values.jobFunction}
                      error={touched.jobFunction && errors.jobFunction}
                      helperText={touched.jobFunction && errors.jobFunction}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ProfileCompany;
