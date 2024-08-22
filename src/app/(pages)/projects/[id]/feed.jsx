import Image from "next/image";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { search } from "@/assets";
import Card from "@/components/common/Card";

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
            <Card
              variant={"gradient"}
              sx={{
                mt: 2,
                padding: "23px 13px",
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
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default Feed;
