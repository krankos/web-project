export default (charts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE_CHART":
            return [...charts, action.payload];
        case "UPDATE_CHART":
            return charts.map((chart) =>
                chart._id === action.payload._id ? action.payload : chart
            );
        case "ADD_DATA":
            return charts.map((chart) => {
                if (chart._id === action.payload._id) {
                    if (chart.data.length > 10) chart.data.shift();
                    chart.data.push(action.payload);
                }
                return chart;
            });

        case "DELETE":
            console.log("action.payload", action.payload);
            return charts.filter((chart) => chart._id !== action.payload);
        default:
            return charts;
    }
};