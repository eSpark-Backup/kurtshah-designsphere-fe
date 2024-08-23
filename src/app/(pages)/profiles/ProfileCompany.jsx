import { Form, Formik } from 'formik'
import React from 'react'
import ProfileCard from './Profile-Card'
import { Box } from '@mui/material'
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
                padding: "60px 0px",
                columnGap: "30px"
              }}
            >
              <Box
                sx={{
                  width: "95%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  rowGap: "60px",
                  flexDirection: { xs: "column", sm: "row" }
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "43%" }
                  }}
                >
                  <CustomInput
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ input: { borderRadius: "5px", border: (theme) => theme.palette.borderPrimary } }}
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
                <Box
                  sx={{
                    width: { xs: "100%", sm: "43%" },
                    position: "relative"
                  }}
                >
                  <CustomInput
                    InputLabelProps={{
                      shrink: true,
                    }}
                    customLabel="Job Function *"
                    variant="outlined"
                    disabled={true}
                  />
                  <Dropdown
                    options={jobFunctionOptions}
                    name="jobFunction"
                    sx={{
                      position: "absolute",
                      top: -54,
                      left: "-1px",
                      width: "100%",
                    }}
                    onChange={(e) => setFieldValue("jobFunction", e.target.value)}
                    onBlur={handleBlur}
                    value={values.jobFunction}
                    error={touched.jobFunction && errors.jobFunction}
                    helperText={touched.jobFunction && errors.jobFunction}
                  />

                </Box>
              </Box>

            </Card>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ProfileCompany
