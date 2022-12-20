const makeGunPrDChartData = (data) => ({
  labels: [],
  datasets: [
    {
      chartType: "thin-bar",
      label: "PrA",
      color: "dark",
      data: [],
    },
    {
      chartType: "gradient-line",
      label: "GunA",
      color: "info",
      data: [],
    },
  ],
});

export default makeGunPrDChartData;
