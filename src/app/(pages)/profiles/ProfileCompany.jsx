import { Form, Formik } from 'formik'
import React from 'react'
import ProfileCard from './Profile-Card'
import { Box, Grid } from '@mui/material'
import { CustomInput, Dropdown } from '@/components/common'
import { jobFunctionOptions } from '@/constants'
import { profileCompanySchema } from '@/validation'
import Card from '@/components/common/Card'

const ProfileCompany = () => {
  const initialValues = {
    companyName: "",
    jobFunction: ""
  }

  const HandleSubmit = (values)=>{
    console.log(values)
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={profileCompanySchema}
        onSubmit={HandleSubmit}
      >
        {({ values, handleChange, touched, errors, handleBlur, setFieldValue }) => (
          <Form>
            <ProfileCard />
            <Card
              variant={"outline"}
              sx={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "60px 50px",
                columnGap: "30px"
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
                      options={jobFunctionOptions}
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
