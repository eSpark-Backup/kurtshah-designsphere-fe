import { Box, Typography } from "@mui/material";
import Card from "../Card";

const SidebarTab = ({ title, active, setActive, tabsArr }) => {
  return (
    <Card
      variant={"outline"}
      sx={{
        background: "linear-gradient(180deg, #1B253E 0%, #303E61 100%)",
        borderRadius: "10px",
        height: "100%",
        padding: "10px 10px 0px 10px",
        paddingBottom: { xs: "20px", md: "20px" },
        minHeight: { xs: "400px", sm: "auto" }
      }}
    >
      <Typography
        textAlign="center"
        fontSize={20}
        fontWeight={700}
        sx={{ color: (theme) => theme.palette.whiteE4, margin: "60px 0" }}
      >
        {title}
      </Typography>
      {tabsArr.map((tab, ind) => {
        return (
          <Box
            sx={{
              marginTop: ind !== 0 ? "20px" : 0,
              width: "100%",
              height: "50px",
              padding: "13px",
              borderRadius: "10px",
              cursor: "pointer",
              background:
                ind === active
                  ? "linear-gradient(90deg, #6191FF 0%, #5B6BFF 100%)"
                  : "#2F3D60",
              boxshadow: (theme) => `0px 0px 5px 0px ${theme.palette.shadowSecondary}`,
            }}
            key={tab}
            onClick={() => setActive(ind)}
          >
            <Typography
              textAlign="center"
              fontSize={16}
              fontWeight={500}
              sx={{ color: (theme) => theme.palette.whiteE4 }}
            >
              {tab.title}
            </Typography>
          </Box>
        );
      })}
    </Card>
  );
};

export default SidebarTab;
