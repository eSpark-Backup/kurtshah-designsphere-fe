import { useCallback, useEffect, useState } from "react";
import { utils, writeFileXLSX } from 'xlsx';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  Dropdown,
  DynamicTable,
  SearchableAutocomplete,
} from "@/components/common";
import Card from "@/components/common/Card";

const Ddropdown = ({ type, label, value, onChange, options, disabled }) => {
  return (
    <Stack
      gap={2}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography
        fontSize={10}
        fontWeight={400}
        sx={{ width: "100px", color: (theme) => theme.palette.whiteE4 }}
      >
        {label}
      </Typography>
      {type === "auto" ? (
        <SearchableAutocomplete
          onChange={(e) => onChange(e)}
          options={options}
          disabled={disabled}
        />
      ) : (
        <Dropdown
          modal
          sx={{
            border: (theme) => `1px solid ${theme.palette.whiteE4}`,
            height: "24px",
            ".Mui-disabled": { WebkitTextFillColor: theme => `${theme.palette.white} !important` }
          }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          options={options}
          disabled={disabled}
        />
      )}
    </Stack>
  );
};

const columns = () => {
  return [
    { name: "Description", key: "description", left: true },
    { name: "Qty", key: "qty" },
    { name: "Cost", key: "cost" },
    {
      name: "ExtCost",
      key: "extCost",
      right: true,
    },
  ];
};

const data = [
  {
    description: "Base",
    qty: 1,
    cost: "$392.00",
    extCost: "$392.00",
  },
  {
    description: "Total",
    qty: "",
    cost: "",
    extCost: "$392.00",
  },
];

const data2 = [
  {
    description: "Base",
    qty: 1,
    cost: "$253.00",
    extCost: "$253.00",
  },
  {
    description: "Total",
    qty: "",
    cost: "",
    extCost: "$253.00",
  },
];

const searchOptions = ["item 1804pipe stop & door holder"];

const Configurator = () => {
  const [error, setError] = useState(false);
  const [getPriced, setGetPriced] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [configName, setConfigName] = useState("");
  const [search, setSearch] = useState("");
  const [series, setSeries] = useState("");
  const [finish, setFinish] = useState("")

  const handleInput = (value, changeFunction) => {
    changeFunction(value);
  };

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [error]);

  const xport = useCallback(async () => {
    const myData = series === "0117" ? data : data2
    const formattedData = myData.map(row => {
      const newRow = { ...row };
      return newRow;
    });
    const ws = utils.json_to_sheet(formattedData);
    const headers = [
      'Description',
      'Quantity',
      'Cost',
      'Extra Cost',
    ];
    headers.forEach((header, index) => {
      ws[String.fromCharCode(65 + index) + 1] = { v: header, t: 's' };
    });
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, "data.xlsx");
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6.5}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            padding: "18px 24px",
          }}
          variant="gradient"
        >
          <Ddropdown
            label="Config Name"
            value={configName}
            onChange={(e) => handleInput(e, setConfigName)}
            options={[
              { label: "", value: "" },
              { label: "", value: "" },
              { label: "ABH", value: "ABH" },
            ]}
          />
          <Ddropdown
            type="auto"
            label="Search"
            disabled={configName === ""}
            value={search}
            onChange={(e) => {
              handleInput(e, setSearch);
              setSeries("Accessories");
            }}
            options={searchOptions}
          />
          <Ddropdown
            label="Series"
            disabled={configName === ""}
            value={series}
            onChange={(e) => handleInput(e, setSeries)}
            options={[
              { label: "", value: "" },
              { label: "0117", value: "0117" },
              { label: "Accessories", value: "Accessories" },
            ]}
          />
          {search === "item 1804pipe stop & door holder" ? (
            <>
              <Ddropdown
                label="Item"
                value={"1804- pipe stop & door holder"}
                onChange={(e) => console.log(e)}
                options={[
                  { label: "abc", value: "abc" },
                  {
                    label: "1804- pipe stop & door holder",
                    value: "1804- pipe stop & door holder",
                  },
                ]}
              />
              <Ddropdown
                label="Finish"
                value={"US32d- stain less steel"}
                onChange={(e) => console.log(e)}
                options={[
                  { label: "abc", value: "abc" },
                  {
                    label: "US32d- stain less steel",
                    value: "US32d- stain less steel",
                  },
                ]}
              />
              <Ddropdown
                label="Custom Note"
                value={"-"}
                onChange={(e) => console.log(e)}
                options={[
                  { label: "abc", value: "abc" },
                  { label: "-", value: "-" },
                ]}
              />
            </>
          ) : (
            <></>
          )}
          <FormControlLabel
            sx={{ width: "max-content" }}
            control={
              <Checkbox
                checked={showMore}
                onChange={() => {
                  if (configName !== "" && series !== "") {
                    setShowMore(!showMore);
                  }
                }}
                sx={{ color: (theme) => theme.palette.whiteE4 }}
              />
            }
            label="Show Option"
          />
          {series === "0117" ? (
            <>
              <Ddropdown
                label="Series"
                value={"0117 - 3/4” offset Pivot set (includes 0)"}
                onChange={(e) => console.log(e)}
                options={[
                  { label: "abc", value: "abc" },
                  {
                    label: "0117 - 3/4” offset Pivot set (includes 0)",
                    value: "0117 - 3/4” offset Pivot set (includes 0)",
                  },
                ]}
              />
              <Ddropdown
                label="Finish"
                value={finish}
                onChange={(e) => setFinish(e)}
                options={[
                  { label: "", value: "" },
                  {
                    label: "S1 - PAINTED ALUMINIUM",
                    value: "S1 - PAINTED ALUMINIUM",
                  },
                ]}
              />
              <Ddropdown
                label="Custom Note"
                value={"-"}
                onChange={(e) => console.log(e)}
                options={[
                  { label: "abc", value: "abc" },
                  { label: "-", value: "-" },
                ]}
              />
              <Ddropdown
                label="Hand"
                value={"Non-handed"}
                onChange={(e) => console.log(e)}
                options={[
                  { label: "abc", value: "abc" },
                  { label: "Non-handed", value: "Non-handed" },
                ]}
              />
            </>
          ) : (
            <></>
          )}
          {showMore ? (
            <>
              {search === "item 1804pipe stop & door holder" ? (
                <Ddropdown
                  label="Warranty"
                  value={"n-"}
                  onChange={(e) => console.log(e)}
                  options={[
                    { label: "abc", value: "abc" },
                    { label: "n-", value: "n-" },
                  ]}
                />
              ) : series === "0117" ? (
                <>
                  <Ddropdown
                    label="Extra length spindle"
                    value={"St - standard"}
                    onChange={(e) => console.log(e)}
                    options={[
                      { label: "abc", value: "abc" },
                      {
                        label: "St - standard",
                        value: "St - standard",
                      },
                    ]}
                  />
                  <Ddropdown
                    label="Extra length pins"
                    value={"St - standard"}
                    onChange={(e) => console.log(e)}
                    options={[
                      { label: "abc", value: "abc" },
                      {
                        label: "St - standard",
                        value: "St - standard",
                      },
                    ]}
                  />
                  <Ddropdown
                    label="Fasteners"
                    value={"St - standard fasteners"}
                    onChange={(e) => console.log(e)}
                    options={[
                      { label: "abc", value: "abc" },
                      {
                        label: "St - standard fasteners",
                        value: "St - standard fasteners",
                      },
                    ]}
                  />
                  <Ddropdown
                    label="Warranty"
                    value={"-"}
                    onChange={(e) => console.log(e)}
                    options={[
                      { label: "abc", value: "abc" },
                      {
                        label: "-",
                        value: "-",
                      },
                    ]}
                  />
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </Card>
      </Grid>
      <Grid item xs={12} md={5.5}>
        <Card
          sx={{
            padding: "18px 24px",
          }}
          variant="gradient"
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
            gap={2}
            flexWrap="wrap"
          >
            <Button
              onClick={() => {
                if (configName !== "" && ((series === "0117" && finish !== "") || (search === "item 1804pipe stop & door holder" && series === "Accessories"))) {
                  setGetPriced(true);
                } else {
                  setError(true);
                }
              }}
              sx={{
                height: "40px",
                width: " max-content",
                fontSize: "12px",
                padding: "6px 22px",
              }}
              variant="secondary"
            >
              Get Price
              <Box
                sx={{
                  position: "absolute",
                  right: "-125px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "7px",
                  fontWeight: 300,
                  opacity: error ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Please provide the details first
              </Box>
            </Button>
            {getPriced ? (
              <Typography
                fontSize={10}
                fontWeight={400}
                sx={{
                  color: (theme) => theme.palette.whiteE4,
                }}
              >
                Price Book #13, Effective June 6, 2022 (Rev: June 20, 2024) r23
              </Typography>
            ) : null}
          </Stack>
          <Box
            sx={{
              marginTop: "10px",
              border: "1px solid #E4E4E41A",
              borderRadius: "10px",
              padding: "5px 13px",
              background: theme => theme.palette.gradientSecondary,
              ".MuiTableCell-root": {
                padding: "10px !important",
                minWidth: "10px",
              },
              ".MuiTableRow-root td:first-child": {
                borderRadius: "10px 0 0 10px !important "
              },
              ".MuiTableRow-root td:last-child": {
                borderRadius: "0 10px 10px 0 !important ",
              },
            }}
          >
            <DynamicTable
              data={
                getPriced
                  ? series === "0117" ? data : data2
                  : [
                      {
                        description: "Total",
                        qty: "",
                        cost: "",
                        extCost: "",
                      },
                    ]
              }
              columns={columns()}
              isLoading={false}
            />
          </Box>
          {getPriced ? (
            <>
              <Typography
                fontSize={10}
                fontWeight={400}
                sx={{
                  color: (theme) => theme.palette.whiteE4,
                  marginTop: "10px",
                }}
              >
                {series === "0117" ? "0117 x S2" : "1804 x US32D"}
              </Typography>
              <Typography
                fontSize={10}
                fontWeight={400}
                sx={{
                  color: (theme) => theme.palette.whiteE4,
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginTop: "10px",
                }}
                onClick={xport}
              >
                Sheet_file_Download
              </Typography>
              <Box sx={{ marginTop: "10px", wifth: "100%" }}>
                <Ddropdown
                  label="List Discount"
                  value={0}
                  onChange={(e) => console.log(e)}
                  options={[{ label: "abc", value: "abc" }]}
                />
              </Box>
              <Stack
                gap={2}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ marginTop: "10px" }}
              >
                <Typography
                  fontSize={10}
                  fontWeight={300}
                  sx={{ width: "50%", color: (theme) => theme.palette.whiteE4 }}
                >
                  Discount formats 57.25 or Multi-Level Discount example 50/10/5
                  or Multiplier example .4275 or if 0 Cost is List
                </Typography>
                <Button
                  sx={{
                    fontSize: "12px",
                    width: "max-content",
                    padding: "6px 36px",
                  }}
                  variant="primary"
                >
                  Submit
                </Button>
              </Stack>
            </>
          ) : (
            <></>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Configurator;
