import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { toast } from "react-toastify";
import {
  Dropdown,
  DynamicModal,
  DynamicTable,
  SearchableAutocomplete,
} from "@/components/common";
import useCreateCollaborator from "@/hooks/addContributor";
import useGetContacts from "@/hooks/getContacts";
import useGetProjectsRoles from "@/hooks/getProjecttRoles";
import useIsContributorAdded from "@/hooks/contributorAdded";

const AddCollaboratorModal = ({ open, handleClose, onConfirm }) => {
  const [collaboratorsOption, setCollaboratorsOption] = useState([]);
  const [collaboratorsToAdd, setCollaboratorsToAdd] = useState([]);
  const [rolesOption, setRolesOption] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { getContacts } = useGetContacts();
  const { createCollaborator, isLoading } = useCreateCollaborator();
  const { isContributorAdded, isLoading: loading } = useIsContributorAdded();
  const { getProjectRoles } = useGetProjectsRoles();

  const handleConfirm = () => {
    if (collaboratorsToAdd.length <= 0) {
      toast.error("Please enter collaborator first");
      return;
    }
    if (collaboratorsToAdd.some((coll) => coll.role === "")) {
      toast.error("Please assign role to collaborator");
      return;
    }
    const arrayToSend = collaboratorsToAdd.map((coll) => {
      return {
        ContactId: coll.value,
        ProjectRoleId: coll.role,
        Email: coll.email,
        ProjectId: open,
      };
    });
    createCollaborator({ ProjectContributers: arrayToSend }, () => {
      toast.success("New collaborators added successfully");
      setCollaboratorsToAdd([]);
      handleClose();
      onConfirm();
    });
  };

  useEffect(() => {
    getContacts(1, 10, name, (res) => {
      const options = res?.data?.result?.data?.map((item) => {
        return {
          label: item?.name,
          value: item?.id,
          email: item?.emailAddress,
          role: "",
        };
      });
      setCollaboratorsOption(options);
    });
  }, [name]);

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

  const handleAddCollab = (collaborator) => {
    if (!collaborator?.value) return;
    isContributorAdded(
      {
        contactId: collaborator.value,
        projectId: open,
      },
      (res) => {
        if (res) {
          setError("Collaborator already added in the project");
        } else {
          if (
            !collaboratorsToAdd.some(
              (coll) => coll.value === collaborator.value
            )
          ) {
            setError("");
            setCollaboratorsToAdd((prev) => [...prev, collaborator]);
            setName("");
          } else {
            toast.error("Collaborator already added below");
          }
        }
      }
    );
  };

  const handleDelete = (item) => {
    const options = collaboratorsToAdd.filter(
      (coll) => coll.value !== item.value
    );
    setCollaboratorsToAdd(options);
  };

  const handleChange = (value, item) => {
    const options = collaboratorsToAdd?.map((coll) => {
      if (coll.value === item.value) {
        return { ...coll, role: value };
      }
      return coll;
    });
    setCollaboratorsToAdd(options);
  };

  const columns = (handleChange, rolesOption) => {
    return [
      { name: "Name", key: "label", left: true },
      { name: "Email", key: "email" },
      {
        name: "Role",
        key: "role",
        component: (item) => {
          return (
            <Dropdown
              sx={{ "-webkit-text-fill-color": "#FFF" }}
              value={item.role}
              onChange={(e) => handleChange(e.target.value, item)}
              variant="outlined"
              options={[
                { label: "Choose Role", value: "Choose Role" },
                ...rolesOption,
              ]}
            />
          );
        },
      },
      {
        name: "",
        key: "action",
        right: true,
        hideDownload: true,
        hideEdit: true,
        hideView: true,
      },
    ];
  };

  return (
    <DynamicModal
      isLoading={isLoading}
      disabled={collaboratorsToAdd <= 0}
      open={open}
      handleClose={() => {
        handleClose();
        setError("");
      }}
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
            name={name}
            setName={setName}
            label="Contributor"
            onChange={handleAddCollab}
            options={collaboratorsOption}
            endAdornment
          />
        </Box>
        {error && <Typography color="error">{error}</Typography>}
        <DynamicTable
          data={collaboratorsToAdd}
          columns={columns(handleChange, rolesOption)}
          handleDelete={handleDelete}
        />
      </Box>
    </DynamicModal>
  );
};

export default AddCollaboratorModal;
