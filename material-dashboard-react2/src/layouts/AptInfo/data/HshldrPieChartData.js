const makeHshldrPieChartData = (data) => ({
  labels: ["분양", "임대", "영구임대", "임대+분양", "기타"],
  datasets: {
    label: "아파트 세대 유형",
    backgroundColors: ["info", "secondary", "primary", "success", "warning"],
    data,
  },
});

export default makeHshldrPieChartData;
