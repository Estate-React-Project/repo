const makeDongCoChartData = (data) => ({
  labels: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11~20",
    "21~30",
    "31~40",
    "41~",
  ],
  datasets: [
    {
      label: "전체 동 수",
      color: "success",
      data,
    },
  ],
});

export default makeDongCoChartData;
