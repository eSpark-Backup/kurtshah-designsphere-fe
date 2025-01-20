import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";
import { document } from "@/assets";
import Card from "@/components/common/Card";
import { useSearchParams } from "next/navigation";
import { padZero } from "@/utils";

const Overview = () => {
  const searchParams = useSearchParams();
  const projectName = searchParams.get("projectName");
  const companyName = searchParams.get("companyName");
  const openings = searchParams.get("openings");
  const revit = searchParams.get("revit");
  const stageName = searchParams.get("stageName");
  const overview = [
    {
      id: 1,
      title: projectName,
      role: "Stage Name",
      unit: padZero(openings),
      detail: "NUMBER OF Openings",
      
    },
    {
      id: 2,
      title: companyName,
      role: "Architectural Firm",
      unit: revit ? "Yes" : "No",
      detail: "Bim Data - Revit?",
    },
    {
      id: 3,
      title: stageName,
      role: "Stage"
    }
  ];
  return (
    <Card
      variant={"gradient"}
      sx={{
        padding: "16px 24px",
      }}
    >
      <Typography
        variant="h2"
        textAlign="left"
      >
        Summary
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "calc(100% - 82px)",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "40px",
        }}
      >
        {overview.map((item) => {
          return (
            <Grid key={item.id} container spacing={2} marginTop={3}>
              <Grid
                sx={{ display: "flex", alignItems: "center", gap: 1, img: { filter: (theme) => theme.palette.filterImg } }}
                item
                xs={6}
              >
                <Image src={document} width={24} height={24} alt="document" />
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      background: (theme) => theme.palette.headingColor,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h5"
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
                sx={{ display: "flex", alignItems: "center", gap: 2, img: { filter: (theme) => theme.palette.filterImg } }}
              >
                {item?.unit && <Image src={document} width={24} height={24} alt="document" />}
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      background: (theme) => theme.palette.headingColor,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.unit}
                  </Typography>
                  <Typography
                    variant="h5"
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
    </Card>
  );
};

export default Overview;
