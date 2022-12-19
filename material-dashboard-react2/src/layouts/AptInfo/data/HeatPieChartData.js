const makeHeatPieChartData = (data) => ({
  labels: ["개별난방", "지역난방"],
  datasets: {
    label: "아파트 난방 방식",
    backgroundColors: ["primary", "secondary"],
    data,
  },
});

export default makeHeatPieChartData;
