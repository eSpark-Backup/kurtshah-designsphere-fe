"use client"
import { card, people, user, user2, userTick } from '@/assets'
import { AuthContainer, CustomInput, Dropdown } from '@/components/common'
import { COUNTRIES_OPTIONS, jobFunctionOptions } from '@/constants'
import { profileDetailsSchema } from '@/validation'
import { LoadingButton } from '@mui/lab'
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const ProfileDetails = () => {
    const initialValues = {
        companyName: "",
        postalCode: "",
        jobFunction: "",
        country: "",
        agree: false
    }

    const router = useRouter();



    const handleSubmit = (values) => {
        console.log(values)
        router.push("/lets-start");
    }
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
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "25px"
                    }}>
                    <Typography variant='h1'
                        sx={{
                            lineHeight: "40px",
                            textAlign: "center"
                        }}>
                        Complete Your Profile
                    </Typography>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={profileDetailsSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleChange, handleBlur, errors, touched, setFieldValue }) => (
                            <Form>
                                <Box
                                    sx={{
                                        width: "95%",
                                        margin: "auto auto",
                                        display: "flex",
                                        flexDirection: "column",
                                        rowGap: "25px"
                                    }}>
                                    <CustomInput
                                        variant="filled"
                                        name="companyName"
                                        type="text"
                                        label="company name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.companyName}
                                        error={touched.companyName && errors.companyName}
                                        helperText={touched.companyName && errors.companyName}
                                        startAdornment={<Image src={card} width={24} height={24} alt='Email Icon' />}
                                    />
                                    <Dropdown
                                        label={"job function"}
                                        value={values.jobFunction}
                                        onChange={(e) => setFieldValue("jobFunction", e.target.value)}
                                        options={jobFunctionOptions}
                                        startAdornment={<Image src={people} width={24} height={24} alt='User Icon' style={{ marginRight: "10px" }} />}
                                        name="jobFunction"
                                        error={touched.jobFunction && errors.jobFunction}
                                        helperText={touched.jobFunction && errors.jobFunction}
                                        sx={{
                                            borderRadius: '16px',
                                            ".MuiOutlinedInput-notchedOutline": {
                                                borderRadius: '16px',
                                            }
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            flexDirection: { xs: "column", lg: "row" },
                                            rowGap: "20px"
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: { xs: "100%", lg: "45%" }
                                            }}
                                        >
                                            <Dropdown
                                                label={"Country"}
                                                value={values.country}
                                                onChange={(e) => setFieldValue("country", e.target.value)}
                                                options={COUNTRIES_OPTIONS}
                                                name="country"
                                                error={touched.country && errors.country}
                                                helperText={touched.country && errors.country}
                                                sx={{
                                                    borderRadius: '16px',
                                                    ".MuiOutlinedInput-notchedOutline": {
                                                        borderRadius: '16px',
                                                    }
                                                }}
                                            />

                                        </Box>
                                        <Box
                                            sx={{
                                                width: { xs: "100%", lg: "45%" }
                                            }}
                                        >
                                            <CustomInput
                                                sx={{
                                                    '& input[type=number]': {
                                                      MozAppearance: 'textfield',
                                                    },
                                                    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                                                      WebkitAppearance: 'none',
                                                      margin: 0,
                                                    },
                                                }}
                                                variant="filled"
                                                name="postalCode"
                                                type="number"
                                                label="postal code"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.postalCode}
                                                error={touched.postalCode && errors.postalCode}
                                                helperText={touched.postalCode && errors.postalCode}
                                                startAdornment={<Image src={user2} width={24} height={24} alt='User Icon' />}
                                                hideArrows={true}
                                            />
                                        </Box>
                                    </Box>
                                    <FormControlLabel control={<Checkbox onChange={handleChange} sx={{ alignSelf: "flex-start", padding: "0px 10px" }} name="recievedEmail" />} label="I agree to Allegion's Privacy Policy and Terms of Use. I understand and agree that by submitting my information my personal data may be transferred into the United States or other locations outside my country of residence." sx={{ marginBottom: "20px" }} />
                                    {touched.agree && errors.agree && (
                                        <Typography sx={{ color: 'error.main', fontSize: '12px', paddingLeft: '35px', position: "relative", bottom: "40px" }}>
                                            {errors.agree}
                                        </Typography>
                                    )}
                                </Box>

                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: "25px" }}>
                                    <LoadingButton
                                        loading={false}
                                        loadingPosition="end"
                                        variant="primary"
                                        sx={{ width: "95%", margin: "auto auto", height: "48px" }}
                                        type='submit'
                                    >
                                        Next
                                    </LoadingButton>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </AuthContainer>
        </Box>
    )
}

export default ProfileDetails
