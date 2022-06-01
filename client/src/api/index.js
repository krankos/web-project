import axios from "axios";

const url = "http://localhost:5000/charts";

export const fetchCharts = () => axios.get(url);
export const createChart = (newChart) => axios.post(url, newChart);
export const updateChart = (id, updatedChart) =>
    axios.patch(`${url}/${id}`, updatedChart);

export const deleteChart = (id) => axios.delete(`${url}/${id}`);
export const addData = (id, data) => axios.get(`${url}/${id}/data`, data);