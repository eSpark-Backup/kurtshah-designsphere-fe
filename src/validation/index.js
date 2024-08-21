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


export const supportScehma = Yup.object({
    project: Yup.string().required("Project name is required"),
    question: Yup.string().required("Question name is required"),
    description: Yup.string().required("Description name is required")
})


export const profileGeneralSchema = Yup.object({
    fName: Yup.string().required("First name is required"),
    lName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.number().required("Phone number is required"),
    country: Yup.string().required("Please select an option"),
    postal: Yup.number().required("Postal code is required"),
})

export const profileCompanySchema = Yup.object({
    companyName: Yup.string().required("Company name is required"),
    jobFunction: Yup.string().required("Please select an option").oneOf(["Design Team", "Distributor", "General Contractor", "Hardware Consultant", "Integrator", "Locksmith", "Owner", "PACS"], "Invalid Choice"),
})