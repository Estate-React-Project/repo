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

const ReportLineChartDataMonthly = (data) => {
  const resp = {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    datasets: {
      label: "월별 거래량",
      data: [
        data.data1,
        data.data2,
        data.data3,
        data.data4,
        data.data5,
        data.data6,
        data.data7,
        data.data8,
        data.data9,
        data.data10,
        data.data11,
        data.data12,
      ],
    },
  };
  return resp;
};

export default ReportLineChartDataMonthly;
