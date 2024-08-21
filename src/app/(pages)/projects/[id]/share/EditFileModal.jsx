import { CustomInput, DynamicModal } from "@/components/common";
import { Box } from "@mui/material";

const EditFileModal = ({ form, setForm, open, handleClose, onConfirm }) => {
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
                        value={form.description}
                        limit={100}
                        onChange={(e) => handleChange(e.target.value, "description")}
                        placeholder="Type here"
                        customLabel="Description *"
                        variant="outlined"
                    />
                </Box>
            </Box>
        </DynamicModal>
    );
};

export default EditFileModal;
