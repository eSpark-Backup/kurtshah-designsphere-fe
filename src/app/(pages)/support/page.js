"use client"
import { upload } from "@/assets";
import { CustomInput } from "@/components/common";
import { supportScehma } from "@/validation";
import { LoadingButton } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";

const Support = () => {
    const initialState = {
        project: "",
        question: "",
        description: "",
        image: null
    }
    const [image, setImage] = useState(null)
    const HandleSubmit = (values) => {
        console.log(values)
    }
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%"
            }}
        >
            <Box
                sx={{
                    minHeight: "500px",
                    width: { xs: "100%", sm: "80%", md: "65%", lg: "50%" },
                    boxShadow: "0px 0px 4px 0px #00000040",
                    borderRadius: "10px",
                    border: "1px solid #E4E4E4",
                }}
            >
                <Box
                    sx={{
                        minHeight: "60px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "14px",
                            background: "linear-gradient(180deg, #547CD3 0%, #6191FD 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: "500",
                        }}
                    >
                        ARC Support: areeba shakeel
                    </Typography>

                </Box>
                <Formik
                    initialValues={initialState}
                    validationSchema={supportScehma}
                    onSubmit={HandleSubmit}
                >
                    {({ values, handleChange, handleBlur, errors, touched, setFieldValue }) => (
                        <Form>
                            <Box
                                sx={{
                                    width: "100%",
                                    minHeight: "380px",
                                    borderTop: "1px solid #E4E4E4",
                                    borderBottom: "1px solid #E4E4E4",
                                    padding: { xs: "20px 10px", sm: "25px 15px", md: "30px 25px" },
                                    display: "flex",
                                    flexDirection: { xs: "column", sm: "row" },
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                    rowGap: "20px"
                                }}
                            >
                                <Box sx={{ width: { xs: "100%", sm: "47%" } }}>
                                    <CustomInput
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        placeholder="Type here"
                                        customLabel="ARC Project *"
                                        variant="outlined"
                                        name="project"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.project}
                                        error={touched.project && errors.project}
                                        helperText={touched.project && errors.project}
                                    />
                                </Box>
                                <Box sx={{ width: { xs: "100%", sm: "47%" } }}>
                                    <CustomInput
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        placeholder="Type here"
                                        customLabel="My question is related to *"
                                        variant="outlined"
                                        name="question"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.question}
                                        error={touched.question && errors.question}
                                        helperText={touched.question && errors.question}
                                    />
                                </Box>
                                <Box sx={{ width: "100%" }}>
                                    <CustomInput
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        placeholder="Type here"
                                        customLabel="Please provide a brief description of your Overtur  problem *"
                                        variant="outlined"
                                        limit={2000}
                                        rows={3}
                                        multiline
                                        name="description"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                        error={touched.description && errors.description}
                                        helperText={touched.description && errors.description}
                                    />
                                </Box>
                                <Box sx={{ width: "100%", position: "relative" }}>
                                    <CustomInput
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        customLabel="Please provide a brief description of your Overtur  problem *"
                                        variant="outlined"
                                        multiline
                                        rows={3}
                                        disabled={true}
                                    />
                                    <Box
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            position: "absolute",
                                            top: 0,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        <label
                                            htmlFor="upload-button"
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: "center",
                                                cursor: 'pointer',
                                                border: "1px solid #E4E4E41F",
                                                borderRadius: "5px",
                                                height: "80px",
                                                width: "200px",
                                                margin: "10px 0px"
                                            }}
                                        >
                                            <Image
                                                src={upload}
                                                alt="Upload"
                                                width={33}
                                                height={33}
                                            />
                                            <Typography sx={{ fontSize: "12px", color: "#888888", fontWeight: "400" }}>CLICK OR DRAG FILE HERE</Typography>
                                            <input
                                                id="upload-button"
                                                type="file"
                                                style={{ display: 'none' }}
                                                onChange={(e) => setFieldValue("image", e.target.files[0])}
                                            />
                                        </label>
                                    </Box>
                                </Box>

                            </Box>
                            <Box
                                sx={{
                                    minHeight: "60px",
                                    display: "flex",
                                    justifyContent: { xs: "center", md: "flex-end" },
                                    alignItems: "center",
                                    paddingRight: { md: "30px" }
                                }}
                            >
                                <LoadingButton
                                    loading={false}
                                    loadingPosition="end"
                                    variant="primary"
                                    sx={{ width: { xs: "95%", md: "92px" }, height: "40px" }}
                                    type='submit'
                                >
                                    Submit
                                </LoadingButton>

                            </Box>
                        </Form>
                    )}
                </Formik>

            </Box>
        </Box>
    )
};

export default Support
