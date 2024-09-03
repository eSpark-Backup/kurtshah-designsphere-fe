"use client"

import { CustomInput, Dropdown } from "@/components/common";
import { Box } from "@mui/material";
import { fontFamilyOptions } from "@/constants";
import { Form, Formik } from 'formik'
import { createReportInitialSchema } from "@/validation";
import { LoadingButton } from "@mui/lab";



const CreateReportInitialForm = ({ handleForm }) => {
    return (
        <Box
            sx={{
                width: { xs: "100%", sm: "60%" },
                height: { xs: "100%", sm: "60%" },
                margin: "auto auto",

            }}>

            <Formik
                initialValues={{
                    fontFamily: "",
                    templateDescription: "",
                }}
                validationSchema={createReportInitialSchema}
                onSubmit={handleForm}
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
                            <Dropdown
                                label={"Choose  a font family "}
                                value={values.fontFamily}
                                onChange={(e) => setFieldValue("fontFamily", e.target.value)}
                                options={fontFamilyOptions}
                                name="fontFamily"
                                error={touched.fontFamily && errors.fontFamily}
                                helperText={touched.fontFamily && errors.fontFamily}
                                sx={{
                                    background: (theme) => theme.palette.gradientPrimary,
                                    borderRadius: '16px',
                                    ".mui-12kxld3-MuiOutlinedInput-notchedOutline": {
                                        borderRadius: '16px',
                                    }
                                }}
                            />
                            <CustomInput
                                variant="filled"
                                name="templateDescription"
                                type="text"
                                label="template Description"
                                placeholder="Write here..."
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.templateDescription}
                                error={touched.templateDescription && errors.templateDescription}
                                helperText={touched.templateDescription && errors.templateDescription}
                                // sx={{
                                //     background: (theme) => theme.palette.gradientPrimary,
                                //     borderRadius: '15px',
                                // }}
                            />

                            <Box sx={{ marginTop: "20px" }}>
                                <LoadingButton
                                    loading={false}
                                    loadingPosition="end"
                                    variant="primary"
                                    sx={{ width: "100%", margin: "auto auto", height: "48px" }}
                                    type='submit'
                                >
                                    Next
                                </LoadingButton>
                            </Box>
                        </Box>
                    </Form>
                )}
            </Formik>

        </Box>
    )
}

export default CreateReportInitialForm