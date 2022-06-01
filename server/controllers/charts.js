import mongoose from "mongoose";
import ChartModel from "../models/chartModel.js";
import express from "express";

const router = express.Router();

export const getCharts = async(req, res) => {
    try {
        const charts = await ChartModel.find({});
        //console.log(charts);
        res.status(200).json(charts);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error });
    }
};

export const createChart = async(req, res) => {
    //res.send("Chart Created");
    const chart = req.body;
    const newChart = new ChartModel(chart);
    console.log(chart);

    try {
        await newChart.save();
        res.status(200).json(newChart);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
};

export const updateChart = async(req, res) => {
    const { id: _id } = req.params;
    const chart = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).json({ message: "Chart not found" });
    const updatedChart = await ChartModel.findByIdAndUpdate(
        _id, {...chart, _id }, { new: true }
    );

    res.json(updatedChart);
};

export const deleteChart = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({ message: "Chart not found" });

    const deletedChart = await ChartModel.findByIdAndDelete(id);

    res.json({ message: "Chart deleted" });
};

export const addData = async(req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    console.log(data);
    const dataAdd = {
        data: data,
        time: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        }),
    };

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({ message: "Chart not found" });

    const chart = await ChartModel.findById(id);
    if (chart.data.length >= 10) {
        chart.data.shift();
    }
    chart.data.push(dataAdd);

    await chart.save();

    res.json({ message: "Data added" });
};