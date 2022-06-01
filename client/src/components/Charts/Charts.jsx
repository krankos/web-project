import React from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Chart from "./Chart/Chart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharts } from "../../actions/charts.js";

const Charts = ({ setCurrentId }) => {
  const charts = useSelector((state) => state.charts);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect");
    dispatch(getCharts());
  }, [dispatch]);

  //console.log(!charts.length);
  return !charts.length ? (
    <div>Loading...</div>
  ) : (
    <>
      {charts.map((chart) => (
        <Grid item xs={12} sm={6} md={6} lg={6} key={chart.id}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Chart chart={chart} setCurrentId={setCurrentId} />
          </Paper>
        </Grid>
      ))}
    </>
  );
};

export default Charts;
