const makeHeatPieChartData = (data) => ({
  labels: ["지역난방", "중앙난방", "개별난방", "기타"],
  datasets: {
    label: "아파트 난방 방식",
    backgroundColors: ["warning", "info", "error", "secondary"],
    data,
  },
});

export default makeHeatPieChartData;
