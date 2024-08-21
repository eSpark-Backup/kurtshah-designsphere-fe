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
    fontFamily: Yup.string().required("Please select an option"),
    templateDescription: Yup.string().required('template design is required')
})

export const createReportFinalSchema = Yup.object({
    fontFamily: Yup.string()
      .required('Font family is required.'),
    fontSize: Yup.string()
      .required('Font size is required.'),
    specificOpenings: Yup.string()
      .required('Specific openings are required.'),
    specificProducts: Yup.string()
      .required('Specific products are required.'),
    includeProjectDetail: Yup.boolean()
      .required('Include project detail is required.'),
    excluseZeros: Yup.boolean()
      .required('Exclude zeros is required.'),
    projectName: Yup.boolean()
      .required('Project name is required.'),
    includeOpenings: Yup.boolean()
      .required('Include openings is required.'),
    pageHeader: Yup.boolean()
      .required('Page header is required.'),
    pageFooter: Yup.boolean()
      .required('Page footer is required.'),
    tableHeader: Yup.boolean()
      .required('Table header is required.'),
    showQuantity: Yup.boolean()
      .required('Show quantity is required.'),
    hardwareLabel: Yup.boolean()
      .required('Hardware label is required.'),
    showUoM: Yup.boolean()
      .required('Show UoM is required.'),
    showDescription: Yup.boolean()
      .required('Show description is required.'),
    showCatalogNumber: Yup.boolean()
      .required('Show catalog number is required.'),
    userDescription: Yup.boolean()
      .required('User description is required.'),
    showCoordinateId: Yup.boolean()
      .required('Show coordinate ID is required.'),
    ShowFinish: Yup.boolean()
      .required('Show finish is required.'),
    showManufacturer: Yup.boolean()
      .required('Show manufacturer is required.'),
    comments: Yup.boolean()
      .required('Comments are required.'),
    includeCutSheetLink: Yup.boolean()
      .required('Include cut sheet link is required.'),
    includeOperation: Yup.boolean()
      .required('Include operation is required.'),
    endSchedule: Yup.boolean()
      .required('End schedule is required.'),
    remarks: Yup.boolean()
      .required('Remarks are required.'),
    userCatalogNumber: Yup.boolean()
      .required('User catalog number is required.'),
    includeManufacturers: Yup.boolean()
      .required('Include manufacturers is required.'),
    documentType: Yup.string()
      .required('Document type is required.')
  });

export const supportScehma = Yup.object({
    project: Yup.string().required("Project name is required"),
    question: Yup.string().required("Question name is required"),
    description: Yup.string().required("Description name is required")
})
