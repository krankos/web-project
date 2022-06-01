import mongoose from "mongoose";

const chartSchema = new mongoose.Schema({
    title: { type: String, required: true },
    data: {
        type: Array,
        default: [],
    },
    type: { type: String, required: true },
    unit: { type: String, required: true },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const ChartModel = mongoose.model("ChartModel", chartSchema);

export default ChartModel;