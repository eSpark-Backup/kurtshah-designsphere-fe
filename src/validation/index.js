import * as Yup from 'yup'

export const signinSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(5, "Password must contain 5 characters")
})

export const forgetPasswordSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
})

export const signupSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(5, "Password must contain 5 characters")
})

export const profileDetailsSchema = Yup.object({
    companyName: Yup.string().required('Company name is required'),
    postalCode: Yup.number().required("Postal code is required"),
    jobFunction: Yup.string().required("Please select an option").oneOf(["Design Team", "Distributor", "General Contractor", "Hardware Consultant", "Integrator", "Locksmith", "Owner", "PACS"], "Invalid Choice"),
    country: Yup.string().required("Please select an option")
})

export const createReportInitialSchema = Yup.object({
    fontFaimly: Yup.string().required("Please select an option"),
    templateDescription: Yup.string().required('template design is required')
})