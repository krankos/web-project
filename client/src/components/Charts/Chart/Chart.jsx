import * as React from "react";
import { useTheme } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import LinkIcon from "@mui/icons-material/Link";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { deleteChart } from "../../../actions/charts.js";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "../../Title";

// Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [
//   createData("00:00", 0),
//   createData("03:00", 300),
//   createData("06:00", 600),
//   createData("09:00", 800),
//   createData("12:00", 1500),
//   createData("15:00", 2000),
//   createData("18:00", 2400),
//   createData("21:00", 2400),
//   createData("24:00", undefined),
// ];

export default function Chart({ chart, setCurrentId }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  //console.log(chart);
  let data = chart.data.map((el) => {
    //console.log(el);
    return {
      time: el.time,
      amount: el.data,
    };
  });
  const copy = async () => {
    await navigator.clipboard.writeText(
      "localhost:5000/charts/" + chart._id + "/data"
    );
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = async () => {
    setOpen(true);
    await copy();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return chart.data.length ? (
    <React.Fragment>
      <Grid container direction="row">
        <Grid item xs={9}>
          <Title>{chart.title}</Title>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={handleClick} size="small" color="primary">
            <LinkIcon />
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Link Copied!
            </Alert>
          </Snackbar>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deleteChart(chart._id))}
          >
            <DeleteIcon />
          </Button>
        </Grid>
      </Grid>
      {/* Delete icon */}
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              {chart.type + " " + chart.unit}
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  ) : (
    <>
      <Grid container direction="row">
        <Grid item xs={9}>
          <Title>{chart.title}</Title>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={handleClick} size="small" color="primary">
            <LinkIcon />
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Link Copied!
            </Alert>
          </Snackbar>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deleteChart(chart._id))}
          >
            <DeleteIcon />
          </Button>
        </Grid>
      </Grid>
      Add data to chart!
    </>
  );
}
