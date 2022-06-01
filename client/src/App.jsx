import React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Dashboard from "./components/Dashboard";
import Form from "./components/Form";

import { useDispatch, useSelector } from "react-redux";
import { getCharts } from "./actions/charts";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  // const charts = useSelector((state) => state.charts);
  useEffect(() => {
    dispatch(getCharts());
  }, [dispatch]);
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default App;
