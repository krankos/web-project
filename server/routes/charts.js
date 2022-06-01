import express from "express";
import {
    getCharts,
    createChart,
    updateChart,
    deleteChart,
    addData,
} from "../controllers/charts.js";

const router = express.Router();

router.get("/", getCharts);
router.post("/", createChart);
router.patch("/:id", updateChart);
router.delete("/:id", deleteChart);
router.get("/:id/data", addData);

export default router;