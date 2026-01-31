import { Box, CircularProgress, Stack, Typography } from "@mui/material";

const ProgressBar = ({ title, desc, perc }) => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      gap={2}
    >
      <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
      }}
    >
      <CircularProgress
        variant="determinate"
        value={perc}
        sx={{
          color: '#FC95C7',
          zIndex: 99,
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
            strokeWidth: 3,
          },
        }}
        size={64}
        thickness={4}
      />
      <Typography
        sx={{
          background: 'linear-gradient(180deg, #FC95C7 13.89%, #D3A3BD 69.44%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          border: '6px solid #495472',
          borderRadius: '50%',
          width: '64px',
          height: '64px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          lineHeight: 0,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        fontSize="14.08px"
        fontWeight={600}
      >
        {perc}%
      </Typography>
    </Box>
      <Stack direction="column" justifyContent="center" alignItems="flex-start">
        <Typography
          variant="h2"
          sx={{ fontSize: "20px !important" }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            background:
              "linear-gradient(180deg, #FC95C7 13.89%, #D3A3BD 69.44%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          fontSize="12px"
          fontWeight={500}
        >
          {desc}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProgressBar;
