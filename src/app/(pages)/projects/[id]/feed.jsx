import Image from "next/image";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { search } from "@/assets";

const Feed = ({ feed }) => {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        gap={1}
      >
        <Typography variant="h2">Activity Feed</Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <Typography
            fontSize={14}
            fontWeight={600}
            textAlign="center"
            color="primary.dark"
          >
            View All
          </Typography>
          <Image src={search} alt="search" />
        </Stack>
      </Stack>
      <Box sx={{ height: "calc(100% - 36px)", overflowY: "auto" }}>
        {feed.map((feed, ind) => {
          return (
            <Box
              sx={{
                mt: 2,
                padding: "23px 13px",
                borderRadius: "16px",
                background:
                  "linear-gradient(180deg, rgba(51, 64, 100, 0.05) 0%, #38466B 100%)",
                border: "1px solid #FFFFFF1F",
                boxShadow: "0px 14px 79.3px -12px #00000030",
              }}
              key={feed.id * ind}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                gap={1}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "14px !important",
                  }}
                >
                  {feed.name}
                </Typography>
                <Chip label={feed.date} />
              </Stack>
              <Typography
                mt={2}
                fontSize={16}
                fontWeight={400}
                sx={{ color: (theme) => theme.palette.whiteE4 }}
              >
                {feed.text}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Feed;
