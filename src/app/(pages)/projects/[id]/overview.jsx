import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";
import { document } from "@/assets";
import Card from "@/components/common/Card";

const Overview = ({ overview }) => {
  return (
    <Card
      variant={"gradient"}
      sx={{
        height: "calc(100% - 16px)",
        padding: "16px 24px",
      }}
    >
      <Typography
        fontSize={24}
        fontWeight={500}
        textAlign="left"
        sx={{
          background: (theme) => theme.palette.headingColor,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Overview
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "calc(100% - 82px)",
          overflowY: "auto",
        }}
      >
        {overview.map((item) => {
          return (
            <Grid key={item.id} container spacing={2} marginTop={3}>
              <Grid
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
                item
                xs={6}
              >
                <Image src={document} width={24} height={24} alt="document" />
                <Box>
                  <Typography
                    fontSize={14}
                    fontWeight={600}
                    sx={{
                      background: (theme) => theme.palette.headingColor,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    fontSize={12}
                    fontWeight={600}
                    sx={{
                      color: (theme) => theme.palette.whiteE4,
                    }}
                  >
                    {item.role}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
              >
                <Image src={document} width={24} height={24} alt="document" />
                <Box>
                  <Typography
                    fontSize={14}
                    fontWeight={600}
                    sx={{
                      background: (theme) => theme.palette.headingColor,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.unit}
                  </Typography>
                  <Typography
                    fontSize={12}
                    fontWeight={600}
                    sx={{
                      color: (theme) => theme.palette.whiteE4,
                    }}
                  >
                    {item.detail}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Box>
      <Typography
        sx={{ marginTop: "30px" }}
        fontSize={14}
        fontWeight={600}
        textAlign="center"
        color="primary.dark"
      >
        View All
      </Typography>
    </Card>
  );
};

export default Overview;
