import { Checkbox, FormControlLabel, Typography } from "@mui/material";

const Plans = () => {
  return (
    <>
      <Typography fontSize={20} fontWeight={700} sx={{ color: (theme) => theme.palette.white, }}>
        View Plans
      </Typography>
      <Typography mt={2} fontSize={16} fontWeight={500} sx={{ color: (theme) => theme.palette.white, }}>
        Projects may have a plan set to show by default, once checked you will
        have to select the plan in a project.
      </Typography>
      <FormControlLabel
        sx={{ mt: 2 }}
        control={
          <Checkbox
            sx={{ color: (theme) => theme.palette.whiteE4 }}
          />
        }
        label="Do not show the selected project's plan by default"
      />
    </>
  );
};

export default Plans;
