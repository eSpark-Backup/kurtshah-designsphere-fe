import { CustomInput, Dropdown, DynamicModal } from "@/components/common";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

const AddProjectModal = ({ form, setForm, open, handleClose, onConfirm }) => {
  const handleChange = (value, name) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <DynamicModal
      open={open}
      handleClose={handleClose}
      heading="Create New Project"
      cancelButtonText="Cancel"
      submitButtonText="Create Stage"
      onConfirm={onConfirm}
      showfooter
    >
      <Box
        sx={{
          padding: "30px 0px",
          width: "300px",
          margin: "auto auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Box sx={{ width: "100%" }}>
          <CustomInput
            InputLabelProps={{
              shrink: true,
            }}
            value={form.name}
            limit={100}
            onChange={(e) => handleChange(e.target.value, "name")}
            placeholder="Type here"
            customLabel="Name *"
            variant="outlined"
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Dropdown
            value={form.stage}
            onChange={(e) => handleChange(e.target.value, "stage")}
            customLabel="Stage *"
            variant="outlined"
            options={[
              { label: "Choose a stage", value: "Choose a stage" },
              { label: "stage", value: "stage" },
            ]}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Dropdown
            value={form.type}
            onChange={(e) => handleChange(e.target.value, "type")}
            customLabel="Type *"
            variant="outlined"
            options={[
              { label: "Choose a type", value: "Choose a type" },
              { label: "type", value: "type" },
            ]}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "12px !important",
              fontWeight: "400 !important",
            }}
          >
            Do you want help?
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ color: (theme) => theme.palette.whiteE4 }}
                  checked={form.needHelp === "Yes"}
                  onChange={() => handleChange("Yes", "needHelp")}
                />
              }
              label="Yes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ color: (theme) => theme.palette.whiteE4 }}
                  checked={form.needHelp === "No"}
                  onChange={() => handleChange("No", "needHelp")}
                />
              }
              label="No"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ color: (theme) => theme.palette.whiteE4 }}
                  checked={form.needHelp === "Not Sure"}
                  onChange={() => handleChange("Not Sure", "needHelp")}
                />
              }
              label="I’m not sure"
            />
          </FormGroup>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Dropdown
            value={form.contact}
            onChange={(e) => handleChange(e.target.value, "contact")}
            customLabel="Contact *"
            variant="outlined"
            options={[
              { label: "Select", value: "Select" },
              { label: "contact", value: "contact" },
            ]}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <CustomInput
            InputLabelProps={{
              shrink: true,
            }}
            value={form.comment}
            limit={225}
            multiline
            rows={4}
            onChange={(e) => handleChange(e.target.value, "comment")}
            placeholder="Type here"
            customLabel="Comment"
            variant="outlined"
          />
        </Box>
      </Box>
    </DynamicModal>
  );
};

export default AddProjectModal;
