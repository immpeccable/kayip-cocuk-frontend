import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { MISSING_LIST } from "../../utils/data";
import { ChildCard } from "../ChildCard/ChildCard";

export const MissingList = () => {
  const cities = [
    {
      value: "Hatay",
      label: "Hatay",
    },
    {
      value: "Maraş",
      label: "Maraş",
    },
    {
      value: "Diyarbakır",
      label: "Diyarbakır",
    },
    {
      value: "Osmaniye",
      label: "Osmaniye",
    },
  ];

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch", marginLeft: "auto" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="İsim Soyisim"
            defaultValue=""
          />
          <TextField
            id="outlined-number"
            label="Yaş"
            required
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Şehir"
            defaultValue="EUR"
            helperText="Çocuğun kaybolduğu şehir"
          >
            {cities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
      <div className="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {MISSING_LIST.map((child, index) => {
          return (
            <ChildCard
              name={child.name}
              surname={child.surname}
              photo={child.photo}
              age={child.age}
              description={child.description}
              city={child.city}
              district={child.district}
            />
          );
        })}
      </div>
    </div>
  );
};
