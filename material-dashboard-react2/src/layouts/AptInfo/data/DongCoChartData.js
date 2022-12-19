const makeDongCoChartData = (data) => ({
  labels: ["0~10", "11~20", "21~30", "31~40", "41~50", "51~60", "61~70", "71~"],
  datasets: [
    {
      label: "전체 동 수",
      color: "dark",
      data,
    },
  ],
});

export default makeDongCoChartData;
