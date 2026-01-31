import { DynamicModal } from "@/components/common";
import { Typography } from "@mui/material";

const LogoutModal = ({ open, handleClose, onConfirm }) => {
  return (
    <DynamicModal
      open={open}
      handleClose={handleClose}
      heading="Exit"
      cancelButtonText="Cancel"
      submitButtonText="Leave"
      onConfirm={onConfirm}
      showfooter
    >
      <Typography
        sx={{ color: (theme) => theme.palette.white }}
        fontSize={12}
        fontWeight={600}
        textAlign="center"
      >
        Are you sure you want to leave ?
      </Typography>
    </DynamicModal>
  );
};

export default LogoutModal;
