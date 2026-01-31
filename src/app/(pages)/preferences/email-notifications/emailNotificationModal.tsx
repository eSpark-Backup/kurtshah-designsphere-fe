import { DynamicModal } from "@/components/common";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const EmailNotificationModal = ({
  form,
  setForm,
  open,
  handleClose,
  onConfirm,
}) => {
  return (
    <DynamicModal
      open={open}
      handleClose={handleClose}
      heading="Schedule Notification"
      cancelButtonText="Cancel"
      submitButtonText="Apply"
      onConfirm={onConfirm}
      showfooter

    >
      <Box
        sx={{
          padding: "30px 20px",
          width: "300px",
          gap: 2,
        }}
      >
        <FormControl>
          <Typography
            fontSize={14}
            mb={1}
            sx={{ color: (theme) => theme.palette.whiteE4 }}
          >
            Delivery Frequency
          </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="immediate"
            name="radio-buttons-group"
            value={form.deliveryFrequency}
            onChange={(e) =>
              setForm({ ...form, deliveryFrequency: e.target.value })
            }
          >
            <FormControlLabel
              value="immediate"
              control={<Radio />}
              label={
                <Typography sx={{ color: (theme) => theme.palette.whiteE4, fontSize: "14px", fontWeight: "600" }}>Immediate</Typography>
              }
            />
            <FormControlLabel
              value="daily"
              control={<Radio />}
              label={
                <Typography sx={{ color: (theme) => theme.palette.whiteE4, fontSize: "14px", fontWeight: "600" }}>Once a day</Typography>
              }
            />
            <FormControlLabel
              value="weekly"
              control={<Radio />}
              label={
                <Typography sx={{ color: (theme) => theme.palette.whiteE4, fontSize: "14px", fontWeight: "600" }}>Once a week</Typography>
              }
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </DynamicModal>
  );
};

export default EmailNotificationModal;
