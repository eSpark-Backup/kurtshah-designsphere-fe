"use client"
import { Dropdown } from "@/components/common";
import Card from "@/components/common/Card";
import { COUNTRIES_OPTIONS, legalPageContent } from "@/constants";
import { Box, Typography } from "@mui/material";
import react, { useState } from "react";

const Legal = () => {
  const [country, setCountry] = useState("");
  return (
    <>
      <Box
        sx={{
          width: "100%",
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          rowGap: { xs: "40px", md: "80px" }
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "20px"
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#E4E4E4"
            }}
          >
            You need to choose a country first
          </Typography>
          <Box
            sx={{
              width: { xs: "100%", sm: "75%", md: "60%", lg: "35%", xl: "20%" },
            }}
          >
            <Dropdown
              options={COUNTRIES_OPTIONS}
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "100px",
            flexDirection: { xs: "column", sm: "row" },
            rowGap: "20px"

          }}
        >
          {legalPageContent.map((item, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: "100%", sm: "45%", lg: "40%", xl: "30%" },
                height: "285px",
                background: "linear-gradient(180deg, #323F63 0%, #6680C9 100%)",
                borderRadius: "20px",
                border: "1px solid #E4E4E4",
                paddingTop: "30px",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column"
              }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#E4E4E4",
                  fontWeight: "500",
                  paddingLeft: "20px"
                }}>
                {item?.heading}
              </Typography>
              <Box
                sx={{
                  height: "60px",
                  background: "#6191FF",
                  borderRadius: "0px 0px 20px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#E4E4E4",
                    fontWeight: "500",
                    paddingLeft: "20px"
                  }}>
                  View
                </Typography>

              </Box>

            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default Legal;
