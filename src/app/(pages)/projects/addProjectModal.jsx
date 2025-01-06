import { CustomInput, Dropdown, DynamicModal } from "@/components/common";
import useCreateProjects from "@/hooks/createProject";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

const AddProjectModal = ({ form, setForm, open, handleClose, onConfirm }) => {
  const { createNewProject, isLoading } = useCreateProjects();
  const handleChange = (value, name) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirm = () => {
    if (
      form.name === "" ||
      form.stage === "" ||
      form.type === "" ||
      form.needHelp === ""
    ) {
      toast.error("Please enter required fields");
    } else {
      const objToSend = {
        name: form.name,
        publishDate: new Date().toISOString(),
        deviverableDate: new Date().toISOString(),
        stage: form.stage,
        type: form.type,
        helpUs: form.stage,
        comment: form.comment,
      };
      createNewProject(objToSend, () => {
        toast.success("New project created successfully");
        setForm({
          name: "",
          stage: "",
          type: "",
          helpUs: "",
          comment: "",
        });
        onConfirm();
      });
    }
  };

  return (
    <DynamicModal
      isLoading={isLoading}
      open={open}
      handleClose={handleClose}
      heading="Create New Project"
      cancelButtonText="Cancel"
      submitButtonText="Create Stage"
      onConfirm={handleConfirm}
      showfooter
    >
      <Box
        sx={{
          padding: "30px 0px",
          width: "90%",
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
        <Box sx={{ width: "100%", marginTop: "10px" }}>
          <Dropdown
            value={form.stage}
            onChange={(e) => handleChange(e.target.value, "stage")}
            customLabel="Stage *"
            variant="outlined"
            options={[
              { label: "Choose a stage", value: "Choose a stage" },
              { label: "Design", value: 1 },
              { label: "Construct", value: 2 },
              { label: "Operate", value: 3 },
            ]}
          />
        </Box>
        <Box sx={{ width: "100%", margin: "20px 0px" }}>
          <Dropdown
            value={form.type}
            onChange={(e) => handleChange(e.target.value, "type")}
            customLabel="Type *"
            variant="outlined"
            options={[
              { label: "Choose a type", value: "Choose a type" },
              { label: "Project", value: 1 },
              { label: "Demo Training", value: 2 },
              { label: "Master", value: 3 },
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
                  checked={form.needHelp === 0}
                  onChange={() => handleChange(0, "needHelp")}
                />
              }
              label="Yes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ color: (theme) => theme.palette.whiteE4 }}
                  checked={form.needHelp === 1}
                  onChange={() => handleChange(1, "needHelp")}
                />
              }
              label="No"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ color: (theme) => theme.palette.whiteE4 }}
                  checked={form.needHelp === 2}
                  onChange={() => handleChange(2, "needHelp")}
                />
              }
              label="I’m not sure"
            />
          </FormGroup>
        </Box>
        {/* <Box sx={{ width: "100%" }}>
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
        </Box> */}
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
