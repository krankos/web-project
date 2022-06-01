import React from "react";

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { createChart } from "../actions/charts";
const defaultValues = {
  title: "",
  data: [],
  type: "",
  unit: "",
};

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(formValues);
    dispatch(createChart(formValues));
    // clear();
  };
  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
        Validate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Stack spacing={2} direction="column">
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
            spacing={3}
          >
            <Grid item>
              <TextField
                fullWidth
                id="title-input"
                name="title"
                label="Chart Title"
                type="text"
                value={formValues.title}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                id="type-input"
                name="type"
                label="Data Type"
                type="text"
                value={formValues.type}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                fullWidth
                id="unit-input"
                name="unit"
                label="Unit"
                type="text"
                value={formValues.unit}
                onChange={handleInputChange}
                required
              />
            </Grid>
          </Grid>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};
export default Form;
