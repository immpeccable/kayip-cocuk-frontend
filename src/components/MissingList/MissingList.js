import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { MISSING_LIST } from "../../utils/data";
import { ChildCard } from "../ChildCard/ChildCard";

export const MissingList = () => {
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
            label="Required"
            defaultValue="Hello World"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="outlined-search" label="Search field" type="search" />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
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
