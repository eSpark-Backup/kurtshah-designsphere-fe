"use client"
import { location } from '@/assets'
import { CustomInput, Dropdown } from '@/components/common'
import { COUNTRIES_OPTIONS, jobFunctionOptions } from '@/constants'
import { profileGeneralSchema } from '@/validation'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import Image from 'next/image'
import React from 'react'
import ProfileCard from './Profile-Card'

const ProfileGeneral = () => {
    const initialValues = {
        fName: "",
        lName: "",
        email: "",
        phone: "",
        country: "",
        postal: ""
    }
    const HandleSubmit = (values) => {
        console.log(values)
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={HandleSubmit}
                validationSchema={profileGeneralSchema}
            >
                {({ values, handleChange, handleBlur, errors, touched, setFieldValue }) => (
                    <Form>
                        <ProfileCard />
                        <Box
                            sx={{
                                marginTop: "30px",
                                border: "1px solid #E4E4E4",
                                boxShadow: "0px 0px 10px 0px #00000040",
                                borderRadius: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "60px 0px"
                            }}
                        >
                            <Box
                                sx={{
                                    width: "80%",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                    rowGap: "60px",
                                    flexDirection: { xs: "column", sm: "row" }
                                }}
                            >
                                <Box
                                    sx={{
                                        width: { xs: "100%", sm: "47%" }
                                    }}
                                >
                                    <CustomInput
                                        InputLabelProps={{
                                            shrink: true,
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
                                        width: { xs: "100%", sm: "47%" }
                                    }}
                                >
                                    <CustomInput
                                        InputLabelProps={{
                                            shrink: true,
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
                                        width: { xs: "100%", sm: "47%" }
                                    }}
                                >
                                    <CustomInput
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
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
                                        width: { xs: "100%", sm: "47%" }
                                    }}
                                >
                                    <CustomInput
                                        InputLabelProps={{
                                            shrink: true,
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
                                        position: "relative"
                                    }}
                                >
                                    <CustomInput
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        customLabel="Country *"
                                        variant="outlined"
                                        name="country"
                                        disabled={true}
                                    />
                                    <Dropdown
                                        options={COUNTRIES_OPTIONS}
                                        name="country"
                                        sx={{
                                            position: "absolute",
                                            top: -54,
                                            left: "-1px",
                                            width: "100%",
                                        }}
                                        onChange={(e) => setFieldValue("country", e.target.value)}
                                        onBlur={handleBlur}
                                        value={values.country}
                                        error={touched.country && errors.country}
                                        helperText={touched.country && errors.country}
                                    />

                                </Box>
                                <Box
                                    sx={{
                                        width: { xs: "100%", sm: "47%" }
                                    }}
                                >
                                    <CustomInput
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        placeholder="Type here"
                                        customLabel="Postal Code *"
                                        variant="outlined"
                                        name="postal"
                                        type={"number"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.postal}
                                        error={touched.postal && errors.postal}
                                        helperText={touched.postal && errors.postal}
                                        hideArrows={true}
                                    />

                                </Box>
                            </Box>

                        </Box>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default ProfileGeneral
