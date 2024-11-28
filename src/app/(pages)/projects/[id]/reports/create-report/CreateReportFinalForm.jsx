import {
  Accordion,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { accordianArrow, checkSetting } from "@/assets";
import Image from "next/image";
import { Form, Formik } from "formik";
import { Dropdown } from "@/components/common";
import {
  documentTypeOptions,
  fontFamilyOptions,
  fontSizeOptions,
  reportHardwareSets,
  reportHeaderFooterSets,
  reportPageHardwareSets,
  reportSpecificationsSets,
  specificOpeningsOptions,
  specificProductsOptions,
} from "@/constants";
import { LoadingButton } from "@mui/lab";
import { createReportFinalSchema } from "@/validation";
import { getThemeVariant } from "@/utils";
import { useSelector } from "react-redux";

const gradientSelecterStyle = {
  background: (theme) => theme.palette.gradientPrimary,
  borderRadius: "16px",
  ".MuiOutlinedInput-notchedOutline": {
    borderRadius: "16px",
  },
};

const CustomCheckbox = ({ value, label, onChange }) => {
  const { currentTheme } = useSelector((state) => state.theme);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "35px 0px",
        img: {
          filter: (theme) =>
            getThemeVariant(currentTheme) === "default"
              ? ""
              : theme.palette.filterImg,
        },
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            onChange={onChange}
            checked={value}
            sx={{ alignSelf: "flex-start", padding: "0px 10px" }}
          />
        }
        label={label}
      />
      <Image src={checkSetting} alt="arrow-down" width={24} height={24} />
    </Box>
  );
};

