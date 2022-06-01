import * as api from "../api/index.js";

//Action Creators
export const getCharts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchCharts();
        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createChart = (newChart) => async(dispatch) => {
    try {
        console.log("newChart", newChart);
        const { data } = await api.createChart(newChart);
        dispatch({ type: "CREATE_CHART", payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateChart = (id, updatedChart) => async(dispatch) => {
    try {
        const { data } = await api.updateChart(id, updatedChart);
        dispatch({ type: "UPDATE_CHART", payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteChart = (id) => async(dispatch) => {
    try {
        //console.log("id", id);
        await api.deleteChart(id);
        dispatch({ type: "DELETE", payload: id });
    } catch (error) {
        console.log(error.message);
    }
};

export const addData = (id, data) => async(dispatch) => {
    try {
        const { data: dataAdd } = await api.addData(id, data);
        console.log("dataAdd", dataAdd);
        dispatch({ type: "ADD_DATA", payload: dataAdd });
    } catch (error) {
        console.log(error.message);
    }
};