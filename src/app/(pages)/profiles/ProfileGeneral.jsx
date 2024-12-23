"use client";
import { CustomInput, Dropdown } from "@/components/common";
import { profileGeneralSchema } from "@/validation";
import { Box } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useRef } from "react";
import ProfileCard from "./Profile-Card";
import Card from "@/components/common/Card";
import { useDispatch, useSelector } from "react-redux";
import useUpdateUser from "@/hooks/updateProfile";
import { toast } from "react-toastify";
import { updateProfile } from "@/lib/store/slices/auth";
import { getLocalStorage } from "@/utils";

const ProfileGeneral = () => {
  const dispatch = useDispatch();
  const token = getLocalStorage("token");
  const { user } = useSelector((state) => state.auth);
  const { updateUserData } = useUpdateUser();
  const formikRef = useRef(null);

  const initialValues = {
    fName: user?.firstName,
    lName: user?.lastName,
    email: user?.email,
    phone: user?.phoneNo,
    country:
      user?.countriesOptions?.find((opt) => opt.label === user?.country)
        ?.value || "",
    postal: user?.postalCode,
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
        FirstName: values?.fName,
        LastName: values?.lName,
        PhoneNumber: values?.phone,
        CountryId: values?.country,
        PostalCode: values?.postal,
        ProfilePicture: values?.img,
      };
    } else {
      bodyToSend = {
        FirstName: values?.fName,
        LastName: values?.lName,
        PhoneNumber: values?.phone,
        CountryId: values?.country,
        PostalCode: values?.postal,
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
        validationSchema={profileGeneralSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
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
                padding: "60px 0px",
              }}
            >
              <Box
                sx={{
                  width: "80%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  rowGap: "60px",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "47%" },
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
                    customLabel="First Name *"
                    variant="outlined"
                    name="fName"
                    type={"text"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fName}
                    error={touched.fName && errors.fName}
                    helperText={touched.fName && errors.fName}
                  />
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "47%" },
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
                    customLabel="Last Name *"
                    variant="outlined"
                    name="lName"
                    type={"text"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lName}
                    error={touched.lName && errors.lName}
                    helperText={touched.lName && errors.lName}
                  />
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "47%" },
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
                      ".Mui-disabled": {
                        "-webkit-text-fill-color": (theme) =>
                          `${theme.palette.whiteE4} !important`,
                        cursor: "no-drop",
                      },
                    }}
                    disabled
                    placeholder="Type here"
                    customLabel="Email *"
                    variant="outlined"
                    name="email"
                    type={"email"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && errors.email}
                    helperText={touched.email && errors.email}
                  />
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "47%" },
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
                    customLabel="Phone Number *"
                    variant="outlined"
                    name="phone"
                    type={"tel"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    error={touched.phone && errors.phone}
                    helperText={touched.phone && errors.phone}
                  />
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "47%" },
                  }}
                >
                  <Dropdown
                    options={
                      user?.countriesOptions || [{ label: "", value: "" }]
                    }
                    name="country"
                    customLabel="Country *"
                    shrink={true}
                    onChange={(e) => setFieldValue("country", e.target.value)}
                    onBlur={handleBlur}
                    value={values.country}
                    error={touched.country && errors.country}
                    helperText={touched.country && errors.country}
                  />
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "47%" },
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
                    customLabel="Postal Code *"
                    variant="outlined"
                    name="postal"
                    type={"text"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.postal}
                    error={touched.postal && errors.postal}
                    helperText={touched.postal && errors.postal}
                    hideArrows={true}
                  />
                </Box>
              </Box>
            </Card>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ProfileGeneral;
