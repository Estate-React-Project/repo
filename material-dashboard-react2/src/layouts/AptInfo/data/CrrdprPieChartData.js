const makeCrrdprPieChartData = (data) => ({
  labels: ["계단식", "복도식", "타워형", "혼합식", "기타"],
  datasets: {
    label: "아파트 복도 유형",
    backgroundColors: ["secondary", "primary", "info", "success", "warning"],
    data,
  },
});

export default makeCrrdprPieChartData;
