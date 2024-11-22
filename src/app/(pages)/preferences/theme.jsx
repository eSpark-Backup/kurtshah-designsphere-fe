import Image from "next/image";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Card from "@/components/common/Card";
import { changeTheme } from "@/lib/store/slices/theme";
import { themes } from "@/constants";

const lightTheme = themes.filter((theme) => theme.mode === "light");
const darkTheme = themes.filter((theme) => theme.mode === "dark");

const ThemeCard = ({ title, themesData }) => {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state) => state.theme);
  const availableTheme = [0, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <Card
      variant={"outline"}
      sx={{
        marginTop: "35px",
        padding: "20px",
      }}
    >
      <Typography
        fontSize={20}
        fontWeight={700}
        sx={{ color: (theme) => theme.palette.white }}
      >
        {title}
      </Typography>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexWrap="wrap"
        gap="20px"
        sx={{ marginTop: "20px" }}
      >
        {themesData.map((theme) => (
          <Image
            onClick={() => {
              if (availableTheme.find((id) => id === theme.id)) {
                dispatch(changeTheme(theme.id));
              }
            }}
            key={theme.id}
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              border:
                theme.id === currentTheme
                  ? "2px solid #FFCC00"
                  : "1px solid #E4E4E4EE",
            }}
            width={160}
            height={theme.id === currentTheme ? 57 : 56}
            src={theme.icon}
            alt={theme.name}
          />
        ))}
      </Stack>
    </Card>
  );
};

const ThemeTab = () => {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state) => state.theme);
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        gap={1}
      >
        <Box>
          <Typography
            fontSize={20}
            fontWeight={700}
            sx={{ color: (theme) => theme.palette.white }}
          >
            Color themes
          </Typography>
          <Typography
            mt={2}
            fontSize={16}
            fontWeight={500}
            sx={{ color: (theme) => theme.palette.white }}
          >
            Choose the appearance of your app by selecting any theme. create.
          </Typography>
        </Box>
        <Button
          onClick={() => dispatch(changeTheme(0))}
          sx={{ fontSize: "12px", width: "93px", height: "40px" }}
          variant={currentTheme === 0 ? "primary" : "secondary"}
        >
          Default
        </Button>
      </Stack>
      <ThemeCard title="Light Theme" themesData={lightTheme} />
      <ThemeCard title="Dark Theme" themesData={darkTheme} />
    </>
  );
};

export default ThemeTab;
