import React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import uploadImage from "../../images/upload.png";

export const FoundForm = () => {
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

  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setConttactPhone] = useState("");

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
            label="İsim"
            defaultValue=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Soyisim"
            defaultValue=""
            onChange={(e) => setSurName(e.target.value)}
          />
          <TextField
            id="outlined-number"
            label="Yaş"
            required
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Şehir"
            required
            defaultValue="EUR"
            helperText="Çocuğun bulunduğu şehir"
          >
            {cities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            id="outlined-required"
            label="İletişim İsim Soyisim"
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label="İletişim Tel No"
            defaultValue=""
          />
          <TextField
            id="outlined-multiline-static"
            label="Detaylı konum ve bilgi"
            multiline
            rows={4}
            style={{ width: "100%" }}
          />
          <label for="file-upload" class="custom-file-upload">
            <i class="fa fa-cloud-upload">
              <img className="fileimage" src={uploadImage} />
            </i>
            Custom Upload
          </label>
          <input id="file-upload" type="file" />

          <Stack spacing={2} direction="row">
            <Button variant="contained" style={{ width: "100%" }}>
              Gönder
            </Button>
            <div></div>
          </Stack>
        </div>
      </Box>
    </div>
  );
};
