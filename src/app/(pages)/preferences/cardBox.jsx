import Image from "next/image";
import { Typography, Box, Stack } from "@mui/material";
import { CustomInput } from "@/components/common";
import { messageAdd } from "@/assets";
import Card from "@/components/common/Card";

const CardBox = ({ title, data }) => {
  return (
    <Card
      variant={"outline"}
      sx={{
        padding: "20px",
        height: { xs: "auto", md: data.length > 0 ? "396px" : "290px" },
        mt: 3,
      }}
    >
      <Typography fontSize={20} fontWeight={700} sx={{ color: (theme) => theme.palette.white }}>
        {title}
      </Typography>
      <Stack
        mt={2}
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-around"
        gap={1}
      >
        <Box sx={{ width: { xs: "100%", md: "300px" } }}>
          <Typography sx={{ width: "300px", mb: 2 }} variant="h5">
            NAME
          </Typography>
          {data.length > 0 ? <CustomInput sx={{ input: { borderRadius: "5px", border: "1px solid #E4E4E4" } }} variant="outlined" placeholder="Enter" /> : <></>}
        </Box>
        <Box sx={{ width: { xs: "100%", md: "300px" } }}>
          <Typography sx={{ width: "300px", mb: 2 }} variant="h5">
            EMAIL
          </Typography>
          {data.length > 0 ? <CustomInput sx={{ input: { borderRadius: "5px", border: "1px solid #E4E4E4" } }} variant="outlined" placeholder="Enter" /> : <></>}
        </Box>
      </Stack>
      <Box
        mt={3}
        sx={{
          height: "calc(100% - 138px)",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <Box
                key={item.id}
                sx={{
                  minWidth: "500px",
                  mt: 2,
                  background:
                    "linear-gradient(180deg, rgba(51, 64, 100, 0.05) 0%, #38466B 100%)",
                  border: "1px solid #FFFFFF1F",
                  boxShadow: "0px 14px 79.3px -12px #00000030",
                  borderRadius: "16px",
                  padding: "16px 50px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "16px !important" }} variant="h2">
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: "16px !important" }} variant="h2">
                  {item.email}
                </Typography>
                <Image src={messageAdd} width={24} height={24} alt="add" />
              </Box>
            );
          })
        ) : (
          <Typography
            textAlign="center"
            fontSize={16}
            fontWeight={500}
            sx={{ color: (theme) => theme.palette.white, }}
          >
            No Data to display
          </Typography>
        )}
      </Box>
    </Card>
  );
};

export default CardBox;
