/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
const makeReportBarChartData = (data) => {
  const resp = {
    labels: data.map((d) => d.sggNm),
    datasets: [
      {
        label: "거래량",
        data: data.map((d) => d.count),
      },
    ],
  };
  return resp;
};

// export default makeReportBarChartData;
