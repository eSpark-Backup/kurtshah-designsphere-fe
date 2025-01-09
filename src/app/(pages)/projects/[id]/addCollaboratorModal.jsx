import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import {
  Dropdown,
  DynamicModal,
  SearchableAutocomplete,
} from "@/components/common";
import useCreateCollaborator from "@/hooks/addContributor";
import useGetAllUsers from "@/hooks/getAllUser";

const AddCollaboratorModal = ({ open, handleClose, onConfirm }) => {
  const [collaboratorsOption, setCollaboratorsOption] = useState([]);
  const [form, setForm] = useState({
    user: "",
    projectUserRole: "",
    projectRole: ""
  });
  const { getAllUsers } = useGetAllUsers();
  const { createCollaborator, isLoading } = useCreateCollaborator();
  const handleChange = (value, name) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirm = () => {
    if (!form.user || form.user === "" || form.projectUserRole === "" || form.projectRole === "") {
      toast.error("Please enter required fields");
    } else {
      const objToSend = {
        userId: form.user?.value,
        name: form.user?.label,
        projectUserRole: form.projectUserRole,
        projectRole: form.projectRole,
        projectID: open,
      };
      createCollaborator(objToSend, () => {
        toast.success("New collaborator added successfully");
        setForm({
          user: "",
          projectUserRole: "",
          projectRole: "",
        });
        handleClose();
        onConfirm();
      });
    }
  };

  useEffect(() => {
    getAllUsers((res) => {
      const options = res?.data?.result?.map((item) => {
        return { label: item?.name, value: item?.id };
      });
      setCollaboratorsOption(options);
    });
  }, []);

  return (
    <DynamicModal
      isLoading={isLoading}
      open={open}
      handleClose={handleClose}
      heading="Add New Collaborator"
      cancelButtonText="Cancel"
      submitButtonText="Add"
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
        <Box sx={{ width: "100%", marginTop: "10px" }}>
          <Dropdown
            value={form.projectUserRole}
            onChange={(e) => handleChange(e.target.value, "projectUserRole")}
            label="Role"
            variant="outlined"
            options={[
              { label: "Choose Role", value: "Choose Role" },
              { label: "Developer", value: 1 },
              { label: "Viewer", value: 2 },
            ]}
          />
        </Box>
        <Box sx={{ width: "100%", marginTop: "10px" }}>
          <Dropdown
            value={form.projectRole}
            onChange={(e) => handleChange(e.target.value, "projectRole")}
            label="Status"
            variant="outlined"
            options={[
              { label: "Choose Status", value: "Choose Status" },
              { label: "Editor", value: 0 },
              { label: "Viewer", value: 1 },
            ]}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            margin: "20px 0px",
            ".MuiFormControl-root": {
              height: "auto",
              borderColor: "#8B8B8B24",
            },
            fieldset: {
              border: "none",
            },
            ".MuiInputBase-root": {
              padding: "16.5px 7px 14px 16.5px !important",
              height: "auto !important",
            },
            input: {
              padding: "0px !important",
            },
          }}
        >
          <SearchableAutocomplete
            label="Contributor"
            value={form.user}
            onChange={(e) => handleChange(e, "user")}
            options={collaboratorsOption}
            endAdornment
          />
        </Box>
      </Box>
    </DynamicModal>
  );
};

export default AddCollaboratorModal;
