import * as Yup from "yup";

export const signinSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
});

export const forgetPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const forgetPasswordSchema2 = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const signupSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
  recievedEmail: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms of service"
  ),
});

export const resetPasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required("Old password is required")
    .min(8, "Old password must be at least 8 characters long")
    .matches(/[a-z]/, "Old password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Old password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Old Password must contain at least one number")
    .matches(
      /[^a-zA-Z0-9]/,
      "Old password must contain at least one special character"
    ),
  newPassword: Yup.string()
    .required("New password is required")
    .min(8, "New password must be at least 8 characters long")
    .matches(/[a-z]/, "New password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "New password must contain at least one uppercase letter")
    .matches(/[0-9]/, "New password must contain at least one number")
    .matches(
      /[^a-zA-Z0-9]/,
      "New password must contain at least one special character"
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

export const profileDetailsSchema = Yup.object({
  companyName: Yup.string().required("Company name is required"),
  postalCode: Yup.number().required("Postal code is required"),
  jobFunction: Yup.string().required("Please select an option"),
  country: Yup.string().required("Please select an option"),
  agree: Yup.boolean().oneOf([true], "You must agree here"),
});

export const createReportInitialSchema = Yup.object({
  fontFamily: Yup.string().required("Please select an option"),
  templateDescription: Yup.string().required("template design is required"),
});

export const createReportFinalSchema = Yup.object({
  fontFamily: Yup.string().required("Font family is required."),
  fontSize: Yup.string().required("Font size is required."),
  specificOpenings: Yup.string().required("Specific openings are required."),
  specificProducts: Yup.string().required("Specific products are required."),
  includeProjectDetail: Yup.boolean().required(
    "Include project detail is required."
  ),
  excluseZeros: Yup.boolean().required("Exclude zeros is required."),
  projectName: Yup.boolean().required("Project name is required."),
  includeOpenings: Yup.boolean().required("Include openings is required."),
  pageHeader: Yup.boolean().required("Page header is required."),
  pageFooter: Yup.boolean().required("Page footer is required."),
  tableHeader: Yup.boolean().required("Table header is required."),
  showQuantity: Yup.boolean().required("Show quantity is required."),
  hardwareLabel: Yup.boolean().required("Hardware label is required."),
  showUoM: Yup.boolean().required("Show UoM is required."),
  showDescription: Yup.boolean().required("Show description is required."),
  showCatalogNumber: Yup.boolean().required("Show catalog number is required."),
  userDescription: Yup.boolean().required("User description is required."),
  showCoordinateId: Yup.boolean().required("Show coordinate ID is required."),
  ShowFinish: Yup.boolean().required("Show finish is required."),
  showManufacturer: Yup.boolean().required("Show manufacturer is required."),
  comments: Yup.boolean().required("Comments are required."),
  includeCutSheetLink: Yup.boolean().required(
    "Include cut sheet link is required."
  ),
  includeOperation: Yup.boolean().required("Include operation is required."),
  endSchedule: Yup.boolean().required("End schedule is required."),
  remarks: Yup.boolean().required("Remarks are required."),
  userCatalogNumber: Yup.boolean().required("User catalog number is required."),
  includeManufacturers: Yup.boolean().required(
    "Include manufacturers is required."
  ),
  documentType: Yup.string().required("Document type is required."),
});

export const supportScehma = Yup.object({
  project: Yup.string().required("Project name is required"),
  question: Yup.string().required("Question name is required"),
  description: Yup.string().required("Description name is required"),
});

export const profileGeneralSchema = Yup.object({
  fName: Yup.string().required("First name is required"),
  lName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.number().required("Phone number is required"),
  country: Yup.string().required("Please select an option"),
  postal: Yup.number().required("Postal code is required"),
});

export const profileCompanySchema = Yup.object({
  companyName: Yup.string().required("Company name is required"),
  jobFunction: Yup.string().required("Please select an option"),
});

export const reSyncSchema = Yup.object({
  code1: Yup.string().required("Code 1 is required").test('len', 'Must be 6 digits', val => val.length === 6),
  code2: Yup.string().required("Code 2 is required").test('len', 'Must be 6 digits', val => val.length === 6),
})
