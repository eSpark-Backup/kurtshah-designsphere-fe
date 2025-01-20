import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import { CustomInput, Dropdown, DynamicModal } from "@/components/common";
import useGetProjectsRoles from "@/hooks/getProjecttRoles";
import useUpdateCollaborator from "@/hooks/updateContributor";
import useDeleteCollaborator from "@/hooks/deleteContributor";

const EditCollaboratorModal = ({ open, handleClose, onConfirm }) => {
  const { getProjectRoles } = useGetProjectsRoles();
  const [rolesOption, setRolesOption] = useState([]);

  useEffect(() => {
    getProjectRoles((res) => {
      const rolesOptions = res
        ?.map((item) => {
          if (item.name !== "Owner")
            return { label: item.name, value: item.id };
          return null;
        })
        .filter((item) => item !== null);
      setRolesOption(rolesOptions);
    });
  }, []);

  const [form, setForm] = useState({
    role: open?.projectRoleId,
  });
  const handleChange = (value, name) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { updateCollaborator, isLoading } = useUpdateCollaborator();
  const handleConfirm = () => {
    if (form.role === "") {
      toast.error("Please enter required fields");
    } else {
      const objToSend = {
        id: open.id,
        roleId: form.role,
      };
      updateCollaborator(objToSend, () => {
        toast.success("Collaborator role updated successfully");
        setForm({
          role: "",
        });
        handleClose();
        onConfirm();
      });
    }
  };

  const { deleteContributor, isLoading: deleteLoading } =
    useDeleteCollaborator();
  const handleDeleteContributor = () => {
    if (open?.projectRoleId === "01JHJJ3KYA12KSK3V9ATGX9MC8") {
      toast.error("Owner can not be deleted");
      return;
    } else {
      deleteContributor(open.id, () => {
        toast.success("Collaborator deleted successfully");
        handleClose();
        onConfirm();
      });
    }
  };

  return (
    <DynamicModal
      deleteLoading={deleteLoading}
      isLoading={isLoading}
      open={open}
      handleClose={handleClose}
      handleDelete={handleDeleteContributor}
      heading={open?.contactName || ""}
      cancelButtonText="Remove User"
      submitButtonText="Update"
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
          ".Mui-disabled": {
            "-webkit-text-fill-color": "#FFF !important",
          },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <CustomInput
            disabled
            value={open?.email}
            label="Email"
            variant="outlined"
          />
        </Box>
        <Box sx={{ width: "100%", marginTop: "10px" }}>
          <Dropdown
            disabled={open?.projectRoleId === "01JHJJ3KYA12KSK3V9ATGX9MC8"}
            defaultValue={open?.projectRoleId}
            value={
              open?.projectRoleId === "01JHJJ3KYA12KSK3V9ATGX9MC8"
                ? "01JHJJ3KYA12KSK3V9ATGX9MC8"
                : form.role
            }
            onChange={(e) => handleChange(e.target.value, "role")}
            label="Role"
            variant="outlined"
            options={[
              { label: "Choose Role", value: "Choose Role" },
              ...rolesOption,
              open?.projectRoleId === "01JHJJ3KYA12KSK3V9ATGX9MC8" && {
                label: "Owner",
                value: "01JHJJ3KYA12KSK3V9ATGX9MC8",
              },
            ]}
          />
        </Box>
        <Box sx={{ width: "100%", marginTop: "10px" }}>
          <Dropdown
            disabled
            value={0}
            label="Status"
            variant="outlined"
            options={[
              { label: "Choose Status", value: "Choose Status" },
              { label: "Editor", value: 0 },
              { label: "Viewer", value: 1 },
            ]}
          />
        </Box>
      </Box>
    </DynamicModal>
  );
};

export default EditCollaboratorModal;
