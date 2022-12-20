const makeGunPrAChartData = (data) => ({
  labels: [],
  datasets: [
    {
      chartType: "thin-bar",
      label: "PrA",
      color: "dark",
      data: data[0],
    },
    {
      chartType: "gradient-line",
      label: "GunA",
      color: "info",
      data: data[1],
    },
  ],
});

export default makeGunPrAChartData;
