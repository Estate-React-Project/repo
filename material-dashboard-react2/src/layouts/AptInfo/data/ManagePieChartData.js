const makeManagePieChartData = (data) => ({
  labels: ["직영", "위탁관리", "자치관리", "직영+위탁", "기타"],
  datasets: {
    label: "아파트 관리 방식",
    backgroundColors: ["secondary", "primary", "info", "success", "warning"],
    data,
  },
});

export default makeManagePieChartData;