const SectionAccordion = ({ title, children }) => (
  <Accordion defaultExpanded>
    <AccordionSummary
      expandIcon={
        <Box
          sx={{
            width: "40px",
            height: "40px",
            background: (theme) => theme.palette.buttonPrimary,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={accordianArrow} alt="arrow-down" width={20} height={20} />
        </Box>
      }
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "20px !important",
        }}
      >
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

const CreateReportFinalForm = ({ handleForm, setFormProceeds }) => {
  const initialValues = {
    fontFamily: "",
    fontSize: "",
    specificOpenings: "",
    specificProducts: "",
    includeProjectDetail: false,
    excluseZeros: false,
    projectName: false,
    includeOpenings: false,
    pageHeader: false,
    pageFooter: false,
    tableHeader: false,
    showQuantity: false,
    hardwareLabel: false,
    showUoM: false,
    showDescription: false,
    showCatalogNumber: false,
    userDescription: false,
    showCoordinateId: false,
    ShowFinish: false,
    showManufacturer: false,
    comments: false,
    includeCutSheetLink: false,
    includeOperation: false,
    endSchedule: false,
    remarks: false,
    userCatalogNumber: false,
    includeManufacturers: false,
    documentType: "",
  };

  return (
    <Box>
      <Box sx={{ marginTop: 5 }} marginBottom={4}>
        <Button
          variant="primary"
          onClick={() => setFormProceeds(1)}
          sx={{ height: "40px", width: "79px" }}
        >
          Back
        </Button>
      </Box>

      <Formik
        initialValues={initialValues}
        validationSchema={createReportFinalSchema}
        onSubmit={handleForm}
      >
        {({ values, handleChange, errors, touched, setFieldValue }) => (
          <Form>
            <Box
              sx={{
                width: { xs: "100%", sm: "60%" },
                height: { xs: "100%", sm: "60%" },
                margin: "auto auto",
              }}
            >
              <SectionAccordion title="Font Styles">
                <Typography
                  variant="h5"
                  sx={{
                    color: (theme) => theme.palette.whiteE4,
                    marginBottom: "40px",
                  }}
                >
                  These selections will apply to all applicable fields.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    marginTop: "60px",
                  }}
                >
                  <Dropdown
                    label="Choose a font family"
                    value={values.fontFamily}
                    onChange={(e) =>
                      setFieldValue("fontFamily", e.target.value)
                    }
                    options={fontFamilyOptions}
                    name="fontFamily"
                    error={touched.fontFamily && errors.fontFamily}
                    helperText={touched.fontFamily && errors.fontFamily}
                    sx={gradientSelecterStyle}
                  />
                  <Dropdown
                    label="Choose a font size"
                    value={values.fontSize}
                    onChange={(e) => setFieldValue("fontSize", e.target.value)}
                    options={fontSizeOptions}
                    name="fontSize"
                    error={touched.fontSize && errors.fontSize}
                    helperText={touched.fontSize && errors.fontSize}
                    sx={gradientSelecterStyle}
                  />
                  <Dropdown
                    label="Select Specific Openings"
                    value={values.specificOpenings}
                    onChange={(e) =>
                      setFieldValue("specificOpenings", e.target.value)
                    }
                    options={specificOpeningsOptions}
                    name="specificOpenings"
                    error={touched.specificOpenings && errors.specificOpenings}
                    helperText={
                      touched.specificOpenings && errors.specificOpenings
                    }
                    sx={gradientSelecterStyle}
                  />
                  <Dropdown
                    label="Select Specific Products"
                    value={values.specificProducts}
                    onChange={(e) =>
                      setFieldValue("specificProducts", e.target.value)
                    }
                    options={specificProductsOptions}
                    name="specificProducts"
                    error={touched.specificProducts && errors.specificProducts}
                    helperText={
                      touched.specificProducts && errors.specificProducts
                    }
                    sx={gradientSelecterStyle}
                  />
                </Box>
              </SectionAccordion>

              <SectionAccordion title="Specifications">
                <Box>
                  {reportSpecificationsSets.map(({ name, label }) => (
                    <CustomCheckbox
                      key={name}
                      value={values[name]}
                      onChange={() => setFieldValue(name, !values[name])}
                      label={label}
                    />
                  ))}
                </Box>
              </SectionAccordion>

              <SectionAccordion title="Openings">
                <Box>
                  <CustomCheckbox
                    value={values.includeOpenings}
                    onChange={() =>
                      setFieldValue("includeOpenings", !values.includeOpenings)
                    }
                    label="Include Opening Attributes"
                  />
                </Box>
              </SectionAccordion>

              <SectionAccordion title="Header & Footer">
                <Box>
                  {reportHeaderFooterSets.map(({ name, label }) => (
                    <CustomCheckbox
                      key={name}
                      value={values[name]}
                      onChange={() => setFieldValue(name, !values[name])}
                      label={label}
                    />
                  ))}
                </Box>
              </SectionAccordion>

              <SectionAccordion title="Hardware Sets">
                <Box>
                  {reportHardwareSets.map(({ name, label }) => (
                    <CustomCheckbox
                      key={name}
                      value={values[name]}
                      onChange={() => setFieldValue(name, !values[name])}
                      label={label}
                    />
                  ))}
                </Box>
              </SectionAccordion>

              <SectionAccordion title="Output File Type">
                <Box sx={{ marginTop: "30px" }}>
                  <Dropdown
                    label="Select the type of document that can be downloaded when generating the report."
                    value={values.documentType}
                    onChange={(e) =>
                      setFieldValue("documentType", e.target.value)
                    }
                    options={documentTypeOptions}
                    name="documentType"
                    error={touched.documentType && errors.documentType}
                    helperText={touched.documentType && errors.documentType}
                    sx={gradientSelecterStyle}
                  />
                </Box>
              </SectionAccordion>

              <Box
                sx={{ marginTop: "20px", width: "97%", margin: "auto auto" }}
              >
                <LoadingButton
                  loading={false}
                  loadingPosition="end"
                  variant="primary"
                  sx={{ width: "100%", height: "48px" }}
                  type="submit"
                >
                  View Report
                </LoadingButton>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateReportFinalForm;
